let message = ""; 

function checkValue() {
    message = "";

    checkName(name.value);
    checkPhone(phone.value);
    checkMail(mail.value);
    checkMessage(txt.value);

    if (message) {
        alert(message);
    } else {
        alert('Форма заполнена корректно');
    }
}

function checkName(arg){

    if (!/^[a-zA-Zа-яА-яёЁ\s]+$/.test(arg) ) {
        // Если содержится хотя бы один символ кроме диапазона
        //console.log(name.value+ "sdsd");
        message += 'Заполните корректно поле "Имя"\n';
        return false;
    }
    return true;

}

function checkPhone(arg){
 // Валидация только для той формы записи, что была в задании. Для телефона вообще,
    // стоит использовать ((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$ - слава Гуглу.
    if (!(/((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(arg))) {
        //+7(триЦифры)триЦифры-четыреЦифры
        //console.log(phone.value);
        message += 'Заполните корректно поле "Телефон\n"';
        return false;
    }
    return true;
}

function checkMail(arg){
    if (!/[0-9a-zA-Z\-\.]+@[0-9a-zA-Z\-\.]+\.[a-zA-Z]+/.test(arg)) {
        // мин1ИзДиапазона@мин1ИзДиапазона.мин1ИзДиапазона
        //console.log(mail.value);
        message += 'Заполните корректно поле "E-mail;"\n';
        return false
    }
    return true;
}

function checkMessage(arg){
    if (!/[a-zA-Zа-яА-Я]/.test(arg)) {
        // в поле введена хотя бы одна буква. Ё не проверял, потому что вряд ли сообщение состоящее из одних Ё представляет ценность.
        //console.log(txt.value);
        message += 'Текстовое поле должно содержать сообщение\n';
        return false;
    }
    return true;
}

