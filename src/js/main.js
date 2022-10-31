document.querySelectorAll('.start__button').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.start__button').forEach(function(btn){
        btn.classList.remove('start__button--active');
    })
    e.currentTarget.classList.add('start__button--active');
    document.querySelectorAll('.start__descr').forEach(function(tabsBtn) {
        tabsBtn.classList.remove('start__descr--active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('start__descr--active')
    })
})

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
      }
    },
    pagination: {
        el: '.swiper-pagination',
      },
});

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__down');

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__down--mobile');
})