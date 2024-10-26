// Tab-Links
var tablinks=document.getElementsByClassName("tab-links")

var tabcontents=document.getElementsByClassName("tab-contents")

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");

}




var typed = new Typed('.element', {
    strings: ['Frontend Web Developer', 'Web Designer','Figma Editor','Video Editor','Ui/Ux Designer','Graphic Designer'],
    typeSpeed: 100,
    backspeed:100,
    backdelay:1000,
    loop:true,
  });

// Smooth scroll
//  function loco(){
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
//   });
//  }
//  loco();

  // Toggle Nav Bar
  let menuIcon=document.querySelector('#menu-icon');
  let navBar=document.querySelector('nav ul');

  menuIcon.onclick = ()  =>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
   
  };

  // Scroll Reveal
 function scroll(){
  ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200,
   });

   ScrollReveal().reveal('.port_text,.heading',{origin:'top'});
   ScrollReveal().reveal('.service-box,.portfolio-box,.contact form ',{origin:'bottom'});
   ScrollReveal().reveal('.port_text h1,.about_img,.element',{origin:'left'});
   ScrollReveal().reveal('.port_text p,.about_text ',{origin:'right'});
 }
 scroll();
