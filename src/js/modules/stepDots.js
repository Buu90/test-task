'use strict'

document.addEventListener("DOMContentLoaded", () => {
    const stepsItems = document.querySelectorAll(".steps__item");

    stepsItems.forEach((item, index) => {
        const icon = item.querySelector(".steps__icon");
        if (!icon || index === stepsItems.length - 1) return;

        const nextItem = stepsItems[index + 1];
        const distance = nextItem.getBoundingClientRect().left - icon.getBoundingClientRect().right;
        
        const dotsCount = Math.floor(distance / 12);
        icon.style.setProperty("--dots-content", `"${"• ".repeat(dotsCount).trim()}"`);
    });
});