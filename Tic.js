//change Player Name
let P1 = "PLAYER1";
let P2 = "PLAYER2";

function changeName() {
  P1 = prompt("Name of the player who choose: 'X' !!");
  P2 = prompt("Name of the player who choose: 'O' !!");

  var str1 = P1 + " : X";
  var str2 = P2 + " : O";
  document.getElementById("result").innerHTML = str1 + "<br>" + str2;
  document.getElementById("result").style.color="ANTIQUEWHITE";
}
var flag = true;
var t = 0;
function game() {
  if (flag == true) {
    document.activeElement.innerHTML = "X";
    document.activeElement.removeAttribute("onclick");
    document.activeElement.style.backgroundColor = "#2a74f0";
    t++;
    flag = false;
    var final = checkresult();
    if (final == "stop") {
      var xc = document.getElementById("result");
      xc.innerHTML = P1 + " WINS !!!";
      xc.style.fontSize = "45px";
      xc.style.color = "antiquewhite";
      xc.style.paddingTop = "30px";
      removeATT();
    } else if (t == 9) {
      xc.innerHTML = "MATCH DRAW !!";
    }
  } else {
    document.activeElement.innerHTML = "O";
    document.activeElement.style.backgroundColor = "hotpink";
    document.activeElement.removeAttribute("onclick");
    t++;
    flag = true;

    var final = checkresult();
    if (final == "stop") {
      var xc = document.getElementById("result");
      xc.innerHTML = P2 + " WINS !!!";
      xc.style.fontSize = "45px";
      xc.style.color = "antiquewhite";
      xc.style.paddingTop = "30px";
      removeATT();
    } else if (t == 9) {
      xc.innerHTML = "MATCH DRAW !!";
    }
  }
}

function checkresult() {
  var str;
  if (
    (document.getElementById("b1").innerHTML ==
      document.getElementById("b2").innerHTML &&
      document.getElementById("b1").innerHTML ==
        document.getElementById("b3".innerHTML) &&
      document.getElementById("b1").innerHTML == "x") ||
    document.getElementById("b1").innerHTML == "O"
  ) {
    str = "stop";
    return str;
  } else if (
    (document.getElementById("b1").innerHTML ==
      document.getElementById("b4").innerHTML &&
      document.getElementById("b1").innerHTML ==
        document.getElementById("b7".innerHTML) &&
      document.getElementById("b1").innerHTML == "x") ||
    document.getElementById("b1").innerHTML == "O"
  ) {
    str = "stop";
    return str;
  } else if (
    (document.getElementById("b3").innerHTML ==
      document.getElementById("b6").innerHTML &&
      document.getElementById("b9").innerHTML ==
        document.getElementById("b3".innerHTML) &&
      document.getElementById("b3").innerHTML == "x") ||
    document.getElementById("b3").innerHTML == "O"
  ) {
    str = "stop";
    return str;
  } else if (
    (document.getElementById("b3").innerHTML ==
      document.getElementById("b5").innerHTML &&
      document.getElementById("b3").innerHTML ==
        document.getElementById("b7").innerHTML &&
      document.getElementById("b3").innerHTML == "x") ||
    document.getElementById("b3").innerHTML == "O"
  ) {
    str = "stop";
    return str;
  } else if (
    (document.getElementById("b7").innerHTML ==
      document.getElementById("b8").innerHTML &&
      document.getElementById("b7").innerHTML ==
        document.getElementById("b9").innerHTML &&
      document.getElementById("b7").innerHTML == "x") ||
    document.getElementById("b7").innerHTML == "O"
  ) {
    str = "stop";
    return str;
  }
  else if (
    (document.getElementById("b4").innerHTML ==
      document.getElementById("b6").innerHTML &&
      document.getElementById("b4").innerHTML ==
        document.getElementById("b5").innerHTML &&
      document.getElementById("b4").innerHTML == "x") ||
    document.getElementById("b4").innerHTML == "O"
  ) {
    str = "stop";
    return str;
  }
  else if (
    (document.getElementById("b2").innerHTML ==
      document.getElementById("b5").innerHTML &&
      document.getElementById("b2").innerHTML ==
        document.getElementById("b8").innerHTML &&
      document.getElementById("b2").innerHTML == "x") ||
    document.getElementById("b2").innerHTML == "O"
  ) {
    str = "stop";
    return str;
  }
}


//Remove Attribute

function removeATT(){
    document.getElementById("b1").removeAttribute("onclick");
    document.getElementById("b2").removeAttribute("onclick");
    document.getElementById("b3").removeAttribute("onclick");
    document.getElementById("b4").removeAttribute("onclick");
    document.getElementById("b5").removeAttribute("onclick");
    document.getElementById("b6").removeAttribute("onclick");
    document.getElementById("b7").removeAttribute("onclick");
    document.getElementById("b8").removeAttribute("onclick");
    document.getElementById("b9").removeAttribute("onclick");
}

// replay Game

function replay(){
    window.location.reload()
}