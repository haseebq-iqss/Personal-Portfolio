"use strict";

const workNames = ["FIRMVISION", 'HIAM', 'ZEYMAL', 'ONLY-IDENTITY', 'EASEWORK', 'BUDGETORY']
const workLinks = [
    "https://firmvision.vercel.app/",
    'https://hiam.vercel.app/',
    'https://zeymal.com/',
    'https://budgetory.vercel.app/',
    'https://easework.vercel.app/',
    'https://budgetory.vercel.app/'
]
const workImages = [
    './static/images/projects/fv-logo.jpg',
    './static/images/projects/hiam.gif',
    './static/images/projects/Zeymal-banner.jpg',
    './static/images/projects/only-identity.gif',
    './static/images/projects/easework.gif',
    './static/images/projects/budgetory.gif'
]

if ((document.location.href).includes('works')) {
    const worksParent = document.querySelector(".worksContainer");

    for (let i in workNames) {
        const childToAppend = `<div style="background-image: url(${workImages[i]})" class="workTab">
        <div class="texts">
            <a href="${workLinks[i]}">${workNames[i]}</a>
        </div>
        </div>`
        setTimeout(() => {
            worksParent.insertAdjacentHTML("beforeend", childToAppend)
        }, i * 150)
    }
}
