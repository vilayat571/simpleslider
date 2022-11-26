import slider from './slider.json' assert {type: "json"};


var next = document.getElementById('next');
var prev = document.getElementById('prev');
var main = document.getElementById('main');

var img = document.createElement('img');

next.addEventListener('click',(() => {
    img.setAttribute('src',slider.slider[0].url);


})());

main.appendChild(img)

let i = 0;

next.addEventListener('click',() => {

    i++;
    img.setAttribute('src',slider.slider[i].url);

    prev.style.display = 'block'

});

prev.addEventListener('click',() => {
    i--;
    i < 5 && img.setAttribute('src',slider.slider[i].url);


    i > 0 ? prev.style.display = 'block' : prev.style.display = 'none';
    i > 3 ? next.style.display = 'none' : next.style.display = 'block';
})

main.appendChild(img);
