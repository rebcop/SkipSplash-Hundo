// get the start and end numbers from the page
function getValues() {

    // get the start number
    let startNumber = document.getElementById('startValue').value; // "0"

    // get the end number
    let endNumber = document.getElementById('endValue').value; // "100"

    // get the number to filter out multiples of
    let filterNumber = document.getElementById('filterNumber').value; // "1"

    // alert('start number is: ' + startNumber);
    // alert('end number is: ' + endNumber);

    // turn the values into actual numbers
    startNumber = parseInt(startNumber); // 0
    endNumber = parseInt(endNumber); // 100

    if (Number.isInteger(startNumber) && Number.isInteger(endNumber) && startNumber < endNumber) {
        // generate the range of numbers

        let generatedNumbers = generateValues(startNumber, endNumber, filterNumber);

        displayValues(generatedNumbers);

    } else {
        // Uh oh! Something is wrong
        Swal.fire ({
            icon: 'error',
            backdrop: false,
            title: 'Oops!',
            text: 'Please enter valid integers and ensure your start number is less than your end number.'
        });
    }


}

// generate a list of all numbers between the start and end
function generateValues(start, end, filter) {

    // create a variable that can hold a bunch of numbers
    let numbers = [];

    // put the start number into that variable
    // add one to that number, then add THAT to the variable
    // keep adding one and putting it into the variable UNTIL we get to the end number
    for (let n = start; n <= end; n = n + 1) {

        // Check if number is a multiple of filterNumber
        if (n % filter == 0) {
            // If it is a multiple add number to array
            numbers.push(n);
        }

        
    }
    
    // somehow tell displayValues to show those numbers???
    return numbers;
}


// display each of those numbers on the page
function displayValues(numbers) {

    let html = '';

    // make a loop to get each number from the array
    for (let index = 0; index < numbers.length; index += 1) {
        
        // curentNumber = 5
        let currentNumber = numbers[index];

        let className = '';
        if (currentNumber % 2 == 0) {
            // currentNumber is even!
            className = 'even';
        } else {
            // currentNumber is odd!
            className = 'odd';
        }

        // html= '<tr><td>5</td></tr>'
        html += `<tr><td class="${className}">${currentNumber}</td></tr>`;
    }

    let tbody = document.getElementById('results');
    tbody.innerHTML = html;

}