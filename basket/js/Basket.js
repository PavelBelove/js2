class Basket {
    constructor(idBasket) {
        this.id = idBasket;
        this.amount = 0; //Общая стоимость товаров
        this.basketItems = []; //Массив для хранения товаров

        //Получаем товары
        this.getItems();
    }

    getItems() {
        let appendId = `#${this.id}_items`;

        //Вариант 1
        //let self = this;

        $.ajax({
            type: 'GET',
            url: './json/get_items.json',
            context: this, //Вариант 2
            dataType: 'json',
            success: function (data) {
                let $basketData = $('<div />', {
                    id: 'basket_data'
                });

                this.amount = data.amount; //Общая стоимость товаров в корзине

                for (let i = 0; i < data.basket.length; i++) {
                    this.basketItems.push(data.basket[i]);
                }

                $basketData.append(`<p>Всего товаров: ${this.basketItems.length}</p>`);
                $basketData.append(`<p>Общая стоимость: ${this.amount}</p>`);

                $basketData.appendTo(appendId);
            },
            error: function (err) {
                console.log('Ошибка', err);
            }
        });
    }

    render($jQuerySelector) {
        let $basketDiv = $('<div />', {
            id: this.id,
            text: 'Корзина'
        });

        let $basketItemsDiv = $('<div />', {
            id: `${this.id}_items`
        });

        $basketItemsDiv.appendTo($basketDiv);
        $basketDiv.appendTo($jQuerySelector);
    }

    addProduct(idProduct, price) {
        let goodItem = {
            id_product: idProduct,
            price //Так как ES6 price: price
        };

        this.amount += price;

        this.basketItems.push(goodItem);
        this.refresh(); //Перерисовываем корзину
    }

    delProduct(idProduct) {
        
        let items = this.basketItems
        let flag = -1;
        console.log()
        for (let i in items){
            if (items[i].id_product == idProduct){
                console.log(items[i]);
                flag = i;
            }
        }
        if (flag !== -1){
            let price = items[flag].price;
        items.splice(flag, 1);       

        this.amount -= price;
        this.refresh();
        } else{
            alert("Этого товара в корзине нет.")
        }

        

        
    }

    refresh() {
        let $basketData = $('#basket_data');
        $basketData.empty(); //Очищаем содержимое контейнера
        $basketData.append(`<p>Всего товаров: ${this.basketItems.length}</p>`);
        $basketData.append(`<p>Общая стоимость: ${this.amount}</p>`);

        //TODO: для отладки
        console.log(this.basketItems);
    }
}