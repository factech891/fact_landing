// src/components/FeatureCards/index.jsx

import React, { useEffect, useRef } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useAnimation, useInView } from 'framer-motion';

// Elementos estilizados
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.25rem',
  fontWeight: 700,
  marginBottom: '1.5rem',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-0.5rem',
    left: 0,
    width: '3rem',
    height: '0.25rem',
    background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    borderRadius: '1rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.75rem',
  },
}));

const CenteredSectionTitle = styled(SectionTitle)({
  textAlign: 'center',
  '&::after': {
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  color: theme.palette.text.secondary,
  marginBottom: '2.5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
}));

const FeatureCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  padding: '1.5rem',
  borderRadius: '0.75rem',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '5px',
    height: '0%',
    borderRadius: '2.5px',
    background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    transition: 'all 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    '&::before': {
      height: '100%',
    },
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '3rem',
  height: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: `rgba(99, 102, 241, 0.1)`,
  color: '#6366f1',
  borderRadius: '0.5rem',
  marginBottom: '1rem',
}));

const FeatureImage = styled('img')({
  width: '100%',
  height: 'auto',
  maxHeight: '200px',
  borderRadius: '0.5rem',
  objectFit: 'cover',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  marginTop: 'auto',
});

// Componente para cada grupo de características - MODIFICADO PARA 3 POR FILA
const FeatureSection = ({ title, subtitle, features, centered = false }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  // Variantes para la animación
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  // Divide los features en grupos de 3 (para mostrar 3 por fila)
  const featureRows = [];
  for (let i = 0; i < features.length; i += 3) {
    featureRows.push(features.slice(i, i + 3));
  }
  
  return (
    <Box 
      component="section" 
      sx={{ 
        py: 8, 
        backgroundColor: '#ffffff', // Cambiado a blanco puro
      }}
    >
      <Container>
        <Box sx={{ textAlign: centered ? 'center' : 'left', mb: 6 }}>
          {centered ? (
            <CenteredSectionTitle variant="h2">{title}</CenteredSectionTitle>
          ) : (
            <SectionTitle variant="h2">{title}</SectionTitle>
          )}
          <SectionSubtitle sx={{ textAlign: centered ? 'center' : 'left' }}>
            {subtitle}
          </SectionSubtitle>
        </Box>
        
        <Box ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Renderizar las filas, cada una con 3 columnas */}
            {featureRows.map((row, rowIndex) => (
              <Grid container spacing={3} key={rowIndex} sx={{ mb: 4 }}>
                {row.map((feature, index) => (
                  <Grid item xs={12} sm={6} md={4} key={`${rowIndex}-${index}`}>
                    <motion.div variants={cardVariants}>
                      <FeatureCard>
                        <IconWrapper>
                          {feature.icon}
                        </IconWrapper>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, fontSize: '1.2rem' }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontSize: '0.9rem' }}>
                          {feature.description}
                        </Typography>
                        <FeatureImage 
                          src={feature.image} 
                          alt={feature.title} 
                        />
                      </FeatureCard>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            ))}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export { FeatureSection };