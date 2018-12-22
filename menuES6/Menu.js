class Menu extends BaseClass {
    constructor(myId, myClass, myItems) {
        super();
        this.id = myId;
        this.className = myClass;
        this.items = myItems;
    }

    render() {
        var result = `<ul class="${this.className}" id="${this.id}">`;

        //Сами пункты меню
        for (var i = 0; i < this.items.length; i++) {
            result += this.items[i].renderItem();
        }

        result += '</ul>';
        return result;
    }
//Проморгал эти строчки. Тупил - а почему у меня menu.remove() из BaseClass.js ну никак "заводиться" не хочет)))
    // //TODO: удаление меню
    // remove()
    // {
    //     //document
    // }
}