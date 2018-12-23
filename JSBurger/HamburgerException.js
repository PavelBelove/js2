class HamburgerException extends Error
{
    constructor(message, stack)
    {
        super();
        this.message = message || 'Неизвестная ошибка';
        this.stack = (new Error()).stack;
    }
}