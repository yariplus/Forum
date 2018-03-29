
// -- Real-Time Post Preview --
// author: Tcll(5850)
// created: Oct 31, 2013
// edited: Nov 16, 2014
// --


function Tcll5850_RTBBCP_Spoiler(div) {
    if (div.getElementsByTagName('div')[0].style.display != 'block') { 
        div.getElementsByTagName('div')[0].style.display = 'block';
        div.getElementsByTagName('a')[0].innerHTML = 'SPOILER: Click to hide'; } else { 
        div.getElementsByTagName('div')[0].style.display = 'none';
        div.getElementsByTagName('a')[0].innerHTML = 'SPOILER: Click to show'; }
};

function Tcll5850_RTBBCP_Quote(fields) {
    var quote_author = /author="(.+?)"/g.exec(fields);
    var quote_timestamp = /timestamp="(.+?)"/g.exec(fields);
    var quote_source = /source="(.+?)"/g.exec(fields);
    var newDate = new Date();
    newDate.setTime(quote_timestamp*1000 + newDate.getTimezoneOffset()*60000);
	var quote_date_string = newDate.toUTCString();
    
    return '<div class="quote" source="'+quote_source+'" timestamp="'+quote_timestamp+'" author="'+quote_author+
        '"><div class="quote_body"><div class="quote_avatar_container"><div class="avatar-wrapper avatar_size_quote avatar-1">'+
        '<img src="http://images.proboards.com/v5/defaultavatar.png" alt="'+quote_author+
        ' Avatar"/></div></div><div class="quote_header"><a href="'+quote_source+'"><abbr data-timestamp="'+quote_timestamp+
        '" class="time" title="'+quote_date_string+'">'+quote_date_string+
        '</abbr></a><span itemscope="" itemtype="http://schema.org/Person"><a href="/user/1" class="user-link" itemprop="url" title="'+
        quote_author+'" style="color: #cc3300;" data-icon-check="1"><span itemprop="name"> '+quote_author+'</span></a></span> said:</div>'
};

