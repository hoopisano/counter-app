let incr = document.querySelector("#incr")
let count = document.querySelector("#count")
let decr = document.querySelector("#decr")

incr.addEventListener("click", () => {
    count.innerHTML = Number(count.innerHTML) + 1;
});

decr.addEventListener("click", () => {
    count.innerHTML = Number(count.innerHTML) - 1;
});
