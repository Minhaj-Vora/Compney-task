function RemainingTimeForLunch() {
    const date = new Date();
    let remainingtime = document.getElementById('remainingtime-insert');

    function fun1() {
        let hour = 13 - date.getHours();
        let minutes = 60 - date.getMinutes();
        let seconds = 60 - date.getSeconds();

        if (hour < 0) {
            remainingtime.innerHTML = "your lunch time has passed.";
        }
        else {
            remainingtime.innerHTML = `${hour}:${minutes}:${seconds}`;
        }
        // console.log(hour, minutes, seconds)

    }
    fun1();

}
setInterval(RemainingTimeForLunch, 1000)

