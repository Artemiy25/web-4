let button = document.querySelector(".botton");
let inputFirstName = document.querySelector("input[name='first-name']");
let inputSecondName = document.querySelector("input[name='second-name']");
let checkboxCoffee = document.querySelectorAll("input[name='Choise']");
let inputCountCoffee = document.querySelectorAll(".count");
let spanAmount = document.querySelector(".Enter");
let user = {
	firstName: "",
	secondName: "",
	amount: 0
};

inputFirstName.addEventListener("change", function () {
	user.firstName = inputFirstName.value;
})

inputSecondName.addEventListener("change", function () {
	user.secondName = inputSecondName.value;
})

function calculate() {
	let total = 0;
	for (let k = 0; k < checkboxCoffee.length; k++) {
		if (checkboxCoffee[k].checked) {
			total += parseInt(checkboxCoffee[k].dataset.price) * parseInt(inputCountCoffee[k].value);
		}
	}
	return total;
}

for (let k = 0; k < checkboxCoffee.length; k++) {
	checkboxCoffee[k].addEventListener("change", function () {
		if (checkboxCoffee[k].checked) {
			inputCountCoffee[k].value = 1;
		}
		else {
			inputCountCoffee[k].value = 0;
		}
		user.amount = calculate();
		spanAmount.textContent = user.amount;
	})
}

for (let k = 0; k < inputCountCoffee.length; k++) {
	inputCountCoffee[k].addEventListener("change", function () {
		user.amount = calculate();
		spanAmount.textContent = user.amount;
	})
}

button.addEventListener("click", function () {
	alert(`${user.firstName} ${user.secondName}\n${user.amount} p`);
})