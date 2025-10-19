import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css";

import Workspace from './components/workspace/workspace.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Workspace />
  </StrictMode>,
)
