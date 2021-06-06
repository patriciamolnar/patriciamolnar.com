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


  //expand certificates
  const toggleVisibility = (e) => {
    const parent = e.target.parentElement;
    const btn = e.target;
    if(parent.classList.contains('appear')) {
        parent.classList.remove('appear');
        btn.textContent = '+'; 
    } else {
        parent.classList.add('appear');
        btn.textContent = '-'; 
    }
  }
  const toggleBtns = document.querySelectorAll('.certificates__toggle');
  toggleBtns.forEach(btn => {
      btn.addEventListener('click', (e) => toggleVisibility(e))
  }); 

  // intersection observer 
  const options = {
    threshold: 0, 
    rootMargin: '0px 0px -100px 0px'
  }; 

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if(!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); 
          }
      })
  });

  
  //add delay to transition
  const addDelay = (eles) => {
    let num = eles.length; 
    let delay = 0;  
    while(num > 0) {
        eles[eles.length - num].style.transitionDelay = delay + 's'; 
        num--; 
        delay += 0.3; 
    } 
  }

  const eles = document.querySelectorAll('.transition'); 
  addDelay(eles);
  eles.forEach(ele => observer.observe(ele));

  const heroBtn = document.querySelector('.hero__text a');
  observer.observe(heroBtn);

  
});