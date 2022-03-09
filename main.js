const emailsarray = ["ciao", "ciao2", "ciao4", "ciao3", "ciao5", "l2primogeri@gmail.com", "l3primogeri@gmail.com"];
const botton = document.getElementById("Btn");
const genera = document.getElementById("Genera");
let controllo = false;
let verifica = document.getElementById("Verifica");
botton.addEventListener('click', function () {

    const email = document.getElementById('userEmail').value;
    for (let i = 0; i < emailsarray.length && controllo == false; i++) {
        if (email == emailsarray[i]) {
            verifica.innerHTML += `<span class="c-green">Verificato<\span>`
            controllo = true;
            email.value = " ";
        }
    }
    if (controllo == false) {
        verifica.innerHTML += `<span class="c-red">Non Verificato<\span>`
        email.value = " ";
    }
})
genera.addEventListener('click', function () {
    if (controllo == true) {
        const randomPlayer = (Math.random() * 6).toFixed(1);
        const randomComputer = (Math.random() * 6).toFixed(1);
        console.log(randomPlayer + ' ' + randomComputer);
        if (randomPlayer > randomComputer) {
            console.log("hai vinto");
        } else {
            console.log("hai perso");
        }
    }
})


//lprimogeri@gmail.com