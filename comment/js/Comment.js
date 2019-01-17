class Comment {
    constructor(id, autor, txt, moderate) {
        this.id = id;
        this.autor = autor;
        this.txt = txt;
        this.moderate = moderate;
    }
    render($jQueryElement) {
        let $commentContainer = $('<div />', {
            class: 'comment'
        });
        let $commentAutor = $('<h3 />', {
            text: this.autor
        });
        let $commentTxt = $(`<p>${this.txt}</p>`);
        let $commentBtnOk = $('<button />', {
            class: 'addcomment',
            text: 'Одобрить',
            'data-id': this.id
        });
        let $commentBtnDel = $('<button />', {
            class: 'delcomment',
            text: 'Удалить',
            'data-id': this.id
        });

        $commentBtnOk.on('click', () => {
            $.ajax({
                type: 'get',
                url: './json/review.submit.json',
                context: this,
                dataType: 'json',
                success: function (data) {
                    $commentBtnOk.remove();
                    $commentBtnDel.remove();
                    console.log(this)
                },
                error: function (err) {
                    console.log('Ошибка', err);
                }
            });


        });

        $commentBtnDel.on('click', () => {
            $.ajax({
                type: 'get',
                url: './json/review.delete.json',
                context: this,
                dataType: 'json',
                success: function (data) {
                    $commentContainer.remove();

                },
                error: function (err) {
                    console.log('Ошибка', err);
                }
            });


        });




        $commentAutor.appendTo($commentContainer);
        $commentTxt.appendTo($commentContainer);
        if (!this.moderate) {
            $commentBtnOk.appendTo($commentContainer);
            $commentBtnDel.appendTo($commentContainer);
        }
        $commentContainer.appendTo($jQueryElement);
    }
}