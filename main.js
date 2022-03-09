const emailsarray = ["ciao", "ciao2", "ciao4", "ciao3", "ciao5", "l2primogeri@gmail.com", "l3primogeri@gmail.com"];
const botton = document.getElementById("Btn");
const genera = document.getElementById("Genera");
botton.addEventListener('click', function () {
    const email = document.getElementById('userEmail').value;
    let controllo = false;
    for (let i = 0; i < emailsarray.length && controllo == false; i++) {
        if (email == emailsarray[i]) {
            console.log("Verificato");
            controllo = true;
        }
    }
    if (controllo == false) {
        console.log("Non Verificato");
    }
})
genera.addEventListener('click', function () {
        const randomPlayer = (Math.random() * 6).toFixed(1);
        const randomComputer = (Math.random() * 6).toFixed(1);
        console.log(randomPlayer + ' ' + randomComputer);
        if (randomPlayer > randomComputer) {
            console.log("hai vinto");
        } else {
            console.log("hai perso");
        }
})

//lprimogeri@gmail.com