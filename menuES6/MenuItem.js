//Класс для пункта меню
class MenuItem extends BaseClass {
    constructor(href, title) {
        super();
        this.href = href;
        this.title = title;
    }

    //Метод возвращает html код для конкретного пункта
    renderItem() {
        //return '<li><a href="' + this.href + '">' + this.title + '</a></li>'; //ES5
        return `<li><a href="${this.href}">${this.title}</a></li>`; //ES6
    }
}