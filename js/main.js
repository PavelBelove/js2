let name = $('#name');
        let phone = $('#phone');
        let mail = $('#mail');
        let txt = $('#txt');
        let datepicker = $('#datepicker');
        let btn = $('#btn');
        let message = "";

        $(function () {
            $("#datepicker").datepicker();
        });

        btn.on("click", checkValue);

        function checkValue() {
            message = "";

            if (!/^[a-zA-Zа-яА-яёЁ\s]+$/.test(name.val())) {


                message += '<p>Заполните корректно поле "Имя"</p>';
                name.effect("shake", "slow");
            }

            if (!/((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone.val())) {

                message += '<p>Заполните корректно поле "Телефон"</p>';
                phone.effect("shake", "slow");
            }
            if (!/[0-9a-zA-Z\-\.]+@[0-9a-zA-Z\-\.]+\.[a-zA-Z]+/.test(mail.val())) {

                message += '<p>Заполните корректно поле "E-mail"</p>';
                mail.effect("shake", "slow");
            }
            if (!/[0-9]+/.test(datepicker.val())) {

                message += '<p>Выберите дату рождения</p>';
                datepicker.effect("shake", "slow");
            }
            if (!/[a-zA-Zа-яА-Я]/.test(txt.val())) {

                message += '<p>Текстовое поле должно содержать сообщение</p>';
                txt.effect("shake", "slow");
            }
            if (message) {

                $('#dialog').html(`<p>${message}</p>`);

            } else {

                $('#dialog').html(`<p>Форма заполнена корректно</p>`);
            }
            $(function () {
                $("#dialog").dialog({
                    minWidth: 400
                });
            });

        }
        //Карусель товаров
        //-------------------------------------------------------------------------------------------------------------------

        //Обработка клика на стрелку вправо
        $(document).on('click', ".carousel-button-right", function () {
            //console.log('right');
            var carusel = $(this).parents('.carousel');
            right_carusel(carusel);
            return false;
        });
        //Обработка клика на стрелку влево
        $(document).on('click', ".carousel-button-left", function () {
            var carusel = $(this).parents('.carousel');
            left_carusel(carusel);
            return false;
        });

        function left_carusel(carusel) {
            var block_width = $(carusel).find('.carousel-block').outerWidth();
            $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(
                ".carousel-items"));
            $(carusel).find(".carousel-items").css({
                "left": "-" + block_width + "px"
            });
            $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();
            $(carusel).find(".carousel-items").animate({
                left: "0px"
            }, 200);

        }

        function right_carusel(carusel) {
            var block_width = $(carusel).find('.carousel-block').outerWidth();
            $(carusel).find(".carousel-items").animate({
                left: "-" + block_width + "px"
            }, 200, function () {
                $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(
                    ".carousel-items"));
                $(carusel).find(".carousel-items .carousel-block").eq(0).remove();
                $(carusel).find(".carousel-items").css({
                    "left": "0px"
                });
            });
        }

        $(function () {

            //auto_right('.carousel:first'); // Автоматическая прокрутка выключена
        })

        // Автоматическая прокрутка
        function auto_right(carusel) {
            setInterval(function () {
                if (!$(carusel).is('.hover'))
                    right_carusel(carusel);
            }, 1500)
        }
        // Навели курсор на карусель
        $(document).on('mouseenter', '.carousel', function () {
            $(this).addClass('hover')
        })
        //Убрали курсор с карусели
        $(document).on('mouseleave', '.carousel', function () {
            $(this).removeClass('hover')
        })

        //Drag and drop
        //----------------------------------------------------------------------------------------------------------------------------------
        
        $(function () {
            $(".carousel-block").draggable({
                containment: 'document',
                revert: 'invalid',
                appendTo:'body'
        });
        $(".basket").droppable({drop: function(event, ui){

            good = $(ui.helper[0])
            good.hide("fade", 2000); //растворяем элемент, чтобы не было кучи.
            //good.addClass('carousel-hide');
           
            console.log(ui.helper[0].id)
             // получили id брошенного в корзину товара. Дальше можно считать стоимость и т.д.
        }});
        });