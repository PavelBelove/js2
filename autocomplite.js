
$(document).ready(() => {
    let autoCitys = [];
    $.ajax({
        url: "citys.json",
        dataType: "json",
        success: (data, Status) => {
            for (i of data){
                autoCitys.push(i.city);
            };            
        }

    });
    $( "#autocomplite" ).autocomplete({source: autoCitys});
    $( "#autocomplite" ).autocomplete( "option", "minLength", 3 );

//Решение без JQueryUI


$autocomplite = $('#autocomplite2');
$autocomplite.on( 'input', () => {
var $input = $autocomplite.val(),
    $search = $('#search'); //Блок для вывода результатов 
$search.empty();
if ( $input.length > 2 ) {
    var regexp = new RegExp( $input, 'i' ); 
    for ( var i = 0; i < autoCitys.length; i++ ) { 
        if ( autoCitys[i].search(regexp) !== -1 ) {
            $search.append( '<p>' + autoCitys[i] + '</p>' ); 
            $('.search p').addClass('search_result');
        }
    }
}
$( '.search_result' ).on( 'click', function () {
    //console.log( this, this.innerText );
    $autocomplite.val( this.innerText );
    $search.empty();
});
});

//Обработка нажатий клавиатуры на результатах поиска. 

var searchIndex = -1; // Для того, чтобы при нажатии ВНИЗ происходил инкремент на 1 и индекс становился равен 0
$autocomplite.on( 'keydown', function  (event) {
//console.log(event.keyCode );
$('.search_result_active').removeClass( 'search_result_active' );
if (event.keyCode === 40) { //Стрелка ВНИЗ
    if ( searchIndex < $('.search_result').length - 1 ) {
        searchIndex++;
    }
    else {
        searchIndex = 0
    }
    $('.search_result').eq( searchIndex ).addClass( 'search_result_active' );
        //console.log( searchIndex );

}
if (event.keyCode === 38) { //Стрелка ВВЕРХ
    if ( searchIndex > 0 ) {
        searchIndex--;
        //console.log(searchIndex);
    }
    else {
        searchIndex = $('.search_result').length;
    }
    $('.search_result').eq(searchIndex).addClass( 'search_result_active' );
}

if ( event.keyCode === 13 || event.keyCode === 37 || event.keyCode === 39 ) { //Стрелки ВЛЕВО, ВПРАВО и ВВОД
    event.preventDefault();    
    $autocomplite.val( $('.search_result').eq(searchIndex).text() ); 
    $('#search').empty(); 
    searchIndex = -1; 
}
});
});