// ==UserScript==
// @name         Yandex_Tracker_Timer
// @version      1.0
// @description  Simple timer for Yandex Tracker
// @author       Denis Belov

// @match       https://tracker.yandex.ru/agile/board/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// Создание элементов
    const timerDiv = document.createElement('div');
    const timeDisplay = document.createElement('span');
    const startButton = document.createElement('button');

// Задание начальных значений таймера
    let totalTime = 120; // 2 минуты в секундах
    let intervalId = null; // Идентификатор интервала для возможности его остановки

// Функция обновления таймера
    function updateTimerDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timeDisplay.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

// Функция, вызываемая при нажатии на кнопку "Старт"
    function startTimer() {
        // Если таймер уже запущен, сначала остановим его
        if (intervalId !== null) {
            clearInterval(intervalId);
        }

        totalTime = 120; // Перезагрузка таймера до 2 минут
        updateTimerDisplay(totalTime); // Обновление дисплея таймера

        intervalId = setInterval(() => {
            totalTime -= 1;
            updateTimerDisplay(totalTime);
            if (totalTime <= 0) {
                clearInterval(intervalId);
                intervalId = null; // Сброс идентификатора интервала после остановки
            }
        }, 1000);
    }

// Инициализация таймера
    updateTimerDisplay(totalTime);

// Настройка кнопки "Старт"
    startButton.textContent = 'Старт';
    startButton.addEventListener('click', startTimer);

// Стилизация div и его содержимого
    timerDiv.style.position = 'fixed';
    timerDiv.style.top = '0';
    timerDiv.style.left = '50%';
    timerDiv.style.transform = 'translateX(-50%)';
    timerDiv.style.backgroundColor = 'white';
    timerDiv.style.color = 'black';
    timerDiv.style.zIndex = '1000';
    timerDiv.style.padding = '20px';
    timerDiv.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
    timerDiv.style.display = 'flex';
    timerDiv.style.gap = '20px'; // Интервалы между элементами
    timerDiv.style.alignItems = 'center'; // Выравнивание элементов по центру

// Стилизация текста и кнопки
    timeDisplay.style.fontSize = '24px'; // Увеличение шрифта таймера
    startButton.style.fontSize = '20px'; // Увеличение шрифта кнопки

// Добавление элементов в DOM
    timerDiv.appendChild(timeDisplay);
    timerDiv.appendChild(startButton);
    document.body.appendChild(timerDiv);
})();