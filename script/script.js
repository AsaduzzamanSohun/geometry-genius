

// -------------------------- Triangle Calculation ------------------------------
function calculationTriangleArea() {

    let triangleBase = getInputValueId('triangle-base');
    let triangleHeight = getInputValueId('triangle-height');

    // let p = document.getElementById('p-append');

    let triangleAreaDisplay = document.getElementById('calculationDisplay')

    if (!isNaN(triangleBase) && !isNaN(triangleHeight)) {

        let triangleArea = (0.5 * triangleBase * triangleHeight).toFixed(2);

        let ul = document.createElement('ul');

        ul.innerHTML = `

            <li id='resultList' class="my-1 py-1 list-none">
                <div class="flex content-between items-center gap-6">
                    <div class="flex-col"> Triangle </div>
                    <div class="flex-col"> ${triangleArea} cm<sup>2</sup> </div>
                    <button id="remove-btn" class="btn btn-primary px-4 ">Remove</button>
                </div>             
            </li>
            
        `;

        triangleAreaDisplay.appendChild(ul)

    }
    else {

        return triangleAreaDisplay.innerText = '';
    }

}



// -------------------------- Rectangle Calculation ------------------------------
function calculationRectangleArea() {

    let rectangleBase = getInputValueId('rectangle-base');
    let rectangleHeight = getInputValueId('rectangle-height');

    let rectangleAreaDisplay = document.getElementById('calculationDisplay');

    if (!isNaN(rectangleBase) || !isNaN(rectangleHeight)) {

        let rectangleArea = (rectangleBase * rectangleHeight).toFixed(2);

        let ul = document.createElement('ul');

        ul.innerHTML = `

            <li id='resultList' class="my-1 py-1 list-none">
                <div class="flex content-between items-center gap-6">
                    <div class="flex-col"> Rectangle </div>
                    <div class="flex-col"> ${rectangleArea} cm<sup>2</sup> </div>
                    <button id="remove-btn" class="btn btn-primary px-4 ">Remove</button>
                </div>             
            </li>
         `

        rectangleAreaDisplay.appendChild(ul)

    }
    else {

        return rectangleAreaDisplay.innerText = '';
    }


}




// -------------------------- Parallelogram Calculation ------------------------------
function calculationParallelogramArea() {

    let parallelogramBase = getInputValueId('parallelogram-base')
    let parallelogramHeight = getInputValueId('parallelogram-height')

    let parallelogramAreaDisplay = document.getElementById('calculationDisplay');

    if (!isNaN(parallelogramBase) || !isNaN(parallelogramHeight)) {

        let parallelogramArea = (parallelogramBase * parallelogramHeight).toFixed(2);

        let ul = document.createElement('ul');

        ul.innerHTML = `

            <li id='resultList' class="my-1 py-1 list-none">
                <div class="flex content-between items-center gap-6">
                    <div class="flex-col"> Parallelogram </div>
                    <div class="flex-col"> ${parallelogramArea} cm<sup>2</sup> </div>
                    <button id="remove-btn" class="btn btn-primary px-4 ">Remove</button>
                </div>             
            </li>
         `

        parallelogramAreaDisplay.appendChild(ul)

    }
    else {

        return parallelogramAreaDisplay.innerText = '';
    }


}






// -------------------------- Rhombus Calculation ------------------------------
function calculationRhombusArea() {

    let rhombusBase = getInputValueId('rhombus-base')
    let rhombusHeight = getInputValueId('rhombus-height')

    let rhombusAreaDisplay = document.getElementById('calculationDisplay');

    if (!isNaN(rhombusBase) || !isNaN(rhombusHeight)) {

        let rhombusArea = (0.5 * rhombusBase * rhombusHeight).toFixed(2);

        let ul = document.createElement('ul');

        ul.innerHTML = `

            <li id='resultList' class="my-1 py-1 list-none">
                <div class="flex content-between items-center gap-6">
                    <div class="flex-col"> Rhombus </div>
                    <div class="flex-col"> ${rhombusArea} cm<sup>2</sup> </div>
                    <button id="remove-btn" class="btn btn-primary px-4 ">Remove</button>
                </div>             
            </li>
         `

        rhombusAreaDisplay.appendChild(ul)

    }
    else {

        return rhombusAreaDisplay.innerText = '';
    }

}


