import showAndHide from "./modules/showAndHide";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";
    showAndHide(".header__btn-menu", ".block-user", "showBlock");
    showAndHide(".header__user", ".block-user", "showBlock");
    showAndHide(
        ".projects__form-button",
        ".categories-block",
        "showBlock",
        ".projects__filters"
    );
});
