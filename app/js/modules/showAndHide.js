const showAndHide = (
    selectorBtn = null,
    selectorShow = null,
    classActiveBLock = null,
    selectorFilterItem = null
) => {
    let elementBtn = document.querySelector(selectorBtn),
        elShow = document.querySelector(selectorShow),
        elimentFilters = document.querySelector(selectorFilterItem);

    elementBtn.addEventListener("click", (e) => {
        if (e.target) {
            e.preventDefault();
        }
        if (elimentFilters && window.screen.availWidth < 682) {
            elimentFilters.classList.toggle(classActiveBLock);
        }
        if (elementBtn.classList.contains("header__btn-menu")) {
            elementBtn.classList.toggle("activeMenu");
        }

        elShow.classList.toggle(classActiveBLock);
    });
};

export default showAndHide;