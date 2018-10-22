
(function(window, undefined) {

var 
thisFileName = "mcore.extends.js",

importFiles = [
	"wnInterface.extends.js",
	"jquery.min.js",
	"ui/common.js"
];

M.ScriptLoader.writeScript( importFiles, M.ScriptLoader.scriptPath(thisFileName) );

})(window);