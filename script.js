const incr = document.querySelector("#incr")
let count = document.querySelector("#count")
const decr = document.querySelector("#decr")

incr.addEventListener("click", () => {
    count.innerHTML = Number(count.innerHTML) + 1;
});

decr.addEventListener("click", () => {
    count.innerHTML = Number(count.innerHTML) - 1;
});
