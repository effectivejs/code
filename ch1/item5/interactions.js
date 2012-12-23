"1.0e0" == { valueOf: function() { return true; } }; // true

var date = new Date("1999/12/31");
date == "1999/12/31"; // false

date.toString(); // "Fri Dec 31 1999 00:00:00 GMT-0800 (PST)"

function toYMD(date) {
    var y = date.getYear() + 1900, // year is 1900-indexed
        m = date.getMonth() + 1,   // month is 0-indexed
        d = date.getDate();
    return y
         + "/" + (m < 10 ? "0" + m : m)
         + "/" + (d < 10 ? "0" + d : d);
}
toYMD(date) === "1999/12/31"; // true
