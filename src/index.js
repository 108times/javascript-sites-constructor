import {model} from "./model"
import "./styles/main.css"

const $site = document.querySelector("#site");
const $sidebar = document.querySelector("#sidebar");

model.forEach(item => {
    if (item.toHTML) {
        $site.insertAdjacentHTML("beforeend", item.toHTML())
    }
})
