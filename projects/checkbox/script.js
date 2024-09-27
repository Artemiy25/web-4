botton = document.querySelector(".botton");
result = document.querySelector(".result");
checkboxButtons = document.querySelectorAll('[name="sweets"]');

botton.addEventListener("click", function () {
    let Total = 0;
    for (const checkboxButton of checkboxButtons) {
        if (checkboxButton.checked) {
            Total += parseInt(checkboxButton.value);
        }
    }
    result.textContent = `${Total} p`;
});