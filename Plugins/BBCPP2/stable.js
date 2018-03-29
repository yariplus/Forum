
// -- BBC Post Pack 2 --
// author: Tcll(5850)
// created: Nov 9, 2013
// edited: Oct 16, 2014
// --

//--- [tabs][tab] ---:

function Tcll5850_PTabs_TabOff(tab) {
	if (tab.hasClass('post-tabs-tab-over')) { tab.removeClass('post-tabs-tab-over') };
	if (tab.hasClass('post-tabs-tab-active-over')) {
        tab.removeClass('post-tabs-tab-active-over'); tab.addClass('post-tabs-tab-active') };
};
function Tcll5850_PTabs_TabOn(tab) {
	if (tab.hasClass('post-tabs-tab-active')) {
        tab.removeClass('post-tabs-tab-active'); tab.addClass('post-tabs-tab-active-over') }
	else { tab.addClass('post-tabs-tab-over') };
};

function Tcll5850_PTabs_Fix_Tab_Width(tr) {
    var start = tr.children('td:first'); var end = tr.children('td:last');
    var hide = tr.children('td.post-tabs-tab.post-tabs-hide-tab');
    if (start.is(':visible')){ var startw = start.width() }else{ var startw = 0 };
    if (end.is(':visible')){ var endw = end.width() }else{ var endw = 0 };
    if (hide.length){ var hideable = 1;
        if (hide.is(':visible')){ var hidew = hide.width() }else{ var hidew = 0 };
    }else{ var hideable = 0; var hidew = 0; };
    var tabw = (tr.width()-(startw+hidew+endw))/(tr.children('td').length - (2+hideable));
    
    if (tr.children('.spacer').length) {
        tr.children('td').width('1px');
        tr.children('.spacer').width(tr.width()+'px');
    } else {
        tr.children('td').width(tabw+'px');
        tr.children('td:first').width(startw+'px');
        tr.children('td:last').width(endw+'px');
        tr.children('td:last').prev().width(hidew+'px');
    };
};


function Tcll5850_PTabs_Activate_Tab(tab) {
    var tr = tab.parent();
    tr.children('td:last').prev().show();
    tr.children('td').removeClass('post-tabs-tab-active');
    tab.addClass('post-tabs-tab-active-over');
    Tcll5850_PTabs_Fix_Tab_Width(tr);
    
    var dtd = tab.parent().parent().children('tr:last').children('td');
    dtd.html( tab.children('div:last').html() );
    dtd.show();
    Tcll5850_PTabs_finalize(dtd);
};

function Tcll5850_PTabs_Hide_Tab(tab) {
    var tr = tab.parent();
    tr.children('td').removeClass('post-tabs-tab-active');
    Tcll5850_PTabs_Fix_Tab_Width(tr);
    
    var dtd = tab.parent().parent().children('tr:last').children('td');
    dtd.hide(); tab.hide();
};

//--- [tree][node] ---:

//Array.prototype.isArray = true;


function Tcll5850_BBC_tree_collapse(node) {
    node.parent().next().toggle();
    node.next().toggle();
    node.toggle();
};

function Tcll5850_BBC_tree_expand(node) {
    node.parent().next().toggle();
    node.prev().toggle();
    node.toggle();
};




function Tcll5850_BBC_tree_toArray(nodes) {
    var len = nodes.length;
    var node = [];
    while (true) {
        var line = nodes[window.Tcll5850_BBC_tree_parseIndex];
        window.Tcll5850_BBC_tree_parseIndex++;
        
        if (window.Tcll5850_BBC_tree_parseIndex>=len) { break }; //should only be hit once for the outer level
        if (/\[\/node\]/i.test(line)) { break };
        if (line=='') { continue }; //skip blank nodes
        
        if (/\[node\]/i.test(line)) { node.push( [ line.replace(/\[node\]/i,'') ].concat( Tcll5850_BBC_tree_toArray(nodes) ) ) }
        else { node.push(line) };
    };
    return node;
};

