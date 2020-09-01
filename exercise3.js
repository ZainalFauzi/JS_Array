let number = [3, 5, 7, 9, 11];
let timesFive = number.map(num => {
    return num * 5;
});

console.log("data awal : " + number);
console.log("dikali lima : " + timesFive);

document.getElementById("number").innerHTML = number;
document.getElementById("timesFive").innerHTML = timesFive;