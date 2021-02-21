import {col, css, objectToStyleString, row} from "./utils";

function titleBlock(value, options = {}) {
    return {
        value,
        options,
        toHTML () {
            const styles = css(this)
            const tag = this.options.tag ?? "h1"
            return row(col(`<${tag}>${this.value}</${tag}>`, css(this)))
        }
    }
}

function textBlock(value, options = {}) {
    return {
        value,
        options,
        toHTML () {
            const container = options.embedded === true ?  e => e : row;
            const tag = this.options.tag ?? "p"
            return container(col(`<${tag}>${this.value}</${tag}>`, css(this)))
        }
    }
}

function columnsBlock(value, options = {}) {
    return {
        value,
        options,
        toHTML() {
            return row(
                this.value
                    .map(
                        item => col(
                            `<p>${item}</p>`,
                            css(this)
                        )
                    )
                    .join('')
            )
        }
    }
}

function imageBlock(value, options = {}) {
    return {
        value,
        options,
        toHTML () {
            const container = options.embedded === true ? e => e : row;
            const alt = this.options.alt
            const parentStyle = this.options?.parentStyle ? objectToStyleString(this.options.parentStyle) : "";
            return container(col(`<img src="${this.value}" style="${css(this)}" alt="${alt}" >`, parentStyle) )
        }
    }
}

function groupBlock(value, options = {}) {
    return {
        value,
        options,
        toHTML() {
            return row(value.map( item => item.toHTML() ).join(''));
        }
    }
}

export {
    titleBlock,
    textBlock,
    imageBlock,
    columnsBlock,
    groupBlock
}