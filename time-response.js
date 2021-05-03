var today = new Date()

function show()
{
    week=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("day").innerHTML = week[today.getDay()];
    document.getElementById("date").innerHTML = today.gettoday();
    document.getElementById("hr").innerHTML = today.getHours();
    document.getElementById("min").innerHTML = today.getMinutes();
    console.log("Hey Boi");
}
