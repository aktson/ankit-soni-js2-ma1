export function displayMessage(container, classType, message = "Unknown error") {
    const element = document.querySelector(container);
    element.innerHTML = `<div class=${classType}>${message}</div>`;
}