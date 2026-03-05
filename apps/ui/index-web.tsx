import * as ReactDOM from 'react-dom/client'

import App from './src/app/App'
import './src/styles/fonts.css'
import { StrictMode } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
)
