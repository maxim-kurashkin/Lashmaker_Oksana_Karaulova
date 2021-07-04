window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger'),
    linkpromo = document.querySelectorAll('.menu__link__close');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
  
    linkpromo.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('menu_active');
        });
    });

    $(document).ready(function(){
        //smooth scroll and page up
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
        });

        $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
    });
});
