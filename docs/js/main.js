"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var gameObjects = (function () {
    function gameObjects(div, x, y) {
        this.posX = x;
        this.posY = y;
        this.div = div;
        this.element = document.createElement(this.div);
        this.createElement();
        this.setPosition();
    }
    gameObjects.prototype.setPosition = function () {
        this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    gameObjects.prototype.createElement = function () {
        this.element = document.createElement(this.div);
        var map = document.getElementsByTagName("map")[0];
        map.appendChild(this.element);
    };
    return gameObjects;
}());
var Character = (function (_super) {
    __extends(Character, _super);
    function Character() {
        var _this = this;
        console.log("ik ben er klaar voor");
        _this = _super.call(this, "character", 250, 192) || this;
        _this.keyBoardButtons = new KeyboardButtons(_this);
        return _this;
    }
    Character.prototype.update = function () {
        this.keyBoardButtons.move();
    };
    return Character;
}(gameObjects));
var Game = (function () {
    function Game() {
        this.character = new Character();
        console.log("skuur");
        this.gameLoop();
    }
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.character.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
var KeyboardButtons = (function () {
    function KeyboardButtons(i) {
        this.upKey = 87;
        this.leftKey = 65;
        this.rightKey = 68;
        this.downKey = 83;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.instance = i;
        window.addEventListener("keydown", this.onKeydown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    KeyboardButtons.prototype.move = function () {
        this.instance.posX += this.xSpeed;
        this.instance.posY += this.ySpeed;
        this.instance.element.style.transform = "translate(" + this.instance.posX + "px, " + this.instance.posY + "px)";
    };
    KeyboardButtons.prototype.onKeydown = function (event) {
        switch (event.keyCode) {
            case this.leftKey:
                this.xSpeed = -3;
                break;
            case this.rightKey:
                this.xSpeed = 3;
                break;
            case this.upKey:
                this.ySpeed = -3;
                break;
            case this.downKey:
                this.ySpeed = 3;
                break;
        }
    };
    KeyboardButtons.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.leftKey:
                this.xSpeed = 0;
                break;
            case this.rightKey:
                this.xSpeed = 0;
                break;
            case this.upKey:
                this.ySpeed = 0;
                break;
            case this.downKey:
                this.ySpeed = 0;
                break;
        }
    };
    return KeyboardButtons;
}());
//# sourceMappingURL=main.js.map