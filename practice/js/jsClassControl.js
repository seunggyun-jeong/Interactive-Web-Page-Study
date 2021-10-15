const wrap = document.querySelector("#wrap");
const box = wrap.querySelector("article");

wrap.addEventListener("click", () => {
    let isOn = wrap.classList.contains("on");

    if (isOn) {
        wrap.classList.remove("on");
    }
    else {
        wrap.classList.add("on");
    }

});

wrap.addEventListener("click", () => {
    wrap.classList.toggle("on");
})