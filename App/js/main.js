const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal__container");
const clickBtn = document.querySelector('.click')


clickBtn.addEventListener('click', function () {
    overlay.classList.toggle('active')
    modal.classList.toggle("active");
    clickBtn.classList.toggle('active')
})

overlay.addEventListener("click", function () {
    overlay.classList.toggle("active");
    modal.classList.toggle("active");
    clickBtn.classList.toggle("active");
});

btn.addEventListener("click", function () {
    overlay.classList.toggle("active");
    modal.classList.toggle("active");
    clickBtn.classList.toggle("active");
});