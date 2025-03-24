'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('customSlider');
    const sliderValue = document.getElementById('sliderValue');

    slider.addEventListener('input', () => {
        sliderValue.textContent = `${slider.value} %`;
    });
});
