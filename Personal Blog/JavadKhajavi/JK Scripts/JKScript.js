// JavaScript Document



// onLoad click on default tab for all the tabs

window.onload = function () {
                startTab();
            };

            function startTab() {
                document.getElementById("defaultOpen").click();
				document.getElementById("initialOpen").click();

            }



// End of onLoad click on default tab for all the tabs




/* Open the mainnav */

// open menu, change logo color and show/hide menu content with JavaScript

function openMainMenu() {
  var mainNav = document.getElementById("mainMenu");
	var jk = document.getElementsByClassName("mainLogo");
	var menuContent = document.getElementById("mainMenuContainer");
	var logo = document.getElementById("topLogo");
  if (mainNav.style.height === "100%") {
    mainNav.style.height = "0%";
	jk[0].style.color = "white";
	jk[1].style.color = "white";
	logo.style.opacity = null;
	menuContent.style.visibility = "hidden";
  } else {
    mainNav.style.height = "100%";
	jk[0].style.color = "black";
	jk[1].style.color = "black";
	logo.style.opacity = "1";
	menuContent.style.visibility = "visible";
  }
}

// fadein and fadeout of the main menu content with JQuery

$('#menuClick').on('click', function() {
    if ($('#mainMenuContainer').css('opacity') == 0) {
        $('#mainMenuContainer').css('opacity', 1);
    }
    else {
        $('#mainMenuContainer').css('opacity', 0);
    }
});


/* Open the mainnav code End */






// JQuery code for fadingOut the scroll indicator on scrollDown

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    $('.scrollContainer').stop().animate(
        {opacity: (( 180-scroll )/500)+0.1},
        "slow"
    );
});





//JQuery code for changing color of the animated background on the Research Approaches

$("#defaultOpen").click(function(){
	$("#researchColorChanger").css({
     '-webkit-filter':'hue-rotate(0deg)',
  });
});

$("#interDisc").click(function(){
	$("#researchColorChanger").css({
     '-webkit-filter':'hue-rotate(45deg)',
  });
});

$("#appliedRes").click(function(){
	$("#researchColorChanger").css({
		'-webkit-filter':'hue-rotate(90deg)',
	});
});

$("#industryCon").click(function(){
	$("#researchColorChanger").css({
     '-webkit-filter':'hue-rotate(270deg)',
  });
});

$("#engineerIns").click(function(){
	$("#researchColorChanger").css({
     '-webkit-filter':'hue-rotate(315deg)',
  });
});




// project description make visible/invisible on mouseover

$('#fokoro').hover(function(){
    $('#fokoroDes').stop().fadeIn("slow");
	$('#fokoroBCKImage').stop().fadeIn("slow");
},function(){
  $("#fokoroDes").stop().fadeOut("slow");
  $("#fokoroBCKImage").stop().fadeOut("slow")
});


$('#winterDreams').hover(function(){
    $('#winterdreamsDes').stop().fadeIn("slow");
	$('#winterBCKImage').stop().fadeIn("slow");
},function(){
  $("#winterdreamsDes").stop().fadeOut("slow");
	$("#winterBCKImage").stop().fadeOut("slow");
});


$('#muqarnas').hover(function(){
    $('#muqarnasDes').stop().fadeIn("slow");
	$('#muqarnasBCKImage').stop().fadeIn("slow");
},function(){
  $("#muqarnasDes").stop().fadeOut("slow");
	$("#muqarnasBCKImage").stop().fadeOut("slow");
});


$('#thirdScript').hover(function(){
    $('#thirdscriptDes').stop().fadeIn("slow");
	$('#thirdScriptBCKImage').stop().fadeIn("slow");
},function(){
  $("#thirdscriptDes").stop().fadeOut("slow");
	$("#thirdScriptBCKImage").stop().fadeOut("slow");
});


$('#passionLove').hover(function(){
    $('#passionloveDes').stop().fadeIn("slow");
	$('#passionLoveBCKImage').stop().fadeIn("slow");
},function(){
  $("#passionloveDes").stop().fadeOut("slow");
	$("#passionLoveBCKImage").stop().fadeOut("slow");
});


//End of JQuery code for project description visibility on home page



//JQuery code for showing/hiding project info on Art Design and Tech page


$('#fokoroProject').hover(function(){
    $('#fok').stop().fadeIn("slow");
},function(){
  $("#fok").stop().fadeOut("slow");
});


$('#winterProject').hover(function(){
    $('#winter').stop().fadeIn("slow");
},function(){
  $("#winter").stop().fadeOut("slow");
});

$('#personalWebProject').hover(function(){
    $('#personalWeb').stop().fadeIn("slow");
},function(){
  $("#personalWeb").stop().fadeOut("slow");
});

$('#animCalligraphyProject').hover(function(){
    $('#animCalligraphy').stop().fadeIn("slow");
},function(){
  $("#animCalligraphy").stop().fadeOut("slow");
});

$('#muqarnasProject').hover(function(){
    $('#muq').stop().fadeIn("slow");
},function(){
  $("#muq").stop().fadeOut("slow");
});

