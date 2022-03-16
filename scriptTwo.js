
const back = document.querySelector('#btnBack');
const next = document.querySelector('#btnNext');
const photo = ['диван сер.jpg', 'Стол.jpg', 'Кресло.jpg'];
let i = 0;
next.addEventListener('click', function() {
    i++;
    if (i > photo.length - 1) {
        i = 0;
    }
    document.querySelector('.picter').src = photo[i];
})

back.addEventListener('click', function() {
    i--;
    if (i < 0) {
        i = photo.length - 1;
    }
    document.querySelector('.picter').src = photo[i];
})