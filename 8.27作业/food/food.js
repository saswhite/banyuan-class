let plus = document.getElementsByClassName('plus')
let minus = document.getElementsByClassName('minus')
let number = document.getElementsByClassName('number')

let price = document.getElementsByClassName('food-price')
let totalPrice = document.getElementsByClassName('price-number')[0]
let totalNumber = document.getElementById('total-price')
let DBtn = document.getElementsByClassName('decide-btn')[0]
let loading = document.getElementsByClassName('loading')[0]

let timer
let Num = 0
let Nprice = 0

let count = 0

for (let i = 0; i < plus.length; i++) {
    plus[i].onclick = () => {
        Num = Number(number[i].innerHTML);
        Num++;
        number[i].innerHTML = Num;
        Nprice = Number(price[i].innerHTML.split('$').join(''))
        count += Nprice
        TotalPrice(count)
    }
}

for (let i = 0; i < plus.length; i++) {
    minus[i].onclick = () => {
        Num = Number(number[i].innerHTML);
        Num--;
        if (Num < 0) {
            Num = 0;
        } else {
            number[i].innerHTML = Num;
            Nprice = Number(price[i].innerHTML.split('$').join(''))
            count -= Nprice
            if (count < 0) {
                count = 0
            }
            TotalPrice(count)
        }

    }
}
function TotalPrice(count) {
    let TNum = totalNumber.innerHTML
    if (TNum) {
        totalNumber.innerHTML = ""
        totalNumber.innerHTML = count.toFixed(2)
    }
}

DBtn.onclick = _.throttle(() => {
    loading.style.display = 'flex'
    delay()
}, 2000)


function delay() {
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        loading.style.display = 'none'
    }, 3000)
}
