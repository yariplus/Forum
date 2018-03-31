/*
* RolePlay Characters
*
* Author: Tcll(5850)
* Created: March 13, 2014
* Last Modified: July 4, 2014
*/
/*
function Tcll5850_RPC_Create(name){
    var github = new Github({
        token: "OAUTH_TOKEN",
        auth: "oauth"
    });
};

function Tcll5850_RPChars(post) {
    
    return post
};

function RPChars_getDialogs(script) {
    //translate the given character data(s) into callable HTML
    script = script.replace(/(\r\n|\n|\r)/gm,"");
    //console.log(script);
    
    var chars = {};
    
    var DefaultImage = "http://images.proboards.com/v5/defaultavatar.png"
    script.replace(/(.+?){(.+?)};/g, function(raw,name,code) {
        code = eval('({'+code+'})'); //make into a dictionary
        
        //styles:
        var BG = '""';
        var Ava = '""';
        var Name = '""';
        var Text = '""';
        
        //console.log(code);
        if (code.BG) {
            //var data = eval('('+code.BG+')');
            var data = code.BG
            //console.log(data);
            
            if (/{(.+?)}/.test(data)) {
                BG = '"'+data.replace(/{(.+?)},/, function(raw,CSS){return CSS})+'"';
            } else {
                BG = '"background-image: url('+data+');"'
            };
            
        };
        //console.log(BG);
        
        chars[code.id] = '';
        
        return '';
    });
    
    //console.log(chars);
    return chars;
    
};

$(document).ready(function() {
    //try {window.previewer_extensions.push(Tcll5850_BBC_glow_pre)}
    //catch(exc){}; //preview plugin not found
    var name = proboards.data('route').name;
    
    //we are no longer using localstorage, any data that hasn't been cleared will be cleared here:
    window.localStorage.clear()
    
    //messages:
    if (name.match(/(thread|conversation)/)) {
        $('.info').each( function() {
            var parent = $(this).parent();
            if (parent.attr('class') == "mini-profile") {
                var RPCdata = $(this).children('.custom-field-roleplaycharacters');
                RPCdata.hide(); RPCdata.next().hide();
                
                var UL = parent.children('.user-link');
                var user = UL.attr('title')
                    .replace('@','')
                    //.replace(/^\s*|\s*$/g, "") // trim
                    ;
                
            };
            
        }); //each( function() {
    };
    
    //messages (extended with editor pages):
    if (name.match(/(thread|conversation)|(new|quote|edit)_(thread|post|mess|conversation|user_conversation)/)) {
        
        //only calculate dialog contents where we need them
        //window.Tcll5850_RPCdialogs = Tcll5850_RPChars_dialogs( data )
        
        $('.content .message').each(function() { $(this).html( Tcll5850_RPChars($(this).html()) ) });
    };
    
        //profiles
    if (name.match(/(user)/)) {
        var RPCdata = $('tr.custom-field-roleplaycharacters');
        RPCdata.hide();
        
        
        var user = $('div.container.show-user').children('.title-bar').children('h1')
            .text().replace(/(.+?)\((.+?)\)/,function( RAW, N, id ){return id});
        
    };
    
    var user_fields = proboards.data('user').custom_fields;
    var dialogs = RPChars_getDialogs(user_fields['RolePlay Characters']);
    
    
});
*/