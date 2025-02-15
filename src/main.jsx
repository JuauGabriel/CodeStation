import { Home } from './pages/home/App'
import { StrictMode } from 'react'
import { Box } from '@mui/material';
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Box sx={{ fontFamily: 'roboto, sans-serif' }}>
      <Home />
    </Box>
  </StrictMode>
)
