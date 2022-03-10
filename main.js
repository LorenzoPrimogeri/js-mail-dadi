const emailsarray = ["ciao", "ciao2", "ciao4", "ciao3", "ciao5", "l2primogeri@gmail.com", "l3primogeri@gmail.com"];
const button = document.getElementById("Btn");
const genera = document.getElementById("Genera");
let controllo = false;
let verifica = document.getElementById("Verifica");
button.addEventListener('click', function () {
    controllo = false;
    const email = document.getElementById('userEmail').value;
    for (let i = 0; i < emailsarray.length && controllo == false; i++) {
        if (email == emailsarray[i]) {
            verifica.innerText = `Verificato`;
            verifica.classList.add("c-green");
            controllo = true;
            document.getElementById("userEmail").value = " ";
        }
    }
    if (controllo == false) {
        verifica.innerText = `Non Verificato`;
        verifica.classList.add("c-red");
        document.getElementById("userEmail").value = " ";
    }
})
genera.addEventListener('click', function () {
    if (controllo == true) {
        const randomPlayer = Math.floor(Math.random() * 6 + 1);
        const randomComputer = Math.floor(Math.random() * 6 + 1);
        const punteggioPlayer = document.getElementById("PunteggioP");
        const punteggioComputer = document.getElementById("PunteggioC");
        const risultato = document.getElementById("Risultato");
        punteggioPlayer.innerHTML = randomPlayer;
        punteggioComputer.innerHTML = randomComputer;
        if (randomPlayer > randomComputer) {
            risultato.innerHTML = "Hai vinto";
            risultato.classList.remove("c-red");
            risultato.classList.add("c-green");
        } else if (randomComputer == randomPlayer) {
            risultato.innerHTML = "pareggio";
            risultato.classList.remove("c-green","c-red");
            risultato.classList.add("c-grey");
        } else {
            risultato.innerHTML = "Hai perso";
            risultato.classList.remove("c-green");
            risultato.classList.add("c-red");
        }
    }
})