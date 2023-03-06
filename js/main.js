//swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    },
  
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    loop: false,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        610: {
            slidesPerView: 1.3,
            spaceBetween: 30
        },
        
        888: {
            slidesPerView: 1.05,
            spaceBetween: 30
        },
        1000: {
            slidesPerView: 1.05,
            spaceBetween: 30
        },
        1410: {
            slidesPerView: 1.5,
            spaceBetween: -100
        }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper2-button-next-custom',
      prevEl: '.swiper2-button-prev-custom',
    },
  
  });


document.addEventListener("DOMContentLoaded", function(event) {
    //HEADER
    const menuBtn = document.querySelector('.header__menu-btn');
    const menu = document.querySelector('.header__menu');
    const logoSvg = document.querySelector('.header__logo-svg');
    const logoSvgWh = document.querySelector('.header__logowh-svg');
    const logoSvgWhLink = document.querySelector('.header__logo-link');
    const menuLink = document.querySelectorAll('.header__link-burger');
    
    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('body__hidden');
        logoSvg.classList.toggle('none');
        logoSvgWh.classList.toggle('none');

        logoSvgWhLink.onclick = function (){
            if(document.body.classList.contains('body__hidden')){
                menuBtn.classList.toggle('active');
                menu.classList.toggle('active');
                document.body.classList.toggle('body__hidden');
                logoSvg.classList.toggle('none');
                logoSvgWh.classList.toggle('none');       
            }
        }
    })
    
    for (let i = 0; i < menuLink.length; i++){
        menuLink[i].addEventListener('click', function(){
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
        
            document.body.classList.toggle('body__hidden');
        
            logoSvg.classList.toggle('none');
            logoSvgWh.classList.toggle('none');
        })
    }   


    //GRAPHIC
    const graphicItemCount = document.querySelectorAll('.graphic__item-count');
    const graphicItemProcent = document.querySelectorAll('.graphic__item-procent');
    let graphicItemMaxWidth = document.querySelector('.graphic__stats').offsetWidth;
    let graphicItemBackground;

    for (let i = 0; i < graphicItemProcent.length; i++) {
        if (graphicItemCount[i].textContent < 0) {
            graphicItemProcent[i].style.width = 0 + 'px';
        } else
        if (graphicItemCount[i].textContent < 7) {
            graphicItemBackground = 2.8 * graphicItemMaxWidth * graphicItemCount[i].textContent / 100;
            graphicItemProcent[i].style.width = graphicItemBackground + 'px'; 
        } else
        if (graphicItemCount[i].textContent > 100) {
            graphicItemCount[i].textContent = 100;
        } else {
            graphicItemBackground = graphicItemMaxWidth * graphicItemCount[i].textContent / 100;
            graphicItemProcent[i].style.width = graphicItemBackground + 'px';
        }
    }

    //FORM
    const inputTel = document.getElementById('phone');
    const submitButton = document.getElementById('submit_button');

    const maskOptions = { 
        mask: '+{7}(000)000-00-00' 
      }
    IMask(inputTel, maskOptions);

    submitButton.addEventListener("click", function(event){
        if(inputTel.value.length < 16){
            inputTel.classList.add('application__card-redborder');
            inputTel.setCustomValidity('Номер введён неправильно. Формат: +7(000)000-00-00');
            inputTel.reportValidity();
            event.preventDefault();
        }
    })

    

  });

window.addEventListener('resize', function(event){
    const graphicItemCount = document.querySelectorAll('.graphic__item-count');
    const graphicItemProcent = document.querySelectorAll('.graphic__item-procent');
    let graphicItemMaxWidth = document.querySelector('.graphic__stats').offsetWidth;
    let graphicItemBackground;

    for (let i = 0; i < graphicItemProcent.length; i++) {
        if (graphicItemCount[i].textContent < 0) {
            graphicItemProcent[i].style.width = 0 + 'px';
        } else
        if (graphicItemCount[i].textContent < 7) {
            graphicItemBackground = 2.8 * graphicItemMaxWidth * graphicItemCount[i].textContent / 100;
            graphicItemProcent[i].style.width = graphicItemBackground + 'px'; 
        } else
        if (graphicItemCount[i].textContent > 100) {
            graphicItemCount[i].textContent = 100;
        } else {
            graphicItemBackground = graphicItemMaxWidth * graphicItemCount[i].textContent / 100;
            graphicItemProcent[i].style.width = graphicItemBackground + 'px';
        }
    }
})