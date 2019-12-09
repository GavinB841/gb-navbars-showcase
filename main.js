(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gb-sidenav-showcase *ngIf=\"!show\"></gb-sidenav-showcase>\r\n<gb-navbar-showcase *ngIf=\"show\"></gb-navbar-showcase>\r\n<button style=\"margin-left: 50%; margin-top: 20%\" (click)=\"toggle()\" id=\"bt\">\r\n  {{buttonName}}\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.show = false;
        this.buttonName = 'Show Navbar';
    }
    AppComponent.prototype.toggle = function () {
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Show Sidenav";
        else
            this.buttonName = "Show Navbar";
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gavinb841_gb_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gavinb841/gb-sidenav */ "./node_modules/@gavinb841/gb-sidenav/fesm5/gavinb841-gb-sidenav.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var gb_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gb-navbar */ "./node_modules/gb-navbar/fesm5/gavinb841-gb-navbar.js");
/* harmony import */ var _gb_sidenav_showcase_gb_sidenav_showcase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gb-sidenav-showcase/gb-sidenav-showcase.component */ "./src/app/gb-sidenav-showcase/gb-sidenav-showcase.component.ts");
/* harmony import */ var _gb_navbar_showcase_gb_navbar_showcase_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gb-navbar-showcase/gb-navbar-showcase.component */ "./src/app/gb-navbar-showcase/gb-navbar-showcase.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'components/paginationDemo', component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
    { path: 'components/sidenavDemo', component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
    { path: 'filters/searchDemo', component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
    { path: 'services/utilsDemo', component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _gb_sidenav_showcase_gb_sidenav_showcase_component__WEBPACK_IMPORTED_MODULE_6__["GbSidenavShowcaseComponent"],
                _gb_navbar_showcase_gb_navbar_showcase_component__WEBPACK_IMPORTED_MODULE_7__["GbNavbarShowcaseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _gavinb841_gb_sidenav__WEBPACK_IMPORTED_MODULE_3__["GbSidenavModule"],
                gb_navbar__WEBPACK_IMPORTED_MODULE_5__["GbNavbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gb-navbar-showcase/gb-navbar-showcase.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/gb-navbar-showcase/gb-navbar-showcase.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gb-NavbarDemo\">\n  <gb-navbar [navigation]=\"navigation\">\n  </gb-navbar>\n</div>\n"

/***/ }),

/***/ "./src/app/gb-navbar-showcase/gb-navbar-showcase.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/gb-navbar-showcase/gb-navbar-showcase.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .gb-navbar {\n  padding: 8px 0 8px 0;\n  background: darkred;\n  list-style-type: none;\n  overflow: hidden;\n  margin: -8px;\n  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2); }\n  :host ::ng-deep .gb-navbar .list-group-item.gb-navbar-items {\n    background: darkred;\n    padding: 5px 10px 5px 15px;\n    border-radius: 0;\n    border: 0;\n    margin-top: 0;\n    float: left;\n    display: block;\n    color: white;\n    text-align: center;\n    text-decoration: none; }\n  :host ::ng-deep .gb-navbar .gb-navbar i {\n    margin: 0;\n    padding: 3px; }\n  :host ::ng-deep .gb-navbar button.list-group-item.gb-navbar-items:hover, :host ::ng-deep .gb-navbar button.list-group-item.gb-navbar-items:focus {\n    color: #fff;\n    outline: none;\n    cursor: pointer;\n    font-weight: bold; }\n  :host ::ng-deep .gb-navbar button.list-group-item.gb-navbar-items:hover .gb-navbar i:active, :host ::ng-deep .gb-navbar button.list-group-item.gb-navbar-items:focus .gb-navbar i:active {\n      color: goldenrod; }\n  :host ::ng-deep .gb-navbar button.list-group-item.gb-navbar-items.active {\n    color: goldenrod;\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2ItbmF2YmFyLXNob3djYXNlL0M6XFxVc2Vyc1xcZ2JveWxlXFxEb2N1bWVudHNcXE15U2hhcmVkTGlicmFyeVxcZ2ItbmF2YmFycy1zaG93Y2FzZS9zcmNcXGFwcFxcZ2ItbmF2YmFyLXNob3djYXNlXFxnYi1uYXZiYXItc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBb0I7RUFDcEIsb0JBQW1CO0VBQ25CLHNCQUFxQjtFQUNyQixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLDhDQUF5QyxFQXdDMUM7RUE5Q0Q7SUFTSSxvQkFBbUI7SUFDbkIsMkJBQTBCO0lBQzFCLGlCQUFnQjtJQUNoQixVQUFTO0lBQ1QsY0FBYTtJQUNiLFlBQVc7SUFDWCxlQUFjO0lBQ2QsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixzQkFBcUIsRUFDdEI7RUFuQkg7SUFzQkksVUFBUztJQUNULGFBQVksRUFDYjtFQXhCSDtJQTZCTSxZQUFXO0lBQ1gsY0FBYTtJQUNiLGdCQUFlO0lBQ2Ysa0JBQWlCLEVBT2xCO0VBdkNMO01Bb0NVLGlCQUFnQixFQUNqQjtFQXJDVDtJQTBDTSxpQkFBZ0I7SUFDaEIsa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZ2ItbmF2YmFyLXNob3djYXNlL2diLW5hdmJhci1zaG93Y2FzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuZ2ItbmF2YmFyIHtcclxuICBwYWRkaW5nOiA4cHggMCA4cHggMDtcclxuICBiYWNrZ3JvdW5kOiBkYXJrcmVkO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogLThweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCByZ2JhKDAsMCwwLC4yKTtcclxuXHJcbiAgLmxpc3QtZ3JvdXAtaXRlbS5nYi1uYXZiYXItaXRlbXMge1xyXG4gICAgYmFja2dyb3VuZDogZGFya3JlZDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmdiLW5hdmJhciBpIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0uZ2ItbmF2YmFyLWl0ZW1zIHtcclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAuZ2ItbmF2YmFyIGkge1xyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiBnb2xkZW5yb2Q7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogZ29sZGVucm9kO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/gb-navbar-showcase/gb-navbar-showcase.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/gb-navbar-showcase/gb-navbar-showcase.component.ts ***!
  \********************************************************************/
/*! exports provided: GbNavbarShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GbNavbarShowcaseComponent", function() { return GbNavbarShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GbNavbarShowcaseComponent = /** @class */ (function () {
    function GbNavbarShowcaseComponent() {
        this.navigation = [
            {
                id: 'componentsHeader',
                type: 'group',
                label: 'Components',
                items: [
                    {
                        id: 'pagination',
                        type: 'link',
                        label: 'Pagination',
                        path: '/components/paginationDemo',
                        iconClass: 'fas fa-home fa-2x'
                    },
                    {
                        id: 'sidenav',
                        type: 'link',
                        label: 'Side Navigation',
                        path: '/components/sidenavDemo',
                        iconClass: 'fas fa-indent fa-2x'
                    }
                ]
            },
            {
                id: 'filtersHeader',
                type: 'group',
                label: 'Filters',
                items: [
                    {
                        id: 'search',
                        type: 'link',
                        label: 'Search',
                        path: '/filters/searchDemo',
                        iconClass: 'fas fa-cogs fa-2x'
                    }
                ]
            },
            {
                id: 'servicesHeader',
                type: 'group',
                label: 'Services',
                items: [
                    {
                        id: 'utils',
                        type: 'link',
                        label: 'Utilities',
                        path: '/services/utilsDemo',
                        iconClass: 'fas fa-search fa-2x'
                    }
                ]
            }
        ];
    }
    GbNavbarShowcaseComponent.prototype.ngOnInit = function () {
        this.navigationFormatted = JSON.stringify(this.navigation, null, 1);
    };
    GbNavbarShowcaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gb-navbar-showcase',
            template: __webpack_require__(/*! ./gb-navbar-showcase.component.html */ "./src/app/gb-navbar-showcase/gb-navbar-showcase.component.html"),
            styles: [__webpack_require__(/*! ./gb-navbar-showcase.component.scss */ "./src/app/gb-navbar-showcase/gb-navbar-showcase.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GbNavbarShowcaseComponent);
    return GbNavbarShowcaseComponent;
}());



/***/ }),

/***/ "./src/app/gb-sidenav-showcase/gb-sidenav-showcase.component.html":
/*!************************************************************************!*\
  !*** ./src/app/gb-sidenav-showcase/gb-sidenav-showcase.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gb-SidenavDemo\">\n  <gb-sidenav [navigation]=\"navigation\">\n  </gb-sidenav>\n</div>\n"

/***/ }),

/***/ "./src/app/gb-sidenav-showcase/gb-sidenav-showcase.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/gb-sidenav-showcase/gb-sidenav-showcase.component.ts ***!
  \**********************************************************************/
/*! exports provided: GbSidenavShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GbSidenavShowcaseComponent", function() { return GbSidenavShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GbSidenavShowcaseComponent = /** @class */ (function () {
    function GbSidenavShowcaseComponent() {
        this.navigation = [
            {
                id: 'componentsHeader',
                type: 'group',
                label: 'Components',
                items: [
                    {
                        id: 'pagination',
                        type: 'link',
                        label: 'Pagination',
                        path: '/components/paginationDemo',
                        iconClass: 'fas fa-home fa-2x'
                    },
                    {
                        id: 'sidenav',
                        type: 'link',
                        label: 'Side Navigation',
                        path: '/components/sidenavDemo',
                        iconClass: 'fas fa-indent fa-2x'
                    }
                ]
            },
            {
                id: 'filtersHeader',
                type: 'group',
                label: 'Filters',
                items: [
                    {
                        id: 'search',
                        type: 'link',
                        label: 'Search',
                        path: '/filters/searchDemo',
                        iconClass: 'fas fa-cogs fa-2x'
                    }
                ]
            },
            {
                id: 'servicesHeader',
                type: 'group',
                label: 'Services',
                items: [
                    {
                        id: 'utils',
                        type: 'link',
                        label: 'Utilities',
                        path: '/services/utilsDemo',
                        iconClass: 'fas fa-search fa-2x'
                    }
                ]
            }
        ];
    }
    GbSidenavShowcaseComponent.prototype.ngOnInit = function () {
        this.navigationFormatted = JSON.stringify(this.navigation, null, 1);
    };
    GbSidenavShowcaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gb-sidenav-showcase',
            template: __webpack_require__(/*! ./gb-sidenav-showcase.component.html */ "./src/app/gb-sidenav-showcase/gb-sidenav-showcase.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], GbSidenavShowcaseComponent);
    return GbSidenavShowcaseComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gboyle\Documents\MySharedLibrary\gb-navbars-showcase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map