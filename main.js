const emailsarray = ["lprimogeri@gmail.com", "l2primogeri@gmail.com", "l3primogeri@gmail.com"];
const botton = document.getElementById("Btn");
const email = document.getElementById('userEmail').value;
let controllo = false;
botton.addEventListener('click', function () {
    for (let i = 0; i < emailsarray.length; i++) {
        //break viene usato per 
        if (email === emailsarray[i]) {
            controllo = true;
            break;
        } else {
            controllo = false;
            break;
        }
    }
    console.log(controllo);
    if (controllo == true) {
        console.log("puoi accedere");
    } else {
        console.log("email non presente");
    }
});

//lprimogeri@gmail.com