// -------------------------- Pentagon Calculation ------------------------------
function calculationPentagonArea() {

    let pentagonBase = getInputValueId('pentagon-base')
    let pentagonHeight = getInputValueId('pentagon-height')

    let pentagonAreaDisplay = document.getElementById('calculationDisplay');

    if (!isNaN(pentagonBase) || !isNaN(pentagonHeight)) {

        let pentagonArea = (0.5 * pentagonBase * pentagonHeight).toFixed(2);

        let ul = document.createElement('ul');

        ul.innerHTML = `

            <li id='resultList' class="my-1 py-1 list-none">
                <div class="flex content-between items-center gap-6">
                    <div class="flex-col"> Pentagon </div>
                    <div class="flex-col"> ${pentagonArea} cm<sup>2</sup> </div>
                    <button id="remove-btn" class="btn btn-primary px-4 ">Remove</button>
                </div>             
            </li>
         `

         pentagonAreaDisplay.appendChild(ul)

    }
    else {

        return pentagonAreaDisplay.innerText = '';
    }

}


// -------------------------- Ellipse Calculation ------------------------------
function calculationEllispeArea() {

    let ellipseBase = getInputValueId('ellipse-base')
    let ellipseHeight = getInputValueId('ellipse-height')

    let ellipseAreaDisplay = document.getElementById('calculationDisplay');

    if (!isNaN(ellipseBase) || !isNaN(ellipseHeight)) {

        let ellipseArea = (3.1416 * ellipseBase * ellipseHeight).toFixed(2);

        let ul = document.createElement('ul');

        ul.innerHTML = `

            <li id='resultList' class="my-1 py-1 list-none">
                <div class="flex content-between items-center gap-6">
                    <div class="flex-col"> Ellipse </div>
                    <div class="flex-col"> ${ellipseArea} cm<sup>2</sup> </div>
                    <button id="remove-btn" class="btn btn-primary px-4 ">Remove</button>
                </div>             
            </li>
         `

         ellipseAreaDisplay.appendChild(ul)

    }
    else {

        return ellipseAreaDisplay.innerText = '';
    }



}






function getInputValueId(inputFieldId) {

    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);

    inputField.value = '';

    if (isNaN(inputValue)) {

        alert('Input should be a number')
        return;

    }
    else if (inputValue == '') {

        alert('Input a number')
        return;

    }
    else if (inputValue <= 0) {

        alert('Input should be a number more than 0');
        return;

    }
    else {

        return inputValue;

    }

}


// --------------------------- Random color generator ------------------------------
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}


document.getElementById('triangle-card').addEventListener('mouseover', function(){
    document.getElementById('triangle-card').style.backgroundColor = randomColor()
});

document.getElementById('rectangle-card').addEventListener('mouseover', function(){
    document.getElementById('rectangle-card').style.backgroundColor = randomColor()
});

document.getElementById('parallelogram-card').addEventListener('mouseover', function(){
    document.getElementById('parallelogram-card').style.backgroundColor = randomColor()
});

document.getElementById('rhombus-card').addEventListener('mouseover', function(){
    document.getElementById('rhombus-card').style.backgroundColor = randomColor()
});

document.getElementById('pentagon-card').addEventListener('mouseover', function(){
    document.getElementById('pentagon-card').style.backgroundColor = randomColor()
});

document.getElementById('ellipse-card').addEventListener('mouseover', function(){
    document.getElementById('ellipse-card').style.backgroundColor = randomColor()
});
