// Step 1: Linking js to html: worked as expected.
// alert("hello world")

// Step 2: Create a function called Play that changes the 
// Player ID from X to O after each turn: Worked as expected
// function play() {
//     const playerSpan = document.getElementById('player')

//     if (playerSpan.innerText === 'X') {
//         playerSpan.innerText = '0'
//     } else {
//         playerSpan.innerText = 'X'
//     }

// }

// Step 3: Add to the function to fill in the boxes with alternating X and O 
//   each time a box is clicked: worked as expected.
// function play(clicked) {
//     const clickedBox = document.getElementById(clicked)
//     const playerSpan = document.getElementById('player')

//     if (playerSpan.innerText === 'X') {
//         playerSpan.innerText = 'O'
//         clickedBox.innerText = 'X'
//     } else {
//         playerSpan.innerText = 'X'
//         clickedBox.innerText ='O'
//     }

// }

// Step 4: Create an array that will serve to mark the progress throughout the game.
// Then add the array element (clickedBox) into the if statement: worked as expected.
// const progress = []

// function play(clicked) {
//     const clickedBox = document.getElementById(clicked)
//     const playerSpan = document.getElementById('player')

//     if (playerSpan.innerText === 'X') {
//         playerSpan.innerText = 'O'
//         clickedBox.innerText = 'X'
//         progress[clickedBox] = 'X'
//     } else {
//         playerSpan.innerText = 'X'
//         clickedBox.innerText ='O'
//         progress[clickedBox] = 'O'
//     }

// }


// Step 5: 

const progress = []

function play(clicked) {
    const playerSpan = document.getElementById('player')
    const clickedBox = document.getElementById(clicked)

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O'
        clickedBox.innerText = 'X'
        progress[clicked] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedBox.innerText ='O'
        progress[clicked] = 'O'
    }
console.log(progress)

const topLeft = progress[0];
const topCenter = progress[1];
const topRight = progress[2];
const middleLeft = progress[3];
const middleCenter = progress[4];
const middleRight = progress[5];
const bottomLeft = progress[6];
const bottomCenter = progress[7];
const bottomRight = progress[8];
//console.log(topLeft, topCenter, topRight, middleLeft, middleCenter, middleRight, bottomLeft, bottomCenter, bottomRight)
console.log(progress)
if (topLeft !== undefined && topLeft == topCenter && topLeft == topRight) {
    alert(`${topLeft} Winner!!`)
    return
}
if (middleLeft !== undefined && middleLeft == middleCenter && middleLeft == middleRight ){
    alert(`${middleft} Winner!!`)
    return
}
if (bottomLeft !== undefined && bottomLeft == bottomCenter && bottomLeft == bottomRight) {
    alert(`${bottomLeft} Winner!!`)
    return
}
if (topLeft !== undefined && topLeft == middleLeft && topLeft == bottomLeft) {
    alert(`${topLeft} Winner!!`)
    return
}
if (topCenter !== undefined && topCenter == middleCenter && topCenter == bottomCenter) {
    alert(`${topCenter} Winner!!`)
    return
}
if (topRight !== undefined && topRight == middleRight && topRight == bottomRight) {
    alert(`${topRight} Winner!!`)
    return
}
if (topLeft !== undefined && topLeft == middleCenter && topLeft == bottomRight) {
    alert(`${topLeft} Winner`)
    return
}
if (topRight !== undefined && topRight == middleCenter && topRight == bottomLeft) {
    alert(`${topRight} Winner`)
    return
}

let fullBoard = true
for(let i = 0; i <= 8; i++) {
    if(progress[i] === undefined) {
        fullBoard = false;
    }
}
if (fullBoard === true) {
    alert("Cat's game, there is no winner");
}
}