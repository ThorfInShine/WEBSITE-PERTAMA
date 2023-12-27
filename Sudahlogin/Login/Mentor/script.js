/*
inspiration
https://dribbble.com/shots/4684682-Aquatic-Animals
*/

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 3
    }
  }
});

// Dropdown mulai

// Ambil elemen tombol dan dropdown
var button = document.getElementById("myButton");
var dropdown = document.getElementById("myDropdown");

// Tambahkan event listener untuk mengubah display dropdown
button.addEventListener("click", function() {
  dropdown.classList.toggle("show");
});

// Tutup dropdown jika area di luar dropdown diklik
window.addEventListener("click", function(event) {
  if (!event.target.matches('#myButton')) {
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
});


// Dropdown selesai