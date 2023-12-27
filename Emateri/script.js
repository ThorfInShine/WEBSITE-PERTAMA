console.clear();

const cardsContainer = document.querySelector(".cards1"); // Updated class name
const cardsContainerInner = document.querySelector(".cards__inner1"); // Updated class name
const cards = Array.from(document.querySelectorAll(".card1")); // Updated class name
const overlay = document.querySelector(".overlay1"); // Updated class name

const applyOverlayMask = (e) => {
  const overlayEl = e.currentTarget;
  const x = e.pageX - cardsContainer.offsetLeft;
  const y = e.pageY - cardsContainer.offsetTop;

  overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
  const overlayCta = document.createElement("div");
  overlayCta.classList.add("cta1"); // Updated class name
  overlayCta.textContent = ctaEl.textContent;
  overlayCta.setAttribute("aria-hidden", true);
  overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const cardIndex = cards.indexOf(entry.target);
    let width = entry.borderBoxSize[0].inlineSize;
    let height = entry.borderBoxSize[0].blockSize;

    if (cardIndex >= 0) {
      overlay.children[cardIndex].style.width = `${width}px`;
      overlay.children[cardIndex].style.height = `${height}px`;
    }
  });
});

const initOverlayCard = (cardEl) => {
  const overlayCard = document.createElement("div");
  overlayCard.classList.add("card1"); // Updated class name
  createOverlayCta(overlayCard, cardEl.lastElementChild);
  overlay.append(overlayCard);
  observer.observe(cardEl);
};

cards.forEach(initOverlayCard);
document.body.addEventListener("pointermove", applyOverlayMask);

    // login mulai

    document.getElementById("myButton").addEventListener("click", function() {
      window.location.href = "/LogReg/Login/Emateri/index.html";
    });
    
    // login selesai
        
    document.addEventListener('DOMContentLoaded', function () {
      // Ambil elemen tombol Get Started
      var getStartedButton = document.querySelector('.card__cta1[href="#basic"]');
    
      // Tambahkan event listener untuk menangkap klik pada tombol Get Started
      getStartedButton.addEventListener('click', function (event) {
        event.preventDefault();
        showAlert();
      });
    
      // Ambil elemen tombol Upgrade to Pro
      var upgradeToProButton = document.querySelector('.card__cta1[href="#pro"]');
    
      // Tambahkan event listener untuk menangkap klik pada tombol Upgrade to Pro
      upgradeToProButton.addEventListener('click', function (event) {
        event.preventDefault();
        showAlert();
      });
    
      // Ambil elemen tombol Go Fuhrer
      var goFuhrerButton = document.querySelector('.card__cta1[href="#ultimate"]');
    
      // Tambahkan event listener untuk menangkap klik pada tombol Go Fuhrer
      goFuhrerButton.addEventListener('click', function (event) {
        event.preventDefault();
        showAlert();
      });
    
      // Fungsi untuk menampilkan alert
      function showAlert() {
        alert('Silahkan login terlebih dahulu');
        // Anda dapat menyesuaikan pesan alert atau menggantinya dengan tindakan lain sesuai kebutuhan
      }
    });
    