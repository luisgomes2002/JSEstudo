let myLabel = document.getElementById("clock")

update()
setInterval(update, 1000)

function update(){

    let date = new Date()
    myLabel.innerHTML = formatHours(date)

    function formatHours(){
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let amOrPm = hours >= 12 ? "pm" : "am"

        hours = (hours % 12) || 12

        hours = zero(hours)
        minutes = zero(minutes)
        seconds = zero(seconds)

        return `${hours}:${minutes}:${seconds} ${amOrPm}`
    }
    function zero(time){
        time = time.toString()
        return time.length < 2 ? "0" + time : time
    }

}