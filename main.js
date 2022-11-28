const firstSection = document.querySelectorAll(".slide");
const secondSection = document.querySelectorAll(".slide-img");
const btnUp = document.querySelector(".up-button");
const btnDown = document.querySelector(".down-button");

// Style the sections

firstSection.forEach(function(first, index){
  first.style.top = `${index * 100}%`;
});

secondSection.forEach(function(first, index){
  first.style.top = `-${index * 100}%`;
});

// function Event listener

// --Up Button

let count = 0;

btnUp.addEventListener('click', ()=> {
  count--;
  sectionAnimation()
});

// // --Down Button

btnDown.addEventListener('click', ()=> {
  count++;
  sectionAnimation()
})

// Function Translate



function sectionAnimation() {
  if(count === firstSection.length){
    count = 0;
  }
  if(count < 0){
    count = firstSection.length - 1;
  }

  firstSection.forEach(function(first){
    first.style.transform = `translateY(-${count * 100}%)`;
  });
  secondSection.forEach(function(second){
    second.style.transform = `translateY(${count * 100}%)`;
  });
};