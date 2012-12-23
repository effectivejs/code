var form = {
    month: { value: "10" },
    day: { value: "11" },
    year: { value: "1975" }
};

var today = new Date();

if (form.month.value == (today.getMonth() + 1) &&
    form.day.value == today.getDate()) {
    // happy birthday!
    console.log("happy birthday!");
    // ...
}
