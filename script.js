const mapLocation = document.getElementById('mapLocation')
const goNorth = document.getElementById('north')
const goSouth = document.getElementById('south')
const goWest = document.getElementById('west')
const goEast = document.getElementById('east')

/* Map array with names for every map square*/

let map = [];
map[0] = 'Forbidden forest'
map[1] = 'Dragons lair'
map[2] = 'Forbidden forest'
map[3] = 'West field'
map[4] = 'camp'
map[5] = 'east field'
map[6] = 'Mage Tower'
map[7] = 'Lake'
map[8] = 'City centre'

/* Variables to determine position on map */
let mapPosition = 4;
let currentPosition = map[mapPosition];

/* Variable to change target child of div */
let childVar = 5;

/* Movement add event listeners */

goNorth.addEventListener('click', function(){ moveNorth(3)})
goSouth.addEventListener('click', function(){ moveSouth(-3)})
goWest.addEventListener('click', function(){ moveWest(1)})
goEast.addEventListener('click', function(){ moveEast(-1)})



/* Movement Functions */
function moveNorth(input){

    if (mapPosition >= 2) {
        mapPosition = mapPosition-input;
        currentPosition=map[mapPosition]
        mapLocation.innerHTML = "you arrive at the  " +  map[mapPosition];
        document.querySelector(".grid-item:nth-child(" + childVar + ")").style.color = 'rgba(255, 0, 0, 0.0)';
        childVar = childVar - 3;
        console.log(childVar)
        document.querySelector(".grid-item:nth-child(" + childVar + ")").style.color = 'black';

    }
    else {
        console.log('The road north is blocked')
        mapLocation.innerHTML = 'The road north is blocked';
    }
    
};

function moveSouth(input){


    if (mapPosition <= 5){
        mapPosition = mapPosition-input;
        currentPosition=map[mapPosition]
        mapLocation.innerHTML = "you arrive at the  " +  map[mapPosition];
        document.querySelector(".grid-item:nth-child(" + childVar + ")").style.color = 'rgba(255, 0, 0, 0.0)';

        childVar = childVar + 3;
        console.log(childVar)
        document.querySelector(".grid-item:nth-child(" + childVar + ")").style.color = 'black';

    }
    else {
        console.log('The road south is blocked')
        mapLocation.innerHTML = 'The road south is blocked';
        
    }
    
};

function moveWest(input){

    if (mapPosition % 3 != 0){
        mapPosition = mapPosition-input;
        currentPosition=map[mapPosition]
        mapLocation.innerHTML = "you arrive at the  " +  map[mapPosition];
        document.querySelector(".grid-item:nth-child(" + childVar + ")").style.color = 'rgba(255, 0, 0, 0.0)';

        childVar = childVar - 1;
        console.log(childVar)
        document.querySelector(".grid-item:nth-child(" + childVar + ")").style.color = 'black';


    }
    else {
        console.log('The road west is blocked')
        mapLocation.innerHTML = 'The road west is blocked';
    }
    
};

function moveEast(input){

    if (mapPosition % 3 != 2){
        mapPosition = mapPosition-input;
        currentPosition=map[mapPosition]
        mapLocation.innerHTML = "you arrive at the  " +  map[mapPosition];
        document.querySelector(".grid-item:nth-child(" + childVar + ")").style.color = 'rgba(255, 0, 0, 0.0)';
        childVar = childVar + 1;
        console.log(childVar)
        document.querySelector(".grid-item:nth-child(" + childVar + ")").style.color = 'black';

    }
    else {
        console.log('The road East is blocked')
        mapLocation.innerHTML = 'The road east is blocked';
    }
    
};