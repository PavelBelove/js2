document.getElementById('submit').onclick = () => {
    let size = document.getElementById('size').value;
    let stuffing = document.getElementById('stuffing').value;
    let mayo, spice;
    if (document.getElementById('TOPPING_SPICE').checked) {
        spice = "TOPPING_SPICE"
    }
    if (document.getElementById('TOPPING_MAYO').checked) {
        mayo = "TOPPING_MAYO";
    }
    let burger = new Burger(size, stuffing);
    // Тут бы по хорошему "на вырост" собрать все галочки-приправы в массив, и пройтись по нему циклом. 
    // Но из-за 2 вариантов выбора не стал морочиться.
    if (spice) {
        burger.addTopping(spice);
    }
    if (mayo) {
        burger.addTopping(mayo);
    }
    //console.log(mayo);
    document.getElementById('price').innerText = "Итого " + burger.calculatePrice() + ' рублей';
    document.getElementById('calories').innerText = "Итого " + burger.calculateCalories() + ' калорий';
};