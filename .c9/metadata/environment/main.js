{"filter":false,"title":"main.js","tooltip":"/main.js","undoManager":{"mark":1,"position":1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":19,"column":1},"action":"insert","lines":["const baseURL = \"https://swapi.co/api/\";","","function getData(type, cb) {","    var xhr = new XMLHttpRequest();","","    xhr.onreadystatechange = function() {","        if (this.readyState == 4 && this.status == 200) {","            cb(JSON.parse(this.responseText));","        }","    };","","    xhr.open(\"GET\", baseURL + type + \"/\");","    xhr.send();","}","","function writeToDocument(type) {","    getData(type, function(data) {","        document.getElementById(\"data\").innerHTML = data;","    });","}"],"id":3}],[{"start":{"row":19,"column":1},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":4}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":11,"column":16},"end":{"row":11,"column":16},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1565438942426,"hash":"7262b5805a8e2a68cccebfdbda270d16424e5971"}