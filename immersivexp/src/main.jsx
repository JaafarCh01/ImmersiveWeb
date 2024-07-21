import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Studio} from "@theatre/studio"
import extension from "@theatre/r3f/dist/extension"

//Studio.extend(extension)
//Studio.init()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}>
    <App />
    </Suspense>
  </React.StrictMode>,
)
