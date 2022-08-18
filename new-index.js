function s3ar() {
  document.querySelector('#myNavigator').pushPage('s3ar.html');
}
function calender() {
  document.querySelector('#myNavigator').pushPage('calender.html');
}
function home() {
  document.querySelector('#myNavigator').resetToPage('home.html');
}
function tranime() {
  document.querySelector('#myNavigator').pushPage('tranime.html');
}
//day 1


function amdahflbatol() {
  document.querySelector('#myNavigator').pushPage('amdah-fl-batol.html');
}
function anasakn() {
  document.querySelector('#myNavigator').pushPage('ana-sakn.html');
}


// day 2 new
function tolma() {
  document.querySelector('#myNavigator').pushPage('tol-ma.html');
}
function yamaram() {
  document.querySelector('#myNavigator').pushPage('ya-maram.html');
}





document.addEventListener('init', function(event) {
    var page = event.target;
console.log(page.id)
      document.querySelector('.day1').onclick = function() {
        document.querySelector('#myNavigator').pushPage('s3ar.html');
      
      
    } 
  
page.querySelector('.tranime').onclick = function() {
  document.querySelector('#myNavigator').pushPage('tranime.html');
}
page.querySelector('.s3ar').onclick = function() {
  document.querySelector('#myNavigator').pushPage('43ar.html');


} 


document.addEventListener('backbutton', function(){
  if(page.id != 'home') {
    popPage()
  }
  else //nothing is visible, exit the app
  {
    navigator.app.exitApp();
  }
});
  });