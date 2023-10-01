// Activity 1 - Map
const steps = ['one', 'two', 'three'];
const stepsHtml = steps.map(function (step) {
    return `<li>${step}</li>`;
});
document.getElementById('myList').innerHtml = stepsHtml.join();

// Activity 2 - Map
const grades = ["A", "B", "C",];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

// Activity 3 - Reduce

// example 1
// const pointsTotal = gpaPoints.reduce(function (total, item) {
//     return total + item;
// });
// const gpa = pointsTotal / gpaPoints.length;

// example 2 a simpler version
// const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// const gpa = pointsTotal / gpaPoints.length;

// example 3 an even simpler version
const gpa = gpaPoints.reduce ((total, item) => total + item) / gpaPoints.length;

// Activity 4 - Filter

const words = ['watermeon', 'peach', 'apple', 'tomato', 'grape'];
// const shortWords = words.filter(function (word) {
//     return word.length < 6;
// });

// same but with the arrow function
const shortWords = words.filter((word) => word.length < 6);

// Activity 5 - indexOf

const myArray = [12, 34, 21, 54];
const luckNumber = [21];
let luckyIndex = myArray.indexOf(luckNumber);