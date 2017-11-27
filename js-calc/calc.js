'use strict';

window.onload=function(){
    window.alert("呵呵");
    // 初始化按键
    initKeyboard();
};
// 初始化按键
function initKeyboard() {
    var numPadNode = document.getElementsByClassName('numPad')[0];
    console.log(numPadNode);
    for (var i = 0; i < 12; i++) {
        if (i < 10) {
            numPadNode.appendChild('<div>'+i+'</div>');
        } else if ( i== 10) {
            numPadNode.appendChild('<div id="clr">C</div>');
        } else if (i == 11) {
            numPadNode.appendChild('<div id="eq">=</div>');
        }
    }
}