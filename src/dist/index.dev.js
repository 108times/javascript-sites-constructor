"use strict";

var model = [{
  type: "title",
  value: "JavaScript Constructor"
}, {
  type: "text",
  value: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias nihil tenetur est, ab accusamus ex, molestiae mollitia ipsam animi, quas aut quam dolores eos aperiam."
}, {
  type: "columns",
  value: ["111111", "222222", "333333", "444444"]
}];
$site = document.querySelector("#site");
model.forEach(function (item) {
  var html = '';

  if (item.type === "title") {
    html = title(item);
  } else if (item.type === "text") {
    html = text(item);
  } else if (item.type === "columns") {
    html = columns(item);
  }

  $site.insertAdjacentHTML("beforeend", html);
});

function title(obj) {
  return "\n        <div class=\"row document-block\">\n            <div class=\"col-sm\">\n                <h1>".concat(obj.value, "</h1>\n            </div>\n        </div>\n        ");
}

function text(obj) {
  return "\n    <div class=\"row document-block\">\n        <div class=\"col-sm\">\n            <p>".concat(obj.value, "</p>\n        </div>\n    </div>\n    ");
}

function columns(obj) {
  var html = '';
  obj.value.forEach(function (item) {
    html += "\n        <div class=\"col-sm columns-item \">\n            <p>".concat(item, "</p>\n        </div>\n        ");
  });
  return "<div class=\"row document-block columns\">".concat(html, "</div>");
}