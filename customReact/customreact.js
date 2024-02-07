function customRender (reactElement,container){
    // Base Code for React js(Version 1)
    // const domElement =document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.childeren
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement);


    //VERSION 2 
     const domElement = document.createElement(reactElement.type)
     domElement.innerHTML = reactElement.childeren
      for (const props in reactElement.props) {
        if(props == 'children') continue;
        domElement.setAttribute(props,reactElement.props [props])
            
        }
        container.appendChild(domElement)
      }






const reactElement ={
    type:'a',//key value---> key of a tag(anchor)
    props :{ // key value---> value of a tag
        href:"https://google.com",
        target: '_blank'
    },
    childeren:'Click me to vist google'
}


const mainContainer =document.querySelector('#root')

customRender(reactElement,mainContainer)
