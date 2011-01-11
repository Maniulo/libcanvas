/*
---

name: "LibCanvas.Processors.Mask"

description: "Use canvas as mask for color (black will be transparent, white will be color)"

license: "[GNU Lesser General Public License](http://opensource.org/licenses/lgpl-license.php)"

authors:
- Pavel Ponomarenko aka Shock <shocksilien@gmail.com>

requires:
- LibCanvas

provides: LibCanvas.Processors.Mask
*/

LibCanvas.namespace('Processors').Mask = atom.Class({
	color : null,
	initialize : function (color) { // [r,g,b]
		this.color = color || [0,0,0];
	},
	processPixels : function (data) {
		var c = this.color, d = data.data, i = 0, l = d.length;
		for (;i < l; i+=4) {
			d[i+3] = d[i];
			d[i]   = c[0];
			d[i+1] = c[1];
			d[i+2] = c[2];
		}
		return data;
	}
});