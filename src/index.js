const model = [
    {type:"title",value:"JavaScript Constructor"},
    {type:"text",value:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias nihil tenetur est, ab accusamus ex, molestiae mollitia ipsam animi, quas aut quam dolores eos aperiam."},
    {type:"columns",value:[
        "111111",
        "222222",
        "333333",
        "444444"
    ]}
]

$site = document.querySelector("#site");

model.forEach(item => {
    let html = ''

    if (item.type === "title") {
       html = title(item)
    } else if (item.type === "text") {
       html = text(item)
    } else if (item.type === "columns") {
       html = columns(item)
    }

    $site.insertAdjacentHTML("beforeend",html)
})

function title(obj) {
    return `
        <div class="row document-block">
            <div class="col-sm">
                <h1>${obj.value}</h1>
            </div>
        </div>
        `
}

function text(obj) {
    return `
    <div class="row document-block">
        <div class="col-sm">
            <p>${obj.value}</p>
        </div>
    </div>
    `
}

function columns(obj) {
    let html = ''
    obj.value.forEach(item => {
        html += `
        <div class="col-sm columns-item ">
            <p>${item}</p>
        </div>
        `
    })
    return `<div class="row document-block columns">${html}</div>`
}
