import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './index.scss'
import App from './App.jsx'
import { RecoilRoot } from 'recoil'
import { ProjectProvider } from './ProjectContext.jsx';

createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <ProjectProvider>
      <App />
    </ProjectProvider>
  </RecoilRoot>
)


// #Fontawesome
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest