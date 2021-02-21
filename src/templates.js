import {row,col,css} from "./utils"

function title(obj) {
    const styles = css(obj)
    return row(col(`<h1>${obj.value}</h1>`, css(obj)))
}

function text(obj) {
    return row(col(`<p>${obj.value}</p>`, css(obj)))
}

function columns(obj) {
    return row( obj.value.map( item => col(`<p>${item}</p>`, css(obj))).join('') )
}

function image(obj) {
    const alt = obj.options.alt
    return row(col(`<img src="${obj.value}" style="${css(obj)}" alt="${alt}" >`) )
}


export const templates = {
    title,
    text,
    image,
    columns,
}