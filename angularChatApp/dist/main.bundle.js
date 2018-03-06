webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qr_qr_component__ = __webpack_require__("./src/app/qr/qr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errorpage_errorpage_component__ = __webpack_require__("./src/app/errorpage/errorpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: 'qr', component: __WEBPACK_IMPORTED_MODULE_2__qr_qr_component__["a" /* QrComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_3__errorpage_errorpage_component__["a" /* ErrorpageComponent */] },
    { path: '**', redirectTo: 'error' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.router.navigate(['qr']);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__qr_qr_component__ = __webpack_require__("./src/app/qr/qr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__errorpage_errorpage_component__ = __webpack_require__("./src/app/errorpage/errorpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__qr_qr_component__["a" /* QrComponent */],
                __WEBPACK_IMPORTED_MODULE_4__errorpage_errorpage_component__["a" /* ErrorpageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__filter_pipe__["a" /* FilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/errorpage/errorpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/errorpage/errorpage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  errorpage works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/errorpage/errorpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorpageComponent = /** @class */ (function () {
    function ErrorpageComponent() {
    }
    ErrorpageComponent.prototype.ngOnInit = function () {
    };
    ErrorpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-errorpage',
            template: __webpack_require__("./src/app/errorpage/errorpage.component.html"),
            styles: [__webpack_require__("./src/app/errorpage/errorpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorpageComponent);
    return ErrorpageComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        console.log(items);
        return items.filter(function (it) {
            console.log(it.name);
            return it.name.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n  margin: 0;\r\n}\r\n.back{\r\n  width:100%;\r\n  margin:0 auto;\r\n  height: 150px;\r\n  background:#00bbff;\r\n  padding-top: 50px;\r\n}\r\n.main{\r\n  margin:  auto 0;\r\n  display: table;\r\n  -webkit-box-shadow: 1px 3px 5px 5px #a1a1a1;\r\n          box-shadow: 1px 3px 5px 5px #a1a1a1;\r\n  border-radius: 7px;\r\n  width: 100%;\r\n  height: 100%;\r\n  background:snow;\r\n}\r\n.box {\r\n  margin: 10px;\r\n}\r\n.rounded-circle {\r\n  margin-left: 250px;\r\n}\r\n.inputtext{\r\n  margin: 10px auto;\r\n  align:right;\r\n}\r\n.msg {\r\n  margin: 0px auto;\r\n  height: 380px;\r\n  background:#b9b8b8;\r\n  overflow: auto;\r\n}\r\n.contacts {\r\n  margin-left: 0px;\r\n  height: 370px;\r\n  width: 255px;\r\n  overflow: auto;\r\n}\r\n.contact1 {\r\n  width: 210px;\r\n  margin-left: 10px;\r\n}\r\n.rmsg{\r\n  background:lightblue;\r\n  width: 60%;\r\n  margin: 2%;\r\n}\r\n.smsg{\r\n  background: white;\r\n  margin: 2%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"back\">\r\n<div class=\"container\">\r\n  <div class=\"main\">\r\n  <div class=\"row box\">\r\n    <div class=\"col-3\" >\r\n      <div class=\"row\">\r\n       <div class=\"col-8\">\r\n          <img class=\"rounded-circle\" [src]=\"profileimg\" height=\"40\" width=\"40\" style=\"margin: 5px\">\r\n        </div>\r\n        <div class=\"col-2\">\r\n           <img [src]=\"chatimg\" height=\"30\" width=\"30\" style=\"margin: 10px\">\r\n        </div>\r\n         <div class=\"col-2\">\r\n            <img [src]=\"moreimg\" height=\"30\" width=\"30\" style=\"margin: 10px\">\r\n         </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row\" style=\"margin-left: 0px \">\r\n        <input type=\"text\" [(ngModel)]=\"searchtext\" placeholder=\"search\" style=\"margin-bottom:5px;width: 100%\">\r\n      </div>\r\n    <div class=\"contacts\">\r\n      <div class=\"contact1\">\r\n    <div class=\"row \" *ngFor=\"let contact of contacts|filter:searchtext\" (click)=\"curruntreceiver(contact)\">\r\n        <img class=\"rounded-circle\" [src]=\"contact.image\" height=\"40\" width=\"40\" style=\"margin: 5px\">\r\n        <p>{{contact.name}}<br>{{contact.status}}</p><hr>\r\n        {{contact.time}}\r\n    </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <div *ngIf=\"curruntreceiverdetail\">\r\n    <div class=\"row\" >\r\n      <div class=\"col-1\">\r\n        <img class=\"rounded-circle\" [src]=\"curruntreceiverdetail.image\" height=\"40\" width=\"40\" style=\"margin: 5px\">\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <p >{{curruntreceiverdetail.name}}<br>{{curruntreceiverdetail.status}}</p>\r\n      </div>\r\n      <div class=\"col-1\">\r\n        <img [src]=\"attachmentimg\" height=\"30\" width=\"30\" style=\"margin: 10px\">\r\n      </div>\r\n      <div class=\"col-1\">\r\n        <img [src]=\"moreimg\" height=\"30\" width=\"30\" style=\"margin: 10px\">\r\n      </div>\r\n    </div>\r\n        <div class=\"row msg\">\r\n            <div class=\"row rmsg\" *ngFor=\"let msg of msgs\" style=\"margin-left: 5px\">\r\n               <p> {{msg}}</p>\r\n            </div>\r\n          <div class=\"row smsg\" *ngFor=\"let msg of msgs1\" style=\"margin-left: 60%;width: 99%;background: white\">\r\n            <p> {{msg}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row inputtext\">\r\n          <input type=\"text\" [(ngModel)]=\"edittext\" style=\"width: 92%\">\r\n          <input type=\"button\" class=\"btn-primary\" value=\"send\" style=\"width: 8%\" (click)=\"addmsg()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row connectedimg\" *ngIf=\"!curruntreceiverdetail\">\r\n        <img class=\"rounded-circle\" [src]=\"connectedimg\" height=\"300\" width=\"300\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.profileimg = '../assets/profileimg.jpg';
        this.attachmentimg = '../assets/attachment.png';
        this.moreimg = '../assets/more.png';
        this.chatimg = '../assets/chat.png';
        this.connectedimg = '../assets/connected.jpg';
        this.contacts = [{ "image": "../assets/receiver.jpg", "name": "receiver1", "status": "online", "time": "2.23" },
            { "image": "../assets/receiver.jpg", "name": "receiver2", "status": "offline", "time": "5.23" },
            { "image": "../assets/receiver.jpg", "name": "receiver3", "status": "online", "time": "9.23" },
            { "image": "../assets/receiver.jpg", "name": "receiver4", "status": "offline", "time": "12.23" },
            { "image": "../assets/receiver.jpg", "name": "receiver4", "status": "offline", "time": "12.23" },
            { "image": "../assets/receiver.jpg", "name": "receiver4", "status": "offline", "time": "12.23" },
            { "image": "../assets/receiver.jpg", "name": "receiver4", "status": "offline", "time": "12.23" },
            { "image": "../assets/receiver.jpg", "name": "receiver4", "status": "offline", "time": "12.23" }];
        this.msgs = ["m1", "m2", "m3", "m1", "m2", "m3", "m1", "m2", "m3", "m1", "m2", "m3", "m1", "m2", "m3"];
        this.msgs1 = ["mn1", "mn2", "mn3", "mn1", "mn2", "mn3", "mn1", "mn2", "mn3", "mn1", "mn2", "mn3", "mn1", "mn2", "mn3"];
        this.edittext = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.fun = function () {
        console.log('fun');
    };
    HomeComponent.prototype.curruntreceiver = function (contact) {
        this.curruntreceiverdetail = contact;
        console.log(this.curruntreceiverdetail);
    };
    HomeComponent.prototype.addmsg = function () {
        this.msgs1.push(this.edittext);
        this.edittext = '';
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/qr/qr.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n  margin: 0;\r\n}\r\n.back{\r\n  width:100%;\r\n  margin:0 auto;\r\n  height: 150px;\r\n  background:#00bbff;\r\n}\r\n.main{\r\n  margin: 50px auto 0;\r\n  display: table;\r\n  -webkit-box-shadow: 1px 3px 5px 5px #a1a1a1;\r\n          box-shadow: 1px 3px 5px 5px #a1a1a1;\r\n  border-radius: 7px;\r\n}\r\n.image{\r\n  margin: 40px  auto;\r\n  display: table;\r\n  width:40%;\r\n  float: left;\r\n}\r\n.text-box{\r\n  margin: 0px auto;\r\n  display: table;\r\n}\r\n.text-box h1, .text-box h2, .text-box h6{\r\n  color:#fff;\r\n}\r\n.table-box{\r\n  background: #d4d4d4;\r\n  width:100%;\r\n  float: left;\r\n}\r\n.main-box{\r\n  background: #ddd;\r\n  width:100%;\r\n  float: left;\r\n}\r\n.tab{\r\n  padding:10px;\r\n  width:50%;\r\n  float: left;\r\n}\r\n.main_content {\r\n  width: 100%;\r\n  background:#2E445E;\r\n  height: 450px;\r\n}\r\n.text {\r\n  margin: 50px;\r\n}\r\n.check {\r\n  margin: 40px 0px 0px 0px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/qr/qr.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n  <div class=\"back\">\r\n  <div class=\"container\">\r\n    <div class=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"main_content\">\r\n      <div class=\"col-5 image\">\r\n      <div class=\"\">\r\n        <img class=\"img-fluid\" [src]=\"myimagepath\" height=\"300\" width=\"300\" >\r\n       </div>\r\n    </div>\r\n      <div class=\"col-7 text-box\">\r\n      <div class=\"text\">\r\n            <h1><b>LanetChatApp Web</b></h1>\r\n             <h2>Use LanetChatApp on your phone to scan the code</h2>\r\n             <div class=\"check\"><input type=\"checkbox\" name=\"keepsignin\" (change)=\"signin($event)\"> Keep me signed in</div>\r\n            <h6>To reduce data connect your phone to wi-fi </h6>\r\n    </div>\r\n      </div>\r\n    </div>\r\n      </div>\r\n    </div>\r\n      <div class=\"row\">\r\n      <div class=\"col-12\">\r\n      <div class=\"table-box\">\r\n         <div class=\"col-6 tab\">\r\n\r\n             <div class=\"\">\r\n                  <img class=\"rounded-circle\" [src]=\"androidimg\" height=\"32px\" width=\"32px\" style=\"background-color:lightblue\">\r\n                       <h4><b>Android</b></h4>\r\n                  <h5>Open LanetChatApp - Menu - LanetChatApp Web</h5>\r\n            </div>\r\n\r\n         </div>\r\n        <div class=\"col-6 tab\">\r\n\r\n            <div class=\"\">\r\n              <img class=\"rounded-circle\" [src]=\"appleimg\" height=\"32px\" width=\"32px\" style=\"background-color:lightblue\">\r\n              <h4><b>iPhone</b></h4>\r\n              <h5>Open LanetChatApp - Menu - LanetChatApp Web</h5>\r\n            </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/qr/qr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QrComponent = /** @class */ (function () {
    function QrComponent(router) {
        this.router = router;
        this.myimagepath = '../assets/qr.png';
        this.androidimg = '../assets/android_logo.png';
        this.appleimg = '../assets/apple_logo.png';
    }
    QrComponent.prototype.ngOnInit = function () {
    };
    QrComponent.prototype.signin = function (event) {
        if (event.target.checked) {
            this.router.navigate(['home']);
        }
    };
    QrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-qr',
            template: __webpack_require__("./src/app/qr/qr.component.html"),
            styles: [__webpack_require__("./src/app/qr/qr.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], QrComponent);
    return QrComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map