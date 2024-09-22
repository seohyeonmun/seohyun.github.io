const time = document.querySelector("#clock span:first-child");
const todayDate = document.querySelector("#clock span:last-child");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const years = date.getFullYear();
  const months = String(date.getMonth()).padStart(2, "0");
  const dates = String(date.getDate()).padStart(2, "0");
  const days = date.getDay();
  const week = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const daysWeek = week[days];

  time.innerText = `${hours}:${minutes}:${seconds}`;
  todayDate.innerText = `${years}년 ${months}월 ${dates}일 ${daysWeek}`;
}

getClock();
setInterval(getClock, 1000);

