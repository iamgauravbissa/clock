


function setDate()
{
    var now = new Date();
    var seconds = now.getSeconds();
    var minits = now.getMinutes();
    var hour = now.getHours();
    var secondsdegree = (seconds/60 *360);
    var hourdegree = (hour/12 *360);
    var minitsdegree = (minits/60 *360);
    // console.log(seconds);
    document.getElementById('min').style.transform = 'rotate({{minitsdegree}}deg)';
    document.getElementById('secs').style.transform = 'rotate(${secondsdegree}deg)';
    document.getElementById('hour').style.transform = 'rotate(${hourssdegree}deg)';

}

setInterval(setDate, 1000);