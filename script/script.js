const menu = document.getElementById("menu")
const op1 = document.getElementById("op1")
const op2 = document.getElementById("op2")
const op3 = document.getElementById("op3")
const op4 = document.getElementById("op4")
const op5 = document.getElementById("op5")
const autoheight = "menu.style.height = 'auto'"
var val = 0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('telefone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ')' + ' ' + x[2]  + (x[3] ? '-' + x[3] : '');
});

async function menuinteraction () {
    op1.style.display = 'block'
    op2.style.display = 'block'
    op3.style.display = 'block'
    op4.style.display = 'block'
    op5.style.display = 'block'
    if (menu.style.display == 'block') {
        menu.style.overflow = 'hidden'
        for (val = 285; val >= 0; val = val - 5) {
            await sleep(5)
            menu.style.height = val + 'px'
        }
        menu.style.height = ''
        menu.style.display = 'none'
    } else {
        menu.style.overflow = 'hidden'
        menu.style.height = 0 + 'px'
        menu.style.display = 'block'
        for (val = 0; val <= 285; val = val + 5) {
            await sleep(5)
            menu.style.height = val + 'px'
        }
        menu.style.overflow = ''
    }
}

function checkRes () {
    if (window.innerWidth > 1024) {
        menu.style.display = ''
        menu.style.height = ''
        op1.style.display = 'inline-block'
        op2.style.display = 'inline-block'
        op3.style.display = 'inline-block'
        op4.style.display = 'inline-block'
        op5.style.display = 'inline-block'
    }
    if (window.innerWidth < 1024) {
        menu.style.display = 'none'
        op1.style.display = 'none'
        op2.style.display = 'none'
        op3.style.display = 'none'
        op4.style.display = 'none'
        op5.style.display = 'none'
    }
}
function pagform(){
    window.location.href = "formu.html";
}

function HCpagform(){
    window.location.href = "HCformu.html";
}
window.addEventListener("resize",checkRes)
