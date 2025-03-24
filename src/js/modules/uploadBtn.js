'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.querySelector('.order-form__file-input');
    const filesContainer = document.querySelector('.order-form__files');

    fileInput.addEventListener('change', (event) => {
        const files = Array.from(event.target.files);

        files.forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.classList.add('order-form__file-item');

            fileItem.innerHTML = `
                <span class="order-form__file-name">${file.name}</span>
                <button class="order-form__file-remove">&times;</button>
            `;

            filesContainer.appendChild(fileItem);

            const removeButton = fileItem.querySelector('.order-form__file-remove');
            removeButton.addEventListener('click', () => {
                fileItem.remove();
            });
        });

        fileInput.value = '';
    });
});
