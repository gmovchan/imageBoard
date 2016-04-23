var textareaButton = document.querySelector(".callTextareaButton");
var formFromNewPost = document.getElementById("formFromNewPost");
var openCloseButton = document.getElementById("openCloseButton");
var levelingDiv =  document.getElementById("levelingDiv");

formFromNewPost.hidden = true;

levelingDiv.style.top = textareaButton.offsetHeight + "px";

document.onclick = function (e) {
  if(e.target == openCloseButton) {
    openFormFromNewPost();
  }
};

function openFormFromNewPost() {
  if (formFromNewPost.hidden) {
    formFromNewPost.hidden = "";
    openCloseButton.textContent = "Скрыть";
    openCloseButton.style.borderTop = "1px solid green";
    levelingDiv.style.top = textareaButton.offsetHeight + "px";
  } else {
    formFromNewPost.hidden = true;
    openCloseButton.textContent = "Написать";
    openCloseButton.style.borderTop = "";
    levelingDiv.style.top = textareaButton.offsetHeight + "px";
  }
}
