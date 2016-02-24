/**
 * Created by Martin on 24/02/2016.
 */
define(['jquery'],
	function ($) {
		var appView = function(dom/*Html document*/){
			this.__className = "viz.appView";
			this._app = null; //placeholder.
			this._dom = dom;
			this._dom$ = $(dom);
			this._createChildren();
		}

		appView.prototype._createChildren = function(){
			var self = this;
			var main = this._app = _createChildDiv(this._dom, 'viz-controls-' + 'app-main-layout');
		};

		/**
		 * Create child div and append to dom tree.
		 *
		 * @param {Object} id the id of child div
		 * @param {Object} class the class of child div
		 * @private
		 */
		var _createChildDiv = function(parent, css) {
			var div = document.createElement('div');

			if (css) {
				$(div).addClass(css);
			}

			if (parent) {
				$(div).appendTo(parent);
			}
			return div;
		};

		return appView;
	});