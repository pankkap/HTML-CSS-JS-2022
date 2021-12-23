console.log("Drag Drop code");

imgBox = document.querySelector(".imageBox");
console.log(imgBox);
whiteBoxes = document.getElementsByClassName("whiteBox");
console.log(whiteBoxes);

imgBox.addEventListener("dragstart", () => {
  console.log("image drag started");
});
imgBox.addEventListener("dragend", () => {
  console.log("image drag end");
});

for (whiteBox of whiteBoxes)
{
    whiteBox.addEventListener('dragover',()=>{
        
    })
    whiteBox.addEventListener('dragenter',()=>{

    })
    whiteBox.addEventListener('dragleave',()=>{

    })
    whiteBox.addEventListener('drop',()=>{

    })
}