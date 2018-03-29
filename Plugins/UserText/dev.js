
// -- User Styles --
// author: Tcll(5850)
// created: Nov 26, 2013
// edited: Oct 16, 2014
// --

function Tcll5850_user_styles(glow_color, glow_strength) {
    var shadow = ''; for (i=0; i<glow_strength; i++) { if (i>0) {shadow+=','}; shadow+=' 0px 0px '+glow_strength+'px '+glow_color; };
    return shadow;
};

function Tcll5850_user_styles_preview(node) {
    //node = $(node);
    
    var user_fields = proboards.data('user').custom_fields;
    var color = user_fields['Text Color']; var glow = user_fields['Glow Color']; var strength = user_fields['Glow Strength'];
    
    node.css({"color":color,"text-shadow":Tcll5850_user_styles(glow, strength)});
    node.find('code').each(function() { $(this).css({"text-shadow":'none'}); });
    node.find('.quote_body').each(function() { $(this).css({"text-shadow":'none'}); });
};

$(document).ready(function() {
    window.Tcll5850_RTBBCP_preview = false;
            
    try {window.Tcll5850_RTBBCP_extensions.push(Tcll5850_user_styles_preview)}
    catch(exc){} //preview plugin not found
    var name = proboards.data('route').name;
    
    if (name.match(/(user)/)) {
        $('tr.custom-field-textcolor').hide();
        $('tr.custom-field-glowcolor').hide();
        $('tr.custom-field-glowstrength').hide();
        $('tr.custom-field-showcustomposteffects').hide();
        
        // temporary
        $('tr.custom-field-roleplaycharacters').hide();
    };
    /*
    if (name == 'edit_user_personal') { 
        //TODO: restructure the dialogs
    };
    */
    //messages:
    if (name.match(/(thread|conversation)/)) {
        try {
            var user_fields = proboards.data('user').custom_fields;
            var enabled = user_fields['Show Custom Post Effects'];
        } catch(exc) {var enabled = true}
        
        $('.info').each( function() {
            var parent = $(this).parent();
            if (parent.attr('class') == "mini-profile") {
                
                var color = $(this).children('.custom-field-textcolor');
                var glow = $(this).children('.custom-field-glowcolor');
                var strength = $(this).children('.custom-field-glowstrength');
                var showcustomposteffects = $(this).children('.custom-field-showcustomposteffects');
                
                var textColor = color.text().replace("Text Color: ","");
                var glowColor = glow.text().replace("Glow Color: ","");
                var glowStrength = strength.text().replace("Glow Strength: ","");
                color.hide(); color.next().hide();
                glow.hide(); glow.next().hide();
                strength.hide(); strength.next().hide();
                showcustomposteffects.hide(); showcustomposteffects.next().hide();
                
                //console.log(enabled.text().replace("Show Custom Post Effects: ","") == "Yes");
                if (enabled == "Yes") {
                    //var div = Tcll5850_user_styles(textColor, glowColor, glowStrength);
                    if (name.match(/thread/)) { var node = parent.parent().next().children('article').children('.message'); };
                    if (name.match(/conversation/)) { var node = parent.parent().next().children('.message'); };
                    
                    //console.log(message.attr('class'));
                    //message.html(div+Tcll5850_user_styles_code_fix(message.html())+"</div>");
                    node.css({"color":textColor,"text-shadow":Tcll5850_user_styles(glowColor, glowStrength)});
                    node.find('code').each(function() { $(this).css({"text-shadow":'none'}); });
                    node.find('a').each(function() { $(this).css({"text-shadow":'none'}); });
                    node.find('.quote_body').each(function() { $(this).css({"text-shadow":'none'}); });
                };
                
                // temporary
                var RPCdata = $(this).children('.custom-field-roleplaycharacters');
                RPCdata.hide(); RPCdata.next().hide();
            };
            
        });
    };
});