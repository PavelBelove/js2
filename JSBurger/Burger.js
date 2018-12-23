//Если я правильно понял задание, начинка stuffing может быть только одна, тогда как приправ toppings
//несколько, но повторяться они не могут. Поэтому логично использовать для их хранения множество set
class Burger {
    constructor(size, stuffing, ) {

        try {
            if (!sizes[size] && !stuffings[stuffing]) {
                throw new HamburgerException('Вы должны передать размер и начинку гамбургера');
            }
            this.size = sizes[size];
            this.stuffing = stuffings[stuffing];
            let toppingsArr = new Set();
            for (let i = 2; i < arguments.length; i++) {

                if (!toppings[arguments[i]]) {
                    //throw(arguments[i]);
                }
                toppingsArr.add(toppings[arguments[i]]);
            }
            this.toppings = toppingsArr;
        } catch (e) {
            alert("Таких бургеров нэма!")
        };
    }

  
    //добавляем добавку.
    addTopping(topping) {
        try {
            if (!toppings[topping]) {
                throw new HamburgerException('Вы должны передать добавку');
            }

            this.toppings.add(toppings[topping])

        } catch (e) {
            alert("Таких бургеров нэма!");
        };
    }
    //Убираем добавку. В задании, если я правильно понял, за это должна была отвечать addTopping(topping)
    // но мне это кажется жутко нелогичным: Клиент дважды попросил с майонезом, а получил без майонеза.
    // поэтому пусть будет отдельный метод.

    delTopping(topping) {
        this.toppings.delete(toppings[topping]);
    }
    //Получить список добавок. У меня возвращает SET, если нужен строго массив, как в задании, можно выполнить преобразование.
    getToppings() {
        return this.toppings;
    }
    //начинка
    getStuffing() {
        return this.stuffing.name;
    }

    //Размер
    getSize() {
        return this.size.name;
    }

    //Счетчик цены
    calculatePrice() {
        let prise = this.stuffing.price + this.size.price;
        for (let i of this.toppings) {
            prise += i.price;
        }

        return prise;
    }

    //Счетчик калорий
    calculateCalories() {
        let calories = this.stuffing.calories + this.size.calories;
        for (let i of this.toppings) {

            calories += i.calories;
        }

        return calories;
    }

}