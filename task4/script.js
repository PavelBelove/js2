let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let answer = document.querySelector(".answer");
btn1.addEventListener("click", addAjax);
btn2.addEventListener("click", addAjax);


function addAjax() {
    let cd = `${this.id}.json`;

    fetch(cd)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Упс, у нас ошибка ' +
                        response.status);
                    return;
                }
                response.json().then((data) => {
                    if (data.result == "success") {
                        console.log(data.message);
                        answer.innerText = data.message;
                    }
                    if (data.result == "error") {
                        console.log(data.errMessage); // Можно было просто в обоих вариантах вывести data.message, но тут "типа" 
                        answer.innerText = data.errMessage; // еще какая-то логика полразумевается.
                    }
                });
            }
        )
}