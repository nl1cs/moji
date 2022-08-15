

function myFunction(a) {
  
  a.parentNode.getElementsByClassName("dropdown-content")[0].classList.toggle("working");

}
const link = document.querySelectorAll(".dropdown")

link.forEach((e) => e.addEventListener("click", event => {
  event.preventDefault()

  // do something and navigate
}))




window.onclick = function(event) {
  if (!event.target.matches('.dropdown')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('working')) {
        openDropdown.classList.remove('working');
      }
    }
  }
}

window.addEventListener('scroll', event => {
  const scroll = window.scrollY;
  if (scroll !=0) {
     document.querySelector('.working').classList.remove('working');
  }
 
})

document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');
  navBar = document.querySelector('.navPad');
  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector('.navigation').offsetHeight;
  navBar.style.paddingTop = navbar_height + 'px';

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
           if (scroll_top == 0) {
            console.log(scroll_top)
            el_autohide.classList.remove('scrolled-up');
          }
         else if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
         
          else {
          
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
              
              
          }
          last_scroll_top = scroll_top;
    }); 
    // window.addEventListener
  }
  // if


  
}); 





 

 
 