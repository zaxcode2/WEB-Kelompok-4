<script>
    function toggleEnlarge(card) {
        card.classList.toggle('enlarged');
    }
</script>

// Tambahkan event listener pada tombol kirim
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();
    // Kirim data formulir ke server
    console.log('Formulir terkirim!');
})
