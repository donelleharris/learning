var daysOfTheWeek = [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday']
// var today = daysOfTheWeek[3];
// console.log(today);
for (let i = 0; i < daysOfTheWeek.length; i++){
    console.log((i+1) + ": " + daysOfTheWeek[i]);
}
daysOfTheWeek.forEach(function (item, index, array))
    console.log((index + 1) + ": " + item);

