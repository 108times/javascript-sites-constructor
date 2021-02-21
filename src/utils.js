export function row(obj, styles = '') {
    return `
        <div class="row" style="${styles}">
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
    const styles = obj?.options?.styles ?? ""
    return objectToStyleString(styles);
}

export function objectToStyleString(obj) {
    const toString = style => `${style}: ${obj[style]}`
    return Object.keys(obj).map(toString).join(";")
}