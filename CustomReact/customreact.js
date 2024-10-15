function customRender(r,c){
    // const domElement = document.createElement(r.type)
    // domElement.innerHTML = r.children
    // domElement.setAttribute('href',r.props.href)
    // c.appendChild(domElement)
    const domElement = document.createElement(r.type)
    domElement.innerHTML = r.children
    for (const prop in r.props) {
        if(prop === "children") continue;
        domElement.setAttribute(prop,r.props[prop])
    }
    c.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com'
    },
    children: 'Click me to visit Google.'
}
const mainContainer = document.getElementById("root")
customRender(reactElement,mainContainer)