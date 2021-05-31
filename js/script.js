window.addEventListener('DOMContentLoaded', () => {
  //Mobile Navigation 
  const nav = document.querySelector('nav');

  function expandNav() {
      burger.classList.toggle('change');
      nav.classList.toggle('show');
  }

  const lis = document.querySelectorAll('#nav li'); 

  let num = lis.length; 
  let delay = 0.3;  
  while(num > 0) {
      lis[lis.length - num].style.animationDelay = delay + 's'; 
      num--; 
      delay += 0.3; 
  } 

  const burger = document.getElementById('burger'); 
  burger.addEventListener('click', expandNav);

  //if window gets resized and nav is open - close it. 
  if(window.innerWidth < 800) {
      window.addEventListener('resize', function() {
          burger.classList.remove('change');
          nav.classList.remove('show');
      });
  }
  

  //when there is a click on one of the links, close the navigation (on mobile)
  lis.forEach(li => li.addEventListener('click', function() {
      burger.classList.remove('change');
      nav.classList.remove('show');
  }));

});