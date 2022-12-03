let photosArr = Array.from(document.querySelectorAll(".slider-container img"));

let photoLength = photosArr.length;

let currentSlide = 1;

let spanOfText = document.getElementById("slide-number");

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

let indicators = document.getElementById("indicators");

let indicatorsBullets = document.createElement("ul");
indicatorsBullets.setAttribute("id", "ul-bullets");

for (let i = 1; i <= photoLength; i++) {
  let liElement = document.createElement("li");

  liElement.setAttribute("data-index", i);

  liElement.textContent = [i];

  indicatorsBullets.appendChild(liElement);
}

indicators.appendChild(indicatorsBullets);

let liBullets = Array.from(indicatorsBullets.children);

for (let i = 0; i < liBullets.length; i++) {
  liBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  };
}

checker();

function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  }

  currentSlide++;

  checker();
}

function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  }

  currentSlide--;

  checker();
}

function checker() {
  spanOfText.textContent = `Slide #${currentSlide} of ${photoLength}`;

  removeActiveClass();

  photosArr[currentSlide - 1].classList.add("active");

  indicatorsBullets.children[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }

  if (currentSlide == photoLength) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

function removeActiveClass() {
  photosArr.forEach((img) => {
    img.classList.remove("active");
  });

  liBullets.forEach((li) => {
    li.classList.remove("active");
  });
}
