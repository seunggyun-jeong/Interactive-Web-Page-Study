const plusBtn = document.querySelector(".btnPlus");
const minusBtn = document.querySelector(".btnMinus");

let count = 0;

plusBtn.addEventListener("click", e => {
    e.preventDefault();
    count++;
    console.log(count);
});

minusBtn.addEventListener("click", e => {
    e.preventDefault();
    count--;
    console.log(count);
});

let myname = "홍길동";

console.log("내 이름은 myname 입니다.");

console.log(`내 이름은 ${myname}입니다.`);