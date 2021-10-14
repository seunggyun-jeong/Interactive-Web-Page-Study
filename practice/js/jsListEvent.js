const list = document.querySelectorAll(".list li");

for (let items of list) {
    items.addEventListener("click", e => {
        e.preventDefault();
        console.log(e.currentTarget.innerText);
    });
}