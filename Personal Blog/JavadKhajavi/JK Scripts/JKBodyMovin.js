// JavaScript Document



// Hiding or showing relevant animated diagrams (triangluar relationship) on Teaching page industry research link

$("#defaultOpen").on('click', function() {
   $("#animatedITLink").hide();
   $("#animatedRTLink").show();
});

$("#interDisc").on('click', function() {
   $("#animatedRTLink").hide();
   $("#animatedITLink").show();
});



// Hiding or showing relevant animated Brains on Bio page


$('#developerBrain').hover(function(){
    $('#brainLeft').stop().show();
	$("#brainNormal").stop().hide();

},function(){
  $("#brainNormal").stop().show();
	$('#brainLeft').stop().hide();

});


$('#artistBrain').hover(function(){
    $('#brainRight').stop().show();
	$("#brainNormal").stop().hide();

},function(){
  $("#brainRight").stop().hide();
	$('#brainNormal').stop().show();

});




// Load BodyMovin Animation Bio page animated Brain Normal

$( document ).ready(function() {
    var anim;
     var animData23 = {
        container: document.getElementById('brainNormal'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
        progressiveLoad:true},
        path: 'AnimatedBrainNormal.json'
    };

 
 
    anim = bodymovin.loadAnimation(animData23);
    anim.addEventListener('data_ready', function(){
});

   }); 


// Load BodyMovin Animation Bio page animated Brain Right

$( document ).ready(function() {
    var anim;
     var animData24 = {
        container: document.getElementById('brainRight'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
        progressiveLoad:true},
        path: 'AnimatedRightBrain.json'
    };

 
 
    anim = bodymovin.loadAnimation(animData24);
    anim.addEventListener('data_ready', function(){
});

   }); 



// Load BodyMovin Animation Bio page animated Brain Right

$( document ).ready(function() {
    var anim;
     var animData25 = {
        container: document.getElementById('brainLeft'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
        progressiveLoad:true},
        path: 'AnimatedLeftBrain.json'
    };

 
 
    anim = bodymovin.loadAnimation(animData25);
    anim.addEventListener('data_ready', function(){
});

   }); 




// Load BodyMovin Animation Bio page animated Map International Work Experience

$( document ).ready(function() {
    var anim;
     var animData20 = {
        container: document.getElementById('animatedBioMap'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
        progressiveLoad:true},
        path: 'AnimatedMapInternationalWorkExperience.json'
    };

 
 
    anim = bodymovin.loadAnimation(animData20);
    anim.addEventListener('data_ready', function(){
});

   }); 




// Load BodyMovin Animation Bio page animated Map International Network

$( document ).ready(function() {
    var anim;
     var animData21 = {
        container: document.getElementById('animatedBioMap2'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
        progressiveLoad:true},
        path: 'AnimatedMapNetwork.json'
    };

 
 
    anim = bodymovin.loadAnimation(animData21);
    anim.addEventListener('data_ready', function(){
});

   }); 




// Load BodyMovin Animation Bio page animated Map Countries Visited

$( document ).ready(function() {
    var anim;
     var animData22 = {
        container: document.getElementById('animatedBioMap3'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
        progressiveLoad:true},
        path: 'AnimatedMapCountriesVisited.json'
    };

 
 
    anim = bodymovin.loadAnimation(animData22);
    anim.addEventListener('data_ready', function(){
});

   }); 




// Hiding or showing relevant animated diagrams of Soft and Hard Skills

$("#defaultOpen").on('click', function() {
   $("#animatedSoftSkills").hide();
   $("#animatedHardSkills").show();
});

$("#interDisc").on('click', function() {
   $("#animatedHardSkills").hide();
   $("#animatedSoftSkills").show();
});




// Load BodyMovin Animation Bio page animated Hard Skills

$( document ).ready(function() {
    var anim;
     var animData26 = {
        container: document.getElementById('animatedHardSkills'),
        renderer: 'svg',
        loop: false,
        prerender:true,
        autoplay: true,
        rendererSettings: {
        progressiveLoad:true},
        path: 'AnimatedHardSkills.json'
    };

 
 
    anim = bodymovin.loadAnimation(animData26);
    anim.addEventListener('data_ready', function(){
});

   }); 



// Load BodyMovin Animation Bio page animated Soft Skills

$( document ).ready(function() {
    var anim;
     var animData27 = {
        container: document.getElementById('animatedSoftSkills'),
        renderer: 'svg',
        loop: false,
        prerender:true,
        autoplay: true,
        rendererSettings: {
        progressiveLoad:true},
        path: 'AnimatedSoftSkills.json'
    };

 
 
    anim = bodymovin.loadAnimation(animData27);
    anim.addEventListener('data_ready', function(){
});

   }); 





// Load BodyMovin Animation Research page Cellular-like animated circle

$( document ).ready(function() {
    var anim;
     var animData10 = {
        container: document.getElementById('animContainer'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
        progressiveLoad:true},
        path: 'animatedCell.json'
    };

 
 
    anim = bodymovin.loadAnimation(animData10);
    anim.addEventListener('data_ready', function(){
});

   }); 






// Load BodyMovin Animation Triangle Relationship Research --- Teaching

$( document ).ready(function() {
    var anim;
     var animData12 = {
        container: document.getElementById('animatedRTLink'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
        progressiveLoad:true},
        path: 'AnimatedTriangle1.json'
    };

 
 
    anim = bodymovin.loadAnimation(animData12);
    anim.addEventListener('data_ready', function(){
});

   }); 




// Load BodyMovin Animation Triangle Relationship Indusrty --- Teaching

$( document ).ready(function() {
    var anim;
     var animData13 = {
        container: document.getElementById('animatedITLink'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
        progressiveLoad:true},
        path: 'AnimatedTriangle2.json'
    };

 
 
    anim = bodymovin.loadAnimation(animData13);
    anim.addEventListener('data_ready', function(){
});

   }); 



// Load BodyMovin Animation Student Overall Satisfaction Teaching

$( document ).ready(function() {
    var anim;
     var animData14 = {
        container: document.getElementById('studentSatisfaction'),
        renderer: 'svg',
        loop: false,
        prerender:true,
        autoplay: true,
        rendererSettings: {
        progressiveLoad:false},
        path: 'StudentSatisfactionChart.json'
    };

 
 
    anim = bodymovin.loadAnimation(animData14);
    anim.addEventListener('data_ready', function(){
});

   }); 








// Load BodyMovin Animation Map on Contact page

$( document ).ready(function() {
    var anim;
     var animData11 = {
        container: document.getElementById('animatedMapContainer'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
        progressiveLoad:true},
        path: 'AnimatedMap.json'
    };

 
 
    anim = bodymovin.loadAnimation(animData11);
    anim.addEventListener('data_ready', function(){
});

   }); 








