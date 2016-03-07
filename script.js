function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.getElementById("div1").innerHTML = getRandomIntInclusive(1, 9);
document.getElementById("div2").innerHTML = getRandomIntInclusive(1, 9);
document.getElementById("div3").innerHTML = getRandomIntInclusive(1, 9);
