// Memilih elemen-elemen DOM
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Menetapkan keadaan awal menu
let showMenu = false;

// Menambahkan event listener ke tombol menu untuk memanggil fungsi toggleMenu saat diklik
menuBtn.addEventListener("click", toggleMenu);

// Fungsi untuk menampilkan atau menyembunyikan menu
function toggleMenu() {
  if (!showMenu) {
    // Jika menu tidak ditampilkan, tambahkan kelas "close" ke tombol menu dan kelas "show" ke elemen-elemen menu
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Set Menu State menjadi true (menu ditampilkan)
    showMenu = true;
  } else {
    // Jika menu ditampilkan, hapus kelas "close" dari tombol menu dan kelas "show" dari elemen-elemen menu
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Set Menu State menjadi false (menu disembunyikan)
    showMenu = false;
  }
}

// Memilih elemen dengan ID "waktu"
const waktu = document.getElementById("waktu");

// Fungsi untuk menampilkan tanggal dan waktu secara real-time
function tanggal(){
  const date = new Date(); // Membuat objek Date yang merepresentasikan waktu saat ini
  const options = {
      weekday: 'long', // Menampilkan nama hari secara lengkap (misalnya: Senin)
      day: 'numeric', // Menampilkan tanggal (misalnya: 1, 2, 3)
      month: 'long', // Menampilkan nama bulan secara lengkap (misalnya: Januari)
      year: 'numeric', // Menampilkan tahun (misalnya: 2024)
      hour: 'numeric', // Menampilkan jam (format 24 jam)
      minute: 'numeric', // Menampilkan menit
      second: 'numeric', // Menampilkan detik
      timeZoneName: 'short' // Menampilkan nama zona waktu (misalnya: WIB)
  };
  // Menampilkan waktu dalam bahasa Indonesia dengan format yang telah ditentukan
  waktu.innerHTML = date.toLocaleString('id-ID', options); 
}

// Memanggil fungsi tanggal setiap 1000 milidetik (1 detik) untuk memperbarui waktu secara real-time
setInterval(tanggal, 1000);

// Memanggil fungsi tanggal untuk pertama kali saat halaman dimuat agar waktu ditampilkan secara langsung
tanggal();