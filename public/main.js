// sample data from API
const testimonials = [
  {
    opinion:
      '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    author: {
      name: 'Tanya Sinclair',
      role: 'UX Engineer',
      image: 'image-tanya.jpg'
    }
  },
  {
    opinion:
      '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    author: {
      name: 'John Tarkpor',
      role: 'Junior Front-end Developer',
      image: 'image-john.jpg'
    }
  }
];

let i = 0;
const imageProfile = document.querySelector('#imageProfile');

// isi data (arrow function)
process = () => {
  document.querySelector('#opinion').innerHTML = testimonials[i].opinion;
  document.querySelector('#authorName').innerHTML = testimonials[i].author.name;
  document.querySelector('#authorRole').innerHTML = testimonials[i].author.role;
  imageProfile.src = '/images/' + testimonials[i].author.image;
};

toNextSlide = () => {
  if (i < testimonials.length - 1) {
    i++;
    process();
  }
};

toPrevSlide = () => {
  if (i > 0) {
    i--;
    process();
  }
};
// Initialization
process();

// add event to nextBtn
const nextBtn = document.querySelector('#next');
nextBtn.addEventListener('click', () => {
  toNextSlide();
});

// add event to prevBtn
const prevBtn = document.querySelector('#prev');
prevBtn.addEventListener('click', () => {
  toPrevSlide();
});

//add event to next prev using keyboard
document.addEventListener('keydown', function (event) {
  event.preventDefault();
  const key = event.key;
  switch (key) {
    case 'ArrowRight':
      toNextSlide();
      break;
    case 'ArrowLeft':
      toPrevSlide();
      break;
  }
});
