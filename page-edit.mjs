export function changePage(page) {
    window.location.href = page;
}

export function changeElementColor(elementId, color) {
    let element = document.getElementById(elementId);
    element.style.color = color
}