const present = new Date();
const weekDays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
];
const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const formatTimeUnit = (unit) =>
  String(unit).length === 1 ? `0${unit}` : unit;

const showDate = (date) => {
  const monthDay = date.getDate();
  const weekDay = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dateContainer = document.querySelector(".date-container");
  dateContainer.innerHTML = `${weekDays[weekDay]} ${monthDay} de ${monthNames[month]} de ${year}`;
};

const clockContainer = document.querySelector(".clock-container");

const getClockHTML = (hours, minutes, seconds) => {
  return `
    <span>${formatTimeUnit(hours)}</span> :
    <span>${formatTimeUnit(minutes)}</span> :
    <span>${formatTimeUnit(seconds)}</span>
  `;
};
const updateClock = () => {
  const present = new Date();
  const hours = present.getHours();
  const minutes = present.getMinutes();
  const seconds = present.getSeconds();

  clockContainer.innerHTML = getClockHTML(hours, minutes, seconds);
};

showDate(present);
updateClock();
setInterval(updateClock, 1000);
