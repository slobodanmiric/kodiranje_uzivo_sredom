var jsView = document.querySelector('#jsView');
var phpView = document.querySelector('#phpView');
var wpView = document.querySelector('#wpView');
var jsViewImg = document.querySelector('#jsViewImg');
var phpViewImg = document.querySelector('#phpViewImg');
var wpViewImg = document.querySelector('#wpViewImg');

function showJsView() {
    jsView.style.display = 'block';
    phpView.style.display = 'none';
    wpView.style.display = 'none';
    jsViewImg.style.display = 'block';
    phpViewImg.style.display = 'none';
    wpViewImg.style.display = 'none';
}
function showPhpView() {
    jsView.style.display = 'none';
    phpView.style.display = 'block';
    wpView.style.display = 'none';
    jsViewImg.style.display = 'none';
    phpViewImg.style.display = 'block';
    wpViewImg.style.display = 'none';
}
function showWpView() {
    jsView.style.display = 'none';
    phpView.style.display = 'none';
    wpView.style.display = 'block';
    jsViewImg.style.display = 'none';
    phpViewImg.style.display = 'none';
    wpViewImg.style.display = 'block';
}

