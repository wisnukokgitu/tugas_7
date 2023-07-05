let itemOrder = [
    {
        dipesan : false,
        harga : 10000,
        nama : 'Batagor',
    },
    {
        dipesan : false,
        harga : 12000,
        nama : 'Siomay',
    },
    {
        dipesan : false,
        harga : 7000,
        nama : 'Baso Ikan',
    },
    {
        dipesan : false,
        harga : 2000,
        nama : 'Teh tawar',
    },
    {
        dipesan : false,
        harga : 3000,
        nama : 'Teh manis',
    }
]

let totalOrder = 0;

const itemTerpilih = document.getElementsByClassName('item');

const textTotal = document.getElementById('last-item');

for(let i = 0; i < itemTerpilih.length; i++){
    itemTerpilih[i].addEventListener('click', function () {
        setItemPemesanan(i, itemTerpilih[i]);
    });
}

function setItemPemesanan(index, elemen) {
    if (itemOrder[index].dipesan == false) {
        itemOrder[index].dipesan = true;
        elemen.style.backgroundColor = "brown";
        elemen.style.color = "white"
        totalOrder = totalOrder + itemOrder[index].harga;
    }
    else{
        itemOrder[index].dipesan = false;
        elemen.style.backgroundColor = "aqua";
        elemen.style.color = "black"
        totalOrder = totalOrder - itemOrder[index].harga;
    }
    textTotal.innerHTML = "Total <span>Rp " + totalOrder + "</span>"
}