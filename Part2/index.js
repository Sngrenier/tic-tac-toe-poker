// Part 1: link JS to HTML: worked as expected
//alert("hello world")

// Part 2: add 1 imput to HTML that will let js grab the id of each card, and 1 imput
// to HTML that will be used to assign style attributes to cards: worked as expected
{/* <input id ="idInput" type="text" placeholder ="Set ID">
    <input id="styleInput" type="text" placeholder ="Set Color"></input> */}
    const idInput= document.getElementById('idInput')
    const styleInput= document.getElementById('styleInput')
    console.log(idInput) 
    console.log(styleInput)
    
    
    // Part 3: In HTML: Assign id tags to all card suits. Create a button that reveals the card that 
    // set in the inputs. Add an onclick event to the button. In JS: Create function called setCard
    // that takes in the input values: works as expected
    
    // Part 4: add to the button function called setCard to reveal the input values by targeting 
    // the card, and giving it an event of color.
    
    function setCard(){
        const card = document.getElementById(idInput.value)
        card.style.color = styleInput.value
    }