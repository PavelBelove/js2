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
});