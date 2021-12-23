// 1. find the selector of dragArea
// 2. Add eventListener on dragover, dragleave and drop
// 3. add active class on dragover and remove class on dragleave
// 4. e.preventDefault on dragover and drop listener
// 5. create a file and dataTransfer on drop listener
// 6. Validate the fileType with includes() method
// 7. create FileReader object in if condition
// 8. fileReader.onload =()=>{} find fileURL as fileReader.result

dragArea = document.querySelector(".dragArea");
headerTxt = document.querySelector("header");
input = dragArea.querySelector("input");
button = dragArea.querySelector("button");

button.onclick = () => {
  console.log("button clicked");
  input.click();
};

input.addEventListener("change", function () {
  console.log("Input button clicked");
  file = this.files[0];
  dragArea.classList.add("active");
  uploadFile();
});

let file;
dragArea.addEventListener("dragover", (e) => {
  console.log("Image dragOver");
  dragArea.classList.add("active");
  headerTxt.textContent = "Relese to upload File";
  e.preventDefault();
});
dragArea.addEventListener("dragleave", () => {
  console.log("Image dragleave");
  dragArea.classList.remove("active");
  headerTxt.textContent = "Drag and Drop to upload File";
});
dragArea.addEventListener("drop", (e) => {
  console.log("Image dropped");
  e.preventDefault();
  file = e.dataTransfer.files[0];
  uploadFile();
});

function uploadFile() {
  let fileType = file.type;
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let fileURL = fileReader.result;
      let imgTag = `<img src="${fileURL}" alt="">`;
      dragArea.innerHTML = imgTag;
    };
    fileReader.readAsDataURL(file);
  } else {
    console.log("This is not Image file");
  }
}
