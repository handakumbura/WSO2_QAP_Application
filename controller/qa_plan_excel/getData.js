function getDataFromExcel(url){
    var data_return;

    $.ajax({
        async: false,
        url: url,
        headers: { 'Accept': 'application/json' },
        context: document.body
    }).done(function(data) {

            data_return = data;

        }).fail(function() {
           // return false;
            alert("fail");
        });

     return JSON.stringify(data_return);



}