function Tcll5850_RTBBCP_BBC2HTML( node, str ) {
    
    node.html( str
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        
        //code
        .replace(/\[code\]/g,'<code>')
        .replace(/\[\/code\]/g,'</code>')
    );
    
    node.find('code').each(function() { 
        $(this).html( $(this).html()
            .replace(/\[/g, "&#91;")
            .replace(/\]/g, "&#93;")
            .replace(/'/g, "&#39;")
            .replace(/"/g, "&quot;")
            .replace(/ /g, '&nbsp;') )
    });
    
    //display formatting
    node.html( node.html()
        //.replace(/\n/g, '<br>')
        
        .replace(/\[quote\]/g, '<div class="quote no_header"><div class="quote_body">' )
        .replace(/\[quote(.+?)\]/g, Tcll5850_RTBBCP_Quote("$1") )
        .replace(/\[\/quote\]/g, '<div class="quote_clear"/></div></div>')
        
        //HTML BBC tags
        .replace(/\[a(.+?)\]/g,'<a$1>')
        .replace(/\[\/a\]/g,'</a>')
        .replace(/\[font(.+?)\]/g,'<font$1>')
        .replace(/\[\/font\]/g,'</font>')
        .replace(/\[img\](.+?)\[\/img\]/g,'<img src="$1" />')
        .replace(/\[img(.+?)\]/g,'<img$1 \>')
        //str = str.replace(/\[\/img\]/g,'</img>');
        .replace(/\[div\]/g,'<div>')
        .replace(/\[div(.+?)\]/g,'<div$1>')
        .replace(/\[\/div\]/g,'</div>')
        //tables
        .replace(/\[table\]/g,'<table>')
        .replace(/\[\/table\]/g,'</table>')
        .replace(/\[tbody\]/g,'<tbody>')
        .replace(/\[\/tbody\]/g,'</tbody>')
        .replace(/\[tr\]/g,'<tr>')
        .replace(/\[\/tr\]/g,'</tr>')
        .replace(/\[td\]/g,'<td>')
        .replace(/\[\/td\]/g,'</td>')
        
        //lists
        .replace(/\[ul(.+?)\]/g,'<ul$1>')
        .replace(/\[\/ul\]/g,'</ul>')
        .replace(/\[ol(.+?)\]/g,'<ol$1>')
        .replace(/\[\/ol\]/g,'</ol>')
        .replace(/\[li\]/g,'<li>')
        .replace(/\[\/li\]/g,'</li>')
        
        //old-style BBC tags
        .replace(/\[size=(.+?)\]/g,'<font size="$1">')
        .replace(/\[\/size\]/g,'</font>')
        .replace(/\[color=(.+?)\]/g,'<font color="$1">')
        .replace(/\[\/color\]/g,'</font>')
        .replace(/\[u\]/g,'<u>')
        .replace(/\[\/u\]/g,'</u>')
        .replace(/\[s\]/g,'<s>')
        .replace(/\[\/s\]/g,'</s>')
        .replace(/\[b\]/g,'<strong>')
        .replace(/\[\/b\]/g,'</strong>')
        .replace(/\[hr\]/g,'<hr>')
        .replace(/\[\/hr\]/g,'</hr>')
        
        //.replace(/( |\n)(http(|s):\/\/|www.)(.+?)( |\n)/g,'<a href="$2" target=“_blank">$1$2</a>$3')
        .replace(/\[url\](.+?)\[\/url\]/g,'<a href="$1" target=“_blank">$1</a>')
        .replace(/\[url=(.+?)\]/g,'<a href="$1" target=“_blank">')
        .replace(/\[\/url\]/g,'</a>')
        
        .replace(/\[\/spoiler\]/g, '<div style="cursor:pointer;cursor:hand" onclick="Tcll5850_RTBBCP_Spoiler(this)"><a href="javascript:void(0);">SPOILER: Click to show</a><div style="display: none;">')
        .replace(/\[spoiler\]/g, '</div></div>')
        
    	.replace(/\n/g, '<br>')
    );
    
};

function Tcll5850_RTBBCP_UD() {
    if ($('.editor.bbcode-editor').is(':visible')) {
        $(".preview-area").show();
        Tcll5850_RTBBCP_BBC2HTML( $(".preview-area.message"), $(".editor.bbcode-editor").children()[0].value );
        for ( eid=0; eid<window.Tcll5850_RTBBCP_extensions.length; eid++ ) { window.Tcll5850_RTBBCP_extensions[eid]($(".preview-area.message")); };
        //$(".preview-area.message").html($(".preview-area.message").html())
    } else {$(".preview-area").hide()};
};

function Tcll5850_RTBBCP_UDQ() {
    Tcll5850_RTBBCP_BBC2HTML( $(".preview-area.message"), $(".content.cap-bottom:last .message.ui-resizable textarea").val() );
    for ( eid=0; eid<window.Tcll5850_RTBBCP_extensions.length; eid++ ) { window.Tcll5850_RTBBCP_extensions[eid]($(".preview-area.message")); };
    //$(".preview-area.message").html($(".preview-area.message").html())
};

$(document).ready(function() {
    var page_id = proboards.data('route').name;
    var allow_in_quick_reply = true;//$[plugin.settings.allow_in_quick_reply]; //true //default
    /*TODO: override with global profile setting*/
    if (page_id.match(/(new|quote|edit)_(thread|post|mess|conversation|user_conversation)/)) {
        $('<div class="preview-area posts"><div class="post"><div class="content-head"></div></div></div>\
		   <div class="preview-area posts"><div class="post"><div class="content-head"> <div class="preview-area message"></div> </div></div></div>')
            .insertBefore("div.ui-wysiwyg");
        $(".float-right:first").prepend('<input id="preview_button" onclick="Tcll5850_RTBBCP_UD()" tabindex="4" value="Preview" type="button"/>');
        $(".float-right:first").prepend('<input id="auto_preview" tabindex="4" type="checkbox" checked="checked"/>Auto');
        $(".editor.bbcode-editor").keyup(function() { if ($('#auto_preview:checked').val() !== undefined) { Tcll5850_RTBBCP_UD() } });
    };
    if (allow_in_quick_reply){
        if (page_id.match(/(thread|conversation)/)) {
            $(".content.cap-bottom:last .message.ui-resizable").prepend(
                '<div class="posts"><div class="preview-area post"><div class="content-head"> <div class="preview-area message"></div> </div></div></div>');
            $(".content.cap-bottom:last .message.ui-resizable").parent().append('<input id="preview_button" onclick="Tcll5850_RTBBCP_UDQ()" tabindex="4" value="Preview" type="button"/>');
            $(".content.cap-bottom:last .message.ui-resizable").parent().append('<input id="auto_preview" tabindex="4" type="checkbox" checked="checked"/>Auto');
            $(".content.cap-bottom:last .message.ui-resizable textarea").keyup(function() { if ($('#auto_preview:checked').val() !== undefined) { Tcll5850_RTBBCP_UDQ() } });
        };
    };
});