var menuButton = document.getElementById('menu-button');
var menu = document.getElementById('menu-container');
var mainContainer = document.getElementById('main-container');
var homeContainer0 = document.getElementById('home-container0');
var mainContent = document.getElementById('main-content');
var content = document.getElementsByClassName('content');
var mainRight = document.getElementById('main-right');
var mainRightContent0 = document.getElementById('main-right-content0');
var arrows = document.getElementById('arrows');
var arrowDown = document.getElementById('arrowdown');
var i = 0;
var running = false;

mainRightContent0.innerHTML = content[0].innerHTML;

menuButton.addEventListener('click', function(){
  $(menu).toggleClass('show');
  $(mainContainer).toggleClass('show-main');
  $(arrows).toggleClass('hide');
  $(mainContent).toggleClass('hide-content');
});

arrowDown.addEventListener('click', function() {
  if(menu.className !== "show" && running == false) {
    running = true;
    scrollDown();
    setTimeout(function(){ running = false;}, 500);
  }
});

document.onkeydown = function(e) {
  if(e.keyCode == 39 || e.keyCode == 40 && menu.className !== "show" && running == false) {
    running = true;
    scrollDown();
    setTimeout(function(){ running = false;}, 500);
  }
}

/*
function scrollDown() {
  if (i > content.length-1) {
    homeContainer1.className = "item" +i;
    homeContainer1.style.zIndex=i+1;
    homeContainer1.style.top =0;
    i=1;
    mainContent.className = "color" + i;
    mainRightContent1.style.opacity = "1";
    mainRightContent1.style.paddingTop = "150px";
    mainRightContent3.style.paddingTop = "0";
    mainRightContent3.style.opacity = "0";
    setTimeout(function(){
      homeContainer3.style.top = "100%";
      mainRightContent3.style.paddingTop = "300px"; }, 300);
      setTimeout(function(){
        homeContainer1.style.zIndex=i; }, 500);
  }

  else if (i == 1) {
    i += 1;
    homeContainer2.style.zIndex=i;
    homeContainer2.style.top =0;
    mainContent.className = "color" + i;
    mainRightContent1.style.paddingTop = "0";
    mainRightContent1.style.opacity = "0";
    mainRightContent2.style.opacity = "1";
    mainRightContent2.style.top = "0";
    mainRightContent2.style.paddingTop = "150px";
    setTimeout(function(){
      homeContainer1.style.top = "100%";
      mainRightContent1.style.paddingTop = "300px"; }, 300);
  }

  else if (i == 2) {
    i += 1;
    homeContainer3.style.zIndex=i;
    homeContainer3.style.top =0;
    mainContent.className = "color" + i;
    mainRightContent2.style.paddingTop = "0";
    mainRightContent2.style.opacity = "0";
    mainRightContent3.style.opacity = "1";
    mainRightContent3.style.top = "0";
    mainRightContent3.style.paddingTop = "150px";
    setTimeout(function(){
      homeContainer2.style.top = "100%";
      mainRightContent2.style.paddingTop = "300px"; }, 300);
  }
};
*/

function scrollDown() {

  if (i < content.length-1) {
    console.log(i);
    i++;
    var test = document.createElement('div');
    test.id = "home-container" + (i);
    test.style.height = "100%";
    test.style.width = "100%";
    test.style.backgroundImage = "url(images/bg_" + i + ".jpg)";
    test.style.backgroundRepeat = "no-repeat";
    test.style.backgroundSize = "cover";
    test.style.boxSizing = "border-box";
    test.style.padding = "20px";
    test.style.position = "absolute";
    test.style.top = "100%";
    test.style.transition = ".25s all ease-in-out";
    mainContainer.appendChild(test);

    var test2 = document.createElement('div');
    test2.id = "main-right-content" + (i);
    test2.style.paddingTop = "150px";
    test2.style.paddingRight = "20px";
    test2.style.position = "absolute";
    test2.style.top = "100%";
    test2.style.opacity = "0";
    test2.style.transition = ".25s all ease-in-out";
    test2.innerHTML = content[i].innerHTML;
    mainRightContent0.appendChild(test2);



    setTimeout(function(){
      test.style.top = "0";
      test2.style.top = "0";
      test2.style.opacity ="1"; }, 300);
    mainContent.className = "color" + i;
  }

  else {
    i=0;
    var test = document.createElement('div');
    test.id = "home-container0";
    mainContainer.appendChild(test);

    var test2 = document.createElement('div');
    test2.id = "main-right-content0";
    test2.innerHTML = content[0].innerHTML;
    mainRightContent0.appendChild(test2);
    test.style.top = "100%";
    test2.style.top = "100%";

    setTimeout(function(){
      test.style.top = "0";
      test2.style.top = "0";
      test2.style.opacity ="1"; }, 300);
    mainContent.className = "color0";
    console.log(i + ' too high');
  }
};


document.addEventListener('mousemove', function (event) {
    if (window.event) { // IE fix
        event = window.event;
    }

    // Grab the mouse's X-position.
    var mousex = event.clientX;
    var mousey = event.clientY;
    homeContainer0.style.backgroundPosition = mousex/8 + '%' + ' ' + mousey/8 + '%';
}, false);
