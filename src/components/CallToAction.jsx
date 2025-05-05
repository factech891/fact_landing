// src/components/CallToAction.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { KeyboardArrowRight } from '@mui/icons-material';

// Elementos estilizados
const CTASection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(10, 0), // Reducido de 14 a 10 para hacer la sección completa más compacta
  overflow: 'hidden',
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)' 
    : 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
  color: '#fff',
  textAlign: 'center',
}));

const CTATitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: theme.spacing(4), // Aumentado de 2 a 4 para más espacio
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}));

const CTASubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  opacity: 0.9,
  marginBottom: 0,
  paddingBottom: theme.spacing(4), // Reducido de 8 a 4 unidades
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: 1.6, // Volvemos a 1.6 para hacerlo más compacto
  [theme.breakpoints.down('md')]: {
    fontSize: '1.125rem',
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 5), // Aumentado el padding horizontal de 4 a 5
  fontSize: '1.125rem',
  fontWeight: 600,
  borderRadius: '0.5rem',
  backgroundColor: '#fff',
  color: theme.palette.mode === 'dark' ? '#1E293B' : '#6366f1',
  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
  '&:hover': {
    backgroundColor: '#f8fafc',
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
  },
  transition: 'all 0.3s ease',
  // Añadiendo padding inferior para más espacio visual
  marginBottom: theme.spacing(6),
}));

const FloatingElement = styled(motion.div)({
  position: 'absolute',
  zIndex: 1,
});

// Burbujas decorativas mejoradas pero sutiles
const Bubble = ({ size, top, left, opacity = 0.1, blur = 0 }) => (
  <FloatingElement
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
      opacity: opacity,
      top: top,
      left: left,
      filter: `blur(${blur}px)`,
    }}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
    }}
    transition={{
      duration: 4 + Math.random() * 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);

// Componente principal
const CallToAction = ({ onOpenDemoDialog }) => {
  return (
    <CTASection>
      {/* Elementos decorativos */}
      <Bubble size="100px" top="20%" left="5%" opacity={0.05} blur={1} />
      <Bubble size="60px" top="70%" left="10%" opacity={0.08} />
      <Bubble size="40px" top="15%" left="20%" opacity={0.03} />
      <Bubble size="80px" top="80%" left="30%" opacity={0.07} blur={1} />
      <Bubble size="120px" top="10%" left="70%" opacity={0.04} blur={2} />
      <Bubble size="50px" top="60%" left="85%" opacity={0.06} />
      <Bubble size="70px" top="50%" left="90%" opacity={0.05} blur={1} />
      
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <CTATitle variant="h2">
            Todo lo que necesitas en un solo sistema
          </CTATitle>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <CTASubtitle>
            Optimiza tus operaciones de facturación con nuestra plataforma diseñada para agilizar tu negocio y cumplir con todas las normativas fiscales
          </CTASubtitle>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }} // Aumentado de 20 a 40 para que comience desde más abajo
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }} // Aumentado el delay de 0.2 a 0.3
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <CTAButton 
            variant="contained" 
            disableElevation
            onClick={onOpenDemoDialog}
            endIcon={<KeyboardArrowRight />}
          >
            Solicitar Demo Gratuita
          </CTAButton>
        </motion.div>
      </Container>
    </CTASection>
  );
};

export default CallToAction;