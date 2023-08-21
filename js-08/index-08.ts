type properties = {
    title: string;
    description: string;
}

const titleInput = document.querySelector<HTMLInputElement>("#title");
const descriptionInput = document.querySelector<HTMLInputElement>("#message");

titleInput?.addEventListener("click", () => {
    console.log(titleInput?.value)
});

descriptionInput?.addEventListener("click", () => {
    console.log(descriptionInput?.value)
});