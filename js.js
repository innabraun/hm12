
const images = document.querySelectorAll(".image-to-show");

let i = 0;

let interval=setInterval(function(){

    images.forEach( (item, i) => {
       item.classList.remove("active");
    })


    if( i === images.length) {
        i = 0;

    }

    images[i].classList.add("active")

    i++;
    stop();
    start();

}, 3000);


let buttons=document.getElementById("menu");


buttons.addEventListener("click", (event)=>{
    if (event.target.classList.contains("stop")){
        function stop() {
            clearInterval(interval);

        }

    }else if  (event.target.classList.contains("start")){
        function start(){

        }

    }

    window.stop = stop;
    window.start = start;

})



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
