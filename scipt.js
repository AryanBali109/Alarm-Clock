// function plays() {
//   let ringtone = new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3")
//   ringtone.play();
//     // ringtone.loop = true;
// }
let ringtone = new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3")
let times;
let isalarmtime;
let alarmtime;
for (let i = 59; i >= 0; i--) {
  let options = `<option value="${i}">${i}</option>`

  minutes.insertAdjacentHTML("afterend", options);
}
for (let i = 24; i >= 1; i--) {
  let options = `<option value="${i}">${i}</option>`

  hour.insertAdjacentHTML("afterend", options);
}
for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let options = `<option value="${ampm}">${ampm}</option>`
  zone.insertAdjacentHTML("afterend", options)
}
setInterval(() => {
  let a = new Date
  let h = a.getHours()
  let m = a.getMinutes()
  let s = a.getSeconds()
  let lap = h >= 12 ? "PM" : "AM";
  let tsd = document.getElementById("insert-time")
  m = m < 10 ? "0" + m : m;
  h = h < 10 ? "0" + h : h;
  s = s < 10 ? "0" + s : s;
  tsd.innerHTML = `${h}:${m}:${s} ${lap}`
  if (alarmtime === `${h}:${m}:${lap}`) {
    // plays();
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000)

// add event
buttons.addEventListener("click", () => {
  if (isalarmtime) {
    alarmtime = ""
    ringtone.pause();
    buttons.innerText = "Set Alarm"

    return isalarmtime = false
  }
  times = `${hourea.value}:${minu.value}:${laps.value}`;
  if (times.includes("Hour") || times.includes("Minutes") || times.includes("Am/Pm")) {
    return alert("please enter valid time")
  }
  alarmtime = times;
  isalarmtime = true;

  buttons.innerText = "Clear Alarm"
})