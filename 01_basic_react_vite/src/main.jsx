import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyComponent from './MyComponent.jsx'

const anotherUser = 'subhadip hensh'

const creatElm = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click here to visit google',
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <>
  //   <App />
  //   <MyComponent />
  //   <h3>Hello world</h3>
  // </>
  // creatElm
  reactElement
  
  
  // </React.StrictMode>,
)
