<html>
    <head>
        <title>KUIS 1</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>

    <body>
        <form id="calculatorForm">
            <h2>Kalkulator Volume dan Luas Permukaan</h2>
            <input type="checkbox" name="balok" value="Balok"> Balok<br>
            <input type="checkbox" name="kubus" value="Kubus"> Kubus<br>
            <input type="checkbox" name="tabung" value="Tabung"> Tabung<br>
            
            <div id="balokFields" style="display: none;">
            <label for="panjangBalok">Panjang:</label>
            <input type="number" id="panjangBalok" name="panjangBalok">
            <label for="lebarBalok">Lebar:</label>
            <input type="number" id="lebarBalok" name="lebarBalok">
            <label for="tinggiBalok">Tinggi:</label>
            <input type="number" id="tinggiBalok" name="tinggiBalok">
        </div>
        <div id="kubusFields" style="display: none;">
        <label for="sisiKubus">Sisi:</label>
        <input type="number" id="sisiKubus" name="sisiKubus">
    </div>
    
    <div id="tabungFields" style="display: none;">
        <label for="jariTabung">Jari-jari:</label>
        <input type="number" id="jariTabung" name="jariTabung">
        <label for="tinggiTabung">Tinggi:</label>
        <input type="number" id="tinggiTabung" name="tinggiTabung">
    </div>

    <div id="result"></div>


    <input type="submit" value="Hitung">
</form>

<script src="script.js"></script>

    </body>
</html>