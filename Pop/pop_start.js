const successURL = "https://giphy.com/gifs/workingtitlefilms-mr-bean-rowan-atkinson-beans-holiday-kfRlTZDvhLCPvOEey8";
const failURL    = "https://giphy.com/gifs/fail-sad-pop-jaAXjJcaTngemp4vK8";
const duration   = 10000;
/*const gBDuration = 10000;
const rBDuration = 20000;
const yBDuration = 25000;*/

let balloons = [document.querySelector("#greenBalloon"),
                document.querySelector("#redBalloon"),
                document.querySelector("#yellowBalloon")]

let numStopped = 0;

/*document.querySelector("#greenBalloon").animate([{top: "80vh"}, {top: "3vh"}], {duration: gBDuration, fill: "forwards"});
document.querySelector("#redBalloon").animate([{top: "80vh"}, {top: "3vh"}], {duration: rBDuration, fill: "forwards"});
document.querySelector("#yellowBalloon").animate([{top: "80vh"}, {top: "3vh"}], {duration: yBDuration, fill: "forwards"});*/

balloons.forEach((balloon) => {
    
        balloon.animation = balloon.animate([{top: "80vh"}, {top: "3vh"}], {duration: duration, fill: "forwards"});
        balloon.animation.onfinish = () => {

                window.location.href = failURL;

        }

        balloon.addEventListener("click", (e) => {

            e.currentTarget.animation.pause();
            numStopped++;

            if (numStopped > 2) {

                window.location.href = successURL;

            }

        })
    
});
