/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/
"use strict";
//var loaderUtils = require("loader-utils");
function removeComment(source) {
    return source.replace(/\/\*\@(.*?)\*\//g, "$1");
}
module.exports = function(content, inputSourceMap) {
    this.cacheable && this.cacheable();
    return removeComment(content);
}
module.exports.seperable = true;