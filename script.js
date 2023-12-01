function discord() { 
  alert("hsdch");
}
function ton() { 
  alert("EQANSlLV-A4-LqCoah8gaGK6NY7JmgVjggHyf55ZIZ49T33G");
}

var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

var countdownfunction = setInterval(function() {

    var now = new Date().getTime();
    
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("timer").innerHTML = days + "д " + hours + "ч "
    + minutes + "м " + seconds + "с";
    
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);