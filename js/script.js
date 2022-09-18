const body = document.querySelector("body");

const button = document.querySelector("#bodyColor");

// console.log(button);

button.addEventListener("mousein", () => {
    body.classList.toggle("colored");
});

// Arrays

const arr = [2, 1, 3, new Date("21 Dec 1997 14:12:00 UTC")];
const arr2 = ["4", "5", ["6", [1, 2, 3, 4, 5]]];

const arr3 = [...arr, ...arr2];
// console.log(arr.sort((a, b) => b - a));
// console.log(arr4.sort((a, b) => b - a));

// TODO: .sort(); .shift(); pop, push, unshift, concat, ..., join, splice, slice, toString, toLocaleString, flat,

// TODO: .map(); .filter(); .find() forEach;
const arr4 = [2, 3, 4, 5, 6, 7, 8, 9, 10, "hello"];

const mappedArray = arr4.map((item, key) => {
    // console.log(item, key);
});

const filteredArray = arr4.filter((item) => typeof item === "number");

const findItem = arr4.find((item) => item === 10);

const findItemNext = arr4.findIndex((item) => item === 10);

let pushedArray = [];

filteredArray.forEach((element) => {
    console.log(element);
    pushedArray.push(element);
});

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// Dates

let today = new Date();
const thisMonth = today * 30;

let timezone = new Date("2020-05-12T23:50:21.817Z");

console.log(timezone.getTime());

const dogYears = (year) => {
    return {
        color: "brown",
        doyYear: `Your doggie is ${year * 7} years old in dog years!`,
    };
};

console.log(dogYears(1).doyYear);