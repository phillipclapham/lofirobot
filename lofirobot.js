let noms = "off";
let mouthMover;
let camo = "off";
let shields = "off";

function aboutButton() {
  $("#aboutBox").slideDown(1000);
  $("body").on("click", ".close", function() {
    $("#aboutBox").slideUp(1000);
  });
}

function nomNomNom() {
  let mouth = "open";
  noms = "on";
  $("#button2").css("background", "linear-gradient(to right, #c9009a 0%,#aa6d99 50%,#dd0093 100%)");
  mouthMover = setInterval(function() {
    if (mouth === "open") {
      $(".innerMouth").animate({
        height: "16px",
        top: "35%"
      }, 1000);
        mouth = "closed";
      } else {
        $(".innerMouth").animate({
          height: "36px",
          top: "7%"
        }, 1000);
        mouth = "open";
      }
    }, 1500);
}

function stopNoms() {
  clearInterval(mouthMover);
  noms = "off";
  $("#button2").css("background", "linear-gradient(to right, rgba(40,52,59,1) 0%,rgba(40,52,59,1) 2%,rgba(40,52,59,1) 9%,rgba(130,140,149,1) 29%,rgba(130,140,149,1) 73%,rgba(40,52,59,1) 99%)");
}

function nomButton() {
  if (noms === "off") {
    nomNomNom();
  } else {
    stopNoms();
  }
}

function camoEngage() {
  camo = "on";
  $("#button3").css("background", "linear-gradient(to right, #c9009a 0%,#aa6d99 50%,#dd0093 100%)");
  $("#robotBox").animate({
    opacity: "0.2"
  }, 2000);
}

function camoStop() {
  camo = "off";
  $("#button3").css("background", "linear-gradient(to right, rgba(40,52,59,1) 0%,rgba(40,52,59,1) 2%,rgba(40,52,59,1) 9%,rgba(130,140,149,1) 29%,rgba(130,140,149,1) 73%,rgba(40,52,59,1) 99%)");
  $("#robotBox").animate({
    opacity: "1"
  }, 2000);
}

function camoButton() {
  if (camo === "off") {
    camoEngage();
  } else {
    camoStop();
  }
}

function shieldEngage() {
  shields = "on";
  $("#button4").css("background", "linear-gradient(to right, #c9009a 0%,#aa6d99 50%,#dd0093 100%)");
  $(".shield").animate({
    height: "600px",
    top: "0%",
    opacity: "0.7"
  }, 1500);
}

function shieldStop() {
  shields = "off";
  $("#button4").css("background", "linear-gradient(to right, rgba(40,52,59,1) 0%,rgba(40,52,59,1) 2%,rgba(40,52,59,1) 9%,rgba(130,140,149,1) 29%,rgba(130,140,149,1) 73%,rgba(40,52,59,1) 99%)");
  $(".shield").animate({
    height: "1px",
    top: "100%",
    opacity: "0"
  }, 1500);
}

function shieldButton() {
  if (shields === "off") {
    shieldEngage();
  } else {
    shieldStop();
  }
}

$(document).ready(function() {
  $("body").on("click", "#button1", function() {
    aboutButton();
  });
  $("body").on("click", "#button2", function() {
    nomButton();
  });
  $("body").on("click", "#button3", function() {
    camoButton();
  });
  $("body").on("click", "#button4", function() {
    shieldButton();
  });
});