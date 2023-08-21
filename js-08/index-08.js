"use strict";
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#message");
titleInput === null || titleInput === void 0 ? void 0 : titleInput.addEventListener("click", () => {
    console.log(titleInput === null || titleInput === void 0 ? void 0 : titleInput.value);
});
descriptionInput === null || descriptionInput === void 0 ? void 0 : descriptionInput.addEventListener("click", () => {
    console.log(descriptionInput === null || descriptionInput === void 0 ? void 0 : descriptionInput.value);
});
