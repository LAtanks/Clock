
function SetDateTime(){
    //Get time
    let hh = new Date().getHours();
    let mm = new  Date().getMinutes();
    let ss = new Date().getSeconds();
    //Get Date
    let day = new Date().getDate();
    let month = (new Date().getMonth()+ 1);
    let year = new Date().getFullYear();
    let date = day + "/" + month + "/" + year;
    //Elements in HTML
    let clock_ = window.document.querySelector("#_clock");
    let date_ = window.document.querySelector("#_date");


    //If the variables below are less than "10", add "0" in front of the number eg: "01/03/2000 21:01"
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    year = year < 10 ? '0' + year : year;
    hh = hh < 10 ? '0'+ hh : hh;
    mm = mm < 10 ? '0'+ mm : mm;
    ss = ss < 10 ? '0'+ ss : ss;

    clock_.innerHTML = hh + " : " + mm +" : " + ss
    date_.innerHTML = date;
}
setInterval(SetDateTime, 1000)

