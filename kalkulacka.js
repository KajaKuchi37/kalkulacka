const vstup1 = document.getElementById("vstup1");
const vstup2 = document.getElementById("vstup2");
const vysledek = document.getElementById("vysledek");

function nactiCisla() {
    const a = parseFloat(vstup1.value);
    const b = parseFloat(vstup2.value);

    if (isNaN(a) || isNaN(b)) {
        vysledek.innerHTML = "❌ Zadej platná čísla";
        return null;
    }
    return [a, b];
}

document.getElementById("tlPlus").onclick = function () {
    const cisla = nactiCisla();
    if (!cisla) return;
    vysledek.innerHTML = `Výsledek: ${cisla[0] + cisla[1]}`;
};

document.getElementById("tlMinus").onclick = function () {
    const cisla = nactiCisla();
    if (!cisla) return;
    vysledek.innerHTML = `Výsledek: ${cisla[0] - cisla[1]}`;
};

document.getElementById("tlKrat").onclick = function () {
    const cisla = nactiCisla();
    if (!cisla) return;
    vysledek.innerHTML = `Výsledek: ${cisla[0] * cisla[1]}`;
};

document.getElementById("tlDeleno").onclick = function () {
    const cisla = nactiCisla();
    if (!cisla) return;

    if (cisla[1] === 0) {
        vysledek.innerHTML = "❌ Nelze dělit nulou";
        return;
    }

    vysledek.innerHTML = `Výsledek: ${cisla[0] / cisla[1]}`;
};
