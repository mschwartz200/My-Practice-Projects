const delay = 5000;
const animationDuration = 5000;
const vizContainer = document.querySelector("#vizContainer");
const explanationContainer = document.querySelector("#explanationContainer");
const explanationText = document.querySelector("#explanationText");

const dataset = [
                    {"title": "Live within 50m of a nuclear plant for a year", "measurement": 0.09, "multiplier": 2180, "color": "#80f4fc"},
                    {"title": "Eat a single banana", "measurement": 0.1, "multiplier": 1965, "color": "#8195f8"},
                    {"title": "Receive a dental X-ray", "measurement": 5, "multiplier": 39, "color":"#d480f9"},
                    {"title": "Be on one airline flight from NY to LA", "measurement": 40, "multiplier": 4.9, "color":"#fd81bb"},
                    {"title": "Sleep directly on top of a nuclear plant for a year", "measurement": 250, "multiplier": 0.78, "color":"#fdab83"},
                    {"title": "Recieve a single mamogram", "measurement": 400, "multiplier": 0.49, "color": "#e9f785"},
                    {"title": "Receive a single chest CT scan", "measurement": 7000, "multiplier": 0.028, "color":"#81ed84"}

                    /*{"title": "Live within 50m of a nuclear plant for a year", "measurement": 0.09, "multiplier": 2180, "color": "#80f4fc"},
                    {"title": "Eat a single banana", "measurement": 0.1, "multiplier": 1965, "color": "#8195f8"},
                    {"title": "Receive a dental X-ray", "measurement": 5, "multiplier": 39, "color":"#d480f9"},
                    {"title": "Be on one airline flight from NY to LA", "measurement": 40, "multiplier": 4.9, "color":"#fd81bb"},
                    {"title": "Sleep directly on top of a nuclear plant for a year", "measurement": 250, "multiplier": 0.78, "color":"#fdab83"},
                    {"title": "Recieve a single mamogram", "measurement": 400, "multiplier": 0.49, "color": "#e9f785"},
                    {"title": "Receive a single chest CT scan", "measurement": 7000, "multiplier": 0.028, "color":"#81ed84"}*/
                ];

const defaultMultiplier = dataset[0].multiplier;

let circles = [];

/*let maxSize = 0;
dataset.forEach(dataLine => {
    const size = dataLine.measurement * defaultMultiplier;
    if (size > maxSize) {
        maxSize = size;
    }
});*/

dataset.forEach((dataLine, index) => {
    
    let newCircle = document.createElement("div");
    newCircle.style.width               = (dataLine.measurement*defaultMultiplier) + "vw";
    newCircle.style.height              = (dataLine.measurement*defaultMultiplier) + "vw";
    newCircle.style.backgroundColor     = dataLine.color;
    newCircle.style.borderRadius        = "50%";
    newCircle.style.position            = "absolute";
    newCircle.style.zIndex              = dataset.length - index;
    newCircle.style.top                 = ((dataLine.measurement*defaultMultiplier)/2*-1) + "vw";
    newCircle.style.left                = ((dataLine.measurement*defaultMultiplier)/2*-1) + "vw";
    circles.push(newCircle);
    vizContainer.append(newCircle);

    let updateText = () => {

        explanationText.innerHTML = dataset[index].title;
        explanationContainer.style.backgroundColor = dataset[index].color;
        explanationAmount.innerHTML = " (" + dataset[index].measurement + " micro-sieverts)";

    }

    window.setTimeout(updateText, index*delay);

});

for(let i = 0; i < (dataset.length - 1); i++) {

    let multiplierFrom = dataset[i].multiplier;
    let multiplierTo   = dataset[i + 1].multiplier;

    circles.forEach((circle, circleID) => {

        let circleMeasurement = dataset[circleID].measurement;

        let startWidth      = (circleMeasurement * multiplierFrom)          + "vw";
        let targetWidth     = (circleMeasurement * multiplierTo)            + "vw";
        let startHeight     = (circleMeasurement * multiplierFrom)          + "vw";
        let targetHeight    = (circleMeasurement * multiplierTo)            + "vw";
        let startTop        = ((circleMeasurement * multiplierFrom)/2*-1)   + "vw";
        let targetTop       = ((circleMeasurement * multiplierTo)/2*-1)     + "vw";
        let startLeft       = ((circleMeasurement * multiplierFrom)/2*-1)   + "vw";
        let targetLeft      = ((circleMeasurement * multiplierTo)/2*-1)     + "vw";

        let keyFramesFrom  = {"width": startWidth, "height": startHeight, "top": startTop, "left": startLeft};
        let keyFramesTo    = {"width": targetWidth, "height": targetHeight, "top": targetTop, "left": targetLeft};
        let animateOptions = {"duration": animationDuration, "fill": "forwards", "delay": ((i+1) * delay)/*, "easing": "ease-in-out"*/};

        circle.animate([keyFramesFrom, keyFramesTo], animateOptions);

        

    });

}




    
           