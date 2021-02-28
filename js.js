
const images = document.querySelectorAll(".image-to-show");

let i = 0;

function changePhotos(){

    /*images.forEach( (item, i) => {
       item.classList.remove("active");
    })*/
    images[i].classList.remove("active")
    i++;

    if( i === images.length) {
        i = 0;
    }

    images[i].classList.add("active")

}

let interval=setInterval ( changePhotos,


    1000);


let buttons=document.getElementById("menu");


buttons.addEventListener("click", (event)=>{
    if (event.target.classList.contains("stop")){
        stop()

    }else if  (event.target.classList.contains("start")){
        start()
    }


})


function stop() {
    clearInterval(interval);

}


function start(){
    interval= setInterval(changePhotos,1000)
}




/*function stop() {
    clearInterval(interval[i]);
}

function start() {
    i = setInterval(timed, 1000);
}

function timed() {
    document.getElementById("button").value++;
    start();
}
*/
