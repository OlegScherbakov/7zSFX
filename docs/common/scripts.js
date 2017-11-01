var menuwidth;

function readMenuWidth()
{
	menuwidth = readCookie( "menu_width" );
	if( !menuwidth || menuwidth == 'NaN' || menuwidth < 1 || menuwidth >= screen.availWidth )
	{
		menuwidth = 205;
		createCookie( "menu_width", menuwidth, 1 );
	}
}

function LanguageInfo()
{
	var n = navigator;
	this.UALanguage = n.language ? n.language : n.browserLanguage ? n.browserLanguage : "--";
	this.userLanguage = n.userLanguage ? n.userLanguage : n.systemLanguage ? systemLanguage : "--";
}

function Redirect( page, lang )
{
	var content_url = lang + "/" + page;
	createCookie( "content_url", content_url );
	var index_url = lang + "/";
	window.top.document.location.replace( index_url );
}

function RedirectToLanguage( page )
{
	if( !page || page.length == 0 )
	{
		page = document.location.href;
		var i;
		for( i = page.length-1; i > 0 && page.charAt(i) != '/' && page.charAt(i) != '\\'; i-- );
		i++;
	}
	var li = new LanguageInfo();
	var ual = li.UALanguage.toLowerCase().substr(0,2);
	var ul = li.userLanguage.toLowerCase().substr(0,2);
	var lang = "en";
	if( ual == "ru" || ul == "ru" )
		lang = "ru";
	Redirect( page, lang );
}

function RedirectToPage( url )
{
	if( !url || url.length < 1 )
		url = "intro.html";
	window.top.frames["content"].document.location.href = url;
}

function OnLoadBody( menuflag )
{
	createCookie( "content_url", document.location.href );

	if( window.top.frames.length == 0 || self.name != "content" )
	{
		if( menuflag )
		{
			createCookie( "menu_flags", menuflag );
		}
		var loc = document.location.href;
		for( var i = loc.length-1; i > 0 && loc.charAt(i) != '/' && loc.charAt(i) != '\\'; i-- );
		if( i > 0 )
		{
			loc = loc.substr( 0, i );
			document.location.replace( loc );
		}
	}
	else
	{
		window.top.document.title = document.title;
		if( menuflag )
		{
			var cur_menuflags = readCookie( "menu_flags" );
			if( (cur_menuflags&menuflag) == 0 )
				UpdateMenuFlags( menuflag );
		}
	}
}

function createCookieInt( name, value )
{
	var strCookie = name+"="+value+"; path=/";
	var now = new Date();
	now.setTime( now.getTime() + 30*24*60*60*1000 );
	strCookie += "; expires=";
	strCookie += now.toGMTString();
	window.top.document.cookie = strCookie;
}

function createCookie( name, value )
{
	createCookieInt( name, "" );
	createCookieInt( name, value );
}

function readCookie( name )
{
	var nameEQ = name + "=";
	var ca = window.top.document.cookie.split(';');
	for( var i = 0; i < ca.length; i++ )
	{
		var c = ca[i];
		while( c.charAt(0)==' ' ) c = c.substring( 1, c.length );
		if( c.indexOf(nameEQ ) == 0 )
			return c.substring( nameEQ.length, c.length );
	}
	return "";
}

function CreateMenuItem( text, link, image, onclickhandler )
{
	var strMenuItem;
	strMenuItem = "<TR>";
	strMenuItem += "<TD class='menu'>";
	strMenuItem += "<A href='" + link + "' target='content' onclick='return OnClickItem(this);'>";
	strMenuItem += "<img border='0' src='misc/" + image + "' alt=''></TD>";
	strMenuItem += "<TD class='menu' style='padding-left:4px;'>";
	strMenuItem += "<A href='" + link + "' target='content' onclick='return OnClickItem(this);'>";
	strMenuItem += text;
	strMenuItem += "</A></TD></TR>"
	return strMenuItem;
}

function CreateMenuTreeItem( text, link, image, menuflag )
{
	var strMenuItem;
	strMenuItem = "<TR>";
	strMenuItem += "<TD class='menu' width='16px'>";
	strMenuItem += "<A href='" + link + "' target='content' onclick='return OnClickTreeIcon(" + menuflag + ");'>";
	strMenuItem += "<img src='misc/" + image + "' border='0' alt=''></A></TD>";
	strMenuItem += "<TD class='menu' style='padding-left:4px;'><A HREF='" + link + "' target='content' onclick='return OnClickTreeLink(" + menuflag + ",this);'>" + text + "</A></TD>";
	strMenuItem += "</TR>"
	return strMenuItem;
}

