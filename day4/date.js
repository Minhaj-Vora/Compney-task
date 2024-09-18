function getRemainingTime() {
  
    // Get user input
    var selectedTime = document.getElementById('datetime').value;
    
    // Get reference to output elements
    var p = document.getElementById('p');
    var yearsElement = document.getElementById('year');
    var monthsElement = document.getElementById('month');
    var daysElement = document.getElementById('day');
    var hoursElement = document.getElementById('hour');
    var minutesElement = document.getElementById('minute');
    
    // Get current date and time
    let now = new Date();
    let end = new Date(selectedTime);
    
    // Calculate difference in milliseconds
    let difference = end - now;

    // Check if the target date is in the past
    if (difference < 0) {
        p.innerHTML = 'The selected date and time has already passed.';
        yearsElement.innerHTML = '0';
        monthsElement.innerHTML = '0';
        daysElement.innerHTML = '0';
        hoursElement.innerHTML = '0';
        minutesElement.innerHTML = '0';
        return;
    }

    // Calculate time components
    const MS_IN_MINUTE = 60 * 1000;
    const MS_IN_HOUR = 60 * MS_IN_MINUTE;
    const MS_IN_DAY = 24 * MS_IN_HOUR;
    const MS_IN_MONTH = 30 * MS_IN_DAY; // Average month duration
    const MS_IN_YEAR = 365 * MS_IN_DAY; // Average year duration

    let years = Math.floor(difference / MS_IN_YEAR);
    difference -= years * MS_IN_YEAR;

    let months = Math.floor(difference / MS_IN_MONTH);
    difference -= months * MS_IN_MONTH;

    let days = Math.floor(difference / MS_IN_DAY);
    difference -= days * MS_IN_DAY;

    let hours = Math.floor(difference / MS_IN_HOUR);
    difference -= hours * MS_IN_HOUR;

    let minutes = Math.floor(difference / MS_IN_MINUTE);

    // Display results
    p.innerHTML = 'Remaining Time is:';
    yearsElement.innerHTML = years;
    monthsElement.innerHTML = months;
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
}