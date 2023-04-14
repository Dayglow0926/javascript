const clockTitle = document.querySelector(".js-clock");
const christmasDate = new Date("2023", "11", "25", "00", "00", "00");

function christmasCountDown() {
  const nowDate = new Date();
  const count = Math.abs(christmasDate.getTime() - nowDate.getTime());

  const date = Math.floor(count / 86400000);
  const hour = Math.floor((count % 86400000) / 3600000);
  const min = Math.floor((count % 3600000) / 60000);
  const sec = Math.floor((count % 60000) / 1000);

  clockTitle.innerHTML = `${date}d ${hour}h ${min}m ${sec}s`;
}

setInterval(christmasCountDown, 500);
