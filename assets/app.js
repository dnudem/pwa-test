(function(){
	var webappCache = window.applicationCache;
	alert('456');
	function loaded()
	{
		switch(webappCache.status)
		{
			case 0:
				alert("Cache status: Uncached");
				break;
			case 1:
				alert("Cache status: Idle");
				break;
			case 2:
				alert("Cache status: Checking");
				break;
			case 3:
				alert("Cache status: Downloading");
				break;
			case 4:
				alert("Cache status: Updateready");
				break;
			case 5:
				alert("Cache status: Obsolete");
				break;
		}
	}
	function updateCache()
	{
		webappCache.swapCache();
		alert("Cache has been updated due to a change found in the manifest");
	}
	function errorCache()
	{
		alert("You're either offline or something has gone horribly wrong.");
	}

	window.addEventListener("load", loaded, false);
	webappCache.addEventListener("updateready", updateCache, false);
	webappCache.addEventListener("error", errorCache, false);
})();