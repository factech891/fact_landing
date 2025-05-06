// src/components/Footer.jsx
import React from 'react';
import { Box, Container, Grid, Typography, Divider, useMediaQuery, Tooltip, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email, Twitter, Instagram } from '@mui/icons-material';

// Sección principal del footer con blanco puro
const FooterWrapper = styled(Box)({
  backgroundColor: '#ffffff',
  color: '#1f2937',
  paddingTop: '2rem',
  paddingBottom: '1rem',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
  width: '100%',
});

// Logo con gradiente azul
const LogoText = styled(Typography)({
  fontWeight: 700,
  fontSize: '1.75rem',
  background: 'linear-gradient(135deg, #4338ca, #38bdf8)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
});

// Componente principal
const Footer = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  // Función para manejar los clicks en los enlaces de navegación
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Columna 1: Logo e información */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <LogoText>
                FactTech
              </LogoText>
            </Box>
            <Typography 
              variant="body2" 
              sx={{ mb: 2, maxWidth: '300px', color: '#6b7280' }}
            >
              Sistema flexible de facturación diseñado para adaptarse a negocios de todos los tamaños y sectores, optimizando operaciones y cumpliendo normativas fiscales.
            </Typography>
            
            {/* Redes sociales actualizadas: Twitter, Instagram, TikTok */}
            <Box sx={{ display: 'flex', mt: 3, gap: 2 }}>
              <Tooltip title="Próximamente" arrow>
                <Box sx={{ color: '#6b7280', cursor: 'not-allowed', opacity: 0.8 }}>
                  <Twitter fontSize="small" />
                </Box>
              </Tooltip>
              <Tooltip title="Próximamente" arrow>
                <Box sx={{ color: '#6b7280', cursor: 'not-allowed', opacity: 0.8 }}>
                  <Instagram fontSize="small" />
                </Box>
              </Tooltip>
              <Tooltip title="Próximamente" arrow>
                <Box sx={{ color: '#6b7280', cursor: 'not-allowed', opacity: 0.8 }}>
                  {/* Icono personalizado para TikTok */}
                  <Box 
                    component="svg" 
                    sx={{ width: 20, height: 20 }}
                    viewBox="0 0 24 24"
                  >
                    <path 
                      fill="currentColor" 
                      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                    />
                  </Box>
                </Box>
              </Tooltip>
            </Box>
          </Grid>

          {/* Columna 2: Enlaces rápidos */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography 
              variant="subtitle1" 
              fontWeight={600} 
              sx={{ mb: 2 }}
            >
              Navegación
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography 
                component="a" 
                onClick={() => handleNavClick('home')} 
                sx={{ 
                  mb: 1, 
                  textDecoration: 'none', 
                  color: '#6b7280', 
                  '&:hover': { color: '#4338ca' },
                  cursor: 'pointer'
                }}
              >
                Inicio
              </Typography>
              <Typography 
                component="a" 
                onClick={() => handleNavClick('features')} 
                sx={{ 
                  mb: 1, 
                  textDecoration: 'none', 
                  color: '#6b7280', 
                  '&:hover': { color: '#4338ca' },
                  cursor: 'pointer'
                }}
              >
                Características
              </Typography>
              <Typography 
                component="a" 
                onClick={() => handleNavClick('industries')} 
                sx={{ 
                  mb: 1, 
                  textDecoration: 'none', 
                  color: '#6b7280', 
                  '&:hover': { color: '#4338ca' },
                  cursor: 'pointer'
                }}
              >
                Industrias
              </Typography>
              <Typography 
                component="a" 
                onClick={() => handleNavClick('contact')} 
                sx={{ 
                  mb: 1, 
                  textDecoration: 'none', 
                  color: '#6b7280', 
                  '&:hover': { color: '#4338ca' },
                  cursor: 'pointer'
                }}
              >
                Contacto
              </Typography>
            </Box>
          </Grid>

          {/* Columna 3: Legal - Marcada como "En desarrollo" */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Legal
              </Typography>
              <Chip 
                size="small" 
                label="En desarrollo" 
                sx={{ 
                  fontSize: '0.7rem',
                  backgroundColor: 'rgba(79, 70, 229, 0.1)',
                  color: '#4338ca',
                  fontWeight: 500
                }} 
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', opacity: 0.7 }}>
              <Typography component="span" sx={{ mb: 1, textDecoration: 'none', color: '#6b7280', cursor: 'not-allowed' }}>
                Términos de Uso
              </Typography>
              <Typography component="span" sx={{ mb: 1, textDecoration: 'none', color: '#6b7280', cursor: 'not-allowed' }}>
                Privacidad
              </Typography>
              <Typography component="span" sx={{ mb: 1, textDecoration: 'none', color: '#6b7280', cursor: 'not-allowed' }}>
                Cookies
              </Typography>
              <Typography component="span" sx={{ mb: 1, textDecoration: 'none', color: '#6b7280', cursor: 'not-allowed' }}>
                Licencias
              </Typography>
            </Box>
          </Grid>

          {/* Columna 4: Contacto */}
          <Grid item xs={12} sm={12} md={3}>
            <Typography 
              variant="subtitle1" 
              fontWeight={600} 
              sx={{ mb: 2 }}
            >
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email 
                fontSize="small" 
                sx={{ mr: 1, color: '#4338ca' }} 
              />
              <Typography variant="body2" sx={{ color: '#6b7280' }}>
                info@facttech.io
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

        {/* Sección de copyright con emoji de robot */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ color: '#6b7280', mb: { xs: 1, md: 0 } }}
          >
            &copy; {new Date().getFullYear()} FactTech. Todos los derechos reservados.
          </Typography>
          <Typography variant="body2" sx={{ color: '#6b7280' }}>
            Diseñado por bitsdeve 🤖
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;