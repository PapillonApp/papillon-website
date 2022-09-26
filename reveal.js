// Welcome !
ScrollReveal().reveal('#pageTitle', {distance: '20%', reset: true});
ScrollReveal().reveal('#pageSub', {distance: '20%', delay : 100, reset: true});

// loop over .arg elements
var argElements = document.querySelectorAll('.arg');
for (var i = 0; i < argElements.length; i++) {
    ScrollReveal().reveal(argElements[i], {distance: '20%', delay : 200 + (i * 100), reset: true});
}

ScrollReveal().reveal('#demoImage', {distance: '5%', delay : 100, reset: true});

// loop over .navList elements
var navListElements = document.querySelectorAll('.navList');
for (var i = 0; i < navListElements.length; i++) {
    ScrollReveal().reveal(navListElements[i], {distance: '20%', delay : 40 + (i * 100)});
}

// Sections
ScrollReveal().reveal('.section', {distance: '20%', delay : 0, reset: true});
ScrollReveal().reveal('h2', {distance: '20%', delay : 0, reset: true});