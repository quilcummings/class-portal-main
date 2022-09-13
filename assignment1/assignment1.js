

const divs = document.querySelectorAll(".my-div");
for (const div of divs) {
    div.style.color = "#FFFFFF"
}

const h1 = document.getElementById("heading");

// write out text one letter at a time
var i = 0;
var text = 'Click Me';
var speed = 500;

function print() {
    if (i < text.length)
    {
        h1.innerHTML += text.charAt(i);
        setTimeout(print, speed);
        i++;
    }
}
print()

var count = 0;

h1.addEventListener('click', () => {
    count++;
    if (count === 4) 
    {
        $(h1).fadeOut(2000)

    } else {

        $(h1).animate({
            right: '+=200px'
        });
        $(h1).animate({
            letterSpacing: "+=20px"
        });
    }
})

h1.addEventListener('mouseenter', () => {
    h1.style.color = "#7393B3"
});

h1.addEventListener('mouseleave', () => {
    h1.style.color = "#FFFFFF"
});


