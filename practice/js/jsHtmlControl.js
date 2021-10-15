const link = document.querySelector("a");
const new_href = "https://google.com";

link.setAttribute("href", new_href);

console.log(link.getAttribute("href"));

const ver = navigator.userAgent;
console.log(ver);

const isMac = /Macintosh/i.test(ver);
console.log(isMac);

if (isMac) {
    alert("맥으로 접속하셨네용");
}