// src/components/Hero.jsx
import React, { useEffect } from 'react';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useTime, useTransform } from 'framer-motion';
import {
  KeyboardArrowRight,
  Storefront,
  LocalShipping,
  Restaurant,
  MedicalServices,
  Factory,
} from '@mui/icons-material';

// --- Estilos ---
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: '8rem 0',
  background: '#f8fafc', // Fallback si el video no carga
  display: 'flex',
  alignItems: 'center',
  minHeight: '100vh',
  [theme.breakpoints.down('md')]: {
    padding: '6rem 0',
    minHeight: 'auto',
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  lineHeight: 1.2,
  marginBottom: theme.spacing(2),
  background: 'linear-gradient(135deg, #4f46e5, #10b981)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  textShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)', 
}));

const IconContainer = styled(motion.div)(({ theme }) => ({
    background: theme.palette.background.paper,
    borderRadius: '16px',
    boxShadow: theme.shadows[6],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90px',
    height: '90px',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transformOrigin: 'center center',
}));

const BackgroundVideo = styled('video')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: 1,
  zIndex: 0,
});

const BackgroundOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  // Sin background por defecto, es transparente
}));

const CTAButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #4f46e5, #10b981)',
  color: 'white',
  padding: '12px 28px',
  fontSize: '1.125rem',
  borderRadius: '8px',
  fontWeight: 600,
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 14px rgba(79, 70, 229, 0.25)',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 20px rgba(79, 70, 229, 0.3)',
    background: 'linear-gradient(135deg, #4338ca, #059669)',
  },
}));


// --- Componente ---
const Hero = ({ onOpenDemoDialog }) => {
  const theme = useTheme();
  const time = useTime();

  // Array de iconos
  const industryIcons = [
    { icon: Storefront, alt: 'Retail' },
    { icon: LocalShipping, alt: 'Transporte' },
    { icon: Restaurant, alt: 'Restaurante' },
    { icon: MedicalServices, alt: 'Salud' },
    { icon: Factory, alt: 'Manufactura' },
  ];

  // Paleta de colores para iconos
  const iconColors = [
    theme.palette.primary.main,
    theme.palette.success.main,
    theme.palette.info.main,
    '#4338ca',
    '#059669',
  ];

  // Parámetros de animación
  const numIcons = industryIcons.length;
  const radius = useTransform(time, () => (typeof window !== 'undefined' && window.innerWidth < 900 ? 100 : 150));
  const scaleFactor = 1.2;
  const orbitDuration = 15000;
  const scaleDuration = 3000;

  return (
    <HeroSection id="home">
      <BackgroundOverlay />
      <BackgroundVideo autoPlay muted loop playsInline>
        <source src="https://pub-c37b7a23aa9c49239d088e3e0a3ba275.r2.dev/Disen%CC%83o%20sin%20ti%CC%81tulo.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </BackgroundVideo>

      {/* Usamos Flexbox */}
      <Container sx={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 'lg' }}>
        <Box
          sx={{
            display: { xs: 'block', md: 'flex' },
            gap: { xs: 4, md: 6 },
            alignItems: { md: 'flex-start' },
            width: '100%',
            // Centramos texto en móvil
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Columna Izquierda (Texto) */}
          <Box sx={{ flex: { md: '1 1 50%' }, width: { xs: '100%', md: 'auto' } }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
                <HeroTitle variant="h1" sx={{ fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem' } }}>
                  Sistema Flexible de Facturación: De Negocios Pequeños a Industrias Globales
                </HeroTitle>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}>
                <Typography variant="h6" color="#475569" sx={{ 
                  mb: 4, 
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }, 
                  lineHeight: 1.6, 
                  maxWidth: { xs: '100%', md: '95%' },
                  marginLeft: { xs: 'auto', md: 0 },
                  marginRight: { xs: 'auto', md: 0 },
                  textShadow: '0 1px 2px rgba(255,255,255,0.5)' 
                }}> 
                  Diseñado para adaptarse a cualquier sector y revolucionar la gestión empresarial, desde transporte hasta supermercados y más.
                </Typography>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <CTAButton
                  variant="contained"
                  size="large"
                  endIcon={<KeyboardArrowRight />}
                  onClick={onOpenDemoDialog}
                >
                  Solicitar Demo
                </CTAButton>
              </motion.div>
          </Box>

          {/* Columna Derecha (Iconos Orbitando) - AQUÍ ESTÁN LOS CAMBIOS */}
          <Box
            sx={{
              flex: { md: '1 1 50%' },
              width: '100%',
              position: 'relative',
              minHeight: { xs: '350px', sm: '400px', md: '450px' },
              mt: { xs: 6, md: 0 },
              // Importante: aseguramos que el container esté centrado
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center',
            }}
          >
            {/* Contenedor para el punto central de la animación */}
            <Box 
              sx={{ 
                position: 'relative',
                width: '1px',  // Elemento invisible que sirve de punto central
                height: '1px',
                marginLeft: { xs: '-10%', sm: '-15%', md: '0' },
              }}
            >
              {industryIcons.map((item, index) => {
                const IconComponent = item.icon;
                const angleOffset = (index / numIcons) * 2 * Math.PI;
                const angle = useTransform(time, (t) => angleOffset + (t / orbitDuration) * 2 * Math.PI);
                const currentRadius = typeof radius === 'number' ? radius : radius.get();
                const x = useTransform(angle, (latestAngle) => currentRadius * Math.cos(latestAngle));
                const y = useTransform(angle, (latestAngle) => currentRadius * Math.sin(latestAngle));
                const scale = useTransform(time, (t) => 1 + (Math.sin(t / (scaleDuration / 2) + index * (Math.PI / numIcons)) + 1) / 2 * (scaleFactor - 1));
                const iconColor = iconColors[index % iconColors.length];

                return (
                  <IconContainer
                    key={item.alt}
                    style={{ x, y, scale }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <IconComponent sx={{ fontSize: '40px', color: iconColor }} />
                  </IconContainer>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default Hero;