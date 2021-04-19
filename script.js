

var button = document.getElementsByClassName("digit");
for (var i = 0; i < button.length; i++) {
    var element = button[i];
    element.addEventListener("click", function () {
        document.getElementById("history-value").innerText = document.getElementById("history-value").innerText + this.innerText;
    })
}
var clear = document.getElementById("c");
clear.addEventListener("click", function () {
    document.getElementById("history-value").innerText = "";
    document.getElementById("output-value").innerText = "0";
})
var equal = document.getElementById("=");
equal.addEventListener("click", function () {
    var history = document.getElementById("history-value").innerText;
    var historyCalculate = eval(history);
    document.getElementById("output-value").innerText = historyCalculate;
})

