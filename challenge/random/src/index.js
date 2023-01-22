const button = document.querySelector("button");
const last = document.querySelector(".last-number");
const target = document.querySelector(".target-number");
const result = document.querySelector(".result");
const winorlose = document.querySelector(".winorlose");

const randomNumberCheck = (event) => {
  event.preventDefault();
  const last_value = parseInt(last.value);
  const target_value = parseInt(target.value);

  if (last_value < 1 || isNaN(last_value) || isNaN(target_value)) {
    result.innerHTML = `Please enter a number greater than 0.`;
    winorlose.innerHTML = ``;
    return;
  }

  const random_value = Math.floor(Math.random() * last_value) + 1;
  result.innerHTML = `You chose: ${target_value}, the machine chose: ${random_value}`;
  if (target_value === random_value) {
    winorlose.innerHTML = `You Won!`;
    return;
  }
  winorlose.innerHTML = `You lose!`;
};

button.addEventListener("click", randomNumberCheck);
