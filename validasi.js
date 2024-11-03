// Mendapatkan referensi elemen form
const form = document.getElementById('registrationForm'); // Elemen form
const username = document.getElementById('username'); // Input username
const email = document.getElementById('email'); // Input email
const password = document.getElementById('password'); // Input password
const confirmPassword = document.getElementById('confirmPassword'); // Input konfirmasi password
const togglePassword = document.getElementById('togglePassword'); // Ikon mata untuk menampilkan password

// Menampilkan elemen error
const usernameError = document.getElementById('usernameError'); // Elemen untuk pesan error username
const emailError = document.getElementById('emailError'); // Elemen untuk pesan error email
const passwordError = document.getElementById('passwordError'); // Elemen untuk pesan error password
const confirmPasswordError = document.getElementById('confirmPasswordError'); // Elemen untuk pesan error konfirmasi password

// Fungsi untuk menampilkan/menghilangkan password saat ikon mata diklik
togglePassword.addEventListener('click', function () {
    const type = password.type === 'password' ? 'text' : 'password'; // Mengubah tipe input
    password.type = type; // Mengatur tipe input ke teks atau password
    togglePassword.textContent = type === 'password' ? '\u{1F441}' : '\u{1F441}'; // Mengubah ikon
});

// Validasi username saat keyup
username.addEventListener('keyup', function () {
    const usernameValue = username.value; // Mendapatkan nilai username
    // Mengecek apakah username valid
    if (/^[a-zA-Z0-9]{5,20}$/.test(usernameValue)) {
        usernameError.textContent = ''; // Menghapus pesan error jika valid
    } else {
        usernameError.textContent = 'Username harus 5-20 karakter dan alfanumerik.'; // Pesan error
    }
});

// Validasi email saat change
email.addEventListener('change', function () {
    const emailValue = email.value; // Mendapatkan nilai email
    // Mengecek apakah format email valid
    if (/^\S+@\S+\.\S+$/.test(emailValue)) {
        emailError.textContent = ''; // Menghapus pesan error jika valid
    } else {
        emailError.textContent = 'Format email tidak valid.'; // Pesan error
    }
});

// Validasi kekuatan password saat keyup
password.addEventListener('keyup', function () {
    const passwordValue = password.value; // Mendapatkan nilai password
    // Mengecek apakah password memenuhi syarat
    if (/(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/.test(passwordValue)) {
        passwordError.textContent = ''; // Menghapus pesan error jika valid
    } else {
        passwordError.textContent = 'Password minimal 8 karakter dan mencakup angka dan huruf.'; // Pesan error
    }
});

// Konfirmasi kecocokan password saat input
confirmPassword.addEventListener('input', function () {
    const confirmPasswordValue = confirmPassword.value; // Mendapatkan nilai konfirmasi password
    // Mengecek apakah konfirmasi password cocok
    if (confirmPasswordValue === password.value) {
        confirmPasswordError.textContent = ''; // Menghapus pesan error jika cocok
    } else {
        confirmPasswordError.textContent = 'Password tidak cocok.'; // Pesan error
    }
});

// Validasi akhir saat submit
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form dari pengiriman default
    // Melakukan validasi akhir sebelum mengirim
    if (usernameError.textContent === '' && emailError.textContent === '' && passwordError.textContent === '' && confirmPasswordError.textContent === '') {
        alert('Pendaftaran berhasil!'); // Tampilkan pesan berhasil
        form.reset(); // Mengatur ulang form
    } else {
        alert('Periksa kembali form Anda.'); // Pesan jika ada error
    }
});
