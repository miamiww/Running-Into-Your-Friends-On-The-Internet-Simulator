var hasRedirected = false;

function getRandom(max,min) {
    return Math.random()* (max - min) + min;;
}

var chance = getRandom(100,0);

if(chance>98 && !hasRedirected){
    window.onload = function() {
        window.location.href = "https://meet.jit.si/RunningIntoYourFriendsOnTheInternetSimulator2020";
    }
    hasRedirected = true;
}

