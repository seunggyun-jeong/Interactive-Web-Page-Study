const list = document.querySelector(".list");
const items = list.children;

console.log(items);

for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

const item2 = document.querySelector(".item2");
console.log(item2.parentElement);

const li = document.querySelector("#baby");
console.log(li.closest("main"));

const item3 = document.querySelector(".item3");
console.log(item3.previousElementSibling);
console.log(item3.nextElementSibling);