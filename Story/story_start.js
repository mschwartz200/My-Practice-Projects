//Setup website here
let hero = document.querySelector("#hero");
let villain = document.querySelector("#villain");
let lightning = document.querySelector("#lightning");

//Setup animation code here

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

//Run animation code here

lightning.animate(keyframes1, options1).onfinish = hitTheVillain;/*.finished.then(() => 
                                {lightning.animate(keyframes2, options2)});*/
