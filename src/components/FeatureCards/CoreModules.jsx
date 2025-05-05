// src/components/FeatureCards/CoreModules.jsx
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

// Importar todas las imágenes
import imgRetail from '../../assets/images/retail.png';
import imgFacturacion from '../../assets/images/facturacion.png';
import imgInventario from '../../assets/images/inventario.png';
import imgCobranza from '../../assets/images/cobranza.png';
import imgReportes from '../../assets/images/reportes.png';
import imgLogistica from '../../assets/images/logistica.png';

const CoreModules = () => {
  const features = [
    { 
      title: 'Facturación Electrónica', 
      description: 'Crea facturas electrónicas con validez fiscal. Cumple con los requisitos legales.', 
      image: imgFacturacion
    },
    { 
      title: 'Control de Inventario', 
      description: 'Mantén actualizado tu inventario en tiempo real. Controla stock y almacenes.', 
      image: imgInventario
    },
    { 
      title: 'Cuentas por Cobrar', 
      description: 'Realiza seguimiento de pagos pendientes y automatiza recordatorios de cobro.', 
      image: imgCobranza
    },
    { 
      title: 'Reportes Inteligentes', 
      description: 'Obtén insights detallados sobre tu negocio. Visualiza métricas clave.', 
      image: imgReportes
    },
    { 
      title: 'Comercio Minorista', 
      description: 'Solución especializada para comercios. Gestiona punto de venta e inventario.', 
      image: imgRetail 
    },
    { 
      title: 'Logística y Transporte', 
      description: 'Administra operaciones de transporte, gestiona flotas y rutas.', 
      image: imgLogistica
    }
  ];

  return (
    <Box component="section" sx={{ py: 6, backgroundColor: '#ffffff' }}>
      <Container>
        {/* Título y subtítulo */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: '2rem',
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
              fontSize: '1rem',
              color: 'text.secondary',
              marginBottom: '2rem',
            }}
          >
            Todo lo que necesitas para llevar tu negocio al siguiente nivel.
          </Typography>
        </Box>
        
        {/* Sistema de grid */}
        <Grid container spacing={2} sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', width: '100%' }}>
          {features.map((feature, index) => (
            <Grid item key={index} sx={{ display: 'block', width: '100%' }}>
              <Box 
                sx={{ 
                  padding: '1.25rem',
                  borderRadius: '0.75rem',
                  backgroundColor: '#f0f9ff', // Color azul cielo muy claro
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
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
                {/* Imagen primero para darle más protagonismo */}
                <Box sx={{ 
                  marginBottom: '1rem',
                  borderRadius: '0.5rem',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    style={{ 
                      width: '100%',
                      height: 'auto',
                      minHeight: '160px',
                      maxHeight: '160px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </Box>
                
                {/* Contenido centrado */}
                <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700, 
                      marginBottom: '0.5rem',
                      fontSize: '1.1rem'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                      fontSize: '0.85rem'
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