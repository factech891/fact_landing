import React, { useEffect } from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Elementos estilizados
const StatsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
}));

const StatCard = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(5, 3),
  textAlign: 'center',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    background: 'rgba(255, 255, 255, 0.15)',
  },
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  opacity: 0.9,
  fontWeight: 500,
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
}));

const FloatingCircle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.1)',
}));

// Componente principal
const StatsCounter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  // Variantes para la animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  
  // Datos estadísticos
  const stats = [
    {
      value: 98,
      suffix: '%',
      label: 'Precisión en la validación fiscal',
    },
    {
      value: 70,
      suffix: '%',
      label: 'Reducción en tiempo de procesamiento',
    },
    {
      value: 5000,
      suffix: '+',
      label: 'Empresas satisfechas',
    },
    {
      value: 20,
      suffix: 'M+',
      label: 'Facturas procesadas mensualmente',
    },
  ];
  
  return (
    <StatsSection ref={ref}>
      {/* Elementos decorativos */}
      <FloatingCircle
        component={motion.div}
        sx={{ width: '300px', height: '300px', top: '-150px', right: '-50px' }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <FloatingCircle
        component={motion.div}
        sx={{ width: '200px', height: '200px', bottom: '-100px', left: '5%' }}
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <FloatingCircle
        component={motion.div}
        sx={{ width: '150px', height: '150px', top: '10%', left: '10%' }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={cardVariants}>
                  <StatCard elevation={0}>
                    <StatNumber variant="h3">
                      {inView ? (
                        <CountUp 
                          end={stat.value} 
                          duration={2.5} 
                          separator="," 
                          suffix={stat.suffix} 
                        />
                      ) : (
                        '0' + stat.suffix
                      )}
                    </StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </StatsSection>
  );
};

export default StatsCounter;