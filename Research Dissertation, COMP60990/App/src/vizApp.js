/**
 * Created by Martin on 13/02/2016.
 */
define(['jquery',
		'vizAppView'
	], function ($, vizAppView) {

	var vizApp = function(){
		this.__className = "vizApp";
		this.internalDatabase = " "; //placeholder for db
	};

	vizApp.prototype.startup = function($dom){
		this.view = this.appView = new vizAppView($dom);
		//place holder for data processing.
	};

	return vizApp;
});

