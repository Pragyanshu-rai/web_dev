function slider() {
    const burger = document.querySelector('.burger');
    const nav_links = document.querySelector('.nav-links');

    // Toggle icon
    burger.classList.toggle('animate');

    // Toggle Navbar
    nav_links.classList.toggle('nav-active');

    // Get the list items 
    var items = nav_links.querySelectorAll('li');
    items.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.6}s`;
        }
        console.log(index / 7);
    });

}