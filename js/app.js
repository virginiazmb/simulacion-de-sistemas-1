//inicializamos las variables
const btnCalcular = document.querySelector('#calcular');
const ebrio = document.querySelector("#ebrio");
const btnReiniciar = document.querySelector("#reiniciar");
const tbody = document.querySelector("#tbody");

btnCalcular.addEventListener('click', calculos);
btnReiniciar.addEventListener('click', reiniciar);

function calculos() {
    reiniciar();
    let x = 0,
        y = 0,
        body = '';

    // Números aleatorios que se refieren a la posibilidad
    // de que el ebrio haya tomado alguna de las cuatro direcciones.

    for (let n = 0; n < 10; n++) {
        let numAleatorio = getRandomInt(0, 99);
        if (numAleatorio >= 0 && numAleatorio < 25) {
            y++;
        }
        if (numAleatorio >= 25 && numAleatorio < 50) {
            y--;
        }
        if (numAleatorio >= 50 && numAleatorio < 75) {
            x++;
        }
        if (numAleatorio >= 75 && numAleatorio < 100) {
            x--;
        }

        if (n < 9) {
            const row = document.createElement("tr");
            body = `
            <tr>
            <th scope="row">${n+1}</th>
            <td>${numAleatorio}</td>
            <td></td>
            </tr>
        `;
            row.innerHTML = body;
            tbody.appendChild(row);
        } else if (n == 9) {
            let sumaXY = x + y;
            const row = document.createElement("tr");
            body = `
            <tr>
            <th scope="row">${n+1}</th>
            <td>${numAleatorio}</td>
            <td>${sumaXY}</td>
            </tr>
        `;
            row.innerHTML = body;
            tbody.appendChild(row);
        }
    }
    let sumaXY = x + y;
    cambiar(x, y);
}

function cambiar(x, y) {
    ebrio.style.gridColumnStart = (10 + (x + x));
    ebrio.style.gridRowStart = (10 - (y + y));
}

function reiniciar() {
    vaciar();
    ebrio.style.gridColumnStart = 10;
    ebrio.style.gridRowStart = 10;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function vaciar(){
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}


