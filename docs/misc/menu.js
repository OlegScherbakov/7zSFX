function SetMenuData( menuFlags )
{
	var strMenuData = "";
	strMenuData += "<table class='menu'>";
	strMenuData += "<tr>";
	strMenuData += "<td class='menu' rowspan='2'><a title='http://7-zip.org' href='http://7-zip.org' target='_blank'><img src='misc/7ziplogo.png' border=0></a></td>";
	strMenuData += "<td class='menu' rowspan='2'><img src='misc/space10g.gif'></td>";
	strMenuData += "</tr>";
	strMenuData += "</table>";
	strMenuData += "<HR>";
	strMenuData += "<table class='menu'>";
	strMenuData += CreateMenuItem( "Modified module", "intro.html", "icon1.ico" );
	strMenuData += CreateMenuItem( "Configuration file", "configinfo.html", "icon3.ico" );
	if( menuFlags&1 )
	{
		strMenuData += CreateMenuTreeItem( "Configuration file parameters", "parameters.html", "icon5.ico", 1 );
		strMenuData += CreateMenuSubItem( "AutoInstall", "parameters.html#AutoInstall", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "AutoInstallX", "parameters.html#AutoInstallX", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "BeginPrompt", "parameters.html#BeginPrompt", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "CancelPrompt", "parameters.html#CancelPrompt", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "Delete", "parameters.html#Delete", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "Directory", "parameters.html#Directory", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "ErrorTitle", "parameters.html#ErrorTitle", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "ExecuteFile", "parameters.html#ExecuteFile", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "ExecuteParameters", "parameters.html#ExecuteParameters", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "ExtractCancelText", "parameters.html#ExtractCancelText", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "ExtractDialogText", "parameters.html#ExtractDialogText", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "ExtractDialogWidth", "parameters.html#ExtractDialogWidth", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "ExtractPathText", "parameters.html#ExtractPathText", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "ExtractPathTitle", "parameters.html#ExtractPath", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "ExtractPathWidth", "parameters.html#ExtractPathWidth", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "ExtractTitle", "parameters.html#ExtractTitle", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "FinishMessage", "parameters.html#FinishMessage", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "GUIFlags", "parameters.html#GUIFlags", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "GUIMode", "parameters.html#GUIMode", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "HelpText", "parameters.html#HelpText", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "InstallPath", "parameters.html#InstallPath", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "OverwriteMode", "parameters.html#OverwriteMode", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "Progress", "parameters.html#Progress", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "RunProgram", "parameters.html#RunProgram", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "SelfDelete", "parameters.html#SelfDelete", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "SetEnvironment", "parameters.html#SetEnvironment", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "Shortcut", "parameters.html#Shortcut", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "Title", "parameters.html#Title", "icon6.ico" );
	}
	else
	{
		strMenuData += CreateMenuTreeItem( "Configuration file parameters", "parameters.html", "icon4.ico", 1 );
	}
	strMenuData += CreateMenuItem( "Prefixes", "prefixes.html", "icon6.ico" );
	if( menuFlags&2 )
	{
		strMenuData += CreateMenuTreeItem( "Command line switches", "switches.html", "icon5.ico", 2 );
		strMenuData += CreateMenuSubItem( "-!", "switches.html#breakcmdline", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "-?", "switches.html#h", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "-ai", "switches.html#ai", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "-aiX", "switches.html#aiX", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "-fmX", "switches.html#fmX", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "-gfX", "switches.html#gfX", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "-gmX", "switches.html#gmX", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "-h", "switches.html#h", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "-nr", "switches.html#nr", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "-omX", "switches.html#omX", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "-sdX", "switches.html#sdX", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "-sfxconfig", "switches.html#sfxconfig", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "-sfxversion", "switches.html#sfxversion", "icon6.ico" );
		strMenuData += CreateMenuSubItem( "-y", "switches.html#y", "icon6.ico" );
	}
	else
	{
		strMenuData += CreateMenuTreeItem( "Command line switches", "switches.html", "icon4.ico", 2 );
	}
	strMenuData += CreateMenuItem( "Usage examples", "examples.html", "icon7.ico" );
	strMenuData += CreateMenuItem( "Replacing the icon", "icon.html", "icon3.ico" );
	strMenuData += CreateMenuItem( "History of changes", "history.html", "icon8.ico" );
	strMenuData += CreateMenuItem( "Download links", "download.html", "icon9.ico" );

	strMenuData += "</table>";
	window.top.frames["menu"].document.getElementById("menu").innerHTML = strMenuData;
}
