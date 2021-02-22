import img from "./assets/mountains-bg.jpg"
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock, GroupBlock} from "./classes/Blocks"

export const model = [
    new TitleBlock(
        "JavaScript Sites Constructor",
        {
            tag: "h2",
            styles: {
                padding: "1.5rem",
                background: "#f7f7f7",
                "text-align": "center",
            }
        }
    ),
    new GroupBlock(
        [
             new ImageBlock(
                img,
                {
                    alt: "Picture`s name",
                    imgStyles: {
                        width: "400px",
                        height: "auto",
                        margin: "0 auto"
                    },
                    styles: {
                        display: "flex",
                        "justify-content":"center",
                        "align-items" : "center"
                    },
                    embedded: true,
                }
            ),
            new TextBlock(
                "This is a simple site constructor, made by me to practise and learn JavaScript. This is not a finished project yet. You can check the repo on <a target='_blank' href='https://github.com/illusoriness/javascript-sites-constructor'>github</a>",
                {
                    styles: {
                        padding: "2rem",
                    },
                    embedded: true,
                    tag: "h5"
                }
            )
        ],
        {
            styles: {

            }
        }
    ),
    new ColumnsBlock(
        [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi totam, vero! Quas?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi totam, vero! Quas?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi totam, vero! Quas?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi totam, vero! Quas?"
        ],
        {
            styles: {
                margin: "1rem auto",
                padding: "2.5rem",
                "border-right": "1px solid #aaa"
            }
        }
    ),
    new TextBlock(
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid consequatur distinctio molestiae obcaecati odit quod sequi! Dolorum facilis impedit libero officia quia, sunt.",
        {
            styles:{
                margin:"1rem auto",
                padding: "2.5rem"
            }
        }
    ),
    new TextBlock(
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eligendi error quisquam recusandae repellat repudiandae rerum saepe velit. Aspernatur eum maxime neque. Accusamus ad architecto beatae blanditiis consequatur, deserunt dolor dolore dolorum, eligendi illum maiores modi molestiae molestias odio quod repudiandae, vero? Debitis facere natus quaerat repellendus sit.",
        {
            styles:{
                margin:"1rem auto",
                padding: "2.5rem"
            }
        }
    )
]