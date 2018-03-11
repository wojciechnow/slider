
document.addEventListener('DOMContentLoaded', function() {

    var id;
    var pause = document.getElementById('pause');
var play = document.getElementById('play')
    var next = document.getElementById("nextPicture");

    var prev = document.getElementById("prevPicture");

    var pics = document.querySelectorAll(".slider li");

    var picIndex = 0;

    console.log(next);

    console.log(prev);

    console.log(pics);

    console.log("Picture index: " + picIndex);



    pics[0].classList.add("visible");


    next.addEventListener('click',function () {

    pics[picIndex].classList.remove('visible')
        picIndex ++

        if (picIndex === pics.length){
        picIndex=0;
        }
        pics[picIndex].classList.add('visible')

})
    prev.addEventListener('click',function () {

        pics[picIndex].classList.remove('visible')
        picIndex --;
        if (picIndex < 0) {

            picIndex = pics.length-1;

        }
        pics[picIndex].classList.add('visible')


    });

play.addEventListener('click', function () {
    id = setInterval(function () {
        if (picIndex === pics.length-1){
            pics[picIndex].classList.remove('visible');
            picIndex=0;
            pics[picIndex].classList.add('visible')
        }else {
            pics[picIndex].classList.remove('visible');
            picIndex++;
            pics[picIndex].classList.add('visible')
        }

    },1000)
    play.style.display = 'none';
    pause.style.display = 'inline-block'

})
pause.addEventListener('click',function () {
    clearInterval(id)
    play.style.display = 'inline-block';
    pause.style.display = 'none'


})

});

