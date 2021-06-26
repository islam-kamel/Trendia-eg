let photo = document.querySelectorAll(".work_image");
let modalImg = document.getElementById('img');
let modalCaption = document.getElementById('caption');
let modal = document.getElementById('the_modal');
let close = document.getElementById('close');

const year = new Date()
document.querySelector("body > footer > span").innerHTML += year.getFullYear() +
    ' <a class="text-danger" href="https://cs50.harvard.edu/x/2021/" target="_blank"> Trendia</a>'

close.addEventListener('click', function (){modal.style.display = 'none'});
document.addEventListener('DOMContentLoaded', function (){
    let carousel_item = document.getElementsByClassName('carousel-item');

    for (let i = 0; i < carousel_item.length ; i++){
        carousel_item[i].style.height = window.innerHeight / 2 + '%'
    }
    document.querySelector("body > div.jumbotron.text-light.text-justify.d-block > h1").style.marginTop = window.innerHeight / 4 +"px"
})

function open_image(image) {
    modal.style.display = 'block';
    modalImg.src = image.src;
    let size = (screen.height / 2) - (modalImg.height / 2);
    modalImg.style.marginTop = Math.abs(size) +'px';
}


photo.forEach(function(image){
    image.addEventListener('click', function (){
        open_image(image)
    });
})