import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import { ProjectProvider } from './ProjectContext.jsx'

createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <ProjectProvider>
      <App />

    </ProjectProvider>
  </RecoilRoot>
)
