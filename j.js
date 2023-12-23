const datetimeObj= new Date("2021-02-31 13:47:57")
const formattedDate = datetimeObj.toISOString().split('T')[0];
const formattedTime = datetimeObj.toISOString().split('T')[1];
const o2 = new Date("2021-02-02 10:47:57")
const t = o2.toISOString().split('T')[1]
console.log(datetimeObj);
console.log(formattedTime);
console.log(t);
if(t>formattedTime) console.log("hi");
const datetimeObj2 = new Date(datetimeObj);
const normalTime = datetimeObj2.toLocaleTimeString([],{hour12:false});
var timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
console.log(timeRegex.test(normalTime));