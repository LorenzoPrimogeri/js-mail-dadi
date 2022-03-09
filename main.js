const emailsarray = ["ciao", "ciao2", "ciao4", "ciao3", "ciao5", "l2primogeri@gmail.com", "l3primogeri@gmail.com"];
const botton = document.getElementById("Btn");
const genera = document.getElementById("Genera");
let controllo = false;
let verifica = document.getElementById("Verifica");
botton.addEventListener('click', function () {
    const email = document.getElementById('userEmail').value;
    for (let i = 0; i < emailsarray.length && controllo == false; i++) {
        if (email == emailsarray[i]) {
            verifica.innerHTML = `<span class="c-green">Verificato<\span>`
            controllo = true;
        }
    }
    if (controllo == false) {
        verifica.innerHTML = `<span class="c-red">Non Verificato<\span>`
    }
})
genera.addEventListener('click', function () {
    if (controllo == true) {
        const randomPlayer = (Math.random() * 6).toFixed(1);
        const randomComputer = (Math.random() * 6).toFixed(1);
        const punteggioPlayer = document.getElementById("PunteggioP");
        const punteggioComputer = document.getElementById("PunteggioC");
        const risultato = document.getElementById("Risultato");
        punteggioPlayer.innerHTML = randomPlayer;
        punteggioComputer.innerHTML = randomComputer;

        if (randomPlayer > randomComputer) {
            risultato.innerHTML = "Hai vinto";
            risultato.classList.add("c-green");
        } else {
            risultato.innerHTML = "Hai perso";
            risultato.classList.add("c-red");
        }
    }
})