$("link#forum_style").prop('disabled', 'disabled');

$("head").append(`<style type="text/css" id="forum_style">

div.mini-profile div.post_activity{background-color:transparent;}
*{word-wrap:break-word;}
body{background-size:100% 100%;background-color:#000000;background-image:url('http://lh3.ggpht.com/-52ltpu2neGY/S45FyNY4s3I/AAAAAAAAApo/rYotVRqu8Ak/bg.png.jpg');background-attachment:fixed;background-repeat:no-repeat;background-position:center center;line-height:1.2;color:#b0b0b0;font-size:10pt;font-family:Verdana,Arial;text-decoration:none;text-transform:none;font-variant:normal;}
#wrapper{width:980px;margin:0 auto;overflow-x:hidden;}
table{table-layout:fixed;}
a{cursor:pointer;color:#c06806;font:100% Verdana,Arial;text-decoration:none;}
:visited{color:#666666;font:100% Verdana,Arial;text-decoration:none;}
a:hover{color:#c06806;font:100% Verdana,Arial;text-decoration:none;}
a:active{color:#c06806;font:100% Verdana,Arial;text-decoration:none;}
a.text{cursor:default;}
h1,h2{font:100%;}
h3{font:140% Verdana,Arial;}
abbr.time,.last-edited{color:#d6d6d6;font:italic 85% Verdana,Arial;}
abbr.time.recent_time{font-weight:bold;font-style:normal;}
blockquote{display:block;margin:15px 40px;}
sub,sup{font-size:80%;}
.bold,b{font-weight:700;}
.italic{font-style:italic;}
.description{font:italic 85% Verdana,Arial;}
.small{font:70% Verdana,Arial;vertical-align:middle;}
.note{color:#d6d6d6;}
.placeholder,.placeholder-empty{color:#888888;}
.foot abbr.time,.small abbr.time{font-size:100%;}
.pointer{cursor:pointer;}
.border-round{border-width:1px;border-style:solid;border-color:#282828;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;}
.clear{clear:both;}
.float-right{float:right;}
.float-left{float:left;}
.hide,.spoiler{display:none;}
.absolute-hide{display:none;position:absolute;}
.block-item{display:block;}
.center{text-align:center;}
.no-right-margin{margin-right:0px;}
.valigntt{vertical-align:text-top;}
.auto-overflow{overflow:auto;}
.inline-block{display:inline-block;}
.break-word{word-wrap:break-word;}
.nowrap{white-space:nowrap;}
.aria-hidden{width:1px;height:1px;overflow:hidden;text-indent:-1000px;position:absolute;top:0;left:0;display:block;}
.wysiwyg-textarea{width:100%;height:200px;}
.post-options,.message-options{display:none;}
.options_menu{max-width:190px;}
.posting-options-list.options_menu{max-width:100%;}
.options_menu li{height:28px;}
.options_menu a{height:20px;line-height:20px !important;}
.options_menu hr{color:#AAAAAA;background-color:#AAAAAA;height:1px;border:none;}
.controls .checkbox{display:none;}
.clickable{cursor:pointer;}
.pad-all-thin{padding:3px !important;}
.pad-all{padding:5px !important;}
.pad-all-double{padding:10px !important;}
.pad-all-thick{padding:20px !important;}
.pad-sides-thin{padding:0px 3px !important;}
.pad-sides{padding:0px 5px !important;}
.pad-sides-double{padding:0px 10px !important;}
.pad-sides-thick{padding:0px 20px !important;}
.pad-top-bottom-thin{padding:3px 0px !important;}
.pad-top-bottom{padding:5px 0px !important;}
.pad-top-bottom-double{padding:10px 0px !important;}
.pad-top-bottom-thick{padding:20px 0px !important;}
.pad-top-thin{padding-top:3px !important;}
.pad-top{padding-top:5px !important;}
.pad-top-double{padding-top:10px !important;}
.pad-top-thick{padding-top:20px !important;}
.pad-right-thin{padding-right:3px !important;}
.pad-right{padding-right:5px !important;}
.pad-right-double{padding-right:10px !important;}
.pad-right-thick{padding-right:20px !important;}
.pad-bottom-thin{padding-bottom:3px !important;}
.pad-bottom{padding-bottom:5px !important;}
.pad-bottom-double{padding-bottom:10px !important;}
.pad-bottom-thick{padding-bottom:20px !important;}
.pad-left-thin{padding-left:3px !important;}
.pad-left{padding-left:5px !important;}
.pad-left-double{padding-left:10px !important;}
.pad-left-thick{padding-left:20px !important;}
.pad-all-sides-thick{padding:5px 20px !important;}
.saved{color:#b0b0b0;}
.status-box{font-weight:800;margin-left:5px;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;padding:1px 5px;}
.status-box.error{background-color:transparent;}
.status-box.saved{background-color:transparent;}
.error{color:#b0b0b0;}
.flood-control{padding:5px;color:#b0b0b0;}
.posting-errors{padding:5px;color:#b0b0b0;}
.noscript-form-error{color:#FFFFFF;background:transparent;font-weight:800;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;padding:5px;margin:0 0 10px 0;}
.ui-form-error{display:none;position:absolute;z-index:9000;color:#b0b0b0;border:2px solid #b0b0b0;padding:4px;font-size:80%;background-color:transparent;}
input.ui-error{background-color:transparent;color:#b0b0b0;padding:2px;}
.shoutbox_error{color:#b0b0b0;}
header{display:block;position:relative;margin-bottom:10px;}
#banner-container{display:table;width:100%;}
#banner{display:table-cell;height:100px;background-color:#252525;background-image:url('http://images.proboards.com/v5/banners/image-default.png');background-position:left center;background-repeat:repeat;vertical-align:middle;padding:0px 20px;text-align:left;overflow:hidden;}
a#logo{vertical-align:middle;color:#ffffff;text-shadow:2px 2px 2px #333333;text-decoration:none;font:normal normal bold 30px "Trebuchet MS",Verdana,Arial;font-variant:normal;text-transform:none;white-space:normal;word-break:break-all;}
#welcome{text-align:right;color:#20af10;font:1em "Trebuchet MS",Verdana,Arial;text-shadow:none;float:right;vertical-align:middle;line-height:31px !important;}
#welcome a{color:#20af10;text-decoration:underline;text-shadow:none;font:1em "Trebuchet MS",Verdana,Arial;}
#navigation-menu{padding:0 8px;background:#282828 left center repeat-x scroll url('http://images.proboards.com/v5/gradients/soft.png');border:0px none;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;}
#navigation-menu a{position:relative;}
#navigation-menu>ul,#navigation-menu>ul li{float:left;}
#navigation-menu>ul li a{display:inline-block;padding:0 .75em;color:#20af10;font:1em "Trebuchet MS",Verdana,Arial;text-decoration:none;text-shadow:none;background:scroll;line-height:31px !important;}
#navigation-menu>ul li:hover a{color:#20af10;font:1em "Trebuchet MS",Verdana,Arial;text-decoration:none;text-shadow:none;background:scroll;line-height:31px !important;}
#navigation-menu>ul li a.state-active{color:#20af10;font:1em "Trebuchet MS",Verdana,Arial;text-decoration:none;text-shadow:none;background:center repeat-x scroll url('http://images.proboards.com/v5/gradients/darkness.png');line-height:31px !important;}
#navigation-menu div.tip-holder{position:absolute;top:-8px;right:3px;display:inline-block;}
#navigation-menu div.tip-holder div.tip-number{padding:3px 7px 2px 7px;background-color:#ffffff;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;font:0.8em "Trebuchet MS",Verdana,Arial;line-height:.8em;text-shadow:none;box-shadow:2px 2px 2px #333333;-moz-box-shadow:2px 2px 2px #333333;-webkit-box-shadow:2px 2px 2px #333333;height:.8em;color:#000000;}
#navigation-menu div.tip-holder span.tip{border-top:4px solid #ffffff;border-left:4px solid transparent;border-right:4px solid transparent;position:absolute;left:6px;}
.recent-threads-button,#navigation-tree{color:#c0c0c0;border-width:1px;border-style:solid;border-color:#606060;background:#000000;margin-bottom:10px;height:20px;border-radius:5px 5px 5px 5px;-moz-border-radius:5px 5px 5px 5px;-webkit-border-radius:5px 5px 5px 5px;}
.recent-threads-button.new .new-icon{display:inline-block;}
#navigation-tree{overflow:hidden;}
#nav-tree{white-space:nowrap;}
.popup_html{position:absolute;top:0;left:0;z-index:999999;}
#nav-tree ul{display:none;list-style-type:none;border-width:1px;border-style:solid;border-color:#606060;background-color:#000000;box-shadow:2px 2px 2px #333333;-moz-box-shadow:2px 2px 2px #333333;-webkit-box-shadow:2px 2px 2px #333333;}
#nav-tree>li{display:inline-block;position:relative;height:20px;}
#nav-tree>li a{font:0.8em Verdana,Arial;color:#c0c0c0;text-decoration:strikethrough;display:block;padding:4px 10px 4px 15px;margin:0 1px 0 5px;}
#nav-tree>li:hover,#nav-tree .ui-menu li:hover{color:#b0b0b0;background-color:#303030;}
#nav-tree>li:hover>div>a{font:0.8em Verdana,Arial;color:#b0b0b0;text-decoration:none;}
#nav-tree .ui-menu li:hover>a{font:0.8em Verdana,Arial;color:#b0b0b0;text-decoration:none;}
#nav-tree>li:first-child{border-radius:5px 5px 5px 5px 0 0 5px 5px 5px 5px;-moz-border-radius:5px 5px 5px 5px 0 0 5px 5px 5px 5px;-webkit-border-radius:5px 5px 5px 5px 0 0 5px 5px 5px 5px;}
#nav-tree>li:first-child a{margin-left:-2px;}
#nav-tree .ui-menu{display:none;position:absolute;float:left;}
#nav-tree .ui-menu a{border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;}
#nav-tree .ui-menu li{position:relative;white-space:nowrap;padding:2px 10px 2px 5px;}
#nav-tree .ui-menu li ul{display:none;z-index:9999;position:absolute;}
#nav-tree .ui-menu li .arrow{position:absolute;right:2px;top:50%;width:16px;height:16px;margin-top:-8px;display:none;}
#nav-tree .ui-menu li.ui-menu-has-sub-menu>.arrow{display:block;}
#nav-tree li.new_span>a>.new-icon{float:none;display:inline-block;}
#nav-tree li.state-selected>a{font-weight:bold !important;}
#nav-tree .menu_arrow{width:0;height:0;position:absolute;top:0px;right:-10px;border-width:10px 1px 10px 10px;border-style:solid none solid solid;border-color:transparent transparent transparent #606060;z-index:1001;}
#nav-tree .menu_arrow span{width:0;height:0;position:absolute;top:-10px;left:-11px;border-width:10px 1px 10px 10px;border-style:solid none solid solid;border-color:transparent transparent transparent #000000;z-index:1002;}
#nav-tree>li:hover .menu_arrow{border-color:transparent transparent transparent #606060;}
#nav-tree>li:hover .menu_arrow span{border-color:transparent transparent transparent #303030;}
.popup_html ul{display:none;list-style-type:none;border:1px solid #606060;background-color:#000000;box-shadow:2px 2px 2px #333333;-moz-box-shadow:2px 2px 2px #333333;-webkit-box-shadow:2px 2px 2px #333333;}
.popup_html li a{font:0.8em Verdana,Arial;color:#c0c0c0;text-decoration:strikethrough;display:block;padding:4px 10px 4px 15px;margin:0 1px 0 5px;}
.popup_html li:hover,.popup_html .ui-menu li:hover{color:#b0b0b0;background-color:#303030;}
.popup_html li:hover>div>a{font:0.8em Verdana,Arial;color:#b0b0b0;text-decoration:none;}
.popup_html .ui-menu li:hover>a{font:0.8em Verdana,Arial;color:#b0b0b0;text-decoration:none;}
.popup_html li{border-radius:5px 5px 5px 5px 0 0 5px 5px 5px 5px;-moz-border-radius:5px 5px 5px 5px 0 0 5px 5px 5px 5px;-webkit-border-radius:5px 5px 5px 5px 0 0 5px 5px 5px 5px;}
.popup_html li a{margin-left:-2px;}
.popup_html .ui-menu{display:none;position:absolute;float:left;z-index:11;}
.popup_html .ui-menu a{border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;overflow:hidden;max-width:550px;}
.popup_html .ui-menu li{position:relative;white-space:nowrap;padding:2px 15px 2px 5px;}
.popup_html .ui-menu li ul{display:none;z-index:9999;position:absolute;}
.popup_html .ui-menu li .arrow{position:absolute;right:2px;top:50%;width:16px;height:16px;margin-top:-8px;display:none;}
.popup_html .ui-menu li.ui-menu-has-sub-menu>.arrow{display:block;}
.popup_html li.new_span>a>.new-icon{float:none;display:inline-block;}
.popup_html li.state-selected>a{font-weight:bold !important;}
.popup_html .menu_arrow{width:0;height:0;position:absolute;top:0px;right:-10px;border-width:10px 1px 10px 10px;border-style:solid none solid solid;border-color:transparent transparent transparent #606060;z-index:1001;}
.popup_html .menu_arrow span{width:0;height:0;position:absolute;top:-10px;left:-11px;border-width:10px 1px 10px 10px;border-style:solid none solid solid;border-color:transparent transparent transparent #000000;z-index:1002;}
.popup_html li:hover .menu_arrow{border-color:transparent transparent transparent #606060;}
.popup_html li:hover .menu_arrow span{border-color:transparent transparent transparent #303030;}
.recent-threads-button{font:0.8em Verdana,Arial;cursor:pointer;float:right;height:14px;margin:0 0 10px 10px;padding:3px 6px 3px 6px;text-align:center;}
.recent-threads-button:hover{color:#b0b0b0;font:0.8em Verdana,Arial;text-decoration:none;background-color:#303030;}
.recent-threads-button .new-icon{margin:0px 5px 0px 0px;}
#news{color:#c0c0c0;text-decoration:strikethrough;z-index:9;height:20px;font:0.8em Verdana,Arial;background-color:#000000;overflow:hidden;margin:0 auto 10px;border:1px solid #606060;border-radius:5px 5px 5px 5px;-moz-border-radius:5px 5px 5px 5px;-webkit-border-radius:5px 5px 5px 5px;}
#news .items{height:20px;position:relative;overflow:hidden;}
#news .items>div>div{padding:0 10px;line-height:20px !important;}
#news .items div img{vertical-align:text-bottom;}
#news .nav{float:left;background-position:center;}
#news .nav>span{border-width:0px 1px 0px 0px;border-style:solid;border-color:transparent;cursor:default;float:left;display:inline-block;padding:0 3px;height:20px;}
#news .nav>span.title{text-align:center;display:inline-block;height:20px;padding:0px 6px;line-height:20px !important;}
#news .nav .arrow.left{border-radius:5px 5px 5px 5px 0 0 5px 5px 5px 5px;-moz-border-radius:5px 5px 5px 5px 0 0 5px 5px 5px 5px;-webkit-border-radius:5px 5px 5px 5px 0 0 5px 5px 5px 5px;}
#news .nav .arrow.left span{border-right-color:#606060;}
#news .nav .arrow.right span{border-left-color:#606060;}
#news .nav:hover{background-color:#303030;}
#news .nav:hover>span{border:1px solid #606060;border-width:0px 1px 0px 0px;}
#news .nav:hover .arrow{background-color:#303030;}
#recent-threads{background:center center repeat scroll url('http://lh6.ggpht.com/-md9Uw4_xCVI/UhjznbdQQcI/AAAAAAAAEu0/qg84IXb7zCs/BGT.png');color:#b0b0b0;}
#recent-threads a{}
#recent-threads th{border-bottom:1px solid;}
#recent-threads .subject{text-align:left;}
#recent-threads .latest{text-align:right;}
#recent-threads th,#recent-threads td{border:1px none;border-top-width:0px;border-left-width:0px;}
#recent-threads tbody tr:hover{background:center center repeat scroll url('http://lh6.ggpht.com/-XwsupDJSdF0/Uhj-4H_1EUI/AAAAAAAAEvs/6KCrCFox2EY/BGTO.png');}
#recent-threads tbody tr:hover a{}
#thread_listing,#conversation_listing{padding:0;}
.arrow{position:relative;display:inline-block;width:10px;height:10px;z-index:10;}
.arrow>span{content:'';position:absolute;left:50%;top:50%;display:block;border-color:transparent;border-style:solid;border-width:4px;height:0;width:0;}
.arrow.up>span{margin-left:-4px;margin-top:-6px;border-bottom-color:#b0b0b0;}
.arrow.right>span{margin-left:-2px;margin-top:-4px;border-left-color:#b0b0b0;}
.arrow.down>span{margin-left:-4px;margin-top:-2px;border-top-color:#b0b0b0;}
.arrow.left>span{margin-left:-7px;margin-top:-4px;border-right-color:#b0b0b0;}
.arrow.big>span{border-width:5px;}
.arrow.big.up>span{margin-left:-5px;margin-top:-7px;}
.arrow.big.right>span{margin-top:-5px;}
.arrow.big.down>span{margin-left:-5px;}
.arrow.big.left>span{margin-left:-8px;margin-top:-5px;}
.container>.title-bar{background-color:#252525;background-image:url('http://images.proboards.com/v5/gradients/wave.png');background-attachment:scroll;background-repeat:repeat-x;background-position:left center;border:0px none;border-radius:5px 5px 0 0;-moz-border-radius:5px 5px 0 0;-webkit-border-radius:5px 5px 0 0;}
.ui-dialog .ui-dialog-titlebar{padding:.3em 1em;position:relative;background-color:#252525;background-image:url('http://images.proboards.com/v5/gradients/wave.png');background-attachment:scroll;background-repeat:repeat-x;background-position:left center;border:0px none;border-radius:5px 5px 0 0;-moz-border-radius:5px 5px 0 0;-webkit-border-radius:5px 5px 0 0;}
.ui-dialog .ui-dialog-title{color:#20af10;font:bold 100% Verdana,Arial;float:left;margin:.1em 16px .2em 0;}

/* category header text */
.container>.title-bar h1,
.container>.title-bar h2,
.container>.title-bar h3{
	display: block;
	font:bold 100% Verdana,Arial;
	color:#20af10;
	text-shadow: 0px 0px 3px #188808, 0px 0px 3px #188808, 0px 0px 3px #188808;
}

.container>.title-bar>.controls li a,.container>.title-bar>.controls li div{color:#20af10;background-color:#303030;background-image:url('http://images.proboards.com/v5/gradients/wave.png');background-attachment:scroll;background-repeat:repeat-x;background-position:left center;font:100% Verdana,Arial;height:30px;line-height:30px !important;padding:0 10px;}
.container>.title-bar>.controls:hover li a,.container>.title-bar>.controls:hover li div{color:#20af10;background:#181818 left center repeat-x scroll url('http://images.proboards.com/v5/gradients/wave.png');font:100% Verdana,Arial;}
.container>.content,.ui-dialog .ui-dialog-content,.ui-dialog .ui-dialog-buttonpane,.container.copy .clone{background:center center repeat scroll url('http://lh6.ggpht.com/-md9Uw4_xCVI/UhjznbdQQcI/AAAAAAAAEu0/qg84IXb7zCs/BGT.png');border-width:1px;border-style:solid;border-color:#606060;border-top-width:0px;padding:0px;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;}
.content-box{background:scroll;border:1px none;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;color:#b0b0b0;}
.content-box a,.container a{color:#c06806;}
.container>.control-bar{background:left top repeat scroll url('http://lh6.ggpht.com/-md9Uw4_xCVI/UhjznbdQQcI/AAAAAAAAEu0/qg84IXb7zCs/BGT.png');border:1px solid #606060;border-top-width:0px;border-bottom-width:0px;margin-bottom:0px;}
.container{margin-bottom:10px;color:#b0b0b0;}
.container>.title-bar{min-height:30px;padding:0px 10px;}
.container>.title-bar h1,.container>.title-bar h2,.container>.title-bar h3{line-height:30px !important;display:inline;}
.container>.title-bar.bbcode{min-height:30px;padding:0px;}
.container>.title-bar.bbcode h2{width:970px;line-height:inherit !important;padding:0px;display:block;}
*+html .container>.title-bar.bbcode h2{line-height:16px !important;}
.title_wrapper{padding:7px 10px;overflow:hidden;}
.title_wrapper img{display:block;}
.container abbr.time{color:#d6d6d6;}
.container .note{color:#d6d6d6;}
.container>.title-bar>.controls{float:right;}
.container>.control-bar>.controls{float:right;padding:5px;color:#000000;}
.container>.content{overflow:hidden;}
.controls>li a{display:inline-block;}
.control-bar .ui-pagination{padding:5px 5px 3px 10px;}
.control-bar>div.float-left{padding-left:10px;padding-top:8px;padding-bottom:8px;}
.control-bar>div.float-left img{padding-right:5px;}
.control-bar .controls ul{z-index:233;}
.control-bar .controls .ui-selectMenu-box{margin-left:10px;}
.control-bar .ui-search{padding-bottom:5px !important;}
.ui-selectMenu-box{border:1px solid #000000;}
.ui-selectMenu-box .arrow.down>span{border-top-color:#000000;}
.ui-dialog{border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;background-color:#606060;background-color:rgba(97, 97, 97, 0.5);}
.ui-dialog .ui-dialog-titlebar-close:hover span,.ui-dialog .ui-dialog-titlebar-close:focus span{background-image:url('http://images.proboards.com/v5/ui-icons.png');background-position:-20px,0px;}
.ui-dialog div.ui-dialog-buttonpane{text-align:left;margin-top:10px;padding:0 0 0 10px;border-width:1px;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;}
.ui-dialog div.section{text-align:center;background-color:transparent;border-width:1px;border-style:solid;border-color:#282828;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;}
.ui-search .search-input.filters-input{border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;}
.ui-search .search-input{line-height:16px !important;padding:2px;border-width:1px;border-style:solid;border-color:#000000;border-radius:5px 0 0 5px;-moz-border-radius:5px 0 0 5px;-webkit-border-radius:5px 0 0 5px;}
.ui-search .search-filters-button{display:inline-block;width:auto;height:auto;margin-left:-2px;padding:3px 4px 2px 4px;border-width:1px 1px 1px 0px !important;border-style:solid;border-color:#000000;border-radius:0 5px 5px 0;-moz-border-radius:0 5px 5px 0;-webkit-border-radius:0 5px 5px 0;vertical-align:top;cursor:pointer;}
.ui-search .search-filters-button .icon{display:inline-block;width:auto;height:auto;}
.event_icon{cursor:pointer;}
.container.copy .clone{border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-collapse:inherit;border-bottom-width:0px;}
.ui-pagination{display:inline-block;overflow:hidden;}
.ui-pagination li{cursor:pointer;list-style:none;float:left;margin-right:2px;}
.ui-pagination li:last-child{margin-right:0px;}
.ui-pagination li>a,.ui-pagination li>div{border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;font-weight:bold;text-decoration:none;background-color:#000000;border:1px solid #000000;color:#b0b0b0;display:inline-block;padding:4px 5px;}
.ui-pagination li>a:hover,.ui-pagination li>div:hover{border-style:solid;text-decoration:none;background-color:#181818;color:#b0b0b0;border-color:#7b7b7b;}
.ui-pagination li.state-selected>a{border:0px solid transparent;background-color:#b0b0b0;color:#000000;padding:5px 6px;cursor:default;}
.ui-pagination li.state-disabled>a{cursor:default;padding:4px 5px;border-width:1px;border-style:solid;opacity:.5;filter:alpha(opacity=50);}
.ui-pagination li.state-disabled>a:hover{background-color:#000000;border-color:#464646;}
.ui-micro-pagination{overflow:hidden;font-size:75%;margin-top:3px;}
.ui-micro-pagination ul,.ui-micro-pagination ul li div{display:inline;}
.ui-micro-pagination ul li{list-style:none;display:inline;margin-right:2px;}
.ui-micro-pagination ul li:last-child{margin-right:0px;}
.ui-micro-pagination ul li>a{display:inline-block;text-decoration:none;padding:0 3px;color:#b0b0b0;background-color:#000000;border:1px solid #464646;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;}
.ui-micro-pagination ul li>a:hover{color:#b0b0b0;border:1px solid #7b7b7b;background-color:#181818;}
.ui-tabMenu ul{background:left center repeat-x scroll;border:1px none;border-top-width:0px;border-right-width:0px;border-left-width:0px;padding:5px 5px 0 5px;}
.ui-tabMenu ul li{height:26px;list-style:none;float:left;top:1px;margin:0 2px 1px 0;position:relative;background:left top repeat scroll;border:1px none;border-radius:5px 5px 0 0;-moz-border-radius:5px 5px 0 0;-webkit-border-radius:5px 5px 0 0;}
.ui-tabMenu ul li a{color:#c06806;font:100% Verdana,Arial;text-decoration:none;float:left;padding:5px 14px;white-space:nowrap;}
.ui-tabMenu ul li:hover{background:transparent;border:1px none;border-radius:5px 5px 0 0;-moz-border-radius:5px 5px 0 0;-webkit-border-radius:5px 5px 0 0;}
.ui-tabMenu ul li:hover a{color:#c06806;font:100% Verdana,Arial;text-decoration:none;}
.ui-tabMenu ul li.ui-active{background:left top repeat scroll;border:1px none #303030;border-radius:0 0 0 0;-moz-border-radius:0 0 0 0;-webkit-border-radius:0 0 0 0;}
.ui-tabMenu ul li.ui-active a{color:#c06806;font:100% Verdana,Arial;text-decoration:none;border-bottom:1px solid left top repeat scroll;}
table.list>thead>tr>th,table.list>tbody>tr>td{border-width:0px 0px 0px 0px;border-style:none;border-color:#282828;vertical-align:middle;padding:10px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-ms-box-sizing:border-box;}
table.list{color:#b0b0b0;background:left top repeat scroll;table-layout:fixed;font-size:90%;width:100%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-ms-box-sizing:border-box;}
.list a{color:#c06806;decoration:none;}
.list .item.state-hover,.list .board.item:hover,#calendar-list .item:hover{color:#b0b0b0;background-color:transparent;background-image:url('http://lh6.ggpht.com/-XwsupDJSdF0/Uhj-4H_1EUI/AAAAAAAAEvs/6KCrCFox2EY/BGTO.png');background-attachment:fixed;background-repeat:repeat;background-position:left top;}
.list .item>.main.state-hover .link a,.list .item:hover>.main .link a{color:#c06806;decoration:underline;}
.list .item.state-selected{color:#b0b0b0;background:transparent;}
.list .item.state-selected a{color:#c06806;decoration:none;}
table.list>thead>tr>th{padding:5px 10px;white-space:nowrap;}
table.list>thead>tr.last>td,table.list>tbody>tr.last>td{border-bottom-width:0px;}
table.list>thead>tr>.last,table.list>tbody>tr>.last{border-right:none;}
table.list td.icon,table.list th.icon{width:55px;text-align:center;}
table.list td.main,table.list th.main{padding:10px 10px 10px 0px;}
table.list .checkbox{width:25px;text-align:center;padding:0px;border-right:none;}
table.list .checkbox-placeholder{border-right:none !important;}
.list .item>.main{cursor:pointer;overflow:hidden;}
.list .item .list-item-checkbox{visibility:hidden;}
.list .item.state-hover .list-item-checkbox,.list .item.state-selected .list-item-checkbox{visibility:visible;}
table.list abbr.time,table.list .last-edited{color:#d6d6d6;}
.new-icon{background:#808080 left center repeat-x scroll url('http://images.proboards.com/v5/gradients/shade.png');border:1px solid #006000;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;display:none;float:left;margin:3px 5px 3px 0px;padding:0px 1px;word-wrap:normal;}
.new-icon,.new-icon a{color:#20af10 !important;font:bold 7px Verdana,Arial;text-decoration:none;text-transform:uppercase;text-align:center;line-height:10px !important;height:10px;}
.new-icon:hover{background:#808080 left center repeat-x scroll url('http://images.proboards.com/v5/gradients/shade.png');border:1px solid #008000;border-radius:5px 5px 5px 5px;-moz-border-radius:5px 5px 5px 5px;-webkit-border-radius:5px 5px 5px 5px;}
.new-icon:hover,.new-icon:hover a{color:#20af10 !important;font:bold 7px Verdana,Arial;decoration:none;text-transform:uppercase;}
footer{text-align:center;display:block;background:left top repeat scroll;border:0px none;padding-top:5px;padding-bottom:28px;}
footer .footer-links{margin:0 auto;color:#b0b0b0;}
footer .footer-links a{color:#c06806;text-decoration:none;font:0.8em Verdana,Arial;}
footer .footer-links a:hover{color:#c06806;text-decoration:none;font:0.8em Verdana,Arial;}
footer .footer-text{text-align:center;color:#b0b0b0;margin:5px 0 0 0;font:0.8em Verdana,Arial;}
footer .footer-text a{color:#c06806;text-decoration:none;font:100% Verdana,Arial;}
.search .content{padding:10px 0px 0px 10px;}
.search .content form>div{padding:10px;margin-right:10px;margin-bottom:10px;}
.search .header,#how{font-size:14px;padding:10px;}
.search .options-container{padding:10px;width:432px;font-size:11px;margin-right:10px;height:200px;overflow:hidden;}
.search .options-container th{padding-bottom:5px;font-size:14px;text-align:left;font-weight:normal;}
.search .options-container td{padding:5px 5px 5px 0;}
.search .footer{font-size:14px;line-height:20px !important;}
.search .footer input{float:right;}
.search .footer #transcription{width:89%;font-size:11px;}
.search .disabled{background-color:#DDDDDD;}
.search #what input,.search #where input,.search #who input{width:230px;}
.search #who select{width:235px;}
.search #when input{width:80px;}
.search input[id*="-placeholder"]{cursor:pointer;}
#where-board-subboard,#where-without,#where-category,#who-member-group{display:none;}
.cal-box{background:transparent;border:1px solid #282828;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;width:100%;border-collapse:separate;}
.cal-box th{padding:3px 0px;}
.cal-box th,.cal-current-panel .cal-box td,#calendar-list .cal-box td{border:1px solid #282828;border-top-width:0px;border-left-width:0px;}
.cal-box th,.cal-box th *{color:#b0b0b0;}
.cal-box .current-day .head,.cal-box .today .head,.ui-datepicker td.ui-datepicker-today a{background:transparent;}
.cal-box .current-day .head a,.cal-box .today .head a,.ui-datepicker td.ui-datepicker-today a{color:#c06806;}
.cal-box .head{background:transparent;}
.cal-box a{color:#c06806;}
.cal-box .off .head a{color:#b0b0b0;}
.cal-current-panel{vertical-align:top;}
.cal-current-panel .cal-box .last{border-right:none;}
.cal-current-panel .cal-box .last td{border-bottom:none;}
.cal-current-panel .body{min-height:74px;height:74px;padding-bottom:15px;padding:3px;overflow:hidden;}
.cal-current-panel .body a{white-space:nowrap;}
.cal-current-panel .off .head{background:transparent;}
.cal-current-panel .head{text-align:right;cursor:pointer;padding-bottom:3px;height:16px;overflow:hidden;}
.cal-current-panel .head a{font-weight:bold;font-size:12px;padding:2px;overflow:hidden;}
.cal-preview-panel{width:180px;padding-right:10px;vertical-align:top;}
.cal-preview-panel .header th{border-right:none;}
.cal-preview-panel .header th a{color:#c06806;}
.cal-preview-panel td{padding:2px 0px;}
.cal-preview-panel .weekdays td{padding-top:5px;}
.cal-preview-panel .cal-box{table-layout:auto;width:100%;text-align:center;padding-bottom:10px;margin-bottom:10px;}
.cal-preview-panel .cal-box .head{padding:0px 1px 2px 0px;}
.cal-preview-panel .off .head{background-color:transparent;}
.cal-preview-panel a.has-events{font-weight:bold;}
#calendar-list{vertical-align:top;}
#calendar-list .new .new-icon{display:inline-block;}
#calendar-list table{table-layout:auto;}
#calendar-list table.cal-box td{border-width:0px 0px 1px 0px;}
#calendar-list tr:last-child td{border-bottom:none;}
#calendar-list tr:first-child th{border-radius:10px 10px 0 0;-moz-border-radius:10px 10px 0 0;-webkit-border-radius:10px 10px 0 0;}
#calendar-list th{padding:5px 15px;text-align:left;border-right:none;}
#calendar-list td.icon{width:60px;height:60px;text-align:center;border-width:0px 1px 1px 0px;border-style:solid;border-color:1px solid #282828;}
#calendar-list td.main{cursor:pointer;padding:0 10px;}
#calendar-list td.last_post{text-align:right;width:250px;padding-right:10px;}
.calendar .content{padding:10px;}
.calendar .content>table{width:100%;vertical-align:top;}
.calendar .content>table>tr>td{vertical-align:top;}
.calendar .control-bar .calendar-jump .button{float:left;}
.calendar .control-bar .calendar_go_button{display:none;margin:0 5px 0 10px;}
#to-date-container{display:none;}
.ui-datepicker{background-color:#606060;background-color:rgba(97, 97, 97, 0.5);}
.ui-datepicker .ui-datepicker-header{background-color:#252525;background-image:url('http://images.proboards.com/v5/gradients/wave.png');border-color:#606060;}
.ui-datepicker .ui-datepicker-title{color:#20af10;}
.ui-datepicker table{background-color:transparent;border-color:#606060;}
.ie7 .calendar .control-bar .calendar_go_button{margin-left:0;}
.ie7 .calendar .control-bar .controls .ui-selectMenu-box{margin-left:0;margin-right:10px;}
.member{cursor:pointer;}
.members table.list{table-layout:fixed;}
.members thead{}
.members th.sortable{cursor:pointer;overflow:hidden;text-align:left;}
.members .name{width:19%;text-align:left;}
.members .username{width:17%;text-align:left;}
.members .rank{width:16%;text-align:left;}
.members .group{width:16%;text-align:left;}
.members .posts{width:8%;text-align:left;}
.members .date-registered{width:18%;text-align:left;}
.members .last-online{width:18%;text-align:right;}
.members .last-online abbr.timestamp{font-size:100%;}
.members .list-content td{word-wrap:break-word;overflow:hidden;padding:3px 10px;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;-ms-box-sizing:content-box;}
.members .list-content .checkbox{padding:3px 0px 3px 7px;}
.show-user table{width:100%;}
.show-user .controls>*{float:right;}
.show-user table.list{font-size:100%;}
.show-user .heading th,.show-user .heading td{font-weight:bold;padding:8px 0px;text-align:center;border-right:0px;}
.show-user td.avatar,th.avatar{width:75px;border-width:1px 1px 0 0;padding:3px;}
.show-user .list .main{border-right-width:0;border-width:1px 0 0 0;padding:2px 33px 2px 33px;}
.show-user .delete{width:60px;padding:5px 10px 5px 5px;border-width:1px 1px 0 0;vertical-align:middle;text-align:right;}
.show-user .time-container{width:22%;padding:3px 10px 3px 3px;text-align:right;border-width:1px 0 0 0;}
.show-user a.show-more{border-top:1px solid #282828;display:block;font-weight:bold;padding:8px 0px;text-align:center;}
.show-user .content-box{margin-bottom:10px;overflow:hidden;}
.show-user .content-box:last-child{margin-bottom:0px;}
.show-user .following{table-layout:auto;}
.show-user .center-col{padding:10px;}
.show-user td.status-input input{width:100%;}
.show-user td.status-submit{width:120px;text-align:right;}
.show-user .headings{width:175px;}
.show-user #center-column{vertical-align:top;}
.show-user #right-column{width:180px;vertical-align:top;}
.show-user .right-col{width:167px;margin-left:10px;text-align:center;}
.show-user .social{width:50%;float:left;}
.show-user .messengers span.label{width:55px;display:inline-block;}
.show-user .mini-user{width:75px;max-width:75px;min-height:90px;display:inline-block;overflow:hidden;padding:4px 0px;vertical-align:top;text-align:center;}
.ie7 .show-user .mini-user{display:inline;margin-right:10px;}
.show-user #status-bar{border-top:none !important;}
.show-user #status-bar td{border:none;}
.show-user #status-input-box input{width:99%;}
.show-user .delete a{display:none;}
.show-user .notifications .main{padding:10px 33px;}
.show-user .notifications .main .new-icon{display:inline-block;}
.show-user .friends-stats{float:right;}
.online-friends .mini-profile{margin-right:10px;margin-bottom:10px;vertical-align:top;display:inline-block;}
.offline-friends .micro-profile{float:left;text-align:left;margin-right:10px;margin-bottom:10px;}
.show-user .members-link-container{margin-bottom:10px;}
.show-user .empty-result-message{text-align:center;padding-bottom:25px;}
.show-user .groups td{border-width:1px 1px 0px 0px;text-align:center;padding:12px 0px;}
.show-user .groups td:first-child{text-align:left;padding-left:20px;}
.show-user .groups td:last-child{border-right:0px;}
.show-user .groups .group_desc{width:40%;}
.show-user .groups .leaders{width:25%;}
.show-user .groups .members{width:10%;}
.show-user .groups .status{width:15%;}
.show-user .groups .heading td{padding:4px 0px;text-align:center;}
.show-user .badge-wish{text-align:center;height:100px;margin-right:10px;}
.show-user .badge-wish img{display:block;}
.show-user .visit-badge-store{text-align:center;width:130px;}
.show-user .visit-badge-store .badge-store-text{width:110px;height:54px;margin:10px auto 5px auto;}
.badge-thumbs{padding:5px 100px 5px 5px !important;position:relative;min-height:36px;}
.badge-thumbs .badge-thumb{margin:5px;}
.badge-thumbs .button{position:absolute;top:50%;right:10px;margin-top:-13px;}
.big_username{font-size:20pt;}
.edit-user .title{font-weight:bold;margin-bottom:4px;}
.edit-user textarea{padding:2px;margin:0;}
.edit-user input,.edit-user select,.edit-user textarea{display:inline-block;zoom:1;margin-top:5px;}
.edit-user .content-box{margin:10px;padding:10px;}
.edit-user .content-box.options{position:relative;zoom:1;}
.edit-user .content-box.options table{table-layout:auto;}
.edit-user .content-box.options td{padding:9px 5px;}
.edit-user .content-box.options input[type="radio"]{margin-top:0px;}
.edit-user .content-box.options input[type="submit"]{position:absolute;bottom:10px;left:10px;}
.edit-user .pad{padding:10px;}
.edit-user .pad.info{padding-bottom:0;clear:both;}
.edit-user .pad .username{font-size:1em;font-weight:normal;margin-top:14px;}
.edit-user .note{font-style:italic;font-size:85%;}
.edit-user label{display:block;font-weight:800;}
.edit-user .radio label,.edit-user .checkbox label{display:inline;font-weight:400;}
.edit-user .avatar.content-box{padding:10px 10px 0px 0px;}
.edit-user .avatar h4{margin-bottom:5px;}
.edit-user .user-search{padding-top:3px;}
.edit-user .avatar{margin-bottom:10px;}
.edit-user .notifications table{table-layout:auto;}
.edit-user .notifications th,.edit-user .notifications td{padding:0px 5px;}
.edit-user .notifications th.description{width:760px;}
#user_block_list .user-search-selection .ui-selectlist-item{float:none;clear:both;margin-bottom:10px;}
#user_block_list .user-search-selection .ui-selectlist-item .block_list_options{float:left;width:430px;padding-left:20px;}
#user_block_list .selectlist-wrapper{float:left;position:relative;}
#user_block_list .block_list_options input{margin:0 5px 5px 5px;padding:0;height:13px;}
#user_block_list .block_list_options label{position:relative;top:-2px;}
.edit-user #avatar-options .content-box{position:relative;margin:10px 0px 0px 10px;float:left;height:246px;padding:10px;text-align:center;width:150px;}
.edit-user #avatar-options .content-box.options{width:100%;min-width:279px;max-width:350px;text-align:left;}
#forum-avatars-wrapper img:hover{border-width:3px;border-style:solid;border-color:#c06806;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;margin:-3px;}
#image-avatar-editor-container .wrapper{padding:10px 5px 5px 5px;margin-top:15px;*width:520px;}
#image-avatar-editor-container .wrapper.first{height:80px;margin-top:10px;}
#image-avatar-editor-container span.fileupload-buttonbar{display:inline-block;margin:10px 0;}
#image-avatar-editor-container .files{margin:0;}
#image-avatar-editor-container #link-image{height:18px;}
#image-avatar-editor-container #link-image.button{cursor:pointer;}
#forum-avatar-editor-container{padding:0;}
#forum-avatars-wrapper{width:510px;margin:0 auto;padding:10px;}
#forum-avatars-wrapper .avatar-wrapper{float:left;margin:10px;}
#forum-avatars-wrapper img{max-height:150px;max-width:150px;}
#badge-options h4{margin-top:10px;}
#badge-options .badges-have .badge-thumbs{width:240px;}
#badge-options .badges-dont-have .badge-thumbs{width:110px;}
#badge-options .badge-thumbs{float:left;padding:5px !important;}
#badge-options .badge-thumbs .badge-thumb,#badge-options .badge-thumbs .badge-icons{float:left;}
#badge-options .badge-icons img{margin:5px 0 5px 10px;vertical-align:middle;}
#badge-options .badge-thumbs .badge-icons img,#badge-options .badge-thumbs .badge-icons input{margin:5px 0 0 10px;width:16px;height:16px;}
#badge-options .badge-thumbs .badge-icons input{margin-top:8px;padding:0;}
#badge-options .badge-thumbs .small{vertical-align:bottom;}
#badge-options .badges-dont-have .badge-icons img{margin-top:16px;}
#badge-options .badge-gift,#badge-options .badge-use-action{color:#b0b0b0;}
.boards .main{width:59%;text-align:left;}
.boards .threads{width:9%;text-align:center;white-space:nowrap;}
.boards .posts{width:8%;text-align:center;white-space:nowrap;}
.boards .latest{width:20%;text-align:right;}
.boards .main.redirect{border-right:0px;}
.boards .main .link a{font:105% Verdana,Arial;}
.boards .main .description{font:normal 90% Verdana,Arial;padding-left:0px;padding-bottom:3px;}
.boards .main .moderators{font:75% Verdana,Arial;padding-bottom:3px;}
.boards .main .sub-boards{font:75% Verdana,Arial;}
.boards table.list{table-layout:auto;}
.boards table.list th.main{padding-left:10px;}
.boards table.list>tbody>tr>td{padding:5px 10px;}
#password-wrapper{margin:10px 0px;}
#password-wrapper div{display:inline-block;margin-right:5px;}
#password-wrapper input{padding:1px 6px 3px 6px;}
.threads .main{width:41%;text-align:left;}
.threads .created-by{width:14%;text-align:center;}
.threads .replies{width:9%;text-align:center;}
.threads .views{width:8%;text-align:center;}
.threads .latest{width:20%;text-align:right;}
.threads .icons{white-space:nowrap;}
.threads .control-icons img{padding-right:5px;}
.threads .control-icons .lock_icon,.threads .control-icons .falling_icon,.threads .control-icons .event_icon,#bookmarks.threads .bookmark_icon{width:0;padding-right:0;}
.threads .checkbox{width:2%;}
.threads .checkbox-placeholder{width:5px;}
.threads .main table{table-layout:auto;}
.threads table.list{table-layout:auto;}
.threads .item.new .new-icon{display:inline-block;}
.threads .item.announcement.last>td{border-width:0px 1px 10px 0px;border-style:solid;}
.threads .item.announcement.last>td.checkbox,.threads .item.announcement.last>td.last{border-right:none;}
.conversations table.list{table-layout:auto;}
.conversations .created-by,.conversations .recipients{width:17%;text-align:center;}
.conversations .replies{width:8%;text-align:center;}
.conversations .latest{width:20%;text-align:right;padding-right:10px;}
.conversations .checkbox{width:24px;}
.conversations .item.new .new-icon{display:inline-block;}
.ui-poll .results td .select-box{min-width:15px;min-height:15px;border:1px solid #282828;}
.ui-poll .results tr.ui-selected{background:transparent;}
.ui-poll .poll-vote-bar .bar{background:#aaaaaa url('http://images.proboards.com/v5/gradients/bar.png') repeat-x left center;border:1px solid #000000;border-right-width:0px;border-radius:5px 0 0 5px;-moz-border-radius:5px 0 0 5px;-webkit-border-radius:5px 0 0 5px;float:left;height:17px;min-width:5px;}
.ui-poll .poll-vote-bar .rank{float:left;background:#aaaaaa url('http://images.proboards.com/v5/gradients/bar.png') repeat-x left center;border:1px solid #000000;border-left-width:0px;height:17px;padding-left:2px;border-radius:0 5px 5px 0;-moz-border-radius:0 5px 5px 0;-webkit-border-radius:0 5px 5px 0;}
.ui-poll .poll-vote-bar .rank div{margin-right:1px;margin-top:1px;color:#ffffff;font-size:80%;background:#000000;opacity:.5;filter:alpha(opacity=50);padding:1px 2px;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;}
.ui-poll .poll-vote-bar.rank-1 .rank,.ui-poll .poll-vote-bar.rank-1 .bar{background-color:#ffcc22;}
.ui-poll .poll-vote-bar.rank-2 .rank,.ui-poll .poll-vote-bar.rank-2 .bar{background-color:#66ddee;}
.ui-poll .poll-vote-bar.rank-3 .rank,.ui-poll .poll-vote-bar.rank-3 .bar{background-color:#ff0000;}
.ui-poll{padding:10px;}
.ui-poll table{table-layout:fixed;width:auto;}
.ui-poll .icon-poll{margin-right:5px;}
.ui-poll .results{margin-bottom:5px;}
.ui-poll .results td{padding:5px;}
.ui-poll .results tr.ui-hover{background-color:transparent;cursor:default;}
.ui-poll .results td:first-child{padding-right:0px;}
.ui-poll .results .stats{float:left;margin-left:5px;line-height:18px !important;}
.ui-poll .voted ul{list-style:disc;padding-left:20px;}
.ui-poll .vote-input{margin-top:5px;}
.ui-poll .vote-input-cooldown{margin-left:5px;margin-top:2px;}
.ui-poll .poll-vote-bar{float:left;overflow:hidden;min-width:10px;}
.ui-poll .results tr td .select-box img{visibility:hidden;display:block;}
.ui-poll .results tr.ui-selected td .select-box img{visibility:visible;}
.posts .post,.post .quote div.quote div.quote_body,.post.even .quote div.quote_body{color:#808080;background-color:transparent;background-image:none;background-attachment:fixed;background-repeat:repeat;background-position:left top;}
.posts .post.even,.post .quote div.quote_body,.post.even .quote div.quote div.quote_body{color:#808080;background-color:transparent;background-image:none;background-attachment:fixed;background-repeat:repeat;background-position:left top;}
.post abbr.time,.post.even .quote abbr.time,.post .quote .quote abbr.time{color:#808080;}
.post.even abbr.time,.post .quote abbr.time,.post.even .quote .quote abbr.time{color:#808080;}
.posts .post .post-method{font-size:.8em;}
.posts span.labels{border-width:0px 1px 0 1px;border-style:solid;border-color:#282828;display:block;}
.posts span.labels .ui-label{padding:5px 0 0 5px;display:inline-block;zoom:1;}
.posts .poll{border-width:0px 1px 10px 1px;border-style:solid;border-color:#282828;}
.posts .post table{width:100%;}
.posts .post .left-panel{width:172px;vertical-align:top;}
.posts .post .content{padding-left:10px;vertical-align:top;}
.posts .post .content-head .info{float:left;margin-top:3px;line-height:20px !important;}
.posts .post .content-head .info .date,.posts .post .post-method{vertical-align:-7px;}
.posts .post.recent .content-head .info .date,.posts .post.recent .post-method{vertical-align:0;}
.posts .post.recent .content-head .info{line-height:13px !important;}
.posts .post .thread-link{display:none;}
.posts .post.recent .thread-link{display:block;}
.posts .post.recent .likes{vertical-align:0px;}
.posts .post .content-head .controls{float:right;border-collapse:separate;}
.posts .post .content-head .controls>a{float:left;margin-left:3px;padding-right:5px;}
.posts .post .content-head .controls>a.likes-button{padding:1px 6px 0px 6px;}
.posts .post .content-head .controls>a.likes-button img{margin-top:2px;}
.posts .post .message{word-wrap:break-word;overflow-x:auto;overflow-y:hidden;margin-bottom:1.3em;}
.posts .post .message table{width:inherit;}
.posts .post .message table td{padding:3px;}
.posts .post .message ul{margin-left:31px;list-style-type:disc;}
.posts .post .message ol{margin-left:31px;list-style-type:decimal;}
.posts.summary .post .content-head .info{float:none;}
.posts .post.blocked .unblocked{display:none;}
.posts .post .content .thread-link{max-width:450px;overflow:hidden;}
.posts.item .ui-pagination{padding-left:0px;}
.likes{vertical-align:-7px;}
.posts #labels{display:none;text-align:right;padding:5px;}
.posts .post>td,.posts #labels{border:1px none #202020;border-top-width:0px;}
.likes,.likes:hover{font:80% Verdana,Arial;margin:0 0 0 7px;}
.likes-button{padding:4px 0px 0px 5px;display:none;}
.liked.likes{display:inline;}
.posts .post .content-head{border:1px solid #282828;border-top-width:0px;border-right-width:0px;border-left-width:0px;padding-bottom:5px;margin-bottom:10px;}
.posts .post .message code{display:block;border:1px solid #333333;padding:5px;margin-left:16px;margin-right:16px;background:center center repeat scroll url('http://lh6.ggpht.com/-XwsupDJSdF0/Uhj-4H_1EUI/AAAAAAAAEvs/6KCrCFox2EY/BGTO.png');color:#b0b0b0;white-space:pre;}
.posts .post .foot{height:1px;vertical-align:bottom;padding-left:10px;}
.posts .post .foot .edited_by{text-align:right;font:80% Verdana,Arial;margin-top:10px;}
.posts .post .foot .signature{font:80% Verdana,Arial;vertical-align:bottom;border:1px solid #282828;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;padding-top:10px;margin-top:10px;}
.posts .bookmark_icon{padding-right:5px;}
.messages .item{color:#b0b0b0;background:center center repeat fixed;}
.messages .item.even{color:#b0b0b0;background:center center repeat scroll;}
.messages .item .quote div.quote div.quote_body{color:#b0b0b0;background:center center repeat fixed;}
.messages .item.even .quote div.quote_body{color:#b0b0b0;background:center center repeat fixed;}
.messages .item .quote div.quote_body{color:#b0b0b0;background:center center repeat scroll;}
.messages .item.even .quote div.quote div.quote_body{color:#b0b0b0;background:center center repeat scroll;}
.message abbr.time,.message.even .quote abbr.time,.message .quote .quote abbr.time{color:#b0b0b0;}
.message.even abbr.time,.message .quote abbr.time,.message.even .quote .quote abbr.time{color:#b0b0b0;}
.messages .item .content-head{border:1px solid #282828;border-top-width:0px;border-right-width:0px;border-left-width:0px;padding-bottom:5px;margin-bottom:10px;}
.messages .item table{width:100%;}
.messages .item td{vertical-align:top;}
.messages .item>td{border-width:0px 1px 1px 1px;border-style:solid;border-color:#282828;}
.messages .item .left-panel{width:172px;}
.messages .item .content{padding-left:10px;word-wrap:break-word;overflow-x:auto;overflow-y:hidden;}
.messages .item .content table{width:inherit;}
.messages .item .content ul{margin-left:31px;list-style-type:disc;}
.messages .item .content ol{margin-left:31px;list-style-type:decimal;}
.messages .item .content .message{overflow-x:auto;overflow-y:hidden;margin-bottom:1.3em;}
.messages .item .content .message table td{padding:3px;}
.messages .item .content code{display:block;border:1px solid #282828;padding:5px;margin-left:16px;margin-right:16px;background:transparent;color:#b0b0b0;white-space:pre;}
.messages .item .content-head .info{float:left;margin-top:3px;line-height:20px !important;}
.messages .item .content-head .info .date{vertical-align:-7px;}
.messages .item .content-head .controls{float:right;}
.messages .item .content-head .controls>a{float:left;margin-left:3px;padding-right:5px;display:inline;}
.messages .item .foot{padding-left:10px;vertical-align:bottom;}
.messages .item .foot .signature{text-align:left;font:80% Verdana,Arial;vertical-align:bottom;border:1px solid #282828;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;padding-top:10px;margin-top:10px;}
.message .post-method{vertical-align:-7px;font-size:.8em;}
.messages .conversation-labels{float:right;margin-right:5px;margin-top:5px;}
.messages.summary .message .content-head .info{width:100%;}
.messages .message .controls{min-width:100px;}
.messages .participants{padding:5px 10px;border:1px solid #282828;border-top-width:0px;}
.posting-options-list,.messaging-options-list{display:none;}
.pbcpe-widget-title{color:#b0b0b0;}
.micro-profile{position:relative;height:50px;width:200px;display:inline-block;padding:5px;margin-bottom:3px;border:1px solid #282828;background:transparent;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;}
.grp_recipients_div li{position:relative;width:240px;display:inline-block;margin:3px;padding:3px 22px 3px 5px;border:1px solid #282828;background:transparent;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;float:left;}
.micro-profile a,.grp_recipients_div li a{}
.user-search-selection .ui-selectlist-item .close{color:#b0b0b0;font:bold 80% Verdana,Arial;background:transparent;border:1px solid #282828;border-radius:0 5px 5px 0;-moz-border-radius:0 5px 5px 0;-webkit-border-radius:0 5px 5px 0;cursor:pointer;height:35px;padding:20px 3px 5px;position:absolute;right:0px;}
.micro-profile .avatar{display:block;width:50px;position:absolute;top:5px;border-width:0px;}
.micro-profile .info{width:145px;overflow:hidden;position:absolute;top:5px;left:60px;}
.micro-profile .info input{width:112px;}
.user-search-box{width:200px;}
.user-search-selectlist{z-index:99999;}
.user-search-selectlist .content{cursor:pointer;padding:1px 0px;}
.user-search-selectlist .micro-profile .info{width:200px;}
.user-search-selection .ui-selectlist-item{float:left;margin-right:5px;}
.user-search-selection .ui-selectlist-item .micro-profile{border-radius:5px 0 0 5px;-moz-border-radius:5px 0 0 5px;-webkit-border-radius:5px 0 0 5px;}
.user-search-displaybox{min-width:250px;z-index:99999;}
.user-search-displaybox .control-bar{border:none;}
.user-search-displaybox .control-bar .ui-pagination{padding:5px;display:inherit;}
.user-search-selectlist .micro-profile{margin:1px auto;display:inherit;}
.ie7 .user-search-pagination-note{margin:5px 0;}
.ie7 .user-search-displaybox .control-bar{width:350px;}
.ie7 .user-search-displaybox{min-width:350px;}
.ie7 .user-search-selectlist .micro-profile{margin:1px 68px 1px 67px;width:198px;display:inline-block;}
.mini-profile{color:#b0b0b0;background:center center repeat scroll;border:1px solid #303030;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;text-align:left;overflow:hidden;padding:13px 10px;width:150px;}
.mini-profile .personal-text{color:#b0b0b0;display:block;font:75% Verdana,Arial;text-align:left;}
.mini-profile .info{color:#b0b0b0;font:75% Verdana,Arial;text-align:left;}
div.mini-profile a{color:#c06806;}
.even .mini-profile{color:#b0b0b0;background:center center repeat scroll;border:1px solid #303030;border-radius:10px 10px 10px 10px;-moz-border-radius:10px 10px 10px 10px;-webkit-border-radius:10px 10px 10px 10px;text-align:left;}
.even .mini-profile .personal-text{color:#b0b0b0;font:75% Verdana,Arial;text-align:left;}
.even .mini-profile .info{color:#b0b0b0;font:75% Verdana,Arial;text-align:left;}
.even div.mini-profile a{color:#c06806;}
.warning-bar{background:#aaaaaa url("http://images.proboards.com/v5/gradients/bar.png") repeat-x scroll left center;border:1px solid #000000;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;padding-bottom:2px;height:14px;line-height:100%;text-align:right;min-width:40px !important;}
.warning-bar .number{color:#ffffff;background-color:#000000;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;opacity:0.5;font-size:0.6em;margin-right:1px;padding:0px 2px 1px 2px;}
.warning-low{background-color:#ffcc22;background-position:center;}
.warning-medium{background-color:#ff6611;background-position:center;}
.warning-high{background-color:#ff0000;background-position:center;}
.mini-profile .avatar{max-width:150px;max-height:150px;overflow-x:hidden;overflow-y:hidden;margin:auto;border-width:0px;vertical-align:middle;}
.avatar-wrapper{display:table-cell;text-align:center;vertical-align:middle;}
.avatar-wrapper>div,#avatar-preview.flash_present.image_present>div{position:relative;}
.avatar-wrapper div object,.flash-avatar object,#avatar-preview.flash_present.image_present div object,.avatar-wrapper>div>img{position:absolute;top:0;left:0;}
.avatar-wrapper *{vertical-align:middle;}
.avatar_size_default,.avatar_size_default embed,.avatar_size_default object,.avatar_size_default>div,.avatar-wrapper.avatar_size_default>div>div{height:150px;width:150px;}
.avatar-wrapper>div>div{display:table-cell;vertical-align:middle;}
.avatar_size_default img,.avatar_size_default default{max-height:150px;max-width:150px;}
.avatar_size_medium,.avatar_size_medium embed,.avatar_size_medium object,.avatar_size_medium>div,.avatar-wrapper.avatar_size_medium>div>div{height:75px;width:75px;}
.avatar_size_medium img,.avatar_size_medium default{max-height:75px;max-width:75px;}
.avatar_size_small,.avatar_size_small embed,.avatar_size_small object,.avatar_size_small>div,.avatar-wrapper.avatar_size_small>div>div{height:50px;width:50px;}
.avatar_size_small img,.avatar_size_small default{max-height:50px;max-width:50px;}
.avatar_size_quote,.avatar_size_quote embed,.avatar_size_quote object,.avatar_size_quote>div,.avatar-wrapper.avatar_size_quote>div>div{height:30px;width:30px;}
.avatar_size_quote img,.avatar_size_quote default{max-height:30px;max-width:30px;}
#flash-avatar-preview .flash-avatar object{position:relative;}
#avatar-preview.flash_present div object{position:inherit;}
#avatar-preview.flash_present>div{position:inherit;}
.mini-profile .avatar .avatar-wrapper,.micro-profile .avatar .avatar-wrapper{height:auto;}
.avatar_size_placeholder{height:150px;width:150px;}
.mini-profile .badges img{height:16px;width:16px;}
.button,a.button,input[type="submit"],input[type="button"],button{color:#000000;font:12px Verdana,Arial;text-decoration:none;background-color:#808080;background-image:url('http://images.proboards.com/v5/gradients/darkness.png');background-attachment:scroll;background-repeat:repeat-x;background-position:center center;border:1px none;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;min-height:20px;line-height:20px !important;padding:2px 0px;display:inline-block;vertical-align:middle;margin-left:3px;cursor:pointer;white-space:nowrap;}
.button:hover,input[type="submit"]:hover,input[type="button"]:hover,button:hover{color:#808080;font:12px Verdana,Arial;text-decoration:none;background:#606060 center repeat-x scroll url('http://images.proboards.com/v5/gradients/darkness.png');border:1px none;}
.button:active,input[type="submit"]:active,input[type="button"]:active,button:active,.shoutbox_refresh_button.active,.liked.likes-button,.button.state-selected{color:#606060;font:12px Verdana,Arial;text-decoration:none;background:#606060 center center repeat-x scroll url('http://images.proboards.com/v5/gradients/shade.png');border:1px none;}
a.button{padding:2px 6px;}
.button .status{padding:0 6px 0 1px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;border:1px none;border-width:0px 1px 0px 0px;float:left;overflow:hidden;word-wrap:break-word;white-space:nowrap;}
.button .status img{display:block;margin-top:2px;}
.button .icon{padding:1px 2px 1px 1px;border:0;float:left;line-height:normal !important;}
input[type="submit"],input[type="button"],button{padding:2px 6px;min-height:26px;}
.button-x{position:absolute;top:50%;right:3px;margin-top:-8px;cursor:pointer;display:block;text-indent:-9999px;width:16px;height:16px;background:url('http://images.proboards.com/v5/icons-default.png') -16px -32px no-repeat;}
.button-x:hover{background:url('http://images.proboards.com/v5/icons-default.png') 0px -32px no-repeat;}
.button.post-options{padding:2px 0 2px 0;}
.reply_button{float:right;}
input[type="text"],input[type="email"],input[type="password"]{color:#c0c0c0;background:center center repeat scroll url('http://images.proboards.com/v5/gradients/concave.png');border:1px none #c0c0c0;border-radius:5px 5px 5px 5px;-moz-border-radius:5px 5px 5px 5px;-webkit-border-radius:5px 5px 5px 5px;width:300px;height:20px;padding:2px;}
textarea{color:#c0c0c0;background:center center repeat scroll;border:1px solid #606060;border-radius:5px 5px 5px 5px;-moz-border-radius:5px 5px 5px 5px;-webkit-border-radius:5px 5px 5px 5px;resize:none;}
select{background-color:#ffffff;height:26px;padding:2px;}
input[type="text"].short{width:50px;}
input[type="text"].search-input{width:inherit;}
input.date{width:77px;}
input.time{width:55px;}
.ui-label{font-size:80%;font-weight:bold;text-transform:none;font-variant:normal;position:relative;top:-1px;margin:0 5px 0 0;display:inline;}
.label-row{height:20px;line-height:20px !important;margin:10px 0;clear:left;}
.label-row *{float:left;}
.label-row .ui-label,.label-row span.label-delete-button{margin-bottom:-5px;margin-left:5px;}
#manage-labels-container .style-wrapper .color_input{border:1px solid #AAAAAA;}
#manage-labels-container .style-wrapper .color-picker{border:1px solid #AAAAAA;background:#EEEEEE;border-radius:0 5px 5px 0;-moz-border-radius:0 5px 5px 0;-webkit-border-radius:0 5px 5px 0;}
#manage-labels-container .style-wrapper .color-picker-preview{border:1px solid #AAAAAA;border-right:none;}
#content .content .quote div.quote_body{background:center center repeat scroll url('http://lh6.ggpht.com/-XwsupDJSdF0/Uhj-4H_1EUI/AAAAAAAAEvs/6KCrCFox2EY/BGTO.png');border:1px solid #333333;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;margin-top:7px;padding:10px 10px;}
#content .content .quote div.quote div.quote_body{background:center center repeat scroll url('http://lh6.ggpht.com/-XwsupDJSdF0/Uhj-4H_1EUI/AAAAAAAAEvs/6KCrCFox2EY/BGTO.png');border:1px solid #333333;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;}
.quote{margin:0 10px;padding-bottom:10px;position:relative;top:0px;}
.quote div.quote_avatar_container{float:left;}
.quote div.no_avatar_placeholder{display:inline-block;height:30px;width:30px;position:absolute;top:14px;left:4px;}
.quote div.quote_header{display:block;margin:7px 0px 16px 35px;}
.quote.no_header{padding-top:10px;}
.stats table{background:repeat fixed;width:100%;}
.stats .content>table>tbody>tr>td{border:1px none;border-right-width:0px;border-bottom-width:0px;width:43%;}
.stats .content{color:#b0b0b0;}
.stats .content a{color:#c06806;}
.stats th{text-align:left;}
.stats .icon{width:70px;text-align:center;vertical-align:middle;}
.stats .info{padding:10px 10px 10px 0px;}
.stats .content>table{width:100%;table-layout:auto;}
.stats .content>table table table tr:last-child td a{white-space:nowrap;}
.stats .content>table>tbody>tr>td:first-child{border-left-width:0px;width:57%;}
.stats .content>table>tbody>tr:first-child>td{border-top-width:0px;}
.shoutbox_welcome_message{border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;margin-bottom:10px;}
.shoutbox_messages .shoutbox-post{background:scroll;border:1px none;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;text-align:left;position:relative;overflow:hidden;margin-top:10px;margin-right:10px;padding:5px 15px 5px 10px;}
.shoutbox_messages .shoutbox_edit_button{font:85% Verdana,Arial;display:inline-block;width:32px;margin-right:5px;visibility:visible;}
.shoutbox_messages .shoutbox_edit_button.hidden{visibility:hidden;}
.shoutbox_messages .shoutbox_delete_button{color:#b0b0b0;font:bold Verdana,Arial;text-decoration:none;border:1px solid #282828;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;position:absolute;right:-7px;top:0;width:15px;cursor:pointer;margin-left:20px;margin-top:0px;padding:3px;height:100%;display:inline-block;}
.shoutbox .state-selected{background:transparent;}
.shoutbox_form{background:scroll;border:1px none;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;padding:10px;height:100px;}
.shoutbox_form .shoutbox_counter{color:#b0b0b0;font:85% Verdana,Arial;float:right;margin-top:-5px;}
.shoutbox_form textarea.gray{color:#666666;}
.shoutbox_messages{overflow-y:scroll;text-align:center;position:relative;}
.shoutbox .content{padding:10px;}
.shoutbox_messages .shoutbox-post:first-child{margin-top:0px;}
.shoutbox_messages .message{padding-right:10px;word-break:break-all;}
.shoutbox_messages .details{float:right;margin:0px 15px 0px 10px;height:16px;vertical-align:bottom;}
.shoutbox_form.reply-box-bottom{margin-top:10px;}
.shoutbox_form.reply-box-top{margin-bottom:10px;}
.shoutbox_form input[type="text"]{margin-top:2px;margin-bottom:4px;}
.shoutbox_form .button img{display:inline;padding:2px 0 0;}
.shoutbox_form .shoutbox_refresh_button{float:right;padding:2px 6px 0px 6px;}
.shoutbox_form ul.tools{white-space:nowrap;display:inline-block;}
.shoutbox_form ul.tools li{float:left;margin:0;padding:0;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border:0;height:22px;width:26px;text-align:center;line-height:18px !important;}
.shoutbox_form ul.tools li img{padding:0;}
.shoutbox_form textarea{height:38px;width:100%;margin-right:0px;margin-bottom:5px;margin-top:5px;position:inherit;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-ms-box-sizing:border-box;}
.shoutbox_form .shoutbox_post_button{margin-left:0px;}
.shoutbox_form .shoutbox_cancel_button{vertical-align:bottom;}
.shoutbox_name{padding:10px 0;height:22px;}
.shoutbox_name input{height:15px;width:50%;min-width:150px;}
.shoutbox_container{position:relative;}
.shoutbox_container>.shoutbox_form_container{position:absolute;width:100%;}
.shoutbox_container.orientation-top{padding-top:174px;}
.shoutbox_container.orientation-top.no-post{padding-top:0;}
.shoutbox_container.orientation-top>.shoutbox_form_container{top:0;}
.shoutbox_container.orientation-bottom{padding-bottom:174px;}
.shoutbox_container.orientation-bottom.no-post{padding-bottom:0;}
.shoutbox_container.orientation-bottom>.shoutbox_form_container{bottom:0;}
#content .shoutbox.container .smiley-menu>li>a{border:none;padding:6px;}
.legend .content td{padding:10px 5px;vertical-align:middle;color:#b0b0b0;}
.legend .content td:first-child{padding-left:15px;}
.legend .content td *{vertical-align:middle;}
.legend .new-icon{display:block;}
.quick-reply textarea{border-width:1px;border-style:solid;border-color:#282828;height:150px;padding:5px;width:100%;resize:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-ms-box-sizing:border-box;}
.quick-reply .content{padding:10px;}
.quick-reply .message{margin-bottom:10px;}
.quick-reply .guest_name{padding:0px 10px 10px 0px;vertical-align:middle;}
.quick-reply .guest_name label{display:inline;font-weight:800;}
.quick-reply input[type="submit"]{margin-left:0px;}
.wysiwyg-area label{font-weight:800;}
.wysiwyg-area .outline{padding:10px;border-width:1px;border-style:solid;border-color:#282828;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;}
.wysiwyg-area .content{padding:10px 10px 0px 10px;}
.wysiwyg-area .content>form>div{margin-bottom:10px;}
.wysiwyg-area .subject_line .controls{float:right;}
.wysiwyg-area .subject_line .subject_input{overflow:hidden;padding-right:13px;}
.wysiwyg-area .subject_line input{width:100%;}
.wysiwyg-area .subject_line table{width:100%;table-layout:auto;}
.wysiwyg-area .subject_line .subject_input{line-height:28px !important;}
.wysiwyg-area .subject_line table .subject{width:70px;}
.wysiwyg-area .end-date,.wysiwyg-area .attachment,.new-area .captcha{display:none;}
.wysiwyg-area .poll .poll-options{line-height:30px !important;}
.wysiwyg-area .poll [name="poll_max_answers"]{width:25px;}
.wysiwyg-area .poll table{width:100%;table-layout:auto;}
.wysiwyg-area .poll td{vertical-align:top;padding:5px 10px 5px 0px;line-height:230%;}
.wysiwyg-area .poll th{text-align:left;padding-bottom:5px;}
.wysiwyg-area .submit{height:32px;vertical-align:middle;line-height:28px !important;}
.ui-wysiwyg .button{border:none;margin:0;padding:0;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;color:#000000;background:none;}
.ui-wysiwyg .button-fontName,.ui-wysiwyg .button-fontSize{background-color:transparent;}
.ui-wysiwyg .ui-selectMenu{line-height:normal;}
.ui-wysiwyg .ui-selectMenu-box{height:20px;}
.ui-wysiwyg .ui-selectMenu-box .status{border:none;line-height:20px !important;padding:0;width:auto;}
.ui-wysiwyg .ui-selectMenu-box .icon{border:none;}
.ui-wysiwyg .ui-selectMenu-box .arrow{height:20px;}
.new-area .user-search .content{padding:0px 15px 0px 0px;}
.new-area .recipients h4{display:block;margin-bottom:3px;}
.new-area .guest_name input{width:485px;}
.wysiwyg-area .edit_reason>label{float:left;line-height:28px;width:180px;}
.wysiwyg-area .edit_reason>div{margin-left:180px;margin-right:8px;}
.wysiwyg-area .edit_reason>div>input{width:100%;}
.grp_recipients_div{display:none;}
.grp_recipients_div a{display:block;clear:both;padding-top:10px;}
.loadingOverlay{background-image:url('http://images.proboards.com/v5/loader/processing.gif');background-position:center center;background-repeat:no-repeat;position:absolute;}
#announcement-options{display:none;width:500px;}
.ui-wysiwyg .editors{border-width:1px;border-style:solid;border-color:#282828;}
.wysiwyg-tabs li{float:left;position:relative;bottom:1px;margin:1px 2px 0 0;list-style:none;background:left top repeat scroll;border:1px solid #282828;border-top-width:0px;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;}
.wysiwyg-tabs li:hover{background:transparent;border:1px none;}
.wysiwyg-tabs li a{color:#c06806;font:100% Verdana,Arial;float:left;padding:5px 15px;text-decoration:none;}
.wysiwyg-tabs li.ui-active{background-color:transparent;background-image:none;background-attachment:fixed;background-repeat:repeat;background-position:left top;border:1px none #303030;margin-top:0px;padding-top:1px;}
.wysiwyg-tabs li.ui-active a{color:#c06806;font:100% Verdana,Arial;text-decoration:none;}
.wysiwyg-smiley-menu .state-disabled{display:none;}
.ui-wysiwyg .editors .bbcode-editor textarea{color:#808080;background-color:transparent;}
.ie7 *{word-wrap:normal;}
.ie7 .shoutbox .shoutbox-post *{word-wrap:break-word;}
.ie7 .show-user .status-input input{width:95%;margin-top:0px;}
.ie7 .show-user .status-submit{width:130px;text-align:right;}
.ie7 .show-user .edit-controls{text-align:right;padding-right:10px;}
.ie7 .show-user .edit-controls .icon{text-align:center;}
.ie7 .search .options-container{height:250px;}
.ie7 .calendar .cal-box{border-collapse:collapse;}
.ie7 .ui-pagination{float:left;}
.ie7 .recipients .user-search-selection .ui-selectlist-item .close{right:0px;}
.ie7 .user-search-selection .ui-selectlist-item .close{right:-8px;}
.ie7 .micro-profile{zoom:1;*display:inline;width:188px;margin:0px 0px 3px 0px;padding-right:9px;text-align:left;}
.ie7 .container.copy table.list{border-collapse:separate;}
.ie7 .ui-search .search-input{margin-top:-1px;}
.ie7 .threads .main table,.ie7 .conversations .main table{table-layout:auto;}
.ie7 table.list .checkbox{padding-left:1px;}
.ie7 .avatar-wrapper span{display:inline-block;height:100%;}
.ie7 .cal-preview-panel .cal-box .head{padding:2px 0px 2px 4px;}
.ie7 input[type="text"]{padding-top:5px;vertical-align:middle;}
.ie7 select{vertical-align:middle;}
.ie7 input[type=text].search-input{width:auto;padding:4px 2px 0px 2px;}
.ie7 .search #what input,.ie7 .search #where input,.ie7 .search #who input,.ie7 .search #who select{width:210px;}
.ie7 .legend table{table-layout:auto;}
.ie7 .edit-user .options.content-box input[type="submit"]{left:auto;}
.ie7 input[type="submit"],.ie7 input[type="button"],.ie7 button{padding:1px 6px 3px 6px;height:26px;color:#030303;background-color:#838383;filter:chroma(color=#000000);overflow:visible;}
.ie7 .container>.control-bar{margin-bottom:0px;}
.ie7 a.likes-button,.ie7 .messages .quote-button{margin-right:3px;min-height:23px;}
.ie7 .user-search-box input[type=text].search-input,.ie7 .filter input[type="text"].search-input{width:112px;}
.ie7 .recent-threads-button{padding-right:2px;}
.ie7 .subject_line .controls{margin-top:1px;}
.ie7 .ui-poll .results td.answer{width:175px;}
.ie7 .shoutbox_messages .shoutbox-post.content-box{padding-right:16px;}
.ie7 footer ul{width:530px;}
.ie7 .options_menu li.ui-menu-has-sub-menu>.arrow{display:inline;}
.ie7 .options_menu li{width:190px;position:static;}
.ie7 .options_menu li .arrow{margin-top:-22px;top:auto;}
.ie7 .options_menu hr{display:none;}
.ie7 .quick-reply textarea{width:99%;}
.ie7 .ui-poll table{table-layout:auto;}
.ie7 .ui-poll .results .stats{float:none;}
.ie7 .users{width:100%;}
.ie7 .users .ui-pagination{margin:0 auto;display:inline;float:none;}
.ie7 .name_and_group.float-right{float:none;}
.ie7 .shoutbox_form ul.tools li img{border:1px solid transparent;}
.ie7 #banner{padding:0px 0px;}
.ie7 a#logo{padding:0px 20px;line-height:100px !important;}
.ie7 div.post-options{display:inline !important;}
.ie7 .ui-menu li{background-image:none;}
.ie7 .ui-menu li:hover>a{background-image:none;}
.ie7 .attachment-button-text{padding:0 5px 3px 5px;}
.ie7 .wysiwyg-area .edit_reason>div{height:28px;margin-left:0;margin-right:8px;}
.ie7 .wysiwyg-area .submit{line-height:1px !important;}
.ie7 .show-user .controls{margin-right:10px;}
.ie7 #nav-tree>li{display:inline;}
.ie7 #navigation-tree,.ie7 #nav-tree,.ie7 #nav-tree>li{height:21px;}
.ie7 .recent-threads-button{height:15px;}
.ie7 #nav-tree .menu_arrow{top:-1px;border-width:11px 1px 11px 11px;}
.ie7 #password-wrapper div{display:inline;}
.ie7 #password-wrapper div input[name="password"]{position:relative;top:5px;}
.ie7 #banner{min-height:100px;height:auto;}
.ie7 #nav-tree{position:relative;overflow:hidden;}
.ie7 .show-user table .center-col:first-child table{table-layout:auto;}
.ie7 .popup_html .ui-menu{position:relative;z-index:99999999;}
.ie7 #navigation-menu>ul li a{min-width:21px;}
.ie7 #welcome{min-width:200px;}
.ie8 select{padding-top:2px;padding-bottom:2px;}
.ie8 .user-search-selection .ui-selectlist-item .close{right:0px;}
.ie8 .avatar-wrapper{display:inherit;}
.ie8 .container.copy table.list{border-collapse:separate;}
.ie8 .boards .threads{padding-left:8px;padding-right:8px;}
.ie8 .options_menu{max-width:190px;}
.ie8 input[type="text"]{line-height:20px;}
.ie8 .recent-threads-button{line-height:1.4em;}
.ie8 .shoutbox_messages .shoutbox-post.content-box{padding-right:16px;}
.ie8 .user-search .user-search-box .user-search-input{width:135px;}
.ie8 table.list td.icon,.ie8 table.list th.icon{width:54px;}
.ie8 #nav-tree{display:inline-block;}
.ie8 #content #navigation-tree,.ie8 #nav-tree,.ie8 #nav-tree>li{height:21px;}
.ie8 #content .recent-threads-button{height:15px;}
.ie8 #nav-tree .menu_arrow{top:-1px;border-width:11px 1px 11px 11px;}
.ie8 #nav-tree>li{padding-right:1px;}
.ie8 .popup_html ul{max-width:550px;}
.ie8 input[type="submit"],input[type="button"],button{min-height:20px;}
.ie9 .avatar-wrapper>div>div{display:inherit;}
.ie9 .user-search-selection .ui-selectlist-item .close{right:1px;}
.ie9 #nav-tree{display:inline-block;}
@-moz-document url-prefix(){select{padding:4px 2px;} .ui-search .search-filters-button{padding-left:6px;} .ui-tabMenu ul li{height:27px;}}.sptitle{width:700px;color:#808080;background:transparent left center repeat scroll url('http://lh6.ggpht.com/-XwsupDJSdF0/Uhj-4H_1EUI/AAAAAAAAEvs/6KCrCFox2EY/BGTO.png');padding:6px;padding-top:3px;padding-bottom:3px;display:inline-block;}
.PT_table .PT_table_header{text-align:center;font-weight:bold;font-size:11pt;background-image:url('http://lh6.ggpht.com/-XwsupDJSdF0/Uhj-4H_1EUI/AAAAAAAAEvs/6KCrCFox2EY/BGTO.png');border:none;padding:5px;}
.PT_table .PT_tabs{text-align:center;background-color:transparent;border:none;padding:5px;}
.PT_table .PT_tabs_hover{text-align:center;background-color:transparent;background-image:url('http://lh6.ggpht.com/-XwsupDJSdF0/Uhj-4H_1EUI/AAAAAAAAEvs/6KCrCFox2EY/BGTO.png');border:none;padding:5px;}
.PT_table .PT_tabs_selected{text-align:center;background-color:transparent;background-image:url('http://lh6.ggpht.com/-XwsupDJSdF0/Uhj-4H_1EUI/AAAAAAAAEvs/6KCrCFox2EY/BGTO.png');border:none;padding:5px;}
.PT_table .PT_tabs_selected_hover{text-align:center;background-color:transparent;background-image:url('http://lh6.ggpht.com/-XwsupDJSdF0/Uhj-4H_1EUI/AAAAAAAAEvs/6KCrCFox2EY/BGTO.png');border:none;padding:5px;}
.PT_table .PT_spots{background-color:transparent;}
.post .message table.PT_table{width:90%;border:#303030 1px solid;padding:0px;}

</style>`);