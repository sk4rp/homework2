// Получаем все заголовки <h>
var headers = document.querySelectorAll('h1, h2, h3');

// Добавляем класс "animate" ко всем заголовкам
headers.forEach(function(header) {
    header.classList.add('animate');
});
