import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './store/auth-context'
import { NavContextProvider } from './store/nav-context'

console.log(`${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION}`)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <AuthContextProvider>
            <NavContextProvider>
                <App />
            </NavContextProvider>
        </AuthContextProvider>
    </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
