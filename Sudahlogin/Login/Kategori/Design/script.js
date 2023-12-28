
  
  function showAlert() {
    alert("Silahkan login terlebih dahulu");
  }

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

