// ==UserScript==
// @name         Yandex Tracker Timer
// @version      1.0
// @description  Simple timer for Yandex Tracker
// @author       Denis Belov

// @match       https://tracker.yandex.ru/agile/board/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
    document.body.append(div);
})();
