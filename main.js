let img = document.querySelector(".content .image img");
let phones = document.querySelectorAll(".icons img");
let container = document.querySelector(".container");
let color;

phones.forEach((phone) => {
    phone.onclick = function() {
        convert(phone.src);
        switch (+phone.alt) {
            case 0: color = 'black';
                break;
            case 1: color = '#247ec8';
                break;
            case 2: color = '#1e1e1e';
                break;
            case 3: color = '#c79b53';
                break;
            case 4: color = '#c82525';
                break;
        }
        container.style.background = color;
    };
});

function convert(phone) {
    img.src = phone;
}

