
/* Function to get heatmap data from GA server. */
function connect(tsstart, tsend, event) {
	var xmlHttp = null;

	//All heatmap data for different events
	if (!tsstart && !tsend) {
		if  (event == 'spray')
			var url = "http://vm0063.virtues.fi/heatmaps/eventid/spray:blue%7Cspray:green%7Cspray:purple/time/a/"
		else if (event == 'policebust')
			var url = "http://vm0063.virtues.fi/heatmaps/eventid/policebust:blue%7Cpolicebust:green%7Cpolicebust:purple/time/a/"
	}
	
	xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
    		if (xmlHttp.readyState == 4) {
        		console.log(xmlHttp.responseText);
			
    		}
	}
	xmlHttp.open ("GET", url, false);
	xmlHttp.send(null);
}

/* How to get heatmap data, pretty straghtforward by naming. */

function getLastWeek() {

}

function getLastMonth() {

}

/* Get all data on heatmap - from spray */
function getAllSpray() {
	connect(null, null, 'spray');

}

function getYesterday() {
	var d = new Date();
	d.setDate(d.getDate() - 1);
	console.log(d.getTime() + "--" + new Date().getTime());
	connect(d.getTime(), new Date().getTime());
}
