 @"(function () {
    var bnt = document.getElementById('textSpeaker');
    bnt.focus();
    var bntRect = bnt.getBoundingClientRect();
    return JSON.stringify({ x: bntRect.left, y: bntRect.top });
})();"
