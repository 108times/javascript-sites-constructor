"use strict";

var _model = require("./model");

var _templates = require("./templates");

require("./styles/main.css");

var $site = document.querySelector("#site");
var $sidebar = document.querySelector("#sidebar");
console.log(_templates.templates);

_model.model.forEach(function (item) {
  var toHTML = _templates.templates[item.type];

  if (toHTML) {
    $site.insertAdjacentHTML("beforeend", toHTML(item));
  }
});