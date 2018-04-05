    
// -- BBC Post Pack 1 --
// author: Tcll(5850)
// created: Nov 15, 2013
// edited: Oct 16, 2014
// --

function Tcll5850_BBCPP1_parse(type, node) {
    //node = $(node);
    
    //if (!!window.Tcll5850_RTBBCP_preview){
    var codes = []; node.find('code').each(function() { codes.push($(this).html()); }); // backup code blocks
    var quotes = []; node.find('.quote_body').each(function() { quotes.push($(this).html()); }); // backup quotes
    //};
    
    //--- [style] ---:
    if (window.Tcll5850_BBCPP1_Settings[2]) {
        
        //console.log(node[0]);
        if (type=='msg'||type=='cnv') {
            
            var uid = 'Tcll5850-PS-style-'+
                $($($($(node.parents()[2]).children()[0]).children()[0]).children()[0]).attr('href').replace(/\//g,'')+'-styles';
            
            var usrStyles = $($($($(node.parents()[2]).children()[0]).children()[0]).children('div.info')).children('.custom-field-customcss');
            usrStyles.hide(); usrStyles.next().hide();
            
            if ($('style#'+uid).length <= 0) {
                var cstyles = document.createElement('style');
                cstyles.type = 'text/css'; cstyles.id = uid;
                document.getElementsByTagName("head")[0].appendChild( cstyles );
                cstyles = $(cstyles); //make jquery object
                cstyles.text(usrStyles.text().replace("Custom CSS: ",""));
            };
            
        };
        
        if (type==null) {var id = 'Tcll5850-PS-style-preview';}
        else if (type=='msg') { var id = 'Tcll5850-PS-style-'+$(node.parents()[6]).attr('id')+'-msg'; }
        else if (type=='cnv') { var id = 'Tcll5850-PS-style-'+$(node.parents()[5]).attr('id')+'-cnv'; }
        else if (type=='sig') { var id = 'Tcll5850-PS-style-'+
            node.parent().parent().prev().find('.user-link').attr('title').replace('@','')+'-sig'; }
        else if (type=='usr') { var id = 'Tcll5850-PS-style-'+$(node.parents()[6]).find('.note.pad-right').text()+'-sig'; };
        
        if ($('style#'+id).length > 0) {
            var PS_style = $('style#'+id);
            PS_style.text(''); //reset this post's style
            //console.log('modified style#'+id);
        }
        else {
            var PS_style = document.createElement('style');
            PS_style.type = 'text/css'; PS_style.id = id;
            document.getElementsByTagName("head")[0].appendChild( PS_style );
            PS_style = $(PS_style); //make jquery object
            //console.log('created style#'+id);
        };
        
        node.html(
            node.html()
            .replace(/\[class=(.+?)\]/g, '<span class=$1>')
            .replace(/\[\/class\]/g, '</span>')
            .replace(/\[style\](.+?)\[\/style\]/g, function(BBC,code) {
                PS_style.text( PS_style.text()+code.replace(/\<br\>/g,'\n') ); //append new styles
                return ''
            })
        )
    };
    
    //--- [glow] ---:
    if (window.Tcll5850_BBCPP1_Settings[1]) {
        var post = node.html();
        if ($.browser.msie && $.browser.version < 9) {
            post = post.replace( /\[glow=none\]/g, '<span style="display: block; filter: -;">');
            post = post.replace( /\[glow=(.+?),(.+?),(.+?)\]/g, 
                '<span style="display: block; filter: glow(Color=$1, Strength=$2) '+
                'blur(add=false, direction=0, strength=1) '+
                'blur(add=false, direction=90, strength=1) '+
                'blur(add=false, direction=180, strength=1) '+
                'blur(add=false, direction=270, strength=1)">');
            post = post.replace( /\[\/glow\]/g, '</span>' );
        } else {
            post = post.replace( /\[glow=none\]/g, '<span style="text-shadow: none;">');
            post = post.replace( /\[glow=(.+?),(.+?),(.+?)\]/g, function(BBC,color,strength,width) {
                var rep = '<span style="text-shadow:';
                for (i=0; i<strength; i++) {
                    if (i>0) {rep+=','};
                    rep+=' 0px 0px '+strength+'px '+color;
                };
                return rep+';">';
            });
            post = post.replace( /\[\/glow\]/g, '<br></span>' ); //IE8 does this
        };
        node.html(post)
    };
    
    //if (!!window.Tcll5850_RTBBCP_preview){
    var i=0; node.find('code').each(function() { $(this).html(codes[i]); i = i+1; }); // restore code blocks
    i=0; node.find('.quote_body').each(function() { $(this).html(quotes[i]); i = i+1; });  // restore quotes
    //};
        
    //--- [code] ---:
    if (window.Tcll5850_BBCPP1_Settings[0] && ( type=='msg' || type=='cnv' )) { 
        //node.find('code').wrap('<pre></pre>');
        node.find('code').each(function() { hljs.highlightBlock($(this).wrap('<pre></pre>').get(0), null, true) });
    };
    
};


function Tcll5850_BBCPP1_preview(node) { Tcll5850_BBCPP1_parse(null, node) };


$(document).ready(function() {
    window.Tcll5850_RTBBCP_preview = false;

    $('head').append('<script src="https://rawgit.com/Tcll5850/Forum/master/Plugins/BBCPP1/syntax.js"></script>')
    $('head').append('<script src="http://highlightjs.org/static/highlight.pack.js"></script>')
    
    window.Tcll5850_BBCPP1_Settings = [false,false,false];
    var bbc_features = pb.plugin.get('bbc_pp1').settings.bbc_features;
    for (var i=0; i<bbc_features.length; i++) {
        switch (bbc_features[i]) {
            case "code": window.Tcll5850_BBCPP1_Settings[0] = true;
            case "glow": window.Tcll5850_BBCPP1_Settings[1] = true;
            case "style": window.Tcll5850_BBCPP1_Settings[2] = true;
        };};
    
    try { // add the resource to the post previewer
        window.Tcll5850_RTBBCP_extensions.push(Tcll5850_BBCPP1_preview);
        if (window.Tcll5850_BBCPP1_Settings[0]) {
            hljs.configure({
                tabReplace: '    ', // 4 spaces
                useBR: true})
        };
    } catch(exc){}; //preview plugin not found

    var route = proboards.data('route');
    var name = route.name;
    //messages/signatures:
    if (name.match(/(thread)|(new|quote|edit)_(thread|post|mess)/)) {
        $('.content div.message:not(.ui-resizable)').each(function() { Tcll5850_BBCPP1_parse('msg',$(this)); });
        $('.signature').each(function() {Tcll5850_BBCPP1_parse('sig',$(this));});
    };
    //convos/signatures:
    if (name.match(/(conversation)|(new|quote|edit)_(conversation|user_conversation)/)) {
        $('td.content div.message:not(.ui-resizable)').each(function() {Tcll5850_BBCPP1_parse('cnv',$(this));});
        $('.signature').each(function() {Tcll5850_BBCPP1_parse('sig',$(this));});
    };
    //profile signatures:
    if (name.match(/user/)) {
        $('.content-box.center-col:last').each(function() {Tcll5850_BBCPP1_parse('usr',$(this));});

        // Custom CSS
        if (window.Tcll5850_BBCPP1_Settings[2]) {
            //$('tr.custom-field-customcss').hide();
            var ccss = $($('tr.custom-field-customcss').children('td')[1]).text();
            //console.log(ccss);
            
            $('head').append('<style id="Tcll5850-PS-style-profile">'+ccss+'</style>');
            
            var pstyle = null;
            for(i = 0; i < document.styleSheets.length; i++){
                if(document.styleSheets[i].ownerNode.id === 'Tcll5850-PS-style-profile') {
                    pstyle = document.styleSheets[i];
                    break;
                }
            }
            
            //console.log(pstyle);
            if (name === 'user') {
                $('tr.custom-field-customcss').children('td.headings').next()
                    .html('<div id="Tcll5850-PS-classes" class="" style="overflow-y:auto; resize: vertical; width: 70%; height:100px;'+
                          ' padding:5px; border-width: 1px; border-style: solid; border-color: #606060;"></div>');
            };
            if (name === 'edit_user_personal') {
                var CCSStext = $('div.custom-field-customcss').children('textarea');
                CCSStext.css('float': 'left');
                CCSStext.after(
                    '<div id="Tcll5850-PS-classes" class="" style="overflow-y:auto; width: 400px; height:100px;'+
                    ' padding:5px; border-width: 1px; border-style: solid; border-color: #606060; border-radius: 5px;"></div>');
            };
            
            var rules=pstyle.cssRules;
            for(j = 0; j< rules.length; j++){
                var sl = rules[j].selectorText.split(',');
                for(k = 0; k< sl.length; k++){
                    var s = sl[k].replace('.','');
                    $('div#Tcll5850-PS-classes').append('<span class="'+s+'">'+s+'</span><br/>');
                };
            };
        };

    };
});