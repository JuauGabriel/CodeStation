import { StrictMode } from 'react'
import { Box } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/app.routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Box sx={{ fontFamily: 'roboto, sans-serif' }}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Box>
  </StrictMode>
)