function Tcll5850_BBC_tree_tohtml(level,data) {
    var size = data.length;
    var html = '';
    var i = 0;
    while (i<size) {
        var n = data[i];
        if (n instanceof Array) {
            if (i==size-1) { //last node
                html += '<div class="Tcll5850_BBC_tree_node">'+level+
                    '<img class="Tcll5850_BBC_tree_node_img Tcll5850_BBC_tree_node_expand" onclick="Tcll5850_BBC_tree_collapse($(this));" alt="" src="http://lh5.ggpht.com/-vbUDNXbyQyI/Un3LSjFdMHI/AAAAAAAAFm0/iPekviEHBBw/s16/collapse_end.gif" /> '+
                    '<img class="Tcll5850_BBC_tree_node_img Tcll5850_BBC_tree_node_expand" style="display:none;" onclick="Tcll5850_BBC_tree_expand($(this))" alt="" src="http://lh4.ggpht.com/-oH8WZL-n60I/Un3LTaQRvRI/AAAAAAAAFnQ/fWCPpsoFc1g/s16/expand_end.gif" /> '+
                    n[0]+"</div><div>"; //node
                //next level:
                html += Tcll5850_BBC_tree_tohtml( level+
                    '<img class="Tcll5850_BBC_tree_node_img" alt="" src="http://lh4.ggpht.com/-ETsi3Wno_OQ/Un3LVGRCx4I/AAAAAAAAFoU/9_8yXFDVEfE/s16/space.gif" /> ',
                    n.slice(1) ); //sub-tree
            } else { //mid node
                html += '<div class="Tcll5850_BBC_tree_node">'+level+
                    '<img class="Tcll5850_BBC_tree_node_img Tcll5850_BBC_tree_node_expand" onclick="Tcll5850_BBC_tree_collapse($(this));" alt="" src="http://lh5.ggpht.com/-lvpOnsQtXTY/Un3LSprFErI/AAAAAAAAFm4/N5TEoCpqSKk/s16/collapse_mid.gif" /> '+
                    '<img class="Tcll5850_BBC_tree_node_img Tcll5850_BBC_tree_node_expand" style="display:none;" onclick="Tcll5850_BBC_tree_expand($(this))" alt="" src="http://lh5.ggpht.com/-a8DFHFzVRJI/Un3LTS0WmBI/AAAAAAAAFnY/vgqyvF49bbg/s16/expand_mid.gif" /> '+
                    n[0]+"</div><div>"; //node
                html += Tcll5850_BBC_tree_tohtml( level+
                    '<img class="Tcll5850_BBC_tree_node_img" alt="" src="http://lh6.ggpht.com/-S_gcbCJ_eNw/Un3LUNbQojI/AAAAAAAAFnw/wjrkt8oarjM/s16/fall.gif" /> ', 
                    n.slice(1) ); //sub-tree
            };
        }
        else { //single node
            if (i==size-1) { //last single node
                html += '<div class="Tcll5850_BBC_tree_node">'+level+
                    '<img class="Tcll5850_BBC_tree_node_img" alt="" src="http://lh5.ggpht.com/-kDYQRi6hgMI/Un3LUZ7WtNI/AAAAAAAAFn4/4GbJ3xTqex8/s16/single_end.gif" /> ';
            } else { //mid single node
                html += '<div class="Tcll5850_BBC_tree_node">'+level+
                    '<img class="Tcll5850_BBC_tree_node_img" alt="" src="http://lh3.ggpht.com/-usiv0zsGSCs/Un3LUk1z4CI/AAAAAAAAFoI/ypTS5dSepTc/s16/single_mid.gif" /> ';
            };
            html += n;
        };
        html += '</div>';
        i++;
    };
    return html;
};

