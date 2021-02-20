import {row,col,css} from "./utils"

function title(obj) {
    const styles = css(obj)
    console.log(styles)
    return row(col(`<h1>${obj.value}</h1>`, styles))
}

function text(obj) {
    return row(col(`<p>${obj.value}</p>`))
}

function columns(obj) {
    let html = ''
    obj.value.map( item => {
       html += col(`<p>${item}</p>`);
    })
    return row(html)
}

function image(obj) {
    return row(`<img src="${obj.value}" alt="">`)
}


export const templates = {
    title,
    text,
    image,
    columns,
}