function CreateMenuSubItem( text, link, image )
{
	var strMenuItem;
	strMenuItem = "<TR>";
	strMenuItem += "<TD class='menu' width='16px'></TD>";
	strMenuItem += "<TD class='menu' style='padding-left:2px;'>";
	strMenuItem += "<A HREF='" + link + "' target='content'>";
	strMenuItem += "<img border='0' src='misc/" + image + "'>";
	strMenuItem += "<span style='vertical-align:top; padding-left:4px'>";
	strMenuItem += text;
	strMenuItem += "</span></A></TD></TR>"
	return strMenuItem;
}

function UpdateMenuFlags( menuflag )
{
	if( menuflag != 1 && menuflag != 2 && menuflag != 4 && menuflag != 8 )
		return;
	var MenuFlags = readCookie( "menu_flags" );
	MenuFlags ^= menuflag;
	createCookie( "menu_flags", MenuFlags );
	SetMenuData( MenuFlags );
}

function OnClickItem( loc )
{
	var curloc = window.top.frames["content"].document.location;
	if( GetDocumentURL(curloc) == GetDocumentURL(loc) )
	{
		window.top.frames["content"].scrollTo(0,0);
		return false;
	}
	return true;
}

function GetDocumentURL( loc )
{
	var i;
	var url = loc.href;  
	for( i = url.length-1; i >= 0 && url.charAt(i) != '#'; i-- );
	if( i > 0 )
		url = url.substring( 0, i );
	return url;
}

function OnClickTreeIcon( menuflag )
{
	UpdateMenuFlags( menuflag );
	return false;
}

function OnClickTreeLink( menuflag, loc )
{
	var curloc = window.top.frames["content"].document.location;
	if( GetDocumentURL(loc) == GetDocumentURL(curloc) )
	{
		if( window.top.frames["content"].document.body.scrollTop == 0 )
			UpdateMenuFlags( menuflag );
		else
			window.top.frames["content"].scrollTo(0,0);
		return false;
	}
	var curmenuflags = readCookie( "menu_flags" );
	if( (curmenuflags&menuflag) == 0 )
		UpdateMenuFlags( menuflag );
	return true;
}

function CreateFrameset()
{
	var content_url = readCookie("content_url");
	if( !content_url || content_url.length < 1 )
		content_url = "intro.html";
	else
	{
		var i;
		for( i = content_url.length-1; i > 0 && content_url.charAt(i) != '/' && content_url.charAt(i) != '\\'; i-- );
		i++;
		content_url = content_url.substr( i, content_url.length-i );
	}
	readMenuWidth();
	document.write( "<frameset cols='" + menuwidth + "px,*' border='1' frameborder='1' framespacing='2'>" );
	document.write( "<frame src='menu.html' name='menu' style='padding:0;margin:0'>" );
	document.write( "<frame src='" + content_url +"' name='content'>" );
	document.write( "</frameset>" );
}

function OnLoadMenu()
{
	var MenuFlags = readCookie( "menu_flags" );
	SetMenuData( MenuFlags );
	document.getElementById("menu").scrollTop = readCookie( "menutop" );
	readMenuWidth();
	menuwidth -= window.top.frames["menu"].document.body.clientWidth;
}


var inTimeout = 0;

function DelayedSave()
{
	var newwidth = menuwidth + window.top.frames["menu"].document.body.clientWidth;
	createCookie( "menu_width", newwidth, 1 );
	inTimeout = 0;
}

function SaveMenuWidth()
{
	if( inTimeout == 0 )
	{
		inTimeout = 1;
		self.setTimeout( 'DelayedSave()', 1000 );
	}
}

function OnClickLanguage( oldlang, newlang )
{
	var curloc = window.top.frames["content"].document.location.href;
	curloc = curloc.toLowerCase();
	var i;
	for( i = curloc.length-4; i > 0; i-- )
	{
		if( (curloc.charAt(i) == '/' || curloc.charAt(i) == '\\') &&
		    (curloc.charAt(i+3) == '/' || curloc.charAt(i+3) == '\\') &&
		    curloc.charAt(i+1) == oldlang.charAt(0) &&
		    curloc.charAt(i+2) == oldlang.charAt(1) )
		{
			var newloc = curloc.substr(0,(i+1));
			newloc += newlang;
			newloc += curloc.substr( i+3, curloc.length-i-3 );
			var tt = newloc;
			for( var j = tt.length-1; j > 0 && tt.charAt(j) != '/' && tt.charAt(j) != '\\'; j-- );
			tt = tt.substr( 0, j+1 );
			createCookie( "content_url", newloc );
			window.top.document.location.href = tt;
			return false;
		}
	}
	return true;
}

