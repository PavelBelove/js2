describe('Проверка имени', function () {
    it('Проверка Вася', function () {
        expect(checkName('Вася')).toBe(true);
    });

    it('Проверка Vasya', function () {
        expect(checkName('Vasya')).toBe(true);
    });

    it('Проверка 42', function () {
        expect(checkName('42')).not.toBe(true);
    });
});

describe('Проверка телефона', function () {
    it('Проверка +70001112233', function () {
        expect(checkPhone('+70001112233')).toBe(true);
    });

    it('Проверка 80001112233', function () {
        expect(checkPhone('80001112233')).toBe(true);
    });

    it('Проверка +7 000 111 22 33', function () {
        expect(checkPhone('+7 000 111 22 33')).toBe(true);
    });

    it('Проверка +7-000-111-22-33', function () {
        expect(checkPhone('+7-00-111-22-33')).toBe(true);
    });

   

    it('Проверка 42', function () {
        expect(checkPhone('42')).not.toBe(true);
    });
    it('Проверка Vasya', function () {
        expect(checkPhone('Vasya')).not.toBe(true);
    });
});

describe('Проверка e-mail', function () {
    it('Проверка mail@mail.ru', function () {
        expect(checkMail('mail@mail.ru')).toBe(true);
    });

    it('Проверка my.mail@mail.ru', function () {
        expect(checkMail('my.mail@mail.ru')).toBe(true);
    });
    it('Проверка my-mail@mail.ru', function () {
        expect(checkMail('my-mail@mail.ru')).toBe(true);
    });

    it('Проверка Vasya', function () {
        expect(checkMail('Vasya')).not.toBe(true);
    });
});

describe('Проверка message', function () {
    it('Проверка Abra Cadabra', function () {
        expect(checkMessage('Abra Cadabra')).toBe(true);
    });   

    it('Проверка пустой строки', function () {
        expect(checkName('')).not.toBe(true);
    });
});
