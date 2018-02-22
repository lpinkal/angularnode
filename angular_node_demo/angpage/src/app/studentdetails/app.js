"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App(http) {
        this.http = http;
        this.http.get('http://localhost:3001/').map(function (res) {
            console.log('123');
            return res;
        });
    }
    return App;
}());
