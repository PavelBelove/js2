class MenuSection extends Menu {
    constructor(myId, myClass, myItems) {
        super(myId, myClass, myItems);
    }
    render() {
        let result = `<ul class = "${this.className}" id = "${this.id}">`;
        console.log(this.items)
        for (let i of this.items) {
            if (i.className) {
                result += i.render();
            } else {
                result += i.renderItem();
            }
        }

        result += '</ul>';
        return result;
    }
}