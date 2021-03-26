var btn = document.getElementsByClassName('scroll-section');
var element = document.getElementsByClassName("section");
var elementCurrent = element[0];

for(var i=0;i<btn.length;i++){
    btn[i].addEventListener('click', function(e){
        var value = e.target.getAttribute('value');
        elementCurrent = element[value];
        window.scroll({
            top: getOffset(elementCurrent).top,
            left: 0,
            behavior : "smooth"
        });
    })
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}