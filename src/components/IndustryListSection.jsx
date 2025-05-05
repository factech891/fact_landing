// src/components/IndustryListSection.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';

// --- Estilos con CSS Grid explícito ---
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.25rem',
  fontWeight: 700,
  marginBottom: '1.5rem',
  position: 'relative',
  color: '#0f172a',
  textAlign: 'center',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #4f46e5, #10b981)',
    borderRadius: '2px',
  },
  [theme.breakpoints.down('md')]: { fontSize: '1.75rem' },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  color: '#475569',
  marginBottom: '2.5rem',
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto 3rem auto',
  [theme.breakpoints.down('md')]: { fontSize: '1rem' },
}));

// Contenedor que usa CSS Grid explícito
const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '24px',
  width: '100%',
  marginBottom: '24px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

// Tarjeta con todo centrado - AHORA CON FONDO AZUL CIELO
const IndustryCard = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',  // Centra los elementos horizontalmente
  textAlign: 'center',   // Centra el texto
  background: '#f0f9ff', // Color azul cielo muy claro
  padding: '24px 16px',
  borderRadius: '12px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    transform: 'translateY(-5px)',
  },
}));

// Iconos mejorados
const IconWrapper = styled(Box)(({ theme, iconcolor }) => ({
  width: '70px',
  height: '70px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '18px',
  marginBottom: '16px',
  background: `linear-gradient(135deg, ${iconcolor || '#6366f1'}, ${alpha(iconcolor || '#6366f1', 0.6)})`,
  boxShadow: `0 8px 16px ${alpha(iconcolor || '#6366f1', 0.25)}`,
  color: 'white',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at top right, rgba(255,255,255,0.3), transparent 70%)',
    borderRadius: '18px',
  },
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: `0 12px 20px ${alpha(iconcolor || '#6366f1', 0.3)}`,
  },
}));

const ContentBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',  // Centra el contenido
  width: '100%',
});

const IndustryTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: '8px',
  color: '#0f172a',
  fontSize: '1.1rem',
  textAlign: 'center',   // Garantiza que el título esté centrado
}));

const IndustryDescription = styled(Typography)(({ theme }) => ({
  color: '#64748b',
  lineHeight: 1.5,
  fontSize: '0.875rem',
  textAlign: 'center',   // Garantiza que la descripción esté centrada
}));

// --- Componente Principal de la Sección ---
const IndustryListSection = ({ title, subtitle, features, centered = false }) => {
  // Dividir features en dos grupos de 4
  const firstRow = features.slice(0, 4);
  const secondRow = features.slice(4, 8);

  // Animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        {/* Título y Subtítulo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <SectionTitle variant="h2">{title}</SectionTitle>
          <SectionSubtitle>{subtitle}</SectionSubtitle>
        </motion.div>

        {/* Primera fila usando CSS Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <GridContainer>
            {firstRow.map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <IndustryCard whileHover={{ y: -5 }}>
                  <IconWrapper iconcolor={feature.iconColor}>
                    {React.cloneElement(feature.icon, { sx: { fontSize: '32px' } })}
                  </IconWrapper>
                  <ContentBox>
                    <IndustryTitle variant="h6">
                      {feature.title}
                    </IndustryTitle>
                    <IndustryDescription variant="body2">
                      {feature.description}
                    </IndustryDescription>
                  </ContentBox>
                </IndustryCard>
              </motion.div>
            ))}
          </GridContainer>
        </motion.div>

        {/* Segunda fila usando CSS Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          <GridContainer>
            {secondRow.map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <IndustryCard whileHover={{ y: -5 }}>
                  <IconWrapper iconcolor={feature.iconColor}>
                    {React.cloneElement(feature.icon, { sx: { fontSize: '32px' } })}
                  </IconWrapper>
                  <ContentBox>
                    <IndustryTitle variant="h6">
                      {feature.title}
                    </IndustryTitle>
                    <IndustryDescription variant="body2">
                      {feature.description}
                    </IndustryDescription>
                  </ContentBox>
                </IndustryCard>
              </motion.div>
            ))}
          </GridContainer>
        </motion.div>
      </Container>
    </Box>
  );
};

export default IndustryListSection;