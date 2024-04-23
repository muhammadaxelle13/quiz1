document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    calculate();
});

function calculate() {
    let result = '';
    const balok = document.getElementById('balokFields').style.display !== 'none';
    const kubus = document.getElementById('kubusFields').style.display !== 'none';
    const tabung = document.getElementById('tabungFields').style.display !== 'none';

    if (balok) {
        const panjang = parseFloat(document.getElementById('panjangBalok').value);
        const lebar = parseFloat(document.getElementById('lebarBalok').value);
        const tinggi = parseFloat(document.getElementById('tinggiBalok').value);
        const volume = panjang * lebar * tinggi;
        const luasPermukaan = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
        result += `Volume Balok: ${volume}, Luas Permukaan Balok: ${luasPermukaan}\n`;
    }
    if (kubus) {
        const sisi = parseFloat(document.getElementById('sisiKubus').value);
        const volume = Math.pow(sisi, 3);
        const luasPermukaan = 6 * Math.pow(sisi, 2);
        result += `Volume Kubus: ${volume}, Luas Permukaan Kubus: ${luasPermukaan}\n`;
    }
    if (tabung) {
        const jari = parseFloat(document.getElementById('jariTabung').value);
        const tinggi = parseFloat(document.getElementById('tinggiTabung').value);
        const volume = Math.PI * Math.pow(jari, 2) * tinggi;
        const luasPermukaan = 2 * Math.PI * jari * (jari + tinggi);
        result += `Volume Tabung: ${volume}, Luas Permukaan Tabung: ${luasPermukaan}\n`;
    }

    document.getElementById('result').innerHTML = result;
}

// Tampilkan bidang input yang sesuai berdasarkan pilihan checkbox
document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        const targetId = this.value.toLowerCase() + 'Fields';
        document.getElementById(targetId).style.display = this.checked ? 'block' : 'none';
    });
});
