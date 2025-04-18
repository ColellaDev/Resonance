import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme"; // Importando o tema personalizado
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
      <CssBaseline />
       <App />
     </ThemeProvider> 
  </StrictMode>,
)
