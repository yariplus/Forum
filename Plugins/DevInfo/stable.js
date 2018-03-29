$(document).ready(function(){
    var user_fields = proboards.data('user').custom_fields;
    var info = user_fields['Plugin Development Info'];
    if (info == "Display"){
    $('#banner-container').parent().append(
        "<br /><strong>Plugin Developer Info:</strong>"+
        "<br />proboards.data('route').name = "+
        proboards.data('route').name+
        "<br />navigator.appVersion = "+navigator.appVersion
    );
    }
});