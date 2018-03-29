// -- Custom Smileys
// aAuthor: Tcll(5850)
// created: May 28, 2014
// edited: Oct 16, 2014
// --

String.prototype.Tcll5850_CS_escapeHTML = function() {
    var tagsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;'
    };
    return this.replace(/[&<>]/g, function(tag) {
        return tagsToReplace[tag] || tag;
    });
};

function Tcll5850_CS_type(obj){
    if(obj===null)return "[object Null]"; // special case
    return Object.prototype.toString.call(obj);
};

function Tcll5850_CS_stringify(obj) { // only tests the cases we need in this plugin
    switch (Tcll5850_CS_type(obj)) {
        case Tcll5850_CS_type([]):
            var string = '[';
			for (var i = 0; i < obj.length; i++) { if (i>0) {string = string+','}; string = string+Tcll5850_CS_stringify(obj[i]); };
            return string+']';
        case Tcll5850_CS_type(''): return '"'+obj+'"';
        case Tcll5850_CS_type(0): return obj;
    };
};

//---

function Tcll5850_CS(node, data) {
    //node = $(node);
    
    //if (!!window.Tcll5850_RTBBCP_preview){
    var codes = []; node.find('code').each(function() { codes.push($(this).html()); }); // backup code blocks
    var quotes = []; node.find('.quote_body').each(function() { quotes.push($(this).html()); }); // backup quotes
    //};
            
    //console.log(data);
    if (data) {
    
            
        data = eval("("+data+")");
        for (var i = 0; i < data.length; i++) {
            var sdat = data[i];
            var smiley = sdat[0];
            var W = sdat[1];
            var H = sdat[2];
            var url = sdat[3];
            
            var img = '<img src="'+url+'" width="'+W+'" height="'+H+'">';
            node.html( node.html().replace(new RegExp(smiley.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&").Tcll5850_CS_escapeHTML(), 'g'), img) );
            
            //node.replaceText(new RegExp(smiley.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&").Tcll5850_CS_escapeHTML(), 'g'), img);
			
        };
            
    };
            
    //if (!!window.Tcll5850_RTBBCP_preview){
    var i=0; node.find('code').each(function() { $(this).html(codes[i]); i = i+1; }); // restore code blocks
    i=0; node.find('.quote_body').each(function() { $(this).html(quotes[i]); i = i+1; });  // restore quotes
    //};
    
};


function Tcll5850_CS_preview(node) {
    var user_fields = proboards.data('user').custom_fields;
    Tcll5850_CS(node, user_fields['Custom Smileys']);
};

//---

function Tcll5850_CS_UI_recalcData() {
	
	window.Tcll5850_CS_UI_data = [];
	var children = window.Tcll5850_CS_UI.children();
	for (var i = 0; i < children.length-1; i++) {
		var child = $(children[i]);
		child.attr('id',i); // adjust ID
		
		var s = child.find('.Tcll5850_CS_UI_input-0');
		var w = child.find('.Tcll5850_CS_UI_input-1');
		var h = child.find('.Tcll5850_CS_UI_input-2');
		var u = child.find('.Tcll5850_CS_UI_input-3');
		window.Tcll5850_CS_UI_data.push(
			[s.attr('value'),w.attr('value'),h.attr('value'),u.attr('value')]
		);
	};
	
	window.Tcll5850_CS_textarea.text(Tcll5850_CS_stringify(window.Tcll5850_CS_UI_data)); // update textarea
};
function Tcll5850_CS_UI_delCell(node) {
	var id = $(node).parent().attr('id');
	if (id>-1) {
		window.Tcll5850_CS_UI_data.splice(id, 1); // remove list instance
		$(node).parent().remove(); // remove UI instance
		
		var children = window.Tcll5850_CS_UI.children();
		for (var i = 0; i < children.length-1; i++) { // validate all nodea
			var child = $(children[i]);
			child.attr('id',i); // adjust ID
			
			var inp = child.find('.Tcll5850_CS_UI_input-0');
			inp.css('background-image',"url('http://images.proboards.com/v5/gradients/concave.png')")
			var data = window.Tcll5850_CS_UI_data;
			for (var i = 0; i < data.length; i++) {
				if (i==child.attr('id')) { continue; };
				if (data[i][0]==inp.attr('value')) {
					inp.css('background-image',
						"url('http://lh3.ggpht.com/-OwUObh78IC4/U4p__lteXpI/AAAAAAAAGpk/nw55Tkjdrwc/s100/concave_red.png')"
					);
					break;
				};
			};
			
		};
		
		window.Tcll5850_CS_textarea.text(Tcll5850_CS_stringify(window.Tcll5850_CS_UI_data)); // update textarea
	};
};

function Tcll5850_CS_UI_UDCell(node,pos,sdat) {
	var children = window.Tcll5850_CS_UI.children();
	var id = $(node).parent().parent().attr('id')
	if (id==-1) {
		id = window.Tcll5850_CS_UI_data.length;
		window.Tcll5850_CS_UI.children(':last-child').attr('id',id);
		window.Tcll5850_CS_UI_data.push(sdat);
		Tcll5850_CS_UI_addCell(-1, ['',1,1,'']);
	};
    window.Tcll5850_CS_UI_data[id][pos] = $(node).attr('value');
	if (pos==0) { // validate node
		$(node).css('background-image',"url('http://images.proboards.com/v5/gradients/concave.png')");
		for (var i = 0; i < children.length; i++) {
			if (i==id) { continue; };
			if ($(children[i]).find('.Tcll5850_CS_UI_input-0').attr('value') == $(node).attr('value')) {
				$(node).css('background-image',"url('http://lh3.ggpht.com/-OwUObh78IC4/U4p__lteXpI/AAAAAAAAGpk/nw55Tkjdrwc/s100/concave_red.png')");
				break;
			};
		};
	} else { // update image
        var img = $($($(node).parent().parent().children()[0]).children()[1]);
        if (pos==1) {img.attr('width',$(node).attr('value'))}
        else if (pos==2) {img.attr('height',$(node).attr('value'))}
        else if (pos==3) {img.attr('src',$(node).attr('value'))};
    };
    window.Tcll5850_CS_textarea.text(Tcll5850_CS_stringify(window.Tcll5850_CS_UI_data));
};

//---

function Tcll5850_CS_UI_addCell(index, sdat) {
    
    // delete button images (over and out)
    var x1 = 'http://lh6.ggpht.com/-GUllnCS2spU/U4ijkjR74wI/AAAAAAAAGmo/5GxnkGPSlpA/s10/x.png';
    var x2 = 'http://lh5.ggpht.com/-nk_Uo3Lawvc/U4ng9gDxtBI/AAAAAAAAGoc/hqPZZjWn4So/s10/x2.png';
    
    var smiley = sdat[0];
    var W = sdat[1];
    var H = sdat[2];
    var url = sdat[3];
	
	var bgimg = "url('http://images.proboards.com/v5/gradients/concave.png')";
	if (index>-1) { // validate node
		var data = window.Tcll5850_CS_UI_data;
		for (var i = 0; i < data.length; i++) {
			if (i==index) { continue; };
			if (data[i][0]==smiley) {
				bgimg="url('http://lh3.ggpht.com/-OwUObh78IC4/U4p__lteXpI/AAAAAAAAGpk/nw55Tkjdrwc/s100/concave_red.png')"
				break;
			};
		};
	};
    
    if (W>32) { var iW = 32; }
    else { var iW = W; };
    if (H>32) { var iH = 32; }
    else { var iH = H; };
	
	var str_sdat = '[\''+smiley+'\','+W+','+H+',\''+url+'\']';
    
    var cell = ''+
        '<div class="Tcll5850_BBC_CS_UI_cell" id="'+index+'" style="resize: none;">'+
        	'<div style="float:left;width:32px;height:32px;text-align:center;">'+
            	'<span style="display:inline-block;vertical-align:middle;height:100%;"></span>'+
            	'<img style="vertical-align:middle;max-width:32px;max-height:32px;" src="'+url+'" width="'+iW+'" height="'+iH+'" /></div>'+
            '<div style="float:left;width:10px;">&nbsp;</div>'+
            '<div style="float:left;text-align:center;font-size:7pt;">W<br>'+
            	'<input type="text" value="'+W+'" maxlength="2" style="width:16px;" class="Tcll5850_CS_UI_input-1" '+
            		'onkeyup="Tcll5850_CS_UI_UDCell(this,1,'+str_sdat+')" ></input></div>'+
            '<div style="float:left;width:10px;">&nbsp;</div>'+
            '<div style="float:left;text-align:center;font-size:7pt;">H<br>'+
            	'<input type="text" value="'+H+'" maxlength="2" style="width:16px;" class="Tcll5850_CS_UI_input-2" '+
            		'onkeyup="Tcll5850_CS_UI_UDCell(this,2,'+str_sdat+')" ></input></div>'+
            '<div style="float:left;width:10px;">&nbsp;</div>'+
            '<div style="float:left;text-align:center;font-size:7pt;">Smiley<br>'+
            	'<input type="text" value="'+smiley+'" maxlength="20" '+
        			'style="width:80px;background-image:'+bgimg+'" class="Tcll5850_CS_UI_input-0" '+
        			'onkeyup="Tcll5850_CS_UI_UDCell(this,0,'+str_sdat+');" ></input></div>'+
        
            '<img style="float:right;vertical-align:top;" src="'+x1+'" '+
            	'onmouseover="this.src=\''+x2+'\'" onmouseout="this.src=\''+x1+'\'"'+
        		'onclick="Tcll5850_CS_UI_delCell(this)" />'+
        
            '<br><div style="float:left;text-align:left;font-size:7pt;width:100%;">Image:<br>'+
            	'<input type="text" value="'+url+'" maxlength="200" style="width:97%;" class="Tcll5850_CS_UI_input-3" '+
            		'onkeyup="Tcll5850_CS_UI_UDCell(this,3,'+str_sdat+')" ></input></div>'+
        '</div>';
    
    window.Tcll5850_CS_UI.append(cell);
};

//---

$('head').append(`<style type="text/css">
.Tcll5850_CS_UI {
    border: 1px solid rgb(96, 96, 96);
    border-radius: 5px;
    width:735px; height:330px;
    overflow-x:hidden;
    overflow-y:auto;
    margin-top: 5px;
}

.Tcll5850_BBC_CS_UI_cell {
    /*background-color: #383838;*/
    background-image: url(http://lh6.ggpht.com/-XwsupDJSdF0/Uhj-4H_1EUI/AAAAAAAAEvs/6KCrCFox2EY/s16/BGTO.png);
    border-radius: 5px;
    width:205px;
    float:left; margin:12px 0px 0px 12px;
    /*box-shadow: 0 0 10px #0f0;*/
    font-size:8pt;
    padding: 10px;
    overflow:auto;
}
</style>`);

$(document).ready(function() {
    window.Tcll5850_RTBBCP_preview = false;
            
    try {window.Tcll5850_RTBBCP_extensions.push(Tcll5850_CS_preview)}
    catch(exc){}; //preview plugin not found
    var name = proboards.data('route').name;
    
    if (name.match(/(user)/)) {
        $('tr.custom-field-customsmileys').hide();
    };
    
    //editing profile:
    if (name == 'edit_user_personal') {
        $('div.custom-field-customsmileys').show();
        window.Tcll5850_CS_textarea = $('div.custom-field-customsmileys').children('textarea');
        var usrData = window.Tcll5850_CS_textarea;
        usrData.hide();
        
        usrData.after('<div class="Tcll5850_CS_UI" style="resize: vertical;"></div>');
		window.Tcll5850_CS_UI = $('div.Tcll5850_CS_UI');
		window.Tcll5850_CS_UI.sortable();
		
        var data = window.Tcll5850_CS_textarea.text();
        if (data) { window.Tcll5850_CS_UI_data = eval("("+data+")"); }
        else {window.Tcll5850_CS_UI_data = []};
        for (var i = 0; i < window.Tcll5850_CS_UI_data.length; i++) {
            Tcll5850_CS_UI_addCell(i, window.Tcll5850_CS_UI_data[i]);
        };
        Tcll5850_CS_UI_addCell(-1, ['',1,1,''])
        
		window.Tcll5850_CS_UI.bind("DOMSubtreeModified",function(){
			Tcll5850_CS_UI_recalcData();
		}); // keep this as last
		
    };
    
    //messages:
    if (name.match(/(thread|conversation)|(new|quote|edit)_(thread|post|mess|conversation|user_conversation)/)) {
        
        $('.info').each( function() {
            var parent = $(this).parent();
            if (parent.attr('class') == "mini-profile") {
                var data = $(this).children('.custom-field-customsmileys')
                data.hide(); data.next().hide();
                
                data = data.text().replace("Custom Smileys: ","");
                    
                if (name.match(/thread/)) { var message = parent.parent().next().children('article').children('.message'); };
                if (name.match(/conversation/)) { var message = parent.parent().next().children('.message'); };
                Tcll5850_CS(message,data);
            };
            
        });
                
        //$('.content .message').each(function() { $(this).html( Tcll5850_CSmileys($(this).html()) ) });
        //$('.signature').each(function() { $(this).html( Tcll5850_CSmileys($(this).html()) ) });
    };
    
    /* (perhapse later)
    //profile signatures:
    if (name.match(/user/)) {
        $('.content-box.center-col:last').each(function() { $(this).html( Tcll5850_CSmileys($(this).html()) ) });
	*/
    
});