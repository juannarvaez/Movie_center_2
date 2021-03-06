"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var FooterComponent = (function () {
    function FooterComponent(router) {
        this.router = router;
    }
    /**Redirect to juan narvaez information profile section
    * @return {:void} */
    FooterComponent.prototype.goAboutMe = function () {
        window.scrollTo(0, 0);
        this.router.navigate(['aboutme']);
    };
    /**Redirects to movies section
   * @return {:void} */
    FooterComponent.prototype.goMovies = function () {
        window.scrollTo(0, 0);
        this.router.navigate(['movies']);
    };
    /**Redirects to people section
   * @return {:void} */
    FooterComponent.prototype.goPeople = function () {
        window.scrollTo(0, 0);
        this.router.navigate(['people']);
    };
    /**Redirects to Recommend me a movie section
   * @return {:void} */
    FooterComponent.prototype.goRecommend = function () {
        window.scrollTo(0, 0);
        this.router.navigate(['recommend']);
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router])
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map