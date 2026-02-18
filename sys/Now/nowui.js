/* ======================= NowUI Sindows JS ======================= */

/* Перетаскивание окон */
function makeDraggable(win) {
    const header = win.querySelector(".now-window-header");
    let offsetX = 0, offsetY = 0, isDown = false;

    header.addEventListener("mousedown", (e) => {
        isDown = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
    });

    document.addEventListener("mouseup", () => isDown = false);

    document.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        win.style.left = (e.clientX - offsetX) + "px";
        win.style.top = (e.clientY - offsetY) + "px";
    });
}

/* Открытие окна */
function openWindow(id) {
    const win = document.getElementById(id);
    if (!win) return;
    win.style.display = "block";
    makeDraggable(win);
}

/* Закрытие окна */
function closeWindow(id) {
    const win = document.getElementById(id);
    if (!win) return;
    win.style.display = "none";
}

/* Показываем уведомление */
function showToast(message, duration=3000) {
    const toast = document.createElement("div");
    toast.className = "now-toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = 0;
        toast.style.transform = "translateY(20px)";
        setTimeout(() => document.body.removeChild(toast), 500);
    }, duration);
}

/* Инициализация окон после загрузки */
window.addEventListener("DOMContentLoaded", () => {
    const windows = document.querySelectorAll(".now-window");
    windows.forEach(win => makeDraggable(win));
});
v1.0
