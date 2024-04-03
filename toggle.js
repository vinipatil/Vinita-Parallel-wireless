function toggleVisibility(id) {
    var elements = document.querySelectorAll('.inside');
    elements.forEach(function(element) {
        if (element.id !== id && !element.classList.contains('inside')) {
            element.classList.add('inside');
        }
    });

    var targetElement = document.getElementById(id);
    targetElement.classList.toggle('inside');
}
