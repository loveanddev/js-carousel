const carouselContentEle = document.getElementById("carousel-content");
const carouselWidth = document.querySelector(".carousel").clientWidth;
const length = document.querySelectorAll("#carousel-content img").length;

carouselContentEle.style.minWidth = carouselWidth * length + "px";

document.getElementById("next").addEventListener("click", handleNext);
document.getElementById("pre").addEventListener("click", handlePre);

let index = 0;
createIndexes();

function handleNext() {
  index = index === length - 1 ? 0 : index + 1;
  transform(-carouselWidth * index);
  createIndexes();
}

function handlePre() {
  index = index === 0 ? length - 1 : index - 1;
  transform(-carouselWidth * index);
  createIndexes();
}

function transform(width) {
  carouselContentEle.style.transform = `translateX(${width}px)`;
}

function createIndexes() {
  const node = document.getElementById("indexes");
  node.textContent = "";
  for (let i = 0; i < length; i++) {
    node.appendChild(document.createElement("span"));
    const span = document.querySelectorAll("#indexes span")[i];
    const classes = span.classList;
    classes.add(
      "h-2",
      "w-2",
      "block",
      "bg-gray-400",
      "rounded-[50%]",
      `${index === i && "bg-blue-500"}`
    );
  }
}
