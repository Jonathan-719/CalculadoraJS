function mais() {
    var entrada = Number(document.getElementById("a").value);
    var entrada2 = Number(document.getElementById("b").value);
    var resultado = entrada + entrada2;
    document.getElementById("resultado").innerText = resultado;
}

function vezes() {
    var entrada = Number(document.getElementById("a").value);
    var entrada2 = Number(document.getElementById("b").value);
    var resultado = entrada * entrada2;
    document.getElementById("resultado").innerText = resultado;
}

function menos() {
    var entrada = Number(document.getElementById("a").value);
    var entrada2 = Number(document.getElementById("b").value);
    var resultado = entrada - entrada2;
    document.getElementById("resultado").innerText = resultado;
}

function dividir() {
    var entrada = Number(document.getElementById("a").value);
    var entrada2 = Number(document.getElementById("b").value);
    var resultado = entrada / entrada2;
    document.getElementById("resultado").innerText = resultado.toFixed(2);
}
