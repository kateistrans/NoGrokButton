// ==UserScript==
// @name         No Grok Button
// @namespace    http://tampermonkey.net/
// @version      2023-12-09
// @description  Removes the Grok button on Twitter (or X for weirdos)
// @author       You
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// @run-at       document-start
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==
function ifElementExistsThen(selector, callback) { // thanks to https://github.com/NoNormalCreeper/X-to-Twitter for this after much frustration
    var checker = setInterval(function() {
        if ($(selector).length) {
            clearInterval(checker);
            callback();
        }
    }, 50);
}
(function() {
    'use strict';
    const iconSelector = '[aria-label="Grok"]';
    ifElementExistsThen(iconSelector, () => {
        document.querySelectorAll(iconSelector)[0].parentElement.removeChild(document.querySelectorAll(iconSelector)[0]);
    });
})();
