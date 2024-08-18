// ==UserScript==
// @name         Discord Toggle Sidebar
// @namespace    https://github.com/WhistlingZephyr/discord-toggle-sidebar
// @homepage     https://github.com/WhistlingZephyr/discord-toggle-sidebar
// @supportURL   https://github.com/WhistlingZephyr/discord-toggle-sidebar/issues
// @updateURL    https://github.com/WhistlingZephyr/discord-toggle-sidebar/raw/main/discord-toggle-sidebar.user.js
// @downloadURL  https://github.com/WhistlingZephyr/discord-toggle-sidebar/raw/main/discord-toggle-sidebar.user.js
// @version      0.1.10
// @description  A simple UserScript to toggle Discord sidebar
// @author       WhistlingZephyr
// @license      MIT
// @match        https://discord.com/channels/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        GM_registerMenuCommand
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';
    function addToggle(label, selector, shortcut) {
        let lastState = '';
        GM_registerMenuCommand(
            label,
            () => {
                const element = document.querySelector(selector);
                if (element.style.display !== 'none') {
                    lastState = element.style.display;
                    element.style.display = 'none';
                } else {
                    element.style.display = lastState;
                }
            },
            shortcut
        );
    }
    addToggle('Toggle sidebar', '[class^="sidebar_"]', 'h');
    addToggle('Toggle server list', '[aria-label="Servers sidebar"]', 's');
})();
