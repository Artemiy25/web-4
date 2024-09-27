Name = document.querySelector(".name");
SecondName = document.querySelector(".second-name");
Button = document.querySelector(".botton");
Enter = document.querySelector(".result");

Button.addEventListener("click", function () {
    Enter.innerHTML = Name.value + " " + SecondName.value;
});