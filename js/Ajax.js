function Ajax(url,type,data,callback){
    $.ajax({
        url: "http://106.14.113.124:8027/"+url,
        type: type,
        dataType: 'json',
        data: data,
    })
    .done(function(result) {
        console.log("success");
        callback(result);
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}