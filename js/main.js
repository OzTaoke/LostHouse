/* Nav icon */

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row')
const navList = document.querySelector('.nav__list');

function navAddRemoveClass() {
    navIcon.classList.toggle('nav-icon--active');
    navList.classList.toggle('nav__list--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}

navBtn.onclick = function() {
    navAddRemoveClass();
}

navList.onclick = function() {
    navAddRemoveClass();
}

/* Phone Mask */

mask('[data-tel-input]');

/* Placeholder value */

const phoneInputs = document.querySelectorAll('[data-tel-input]');

phoneInputs.forEach((input)=> {
    input.addEventListener('input', () => {
        if (input.value == '+') {
            input.value = '';
        };
    })

    input.addEventListener('blur', () => {
        if (input.value == '+') {
            input.value = '';
        };
    })
}) 

/* Yandex Map */

var myMap;

ymaps.ready(function () {
    myMap = new ymaps.Map("map", {
        center: [59.944679,30.3398279],
        zoom: 15
    });

    myPlacemark = new ymaps.Placemark(
        [59.944679,30.3398279],
        { balloonContent: `
        <div class="balloon">
            <div class="balloon__address">Наб. реки Фонтанки 10-15</div>
            <div class="balloon__contacts">
                <a href="tel:+7(812) 123-45-67">8 (812) 123-45-67</a>
            </div>
        </div>
        `}, 
        {
        iconLayout:'default#image',
        iconImageHref: './image/map/location-pin.svg',
        iconImageSize: [40,40],
        iconImageOffset: [-20,-40]
    })

    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('rulerControl');
    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();
    
});

