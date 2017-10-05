


function checkWidget() {
    var el = document.getElementById("#carcodesms-default-widget");
    if (el) {
        enhanceFunctionality(el);
    } else {
        setTimeout(checkWidget, 100);
    }
}

function enhanceFunctionality(el) {
    document.querySelector("#flexible-dealer-header div > [href='HoursAndDirections']").parentNode.appendChild(document.querySelector("#carcodesms-default-widget"));
    el.style = '';
    document.querySelector("#carcodesms-default-widget>*").style.height='32px';
}

checkWidget();
