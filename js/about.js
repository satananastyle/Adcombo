(function () {
    var aboutBtns = document.querySelectorAll('.about__item');

    if (aboutBtns) {
        Array.prototype.forEach.call(aboutBtns, function (block) {
            var currentDescription = block.nextElementSibling;

            block.addEventListener('click', function () {
                var activeDescription = document.querySelector('.about__description.active');
                var activeBtn = document.querySelector('.about__item--open');

                if (currentDescription.style.height) {
                    currentDescription.style.height = null;
                    currentDescription.classList.remove('active');
                    activeBtn.classList.remove('about__item--open');
                    block.blur();
                } else {
                    if (activeDescription) {
                        activeDescription.style.height = null;
                        activeDescription.classList.remove('active');
                        activeBtn.classList.remove('about__item--open');
                    }
                    currentDescription.style.height = currentDescription.scrollHeight + "px";
                    currentDescription.classList.add('active');
                    block.classList.add('about__item--open');
                    block.blur();
                }
            });
        });
    }
})();