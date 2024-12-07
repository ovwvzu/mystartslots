'use strict';
(function() {
	var isKasperskyScriptInjected = !!document.querySelector('script[src*="kaspersky"]');
	var tmpCanvas = document.createElement("canvas");
	var hasWebGL = !!tmpCanvas.getContext("webgl");
	var missingFeatures = [];
	if (!hasWebGL) missingFeatures.push("WebGL");
	if (typeof WebAssembly === "undefined") missingFeatures.push("WebAssembly");
	if (!("noModule" in HTMLScriptElement.prototype)) missingFeatures.push("JavaScript Modules");
	if (missingFeatures.length === 0 && !isKasperskyScriptInjected) window["C3_Is_Supported"] =
		true;
	else {
		true;
	}
})();
