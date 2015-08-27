$(document).ready(function(){

    $('#btn-light-master-room').click(function(){
        var ajaxRespond = $.ajax(
            {
                url: 'wqeqweq'
            }
        ).success(function(data){
            Materialize.toast(data, 4000);
        }).error(function(err){
            Materialize.toast('There was an error: ' + err.responseText + " (" + err.status+":"+err.statusText+")", 5000);
        });
    });
    
});

