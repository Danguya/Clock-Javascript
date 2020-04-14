//Relogio Analogico
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

//Relogico Digital
const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const second = document.querySelector('#seconds');

//função que define o tempo em tempo real rsrsr(LOL)
function setDate(){
    //instanciando o tempo do sistema
    const now = new Date();

    //configurando o relogio analogico com
    //os minutos, segundos e hora
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60 ) * 360)+90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60 ) * 360)+90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360)+90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    //definindo o relogio digital
    hour.textContent = hour;
    min.textContent = mins;
    second.textContent = seconds;


}
setInterval(setDate, 1000);