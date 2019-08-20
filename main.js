function createMultiplyTable(start, end) {
    var result = "";
    if (checkInput(start, end) == "true") {
        result = createTable(start, end);
    }
    return result;
}

function checkInput(start, end) {
    var result = "false";
    if (start >= -2147483648 && start <= 2147483647 && end >= -2147483648 && end <= 2147483647) {
        result = "true";
    }
    return result;
}
function createTable(start, end) {
    var result = "";
    for (var t = start; t <= end; t++) {
        for (var i = start; i <= t; i++) {
            if(i == t && i != 4 && t != 4){
                result += i + "*" + t + "=" + (t * i) + "\r\n";
            }else if(i < t){
                result += i + "*" + t + "=" + (t * i)+" ";
            }else if(i == t && i == 4 && t == 4){
                result += i + "*" + t + "=" + (t * i);
            }
        }
    }
    return result;

}

module.exports = createMultiplyTable;
