$(document).ready(() => {
    let rusCitys = {};
    let rusRegions = [];
    $.ajax({
        url: "citys.json", // json скачан из интернета. Попался список с регионами - пусть будет два поля, причем список городов зависит от выбранного региона.
        dataType: "json",
        success: (data, Status) => {

            // Полученный файл не идеально соответствует задаче.
            // пусть список городов для каждого региона будет вынесен в отдельный подмассив. 
            for (i of data) {
                if ($.inArray(i.region, rusRegions) == -1) {
                    rusRegions.push(i.region);
                    rusCitys[i.region] = [];
                }
                
                rusCitys[i.region].push(i.city);



            }
            //console.log(rusCitys);

            let regHtml = "";
            for (i of rusRegions) {
                regHtml += `<option>${i}</option>`;
            }
            //console.log(regHtml);

            $("#region").html(regHtml);

            
            $('#region').change(() => {
                let cityHtml = "";
                let key = $('#region :selected').text();
                // console.log(key)
                for (i of rusCitys[key]){
                    cityHtml += `<option>${i}</option>`;
                }
                $("#city").html(cityHtml);
            });



        }
    });

});