# My Animation Projects

## Description
This repository showcases various HTML animations and games that demonstrate my skills in writing code to animate images and create interactive experiences.

## Table of Contents
- Story
- Easing
- Visualization
- Pop
- Installation
- Usage
- Contributing
- License
- Contact

## Story
### Description
An HTML animation in which a hero shoots a lightning bolt at a villain. Portions of the code are commented out to demonstrate alternate ways the animation can play out. This project demonstrates my skills in writing code to animate images.

### Code Snippet
```javascript
let lightningStart  = {"left": "290px"};
let lightningMiddle = {"left": "550px", "transform": "rotate(-45deg)"};
let lightningEnd    = {"left": "900px"};
//let lightningEnd    = {"left": "855px", "top": "0px", "transform": "rotate(-45deg)"};
let options1        = {"duration": 1000};
//let options1        = {"duration": 155};
let options2        = {"duration": 450};

let hitTheVillain = () => {
    let villainStart = {
        transform: 'rotate(0deg)',
        opacity: 100
    };

    let villainEnd = {
        transform: 'rotate(1000deg)',
        opacity: 0
    };

    let options3 = {"duration": 1500};

    villain.animate([villainStart, villainEnd], options3);
};

// Define keyframes
let keyframes1 = [lightningStart, lightningEnd];
//let keyframes2 = [lightningMiddle, lightningEnd];

// Run animation code here
lightning.animate(keyframes1, options1).onfinish = hitTheVillain;/*.finished.then(() => 
                                {lightning.animate(keyframes2, options2)});*/

```


## Easing

### Description:
An HTML animation that shows a car starting to move after the light turns green and steadily increases its speed. This project further demonstrates my skills in writing code to animate images.


### Code Snippet
```
setTimeout(()=>{
    startAnimation();
}, 2000)

let startAnimation = () => {
    redLight.style.display = "none";
    let startKeyframes = {"left": "2vw"};
    let endKeyframes = {"left": "100vw"};
    let options = {
        duration: 3000,
        easing: "cubic-bezier(0.5, 0, 0.75, 0)"
    };

    car.animate([startKeyframes, endKeyframes], options);
};
```

## Visualization

### Description
An HTML animation that gives the viewer a perspective of the comparisons between each piece of data. This project highlights my ability to visualize data through animations.

### Code Snippet
```
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
```

## Pop

### Description
A simple balloon popping HTML game that tasks the player with stopping the balloons from reaching the top. If the player doesn’t let any of the balloons reach the top, the screen switches to a webpage that shows a gif representing the player’s success. If the player does let the balloons reach the top, the screen switches to a webpage that shows the player’s failure. This project showcases my skills in creating interactive games.

### Code Snippet
```
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
    });
});
```

## Installation
For the HTML projects, download the file folders to a preferred destination on a desktop, laptop, or mobile device.

## Contributing
Add your own code snippets and/or files to the repository. Nothing inappropriate, please.

## License
The projects in this repository were created under the guidance of Coursera. Coursera allows me to retain all intellectual property rights to my projects, and I am permitted to distribute them. This project is licensed under the MIT License - see the LICENSE file for details.
  
