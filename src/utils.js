export function row(obj) {
    return `
        <div class="row">
            ${obj}
        </div>
    `
}

export function col(obj, styles = '') {
    return `
        <div class="col-sm" style="${styles}">
            ${obj}
        </div>
    `
}

export function css(obj) {
    const styles = obj.options.styles;
    const keys = Object.keys(styles)
    const result = keys.map( style => `${style}: ${styles[style]}`).join(';')
    return result
    //keys.map( key => )
}