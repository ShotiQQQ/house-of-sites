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
});
