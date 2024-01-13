setInterval (() => {
    let d = new Date();
    let curhour = d.getHours();
    let curmin = d.getMinutes();
    let cursec = d.getSeconds();

    let hourrotation = (30*curhour) + (curmin/2);
    let minrotation = 6*curmin;
    let secrotation = 6*cursec;

    let hour = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

    hour.style.transform = `rotate(${hourrotation}deg)`;
    min.style.transform = `rotate(${minrotation}deg)`;
    sec.style.transform = `rotate(${secrotation}deg)`;
},1000)