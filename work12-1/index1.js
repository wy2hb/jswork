let year = new Date().getFullYear()
document.getElementById("cal").innerHTML = calendar(year)
function setCalendar(year){
    document.getElementById("preyear") = year - 1
    document.getElementById("curyear") = year
    document.getElementById("nextyear") = year + 1
    document.getElementById("cal") = calendar(year)
    }