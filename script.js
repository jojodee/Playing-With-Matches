function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createRandomNumbers(){
  document.getElementById("div1").innerHTML = getRandomIntInclusive(1, 9);
  document.getElementById("div2").innerHTML = getRandomIntInclusive(1, 9);
  document.getElementById("div3").innerHTML = getRandomIntInclusive(1, 9);
  document.getElementById("div4").innerHTML = getRandomIntInclusive(1, 9);
  document.getElementById("div5").innerHTML = getRandomIntInclusive(1, 9);
  document.getElementById("div6").innerHTML = getRandomIntInclusive(1, 9);
  document.getElementById("div7").innerHTML = getRandomIntInclusive(1, 9);
  document.getElementById("div8").innerHTML = getRandomIntInclusive(1, 9);
  document.getElementById("div9").innerHTML = getRandomIntInclusive(1, 9);

}

function unHighLight(){
  document.getElementById("div1").classList.remove("highlight");
  document.getElementById("div2").classList.remove("highlight");
  document.getElementById("div3").classList.remove("highlight");
  document.getElementById("div4").classList.remove("highlight");
  document.getElementById("div5").classList.remove("highlight");
  document.getElementById("div6").classList.remove("highlight");
  document.getElementById("div7").classList.remove("highlight");
  document.getElementById("div8").classList.remove("highlight");
  document.getElementById("div9").classList.remove("highlight");
}


function highlightMatchingNumbers() {
  if (document.getElementById("div1").innerHTML === document.getElementById("div2").innerHTML) {

    document.getElementById("message").innerHTML =  "Row 1 matched" + "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div1").innerHTML;
    // document.getElementById("message").innerHTML =  "Row 1 matched";
    document.getElementById("div1").classList.add("highlight");
    document.getElementById("div2").classList.add("highlight");


  }

  if (document.getElementById("div1").innerHTML === document.getElementById("div3").innerHTML) {
    document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div1").innerHTML
    document.getElementById("div1").classList.add("highlight");
    document.getElementById("div3").classList.add("highlight");
  }

  if (document.getElementById("div2").innerHTML === document.getElementById("div3").innerHTML) {
    document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div2").innerHTML
    document.getElementById("div2").classList.add("highlight");
    document.getElementById("div3").classList.add("highlight");
  }

  if (document.getElementById("div4").innerHTML === document.getElementById("div5").innerHTML) {
    document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div4").innerHTML;
    document.getElementById("div4").classList.add("highlight");
    document.getElementById("div5").classList.add("highlight");
  }

  if (document.getElementById("div4").innerHTML === document.getElementById("div6").innerHTML) {
    document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div4").innerHTML;
    document.getElementById("div4").classList.add("highlight");
    document.getElementById("div6").classList.add("highlight");
  }

  if (document.getElementById("div5").innerHTML === document.getElementById("div6").innerHTML) {
    document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div5").innerHTML;
    document.getElementById("div5").classList.add("highlight");
    document.getElementById("div6").classList.add("highlight");
  }

  if (document.getElementById("div7").innerHTML === document.getElementById("div8").innerHTML) {
    document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div7").innerHTML;
    document.getElementById("div7").classList.add("highlight");
    document.getElementById("div8").classList.add("highlight");
  }

  if (document.getElementById("div7").innerHTML === document.getElementById("div9").innerHTML) {
    document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div7").innerHTML;
    document.getElementById("div7").classList.add("highlight");
    document.getElementById("div9").classList.add("highlight");
  }

  if (document.getElementById("div8").innerHTML === document.getElementById("div9").innerHTML) {
    document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div8").innerHTML;
    document.getElementById("div8").classList.add("highlight");
    document.getElementById("div9").classList.add("highlight");
  }

  if (document.getElementById("div1").innerHTML === document.getElementById("div4").innerHTML) {
    document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div1").innerHTML;
    document.getElementById("div1").classList.add("highlight");
    document.getElementById("div4").classList.add("highlight");
}

if (document.getElementById("div1").innerHTML === document.getElementById("div5").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div1").innerHTML;
  document.getElementById("div1").classList.add("highlight");
  document.getElementById("div5").classList.add("highlight");
}

if (document.getElementById("div1").innerHTML === document.getElementById("div7").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div1").innerHTML;
  document.getElementById("div1").classList.add("highlight");
  document.getElementById("div7").classList.add("highlight");
}

if (document.getElementById("div1").innerHTML === document.getElementById("div9").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div1").innerHTML;
  document.getElementById("div1").classList.add("highlight");
  document.getElementById("div9").classList.add("highlight");
}


if (document.getElementById("div2").innerHTML === document.getElementById("div5").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div2").innerHTML;
  document.getElementById("div2").classList.add("highlight");
  document.getElementById("div5").classList.add("highlight");
}

if (document.getElementById("div2").innerHTML === document.getElementById("div8").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div2").innerHTML;
  document.getElementById("div2").classList.add("highlight");
  document.getElementById("div8").classList.add("highlight");
}

if (document.getElementById("div3").innerHTML === document.getElementById("div9").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div3").innerHTML;
  document.getElementById("div3").classList.add("highlight");
  document.getElementById("div9").classList.add("highlight");
}

if (document.getElementById("div3").innerHTML === document.getElementById("div5").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div3").innerHTML;
  document.getElementById("div3").classList.add("highlight");
  document.getElementById("div5").classList.add("highlight");
}

if (document.getElementById("div3").innerHTML === document.getElementById("div6").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div3").innerHTML;
  document.getElementById("div3").classList.add("highlight");
  document.getElementById("div6").classList.add("highlight");
}

if (document.getElementById("div3").innerHTML === document.getElementById("div7").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div7").innerHTML;
  document.getElementById("div3").classList.add("highlight");
  document.getElementById("div7").classList.add("highlight");
}

if (document.getElementById("div3").innerHTML === document.getElementById("div9").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div3").innerHTML;
  document.getElementById("div3").classList.add("highlight");
  document.getElementById("div9").classList.add("highlight");
}

if (document.getElementById("div4").innerHTML === document.getElementById("div7").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div4").innerHTML;
  document.getElementById("div4").classList.add("highlight");
  document.getElementById("div7").classList.add("highlight");
}


if (document.getElementById("div5").innerHTML === document.getElementById("div7").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div7").innerHTML;
  document.getElementById("div5").classList.add("highlight");
  document.getElementById("div7").classList.add("highlight");
}

if (document.getElementById("div5").innerHTML === document.getElementById("div8").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div5").innerHTML;
  document.getElementById("div5").classList.add("highlight");
  document.getElementById("div8").classList.add("highlight");
}

if (document.getElementById("div5").innerHTML === document.getElementById("div9").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div5").innerHTML;
  document.getElementById("div5").classList.add("highlight");
  document.getElementById("div9").classList.add("highlight");
}


if (document.getElementById("div6").innerHTML === document.getElementById("div9").innerHTML) {
  document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " + "Matching Number =" + " " + document.getElementById("div6").innerHTML;
  document.getElementById("div6").classList.add("highlight");
  document.getElementById("div9").classList.add("highlight");
}


}



var btn = document.getElementById("button");
btn.addEventListener("click", function(){
  unHighLight();
  createRandomNumbers();
  highlightMatchingNumbers();
});
