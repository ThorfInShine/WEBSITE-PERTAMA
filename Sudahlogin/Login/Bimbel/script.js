var swiper = new Swiper('.product-slider', {
        spaceBetween: 30,
        effect: 'fade',
        // initialSlide: 2,
        loop: false,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        // mousewheel: {
        //     // invert: false
        // },
        on: {
            init: function(){
                var index = this.activeIndex;

                var target = $('.product-slider__item').eq(index).data('target');

                console.log(target);

                $('.product-img__item').removeClass('active');
                $('.product-img__item#'+ target).addClass('active');
                $('.product-img2__item').removeClass('active');
                $('.product-img2__item#'+ target).addClass('active');
                $('.product-img3__item').removeClass('active');
                $('.product-img3__item#'+ target).addClass('active');
            }
        }
    });

    swiper.on('slideChange', function () {
        var index = this.activeIndex;

        var target = $('.product-slider__item').eq(index).data('target');

        console.log(target);

        $('.product-img__item').removeClass('active');
        $('.product-img__item#'+ target).addClass('active');
        $('.product-img2__item').removeClass('active');
        $('.product-img2__item#'+ target).addClass('active');
        $('.product-img3__item').removeClass('active');
        $('.product-img3__item#'+ target).addClass('active');

        if(swiper.isEnd) {
            $('.prev').removeClass('disabled');
            $('.next').addClass('disabled');
        } else {
            $('.next').removeClass('disabled');
        }

        if(swiper.isBeginning) {
            $('.prev').addClass('disabled');
        } else {
            $('.prev').removeClass('disabled');
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


    
document.addEventListener("DOMContentLoaded", function () {
  // Temukan semua elemen tombol "BELI"
  var buyButtons = document.querySelectorAll(".product-slider__cart");

  // Tambahkan event listener untuk setiap tombol "BELI"
  buyButtons.forEach(function (button) {
      button.addEventListener("click", function () {
          // Temukan elemen radio yang dipilih dalam setiap produk
          var selectedPackage = this.closest(".product-slider__item").querySelector("input[name='type5']:checked");

          // Periksa apakah pengguna telah memilih paket
          if (selectedPackage) {
              // Dapatkan jenis produk berdasarkan teks judul
              var productType = this.closest(".product-slider__item").querySelector(".product-slider__title").innerText.trim();

              // Redirect sesuai dengan jenis produk
              switch (productType) {
                  case "PEMROGRAMAN WEB":
                      window.location.href = "/Sudahlogin/Login/Prepembayaranpemrograman/index.html";
                      break;
                  case "DIGITAL MARKETING":
                      window.location.href = "/Sudahlogin/Login/Prepembayaranmarketing/index.html";
                      break;
                  case "VIDEO EDITOR":
                      window.location.href = "/Sudahlogin/Login/Prepembayaraneditor/index.html";
                      break;
                  case "BAHASA INGGRIS":
                      window.location.href = "/Sudahlogin/Login/Prepembayaranbahasa/index.html";
                      break;
                  default:
                      // Redirect to a default URL if the product type is not recognized
                      window.location.href = "/defaultURL.html";
                      break;
              }
          } else {
              // Tampilkan peringatan atau lakukan tindakan lain jika paket belum dipilih
              alert("Silakan pilih paket terlebih dahulu!");
          }
      });
  });

  // Tambahkan event listener untuk setiap elemen radio
  var radioButtons = document.querySelectorAll(".product-labels__checkbox");
  radioButtons.forEach(function (radioButton) {
      radioButton.addEventListener("change", updateBuyButtonStatus);
  });

  // Inisialisasi status tombol "BELI" saat halaman dimuat
  updateBuyButtonStatus();
});

      

      
