var hasRedirected = false;

function getRandom(max,min) {
    return Math.random()* (max - min) + min;;
}

var chance = getRandom(20,0);

if(chance>19 && !hasRedirected){
    window.onload = function() {
        window.location.href = "https://meet.jit.si/RunningIntoYourFriendsOnTheInternetSimulator2020";
    }
    hasRedirected = true;
}

