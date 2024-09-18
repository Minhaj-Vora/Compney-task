function getRemainingTime(){
    var date = document.getElementById('date-insert');
    var selectedTime = document.getElementById('date').value;
    var p =document.getElementById('p');
    var years = document.getElementById('year');
    var months = document.getElementById('month');
    var days = document.getElementById('day');
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minute');


    let start = new Date();
    let end = new Date(selectedTime)
    endYear = end.getFullYear();
    endDate = end.getDate();
    endMonth = end.getMonth(); 
    endHrs = end.getHours();
    endMin = end.getMinutes();

    startYear = start.getFullYear();
    startDate = start.getDate();
    startMonth = start.getMonth(); 
    startHrs = start.getHours();
    startMin = start.getMinutes();
    
    
    p.innerHTML = 'Reamaining Time is:'
    years.innerHTML = endYear - startYear
    months.innerHTML = endMonth - startMonth
    days.innerHTML = endDate - startDate
    hours.innerHTML = endHrs - startHrs
    minutes.innerHTML = endMin - startMin



}
setInterval(getRemainingTime,1000);
// getRemainingTime()