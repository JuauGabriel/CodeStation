import 'normalize.css';
import { useState } from "react";
import { LoginModal } from './authmodal';
import { Box, Typography, Grid2, Button, } from '@mui/material';
import { KeyboardArrowRight, ExpandMore, } from '@mui/icons-material';

export function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ position: 'relative', width: '100%', height: '150vh', backgroundColor: '#000000', }}>
        <Box
          sx={{
            backgroundColor: '#a8050d',
            height: '40px',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2
          }}
        />
        <Box
          sx={{
            height: '150vh',
            width: '100%',
            position: 'absolute',
            top: '40px',
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: '#000000',
            zIndex: 1,

            '&::before': {
              content: '""',
              position: 'absolute',
              top: '5%',
              left: '35%',
              width: '60%',
              height: '85%',
              backgroundImage: 'url("/telabonita.jpeg")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              filter: 'blur(8px)',
              zIndex: -1
            },
          }}
        >
          <Grid2 container spacing={2}
            sx={{
              justifyContent: "space-between",
              zIndex: 1
            }}
          >
            <Grid2 size={6} sx={{ display: 'flex' }}>
              <Typography
                variant="h4"
                sx={{
                  color: '#a8050d',
                  fontWeight: 'bold',
                  marginLeft: '210px',
                  marginTop: '1rem',
                  fontFamily: 'Anton, sans-serif',
                }}
              >
                CodeStation
              </Typography>
            </Grid2>
            <Grid2 size={6}>
              <Box
                sx={{
                  display: 'flex',
                  gap: 4,
                  marginLeft: '340px',
                  alignItems: 'center',
                }}
              >
                <Typography
                  onClick={() => {
                    setOpen(true);
                  }}
                  sx={{
                    color: '#4d4646',
                    cursor: 'pointer',
                    marginTop: '1rem',
                    fontSize: '18px',
                    '&:hover': {
                      color: '#cfc8c9', 
                    },
                  }}
                >
                  Entrar
                </Typography>

                <Typography
                  sx={{
                    marginTop: '1rem',
                    fontSize: '18px',
                    color: '#4d4646',
                  }}
                >
                  Quero fazer parte
                </Typography>
              </Box>
            </Grid2>
          </Grid2>

          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <Box
                sx={{
                  marginLeft: '200px',
                  marginTop: '80px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '22px',
                    color: '#a8050d',

                  }}
                >
                  Acesso ilimitado
                </Typography>

                <Typography variant='h4'
                  sx={{
                    color: '#cfc8c9',
                    fontSize: '40px'
                  }}
                >
                  Tenha acesso aos melhores tutoriais de programação.
                </Typography>

                <Typography
                  sx={{
                    marginTop: '8px',
                    fontSize: '18px',
                    color: '#4d4646'
                  }}
                >
                  Estude onde estiver, a qualquer momento, e continue evoluindo como programador.
                </Typography>

                <Button
                  variant='outlined'
                  sx={{
                    alignSelf: 'flex-start',
                    marginTop: '33px',
                    color: '#cfc8c9',
                    borderColor: '#a8050d',
                    padding: '12px 20px',
                    cursor: 'pointer'
                  }}
                >
                  Acesse Agora
                  <KeyboardArrowRight sx={{ marginTop: '-2px', color: '#a8050d', marginLeft: '10px' }} />
                </Button>
              </Box>
            </Grid2>
          </Grid2>

          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <ExpandMore sx={{ color: '#cfc8c9', marginLeft: '100px', }} />

            <Typography
              variant='h5'
              sx={{
                color: '#cfc8c9',
                marginTop: '100px'
              }}
            >
              O QUE VC VAI ACESSAR
            </Typography>
          </Box>

          <Grid2 container spacing={2}
            sx={{
              margin: '11rem',
              padding: '7rem',
              display: 'flex',
            }}
          >
            {[
              { src: './banco image.jpg', label: 'BANCO DE DADOS' },
              { src: './front end image.jpeg', label: 'FRONT-END' },
              { src: './backend image.jpeg', label: 'BACK-END' },
              { src: './mobile image.jpeg', label: 'MOBILE' },
              { src: './ia image.jpeg', label: 'INTELIGENCIA ARTIFICIAL' },
            ].map((item, index) => (
              <Grid2 key={index} size={4}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '300px',
                    height: '200px',
                    BorderRadius: '8px',
                    overFlow: 'hidden',
                  }}
                >
                  <Box
                    component='img'
                    src={item.src}
                    alt={item.label}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />

                  <Typography
                    sx={{
                      position: 'absolute',
                      top: '78%',
                      left: '5%',
                      trasnform: 'translate(-50%, -50%)',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>

      <LoginModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}