(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\r\n    <span class=\"text-center\">\r\n        <h1>{{ portfolio.firstName + ' ' + portfolio.lastName }}</h1>\r\n        <h2 class=\"subHeading\">{{ portfolio.subHeading }}</h2>\r\n        <img id=\"profileP\" class=\"rounded-circle mx-auto d-block smallerImg\" alt=\"Profile picture\">\r\n    </span>\r\n    <div class=\"row justify-content-center\">\r\n        <a [href]=\"social.link\" class=\"p-2\" target=\"_blank\" *ngFor=\"let social of portfolio.socialMedia\">\r\n            <i [style.color]=\"social.color\" [class]=\"social.icon\"></i>\r\n        </a>\r\n    </div>\r\n    <div>\r\n        <h3>\r\n            <i (click)=\"toggleOpen('logOpen')\" *ngIf=\"!logOpen else logExpanded\" class=\"fa fa-plus\" role=\"button\"></i>\r\n            <ng-template #logExpanded>\r\n                <i (click)=\"toggleOpen('logOpen')\" class=\"fa fa-minus\" role=\"button\"></i>\r\n            </ng-template>\r\n            Changelog\r\n        </h3>\r\n        <p class=\"description\">\r\n            Some of my accomplishments.\r\n        </p>\r\n        <div *ngIf=\"logOpen\" [@fadeInOut]>\r\n            <ul>\r\n                <portfolio-changelog (toggleActiveChange)=\"toggleActiveChange($event)\" *ngFor=\"let change of portfolio.changeLog\" [change]=\"change\"></portfolio-changelog>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <h3>\r\n            <i class=\"fa fa-plus\" *ngIf=\"!projectOpen else projectExpanded\" (click)=\"toggleOpen('projectOpen')\" role=\"button\"></i>\r\n            <ng-template #projectExpanded>\r\n                <i class=\"fa fa-minus\" (click)=\"toggleOpen('projectOpen')\" role=\"button\"></i>\r\n            </ng-template>\r\n            Projects\r\n        </h3>\r\n        <p class=\"description\">\r\n            Projects that I've created.\r\n        </p>\r\n        <div *ngIf=\"projectOpen\" class=\"projects container rounded\" [@fadeInOut]>\r\n            <ul class=\"row p-0 pb-2\">\r\n                <portfolio-project class=\"col-lg-6 col-12\" *ngFor=\"let project of portfolio.projects; last as isLast\" [project]=\"project\"></portfolio-project>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <h3>\r\n            <i class=\"fa fa-plus\" *ngIf=\"!bioOpen else bioExpanded\" (click)=\"toggleOpen('bioOpen')\" role=\"button\"></i>\r\n            <ng-template #bioExpanded>\r\n                <i class=\"fa fa-minus\" (click)=\"toggleOpen('bioOpen')\" role=\"button\"></i>\r\n            </ng-template>\r\n            Biography\r\n        </h3>\r\n        <p class=\"description\">\r\n            Some brief info about me.\r\n        </p>\r\n        <div *ngIf=\"bioOpen\" class=\"p-5 mt-4 mb-5 bio rounded\" [@fadeInOut]>\r\n            {{ portfolio.speakerBio }}\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/changelog/changelog.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/changelog/changelog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li [ngStyle]=\"{ 'color': change.color }\" >\r\n    <div>{{ change.month + ' - ' + change.year }}</div>\r\n    <div><i class=\"fa fa-info-circle\" (click)=\"toggleChange(change)\" [style.color]=\"change.showDetails ? 'white' : ''\"></i> {{ change.highlight }}</div>\r\n    <div *ngIf=\"change.showDetails\" class=\"changeLogDetails\" [@fadeInOut]>{{ change.details }}</div>\r\n</li>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/project/project.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/project/project.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"liProject py-3 h-100\">\r\n    <div [style.color]=\"project.color\" class=\"text-center\"><span class=\"projectTitle\">{{ project.title }}</span></div>\r\n    <div [style.color]=\"project.color\" class=\"text-center\"><span class=\"projectTime\">{{ project.month + ' ' + project.year }}</span></div>\r\n    <div class=\"row mt-2\">\r\n        <div *ngIf=\"project.imgSrc\" class=\"col-6\">\r\n            <img class=\"projectImage ml-3 d-block\" [src]=\"project.imgSrc\" alt=\"Project image\">\r\n        </div>\r\n        <div class=\"d-flex flex-column pl-md-0 projectDiv\" [ngClass]=\"{ 'col-6': project.imgSrc, 'col-8': !project.imgSrc }\" [ngStyle]=\"!project.imgSrc ? { 'margin-left': 'auto', 'margin-right': 'auto', 'align-items': 'center' } : ''\">\r\n            <div class=\"projectDescription p-2 rounded\" [ngStyle]=\"{ 'margin-bottom': !project.imgSrc ? '35px' : '' }\">\r\n                <span [style.color]=\"project.color\">{{ project.description }}</span>\r\n            </div>\r\n            <div id=\"topBtns\" class=\"d-flex flex-row mt-auto text-center\">\r\n                <a [href]=\"project.githubLink\" target=\"_blank\" class=\"\"><button [style.background-color]=\"project.color\" class=\"btn btn-light mr-1 mb-sm-0\">Source Code</button></a>\r\n                <a *ngIf=\"project.link\" [href]=\"project.link\" target=\"_blank\" class=\"\"><button [style.background-color]=\"project.color\" class=\"btn btn-light\">Visit Page</button></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n     <!-- Only visible on small screens -->\r\n     <div id=\"bottomBtns\" class=\"row d-none mt-2\">\r\n        <div class=\"ml-auto mr-auto text-center\">\r\n            <a [href]=\"project.githubLink\" target=\"_blank\" class=\"\"><button [style.background-color]=\"project.color\" class=\"btn btn-light mr-1 mb-sm-0\">Source Code</button></a>\r\n            <a [href]=\"project.link\" target=\"_blank\" class=\"\"><button [style.background-color]=\"project.color\" class=\"btn btn-light\">Visit Page</button></a>\r\n        </div>\r\n    </div>\r\n</li>"

/***/ }),

