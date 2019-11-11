function component(){
    const ele = document.createElement('div')
    ele.innerHTML=("Hello")

    return ele;
}

document.body.appendChild(component())