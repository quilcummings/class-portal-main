const button = document.querySelector('#my-button');

button.addEventListener('click', () => {

    const firstTextInput = document.querySelector('#first-text-input');
    console.log(firstTextInput.value);

    const h1 = document.getElementById("heading");
    h1.innerHTML = firstTextInput.value;
    
    const colorInput = document.querySelector('#color-input');
    document.body.style.backgroundColor = colorInput.value;

    const checkbox1 = document.querySelector("#radio-1");
    const checkbox2 = document.querySelector("#radio-2");
    const checkbox3 = document.querySelector("#radio-3");
    const checkbox4 = document.querySelector("#radio-4");
    if (checkbox1.checked)
    {
        h1.style.fontFamily = "Arial, Helvetica, sans-serif";
    }
    if (checkbox2.checked)
    {
        h1.style.fontFamily = "'Courier New', Courier, monospace";
    }
    if (checkbox3.checked)
    {
        h1.style.fontFamily = "cursive";
    }
    if (checkbox4.checked)
    {
        h1.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    }

});