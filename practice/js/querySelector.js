const frame = document.querySelector("#wrap");
console.log(frame);

// const item = document.querySelector("#wrap article");
// console.log(item);

const items = document.querySelectorAll("#wrap article");
console.log(items);

// for (let val of items) {
//     console.log(val);
// }

for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}