/***/ "./src/animations/fadeInOut.animation.ts":
/*!***********************************************!*\
  !*** ./src/animations/fadeInOut.animation.ts ***!
  \***********************************************/
/*! exports provided: fadeInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return fadeInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [
        // :enter is an alias for 'void => *'
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":leave", [
        // :leave is an alias for '* => void'
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ])
]);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_fadeInOut_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/fadeInOut.animation */ "./src/animations/fadeInOut.animation.ts");
/* harmony import */ var src_models_datasets_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/datasets/portfolio */ "./src/models/datasets/portfolio.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.logOpen = false;
        this.projectOpen = false;
        this.bioOpen = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.portfolio = src_models_datasets_portfolio__WEBPACK_IMPORTED_MODULE_3__["PortfolioData"];
    };
    AppComponent.prototype.toggleOpen = function (valueToToggle) {
        switch (valueToToggle) {
            case 'logOpen':
                this.logOpen = !this.logOpen;
                break;
            case 'projectOpen':
                this.projectOpen = !this.projectOpen;
                break;
            case 'bioOpen':
                this.bioOpen = !this.bioOpen;
                break;
        }
    };
    AppComponent.prototype.toggleActiveChange = function (toggleChange) {
        toggleChange.showDetails = !toggleChange.showDetails;
        // Stop showing another changelog's details
        for (var _i = 0, _a = this.portfolio.changeLog; _i < _a.length; _i++) {
            var change = _a[_i];
            if (change != toggleChange) {
                change.showDetails = false;
            }
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            animations: [_animations_fadeInOut_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInOut"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project/project.component */ "./src/project/project.component.ts");
/* harmony import */ var src_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/changelog/changelog.component */ "./src/changelog/changelog.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioProjectComponent"],
                src_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioChangelogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/changelog/changelog.component.ts":
/*!**********************************************!*\
  !*** ./src/changelog/changelog.component.ts ***!
  \**********************************************/
/*! exports provided: PortfolioChangelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioChangelogComponent", function() { return PortfolioChangelogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_animations_fadeInOut_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/animations/fadeInOut.animation */ "./src/animations/fadeInOut.animation.ts");



var PortfolioChangelogComponent = /** @class */ (function () {
    function PortfolioChangelogComponent() {
        this.toggleActiveChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PortfolioChangelogComponent.prototype.toggleChange = function (change) {
        this.toggleActiveChange.emit(change);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PortfolioChangelogComponent.prototype, "change", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PortfolioChangelogComponent.prototype, "toggleActiveChange", void 0);
    PortfolioChangelogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'portfolio-changelog',
            template: __webpack_require__(/*! raw-loader!./changelog.component.html */ "./node_modules/raw-loader/index.js!./src/changelog/changelog.component.html"),
            animations: [
                src_animations_fadeInOut_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInOut"]
            ]
        })
    ], PortfolioChangelogComponent);
    return PortfolioChangelogComponent;
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

