// src/components/FeatureCards/CoreModules.jsx
import React from 'react';
import { Box, Typography, Container, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// URLs de Cloudflare para cada imagen
const imgFacturacionUrl = "https://pub-c37b7a23aa9c49239d088e3e0a3ba275.r2.dev/Facturacio%CC%81n%20Electro%CC%81nica.png";
const imgInventarioUrl = "https://pub-c37b7a23aa9c49239d088e3e0a3ba275.r2.dev/Control%20de%20Inventario.png";
const imgCobranzaUrl = "https://pub-c37b7a23aa9c49239d088e3e0a3ba275.r2.dev/cuentas.jpg";
const imgReportesUrl = "https://pub-c37b7a23aa9c49239d088e3e0a3ba275.r2.dev/reportes.png";
const imgRetailUrl = "https://pub-c37b7a23aa9c49239d088e3e0a3ba275.r2.dev/retail.png";
const imgLogisticaUrl = "https://pub-c37b7a23aa9c49239d088e3e0a3ba275.r2.dev/logistica.jpg";

const CoreModules = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const features = [
    { 
      title: 'Facturación Electrónica', 
      description: 'Crea facturas electrónicas con validez fiscal. Cumple con los requisitos legales.', 
      image: imgFacturacionUrl
    },
    { 
      title: 'Control de Inventario', 
      description: 'Mantén actualizado tu inventario en tiempo real. Controla stock y almacenes.', 
      image: imgInventarioUrl
    },
    { 
      title: 'Cuentas por Cobrar', 
      description: 'Realiza seguimiento de pagos pendientes y automatiza recordatorios de cobro.', 
      image: imgCobranzaUrl
    },
    { 
      title: 'Reportes Inteligentes', 
      description: 'Obtén insights detallados sobre tu negocio. Visualiza métricas clave.', 
      image: imgReportesUrl
    },
    { 
      title: 'Comercio Minorista', 
      description: 'Solución especializada para comercios. Gestiona punto de venta e inventario.', 
      image: imgRetailUrl 
    },
    { 
      title: 'Logística y Transporte', 
      description: 'Administra operaciones de transporte, gestiona flotas y rutas.', 
      image: imgLogisticaUrl
    }
  ];

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 }, backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        {/* Título y subtítulo */}
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '1.75rem', md: '2rem' },
              fontWeight: 700,
              marginBottom: '1rem',
              position: 'relative',
              textAlign: 'center',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-0.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '3rem',
                height: '0.25rem',
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                borderRadius: '1rem',
              }
            }}
          >
            Funcionalidades Principales
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontSize: { xs: '0.9rem', md: '1rem' },
              color: 'text.secondary',
              marginBottom: { xs: '1.5rem', md: '2rem' },
              px: { xs: 2, md: 0 }
            }}
          >
            Todo lo que necesitas para llevar tu negocio al siguiente nivel.
          </Typography>
        </Box>
        
        {/* Sistema de grid - Responsive para diferentes tamaños de pantalla */}
        <Grid 
          container 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',              // Una columna en móvil
              sm: 'repeat(2, 1fr)',   // Dos columnas en tablets
              md: 'repeat(3, 1fr)'    // Tres columnas en desktop
            },
            gap: { xs: '12px', md: '16px' },
            width: '100%'
          }}
        >
          {features.map((feature, index) => (
            <Grid item key={index} sx={{ display: 'block', width: '100%' }}>
              <Box 
                sx={{ 
                  padding: { xs: '0.85rem', sm: '1.25rem' },
                  borderRadius: '0.75rem',
                  backgroundColor: '#f0f9ff',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: { xs: 'none', md: 'translateY(-5px)' },
                    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
                  },
                  // Efecto de feedback táctil para móvil
                  '&:active': {
                    backgroundColor: '#e6f4ff',
                    transform: 'scale(0.98)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '4px',
                    height: '0%',
                    borderRadius: '2px',
                    background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                    transition: 'all 0.3s ease',
                  },
                  '&:hover::before': {
                    height: '100%',
                  }
                }}
              >
                {/* Imagen con altura estandarizada */}
                <Box sx={{ 
                  marginBottom: { xs: '0.75rem', md: '1rem' },
                  borderRadius: '0.5rem',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    style={{ 
                      width: '100%',
                      height: 'auto',
                      minHeight: isMobile ? '120px' : '160px',
                      maxHeight: isMobile ? '120px' : '160px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </Box>
                
                {/* Contenido centrado - Optimizado para móvil */}
                <Box sx={{ 
                  textAlign: 'center', 
                  flex: 1, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center'
                }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700, 
                      marginBottom: { xs: '0.3rem', md: '0.5rem' },
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      color: '#1f2937' // Color más oscuro para mejor contraste
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontSize: { xs: '0.8rem', md: '0.85rem' },
                      color: '#4b5563', // Color más oscuro para mejor contraste
                      lineHeight: 1.5,
                      px: { xs: 0.5, md: 0 }
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreModules;