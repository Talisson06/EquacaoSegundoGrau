const openModalButton = document.querySelector("#open_modal");
const closeModalButton = document.querySelector("#close_modal");
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"))
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal())
})