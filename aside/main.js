let magneticElements = document.querySelectorAll(".magnetic");

let aside = document.querySelector("aside")
let asideBtn = document.querySelector(".aside-btn")

let linesContainer = document.querySelector(".lines-container")


magneticElements.forEach(element => {
  
  element.addEventListener('mousemove', e => {
    let x = e.offsetX - element.clientWidth / 7;
    let y = e.offsetY - element.clientHeight / 7;
    element.style.transform = `translate(${x}px, ${y}px)`;
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = 'translate(0, 0)';
  });
});





asideBtn.addEventListener("click", _ => {
  aside.classList.toggle("show-aside")
  linesContainer.classList.toggle("transform")
})
