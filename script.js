document.querySelectorAll('.navbar-toggler').forEach(button => {
    button.addEventListener('click', () => {
        const navMenu = button.nextElementSibling;

        button.classList.toggle('burgerBtn_active');

        if(button.classList.contains('burgerBtn_active')) {
            navMenu.getElementsByClassName.maxHeight = navMenu.scrollHeight + "px";
        } else {
            navMenu.getElementsByClassName.maxHeight = 0;
        }
    })

})