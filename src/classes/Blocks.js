import {col, css, objectToStyleString, row} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }
    toHTML() {
        throw new Error("toHTML method needs to be implemented!")
    }
}

class TitleBlock extends Block {
    toHTML () {
        const styles = css(this)
        const tag = this.options.tag ?? "h1"
        return row(col(`<${tag}>${this.value}</${tag}>`, css(this)))
    }
}

class TextBlock extends Block {
    toHTML () {
        const container = this.options.embedded === true ?  e => e : row;
        const tag = this.options.tag ?? "p"
        return container(col(`<${tag}>${this.value}</${tag}>`, css(this)))
    }
}

class ColumnsBlock extends Block {
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

class ImageBlock extends Block {
    toHTML () {
        const container = this.options.embedded === true ? e => e : row;
        const alt = this.options.alt
        const imgStyles = this.options?.imgStyles ? objectToStyleString(this.options.imgStyles) : "";
        return container(col(`<img src="${this.value}" style="${imgStyles}" alt="${alt}" >`, css(this)) )
    }
}

class GroupBlock extends Block {
    toHTML() {
        return row(
            this.value.map(
                item => item.toHTML()
            ).join('')
        )
    }
}

export {
    TitleBlock,
    TextBlock,
    ColumnsBlock,
    ImageBlock,
    GroupBlock
}