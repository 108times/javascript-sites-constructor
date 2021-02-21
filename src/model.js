import {titleBlock,textBlock,imageBlock,columnsBlock,groupBlock} from "./block";
import img from "./assets/mountains-bg.jpg"

export const model = [
    titleBlock(
        "JavaScript Sites Constructor",
        {
            tag: "h2",
            styles: {
                padding: "1.5rem",
                background: "#eee",
                "text-align": "center",
            }
    }),
    groupBlock(
        [
             imageBlock(
                img,
                {
                    alt: "Picture`s name",
                    styles: {
                        width: "400px",
                        height: "auto",
                        margin: "0 auto"
                    },
                    embedded: true,
                    parentStyle: {
                        display: "flex",
                        "justify-content":"center",
                        "align-items" : "center"
                    }
                }
            ),
            textBlock(
                "This is a simple site constructor, made by me to practise and learn JavaScript. This is not a finished project yet. You can check the repo on <a target='_blank' href='https://github.com/illusoriness/javascript-sites-constructor'>github</a>",
                {
                    styles: {
                        padding: "2rem",
                        "font-weight":"600",
                        color: "#"
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
    columnsBlock(
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
    textBlock(
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid consequatur distinctio molestiae obcaecati odit quod sequi! Dolorum facilis impedit libero officia quia, sunt.",
        {
            styles:{
                margin:"1rem auto",
                padding: "2.5rem"
            }
        }
    ),
    textBlock(
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eligendi error quisquam recusandae repellat repudiandae rerum saepe velit. Aspernatur eum maxime neque. Accusamus ad architecto beatae blanditiis consequatur, deserunt dolor dolore dolorum, eligendi illum maiores modi molestiae molestias odio quod repudiandae, vero? Debitis facere natus quaerat repellendus sit."
    )
]