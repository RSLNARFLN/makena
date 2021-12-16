var menu = document.querySelector('.brg-menu');
var brg = document.querySelector('.burger');
var mainbtn = document.querySelector('.goBelowBtn');
var btn = document.querySelector('.brg-menu-nav');

brg.addEventListener('click', SetActive);
mainbtn.addEventListener('click', goToMain);
btn.addEventListener('click', SetActive);

function SetActive() {
  menu.classList.toggle('active');
  brg.classList.toggle('active');
}

function goToMain() {
  window.location.href = '../06_makena/index.html#main';
}