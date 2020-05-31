var isActiveBurger = false;

function test() {
    console.log(isActiveBurger);
    isActiveBurger = !isActiveBurger;
    if (isActiveBurger == true) {
        $("body").css({ "overflow": "hidden", "position": "fixed" });
    } else {
        $("body").css({ "overflow": "auto", "position": "inherit" });
    }
}
$(".abc").click(test);
//The Nav
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.2s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        burger.classList.toggle('toggle')
    });
}

navSlide();

window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});

/*function offScroll() {
    document.body.style.overflow = "hidden";
    this.onmouseout = function() {
        document.body.style.overflow = "auto";
    };
}*/

//second step

const buttons = document.querySelectorAll('.ripplebtn');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
        setTimeout(() => {
            ripples.remove()
        }, 1000);
    })
})