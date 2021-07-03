$(document).ready(function () {
    let $commentContainer = $('#comments');

    let id = 0;

    $.ajax({
        url: './json/get_comments.json',
        dataType: 'json',
        success: function (data) {

            for (let i of data.comments) {
                id++
                let comment = new Comment(id, i.autor, i.text, i.moderate);
                comment.render($commentContainer);
                //console.log(i.autor)
            }
        },
        error: function (err) {
            console.log('Ошибка', err);
        }
    });

    let $appendComment = $('#newComment');
    let $autor = $('#autor');
    let $appendBtn = $('#append_btn');

    $appendBtn.on('click', () => {

        if ($appendComment.val() && $autor.val()) {
            id++
            let comment = new Comment(id, $autor.val(), $appendComment.val());
            comment.render($commentContainer);
            $autor.val("");
            $appendComment.val("");
            $.ajax({
                type: 'get',
                url: './json/review.add.json',
                context: $appendComment,
                dataType: 'json',
                success: function (data) {
                    alert(data.userMessage);
                    //console.log(this)
                }
            });
        } else {
            alert("Заполните все поля")
        }

    });


});