function Tcll5850_BBCPP2_parse(node) {
    //node = $(node);
    
    //if (!!window.Tcll5850_RTBBCP_preview){
    var codes = []; node.find('code').each(function() { codes.push($(this).html()); }); // backup code blocks
    var quotes = []; node.find('.quote_body').each(function() { quotes.push($(this).html()); }); // backup quotes
    //};
    
    //--- [tree] ---:
    if(window.Tcll5850_BBCPP2_Settings[0]) {
        node.html( node.html().replace( /\[tree\](.+?)\[\/tree\]/g, function(nodes){ 
            window.Tcll5850_BBC_tree_parseIndex = 0;
            var BBC = '<div style="display: none">'+nodes+'</div>'; //hide the original text so it'll show in the editor
            nodes = nodes.replace(/\[tree\]/i,'');
            nodes = nodes.replace(/\[\/tree\]/i,'');
            var html = Tcll5850_BBC_tree_tohtml( '', Tcll5850_BBC_tree_toArray(nodes.split(/<br>/g)) );
            return '<div style="font-size: 10pt">'+BBC+html+'</div>';
        }) );
	};
    
    //--- [tabs] ---:
    if(window.Tcll5850_BBCPP2_Settings[1]) {
        node.html( node.html().replace( /\[tabs=(.+?)\]/g, '<table cellpadding="0" cellspacing="0" class="post-tabs"><tbody><tr>'+
            '<td colspan="32" class="post-tabs-header">$1</td></tr><tr class="post-tabs-tab-container">'+
            '<td class="post-tabs-tab post-tabs-start-tab"></td>' )
        
        .replace( /\[tabs\]/g, '<table class="tabs"><tbody><tr class="post-tabs-tab-container">'+
            '<td class="post-tabs-tab post-tabs-start-tab"></td>' )
        
        .replace( /\[\/tabs\]/g, 
            '<td class="post-tabs-tab post-tabs-end-tab"></td></tr><tr><td colspan="32" class="post-tabs-tab-content"></td></tr></tbody></table>' )
        .replace( /\[\/tabs=hide\]/g, 
            '<td style="display:none" class="post-tabs-tab post-tabs-hide-tab" onclick="Tcll5850_PTabs_Hide_Tab($(this))" '+
            'onmouseover="Tcll5850_PTabs_TabOn($(this))" onmouseout="Tcll5850_PTabs_TabOff($(this))">hide</td>'+
            '<td class="post-tabs-tab post-tabs-end-tab"></td></tr><tr><td colspan="32" class="post-tabs-tab-content"></td></tr></tbody></table>' )
        
        .replace( /\[tab\]\[\/tab\]/g, '<td style="width:100%;" class="post-tabs-tab spacer"><div/></td>' )
        .replace( /\[tab=(.+?)\]/g, '<td class="post-tabs-tab" onclick="Tcll5850_PTabs_Activate_Tab($(this))" '+
            'onmouseover="Tcll5850_PTabs_TabOn($(this))" onmouseout="Tcll5850_PTabs_TabOff($(this))">$1<div style="display:none">' )
        .replace( /\[\/tab\]/g, '</div></td>' ) );
        
        node.find('tr.post-tabs-tab-container').each(function() { Tcll5850_PTabs_Fix_Tab_Width($(this)) });
	};
    
    //if (!!window.Tcll5850_RTBBCP_preview){
    var i=0; node.find('code').each(function() { $(this).html(codes[i]); i = i+1; }); // restore code blocks
    i=0; node.find('.quote_body').each(function() { $(this).html(quotes[i]); i = i+1; });  // restore quotes
    //};
    
};



$(document).ready(function() {
    window.Tcll5850_RTBBCP_preview = false;

    $('head').append('<script src="https://floobits.com/Tcll/Forum/raw/Plugins/BBCPP2/styles.js"></script>')
    
    window.Tcll5850_BBCPP2_Settings = [false,false];
    var bbc_features = pb.plugin.get('bbc_pp2').settings.bbc_features;
    for (var i=0; i<bbc_features.length; i++) {
        switch (bbc_features[i]) {
            case "trees": window.Tcll5850_BBCPP2_Settings[0] = true;
            case "tabs": window.Tcll5850_BBCPP2_Settings[1] = true;
        };
    };
    
    try { window.Tcll5850_RTBBCP_extensions.push(Tcll5850_BBCPP2_parse); }
    catch(exc){}; //preview plugin not found
    
    var name = proboards.data('route').name;
    if (name.match(/(thread|conversation)|(new|quote|edit)_(thread|post|mess|conversation|user_conversation)/)) {
        $('.content .message').each(function() { Tcll5850_BBCPP2_parse($(this)); });
    };
});