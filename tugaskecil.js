// Tugas 1 (Prompt buatlah saldo akhir dari apa yang diinputkan oleh user)
let pulsaAwal = 20000
let pulsaTambahan = Number(prompt('Masukkan Pulsa Tambahan:'))
let pulsaAkhir = pulsaAwal + pulsaTambahan

alert('Total Pulsa Anda adalah:' + pulsaAkhir)

// Tugas 2 (Menentukan hari dan taggal yang ada saat ini di pc)
let hari = new Date().getDay()
namaHari = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']

console.log(`hari ini merupakan hari ${namaHari[hari]}`)