$('#thirdScriptProject').hover(function(){
    $('#thirdS').stop().fadeIn("slow");
},function(){
  $("#thirdS").stop().fadeOut("slow");
});

$('#boardingProject').hover(function(){
    $('#boarding').stop().fadeIn("slow");
},function(){
  $("#boarding").stop().fadeOut("slow");
});

$('#passionProject').hover(function(){
    $('#passion').stop().fadeIn("slow");
},function(){
  $("#passion").stop().fadeOut("slow");
});

$('#conferenceBirdsProject').hover(function(){
    $('#conferenceBirds').stop().fadeIn("slow");
},function(){
  $("#conferenceBirds").stop().fadeOut("slow");
});

$('#mobyDickProject').hover(function(){
    $('#mobyDick').stop().fadeIn("slow");
},function(){
  $("#mobyDick").stop().fadeOut("slow");
});

$('#symphony40Project').hover(function(){
    $('#symphony40').stop().fadeIn("slow");
},function(){
  $("#symphony40").stop().fadeOut("slow");
});

$('#cosmicSymphonyProject').hover(function(){
    $('#cosmicSymphony').stop().fadeIn("slow");
},function(){
  $("#cosmicSymphony").stop().fadeOut("slow");
});

$('#reflectionLonelinessProject').hover(function(){
    $('#reflectionLoneliness').stop().fadeIn("slow");
},function(){
  $("#reflectionLoneliness").stop().fadeOut("slow");
});


// End of JQuery code for showing/hiding project info on Art Design and Tech page





// JQuery code for fading in and fading out research interests on Research/Lab page


$('#circleAnimationDiv').hover(function(){
    $('#animationResearchInterests').stop().animate({height: "80px", opacity: "1"}, 1500);

},function(){
    $("#animationResearchInterests").stop().animate({height: "0px", opacity: "0"}, 1500);

});

$('#circleMotionDeignDiv').hover(function(){
    $('#MotionDesignResearchInterests').stop().animate({opacity: "1", height: "80px"}, 1500);

},function(){
    $("#MotionDesignResearchInterests").stop().animate({opacity: "0", height: "0px"}, 1500);

});

$('#circleVirtualRealityDiv').hover(function(){
    $('#VRResearchInterests').stop().animate({opacity: "1", height: "80px"}, 1500);

},function(){
    $("#VRResearchInterests").stop().animate({opacity: "0", height: "0px"}, 1500);

});

$('#circleGameTechnologyDiv').hover(function(){
    $('#GameTechResearchInterests').stop().animate({opacity: "1", height: "100px"}, 1500);

},function(){
    $("#GameTechResearchInterests").stop().animate({opacity: "0", height: "0px"}, 1500);

});

$('#circleInteractionDesignDiv').hover(function(){
    $('#InteractionDesignResearchInterests').stop().animate({opacity: "1", height: "80px"}, 1500);

},function(){
    $("#InteractionDesignResearchInterests").stop().animate({opacity: "0", height: "0px"}, 1500);

});




//Replace Text function	on home page	 
$(function () { 
  count = 0; 
  wordsArray = ["DEVELOPER", "RESEARCHER", "VR EXPERT", "INNOVATOR", "DESIGNER", "ANIMATOR", "LEADER", "EDUCATOR", "TECH-SAVVY", "ARTIST"]; 
  setInterval(function () { 
    count++; 
    $("#wordChange").fadeOut(800, function () { 
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500); 
    }); 
  }, 5000); 
}); 
//End Replace Text function



//Parallax

// initiate parallax effects on Spheres
var scene = document.getElementById('spheres');
var parallaxInstance = new Parallax(spheres);
// you can change parallax options using parallaxInstance


// initiate parallax effects on Boxes
var scene = document.getElementById('boxes');
var parallaxInstance = new Parallax(boxes);
// you can change parallax options using parallaxInstance


// initiate parallax effects on Pyramids
var scene = document.getElementById('pyramids');
var parallaxInstance = new Parallax(pyramids);
// you can change parallax options using parallaxInstance





//Changing tabs on click


function openTab(evt, approachName) {
  // Declare all variables
  var itab, tabcontent, tablinks;
	
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabContent");
  for (itab = 0; itab < tabcontent.length; itab++) {
    tabcontent[itab].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tabLinks");
  for (itab = 0; itab < tablinks.length; itab++) {
    tablinks[itab].className = tablinks[itab].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(approachName).style.display = "block";
  evt.currentTarget.className += " active";
}

//End of Changing tabs on click



//Changing tabs on click Teaching page 2


function openTab2(evt, contentName) {
  // Declare all variables
  var itab2, tabcontent2, tablinks2;
	
  // Get all elements with class="tabcontent" and hide them
  tabcontent2 = document.getElementsByClassName("tabContent2");
  for (itab2 = 0; itab2 < tabcontent2.length; itab2++) {
    tabcontent2[itab2].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks2 = document.getElementsByClassName("tabLinks2");
  for (itab2 = 0; itab2 < tablinks2.length; itab2++) {
    tablinks2[itab2].className = tablinks2[itab2].className.replace(" teachActive", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(contentName).style.display = "block";
  evt.currentTarget.className += " teachActive";
}

//End of Changing tabs on click





