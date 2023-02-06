const inputOne = document.querySelector("#input-1");

inputOne.addEventListener("keyup", () => {
  if (
    (inputOne.value.length <= 8 && inputOne.value != "") ||
    inputOne.value === "ubermegahackz"
  ) {
    console.log("yay");
  } else {
    console.log("buh");
  }
});
