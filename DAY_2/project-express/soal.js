const tugas = [
    { nama: 'A', hasil: true, waktu: 3000 },
    { nama: 'B', hasil: false, waktu: 1000 },
    { nama: 'C', hasil: false, waktu: 2000 },
    { nama: 'D', hasil: true, waktu: 4000 },
];

const express = require('express');
const app = express();

const PORT = 7000

app.get('/', (req, res) => res.send('Hello, world!'));
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

function runningTask(nama, hasil, waktu) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hasil) {
                resolve(`Tugas ${nama} Selesai`);
            } else {
                reject(`Tugas ${nama} Belum Selesai`);
            }
        }, waktu);
    });
}

tugas.forEach((tugasItem) => {
    runningTask(tugasItem.nama, tugasItem.hasil, tugasItem.waktu)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
});

