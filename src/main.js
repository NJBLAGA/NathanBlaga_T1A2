window.onload = () => {
    const popup_btns = document.querySelectorAll('.popup-button');
    // constant of all popup buttons (target all of them)
    popup_btns.forEach(button => {
        // for each loop, pass through all popups
        button.addEventListener('click', e => {
            const target = e.target.dataset.target;
            // click event: when we click on button, we function give us the buttons dataset.
            const popup_el = document.querySelector(target);
            // #property of data si to be found inside the dom.
            if (popup_el != null) {
                popup_el.classList.toggle('is-active');
                // If it exists and we click on the button, if 'is-active is present, we will toggle it
            }
        });

    });
}