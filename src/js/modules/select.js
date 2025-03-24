'use strict'

document.querySelectorAll('.select__container').forEach(selectContainer => {
    const selectBox = selectContainer.querySelector('.select__box');
    const optionsContainer = selectContainer.querySelector('.select__options');
    const optionsWrapper = selectContainer.querySelector('.select__options-wrapper');
    const options = selectContainer.querySelectorAll('.select__option');
    const hiddenInput = selectContainer.querySelector('input[type="hidden"]');
    const arrow = selectContainer.querySelector('.select__arrow');
    const label = selectContainer.querySelector('.select__label');

    selectBox.addEventListener('click', () => {
        const isOpen = optionsContainer.style.display === 'flex';
        optionsContainer.style.display = isOpen ? 'none' : 'flex';
        arrow.classList.toggle('select__arrow--open', !isOpen);
        selectBox.classList.toggle('select__box--open', !isOpen);
        optionsWrapper.classList.toggle('select__options-wrapper--open', !isOpen);
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(opt => opt.classList.remove('select__option--selected'));
            option.classList.add('select__option--selected');
            label.innerText = option.innerText;
            hiddenInput.value = option.innerText;
            optionsContainer.style.display = 'none';
            arrow.classList.remove('select__arrow--open');
            selectBox.classList.remove('select__box--open');
            optionsWrapper.classList.remove('select__options-wrapper--open');
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.select__container')) {
            optionsContainer.style.display = 'none';
            arrow.classList.remove('select__arrow--open');
            selectBox.classList.remove('select__box--open');
            optionsWrapper.classList.remove('select__options-wrapper--open');
        }
    });
});
