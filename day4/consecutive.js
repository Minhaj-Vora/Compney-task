function consecutiveNumbers(event) {
    if (event) event.preventDefault();

    let input = document.getElementById('input').value;
    let p = document.getElementById('p');
    
    // Convert the input string to an array of numbers
    let numbers = input.split('').map(Number);
    let str = [];
    let currentGroup = [];

    // Iterate over the numbers array
    for (let i = 0; i < numbers.length; i++) {
        // Check if the current number is consecutive
        if (i === 0 || numbers[i] - numbers[i - 1] === 1) {
            currentGroup.push(numbers[i]);
        } else {
            // End of a consecutive group
            if (currentGroup.length > 1) {
                str.push(currentGroup.join(''));
            }
            currentGroup = [numbers[i]]; // Start a new group
            console.log(currentGroup)
        }
    }

    // Handle the last group
    if (currentGroup.length > 1) {
        str.push(currentGroup.join(''));
    }
    console.log(str)
    // Display the result
    p.innerHTML = str.join(' '); // Separate groups with ' | ' for better readability
}
