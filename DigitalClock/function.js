const clock = document.querySelector('#clock');
// console.log(clock);

setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)