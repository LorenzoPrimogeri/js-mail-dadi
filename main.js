const emailsarray = ["lprimogeri@gmail.com", "l2primogeri@gmail.com", "l3primogeri@gmail.com"];
const botton = document.getElementById("Btn");
const email = document.getElementById('userEmail').value;
let controllo = false;
botton.addEventListener('click', function () {
    for (let i = 0; i < emailsarray.length; i++) {
        //break viene usato per 
        if (controllo == false) {
            console.log("entrato")
            for (let j = 0; j < emailsarray.length; j++) {
                if (email === emailsarray[j]) {
                    controllo = true;
                    break;
                } else {
                    controllo = false;
                    break;
                }
            }
        } else {
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