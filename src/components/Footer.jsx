// src/components/Footer.jsx
import React from 'react';
import { Box, Container, Grid, Typography, Divider, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email, Phone, LinkedIn, Twitter, Facebook, Instagram } from '@mui/icons-material';

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
            <Box sx={{ display: 'flex', mt: 3, gap: 2 }}>
              <Box component="a" href="#" sx={{ color: '#6b7280', '&:hover': { color: '#4338ca' } }}>
                <LinkedIn fontSize="small" />
              </Box>
              <Box component="a" href="#" sx={{ color: '#6b7280', '&:hover': { color: '#4338ca' } }}>
                <Twitter fontSize="small" />
              </Box>
              <Box component="a" href="#" sx={{ color: '#6b7280', '&:hover': { color: '#4338ca' } }}>
                <Facebook fontSize="small" />
              </Box>
              <Box component="a" href="#" sx={{ color: '#6b7280', '&:hover': { color: '#4338ca' } }}>
                <Instagram fontSize="small" />
              </Box>
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

          {/* Columna 3: Legal */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography 
              variant="subtitle1" 
              fontWeight={600} 
              sx={{ mb: 2 }}
            >
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography component="a" href="#" sx={{ mb: 1, textDecoration: 'none', color: '#6b7280', '&:hover': { color: '#4338ca' } }}>
                Términos de Uso
              </Typography>
              <Typography component="a" href="#" sx={{ mb: 1, textDecoration: 'none', color: '#6b7280', '&:hover': { color: '#4338ca' } }}>
                Privacidad
              </Typography>
              <Typography component="a" href="#" sx={{ mb: 1, textDecoration: 'none', color: '#6b7280', '&:hover': { color: '#4338ca' } }}>
                Cookies
              </Typography>
              <Typography component="a" href="#" sx={{ mb: 1, textDecoration: 'none', color: '#6b7280', '&:hover': { color: '#4338ca' } }}>
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
                info@facttech.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Phone 
                fontSize="small" 
                sx={{ mr: 1, color: '#4338ca' }} 
              />
              <Typography variant="body2" sx={{ color: '#6b7280' }}>
                +1 (555) 123-4567
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

        {/* Sección de copyright */}
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
            Diseñado con <span style={{ color: '#ef4444' }}>❤️</span> para tu negocio
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;