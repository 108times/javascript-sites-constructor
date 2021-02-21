import {model} from "./model"
import {templates} from "./templates"
import "./styles/main.css"

const $site = document.querySelector("#site");
const $sidebar = document.querySelector("#sidebar");

console.log(model)

model.forEach(item => {
    if (item.toHTML) {
        $site.insertAdjacentHTML("beforeend", item.toHTML())
    }
})
