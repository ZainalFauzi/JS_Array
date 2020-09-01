let subject1 = [
    "Math",
    "English",
    "Programming"
];

let subject2 = [
    "Geography",
    "Spanish",
    "Programming"
];
if (subject1[0] === subject2[0] || subject2[1] || subject2[2]) {
    document.write("True")
} else if (subject1[1] === subject2[0] || subject2[1] || subject2[2]) {
    document.write("True")
} else if (subject1[2] === subject2[0] || subject2[1] || subject2[2]) {
    document.write("True")
} else {
    document.write("False")
}









let array1 = [
    "Math",
    "English",
    "Programming"
];

let array2 = [
    "Geography",
    "Spanish",
    "Programming"
];
array1.length == array2.length && array1.sort().every(function(value, index) { return value == array2.sort()[index]});