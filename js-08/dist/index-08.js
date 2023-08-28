"use strict";
const Title = document.querySelector("#Title");
const description = document.querySelector("#Description");
const buttonAction = document.querySelector("#button");
buttonAction === null || buttonAction === void 0 ? void 0 : buttonAction.addEventListener("click", () => {
    console.log(Title === null || Title === void 0 ? void 0 : Title.value);
    console.log(description === null || description === void 0 ? void 0 : description.value);
});
//# sourceMappingURL=index-08.js.map