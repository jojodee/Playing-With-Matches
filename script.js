function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.getElementById("div1").innerHTML = getRandomIntInclusive(1, 9);
document.getElementById("div2").innerHTML = getRandomIntInclusive(1, 9);
document.getElementById("div3").innerHTML = getRandomIntInclusive(1, 9);

//class highlight{



// document.getElementById("div2").classList.add("highlight");
// document.getElementById("div3").classList.add("highlight");


function highlightMatchingNumbers(){
  if(document.getElementById("div1").innerHTML  === document.getElementById("div2").innerHTML  )
  {C = "Numbers Matched = 2" + " <br> <br> " +  "Matching Number =" + " " + document.getElementById("div1").innerHTML ;
    document.getElementById("div1").classList.add("highlight");
    document.getElementById("div2").classList.add("highlight");}
  else if(document.getElementById("div1").innerHTML  === document.getElementById("div3").innerHTML)
  {document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " +  "Matching Number =" + " " + document.getElementById("div1").innerHTML
    document.getElementById("div1").classList.add("highlight");
    document.getElementById("div3").classList.add("highlight");
  }else if(document.getElementById("div2").innerHTML  === document.getElementById("div3").innerHTML)
  {document.getElementById("message").innerHTML = "Numbers Matched = 2" + " <br> <br> " +  "Matching Number =" + " " + document.getElementById("div2").innerHTML
    document.getElementById("div2").classList.add("highlight");
    document.getElementById("div3").classList.add("highlight");
  } if(document.getElementById("div1").innerHTML  === document.getElementById("div2").innerHTML){
      if(document.getElementById("div2").innerHTML === document.getElementById("div3").innerHTML){
        document.getElementById("message").innerHTML = "Numbers Matched = 3" + " <br> <br> " +  "Matching Number =" + " " + document.getElementById("div1").innerHTML
        document.getElementById("div1").classList.add("highlight");
        document.getElementById("div2").classList.add("highlight");
        document.getElementById("div3").classList.add("highlight");}
      else {
          document.getElementById("nomatch").innerHTML
      }
  }
}

  highlightMatchingNumbers();