/***/ "./src/models/datasets/portfolio.ts":
/*!******************************************!*\
  !*** ./src/models/datasets/portfolio.ts ***!
  \******************************************/
/*! exports provided: PortfolioData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioData", function() { return PortfolioData; });
var PortfolioData = {
    firstName: 'Christopher',
    lastName: 'Lubin',
    subHeading: 'Front-End Software Engineer',
    socialMedia: [
        {
            icon: 'fa fa-linkedin fa-2x',
            link: 'https://www.linkedin.com/in/chris-lubin',
            color: '#007785'
        },
        {
            icon: 'fa fa-github fa-2x',
            link: 'https://github.com/ChrisLubin',
            color: '#6E5494'
        },
    ],
    changeLog: [
        {
            color: '#24D05A',
            month: 'October',
            year: 2021,
            highlight: "Took On the Biggest Project That I Was Ever Tasked With",
            details: "I was tasked with rearchitecting the keyboard shortcuts system on the main web application that my team serviced. It included writing up pages of documentation, communicating with product managers and designers on requirements that needed specificity, and about 2 months of coding to implement the features with tests.",
            showDetails: false
        },
        {
            color: '#10A2F5',
            month: 'January',
            year: 2021,
            highlight: "Moved On to Become a Front-End Engineer",
            details: "RingCentral played a crucial part in advancing my career by having high standards and surrounding me with so many talented engineers.",
            showDetails: false
        },
        {
            color: '#EB4888',
            month: 'January',
            year: 2020,
            highlight: "Became a Full Stack Software Developer",
            details: "The first role in my career!",
            showDetails: false
        },
        {
            color: '#24D05A',
            month: 'December',
            year: 2019,
            highlight: "Graduated from Florida Atlantic University",
            details: "I graduated magna cum laude with a B.S. in Computer Science.",
            showDetails: false
        },
        {
            color: '#10A2F5',
            month: 'April',
            year: 2019,
            highlight: "Enhanced Unify's Circuit Google Assistant",
            details: "This was a big accomplishment for me because I was given the opportunity to enhance Unify's Google Assistant application using Node.js, essentially working as a feature engineer even though I was on the automation team.",
            showDetails: false
        },
        {
            color: '#EB4888',
            month: 'August',
            year: 2018,
            highlight: 'Internship at Unify',
            details: "For this role, I was on the automation team that tested the company's flagship product, Circuit. We mainly used Groovy as our programming language of choice.",
            showDetails: false
        },
        {
            color: '#24D05A',
            month: 'February',
            year: 2018,
            highlight: 'Attended the MangoHacks Hackathon',
            details: "At the time, I didn't have much knowledge about web development so I didn't develop anything. The experience was still enjoyable by interacting with other students/developers and learning a little along the way.",
            showDetails: false
        },
        {
            color: '#EB4888',
            month: 'June',
            year: 2016,
            highlight: 'Graduated High School',
            details: 'I graduated with a weighted 4.25 and cumulative 3.47 GPA. I was in the 15th percentile for my graduating class (79 out of 535).',
            showDetails: false
        },
        {
            color: '#10A2F5',
            month: 'November',
            year: 2014,
            highlight: 'Intership at the Museum of Discovery and Science',
            details: 'This internship was a two year experience where I got to learn more about the museum and helped build an Android mobile application.',
            showDetails: false
        }
    ],
    projects: [
        {
            title: 'FAU Course-Checker',
            description: 'This application will constantly check for an opening in a course you\'re waiting to join then text or email you about it. (Not a web app so it has no picture)',
            color: '#E4E4E4',
            month: 'December',
            year: 2019,
            githubLink: 'https://github.com/ChrisLubin/FAU-Course-Checker'
        },
        {
            title: 'Kahoot-Like App',
            description: 'This application is inspired by Kahoot, an application mainly used by teachers to quiz their students all at once in realtime.',
            color: '#9EA8FF',
            month: 'August',
            year: 2019,
            link: 'https://kahoot-like-app-frontend.onrender.com',
            imgSrc: 'https://github.com/ChrisLubin/Kahoot-Like-App/blob/master/images/screenshot2.png?raw=true',
            githubLink: 'https://github.com/ChrisLubin/Kahoot-Like-App'
        },
        {
            title: 'Car Comparison Application',
            description: 'This tool allows anyone to compare the specifications of up to three different cars at the same time.',
            color: '#D6CABD',
            month: 'May',
            year: 2019,
            link: 'http://lamp.cse.fau.edu/~clubin2015/compareCar',
            imgSrc: 'https://github.com/ChrisLubin/Car-Comparison-Application/blob/master/IMG/Demo/screenshot.PNG?raw=true',
            githubLink: 'https://github.com/ChrisLubin/Car-Comparison-Application'
        },
        {
            title: 'Medication & Appointment Tracker',
            description: 'This application is targeted towards the elderly so they can easily keep track of their doctor\'s appointments and medication.',
            color: '#B7D3EB',
            month: 'April',
            year: 2019,
            link: 'http://lamp.cse.fau.edu/~clubin2015/medication',
            imgSrc: 'https://github.com/ChrisLubin/Medication-Tracker-Web-App/blob/master/App/images/Demo/screenshot9.png?raw=true',
            githubLink: 'https://github.com/ChrisLubin/Medication-Tracker-Web-App'
        },
        {
            title: 'Chat App',
            description: 'This is a chat application that people can use to communicate with friends, family, or strangers!',
            color: '#A2F8F5',
            month: 'January',
            year: 2019,
            link: 'http://lamp.cse.fau.edu/~clubin2015/chat',
            imgSrc: 'https://github.com/ChrisLubin/Chat-App/blob/master/IMG/Demo/screenshot1.png?raw=true',
            githubLink: 'https://github.com/ChrisLubin/Chat-App'
        },
        {
            title: 'To-Do List',
            description: 'This web application can be used so users can keep track of tasks that they have to complete.',
            color: '#279EAA',
            month: 'July',
            year: 2018,
            link: 'https://to-do-list-q847.onrender.com',
            imgSrc: 'https://github.com/ChrisLubin/To-Do-List/blob/master/IMG/Demo/screenshot1.PNG?raw=true',
            githubLink: 'https://github.com/ChrisLubin/To-Do-List'
        },
        {
            title: 'Math Game',
            description: 'This is a math game that a user can play for fun to brush up on their multiplication skills.',
            color: '#E4E4E4',
            month: 'May',
            year: 2018,
            link: 'https://math-game.onrender.com',
            imgSrc: 'https://github.com/ChrisLubin/Math-Game/blob/master/IMG/Demo/screenshot1.png?raw=true',
            githubLink: 'https://github.com/ChrisLubin/Math-Game'
        }
    ],
    speakerBio: 'Chris is currently a front-end software engineer working at RingCentral. He currently has 3 years of experience in the web development industry. He graduated from Florida Atlantic University magna cum laude with a B.S. in Computer Science in December of 2019. He is a self-motivated individual who is striving to become the best engineer that he can be. One of his major goals is to become a senior engineer within seven years into his career as a software engineer. Chris hopes to achieve this goal by continuously learning throughout his career on the job and on his own time.'
};


/***/ }),

/***/ "./src/project/project.component.ts":
/*!******************************************!*\
  !*** ./src/project/project.component.ts ***!
  \******************************************/
/*! exports provided: PortfolioProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioProjectComponent", function() { return PortfolioProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioProjectComponent = /** @class */ (function () {
    function PortfolioProjectComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PortfolioProjectComponent.prototype, "project", void 0);
    PortfolioProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'portfolio-project',
            template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/project/project.component.html")
        })
    ], PortfolioProjectComponent);
    return PortfolioProjectComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chris\Documents\Angular Apps\My-Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map