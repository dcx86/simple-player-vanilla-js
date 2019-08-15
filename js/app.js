var posterDescriptionAll = document.querySelectorAll('.player__poster__description');

posterDescriptionAll.forEach(posterDescription => {
    posterDescription.onmousemove = function (e) {
        e.target.style.top = e.clientY + 'px';
        e.target.style.left = e.clientX + 20 + 'px';
    };
})