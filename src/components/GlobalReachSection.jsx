// src/components/GlobalReachSection.jsx
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useAnimation } from 'framer-motion';
import { Public, Language, LocationOn, Payments } from '@mui/icons-material';

// Componente contenedor principal con diseño mejorado
const SectionWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(12, 2),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

// Video de fondo con mejor posicionamiento y efecto
const BackgroundVideo = styled('video')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  objectFit: 'cover',
  zIndex: 1,
  opacity: 0.12, // Ajustado ligeramente para mejor visibilidad
  filter: 'saturate(1.2) contrast(1.1)', // Mejora sutilmente los colores del video
});

// Overlay para dar profundidad y separación
const ContentOverlay = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6, 0),
}));

// Elemento decorativo flotante con animación
const FloatingElement = styled(motion.div)(({ theme, size, color }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`,
  filter: 'blur(8px)',
  opacity: 0.4,
  zIndex: 1,
}));

// Contenedor para los iconos con efecto de hover
const IconBox = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '90px',
  height: '90px',
  borderRadius: '16px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '70px',
    height: '70px',
  },
}));

// Título con estilo mejorado
const GradientTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  lineHeight: 1.2,
  marginBottom: theme.spacing(3),
  background: 'linear-gradient(135deg, #4f46e5, #10b981)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
}));

// Componente principal
const GlobalReachSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Datos para las características globales
  const globalFeatures = [
    { 
      icon: Public, 
      title: 'Cobertura Mundial', 
      description: 'Factura en cualquier ubicación con adaptabilidad a diferentes normativas y monedas',
      color: theme.palette.primary.main
    },
    { 
      icon: Language, 
      title: 'Adaptable a Idiomas', 
      description: 'Actualmente en español, con arquitectura preparada para futuras traducciones',
      color: theme.palette.info.main
    },
    { 
      icon: Payments, 
      title: 'Divisas Globales', 
      description: 'Gestiona transacciones en cualquier moneda con conversión automática',
      color: '#10b981'
    },
    { 
      icon: LocationOn, 
      title: 'Normativas Locales', 
      description: 'Adaptado a requisitos legales y fiscales de cada región',
      color: '#f43f5e'
    }
  ];

  // Elementos flotantes decorativos
  const floatingElements = [
    { size: '200px', top: '10%', left: '5%', color: 'rgba(79, 70, 229, 0.2)' },
    { size: '150px', top: '70%', left: '80%', color: 'rgba(16, 185, 129, 0.15)' },
    { size: '180px', top: '30%', left: '85%', color: 'rgba(79, 70, 229, 0.1)' },
    { size: '120px', top: '80%', left: '20%', color: 'rgba(16, 185, 129, 0.2)' },
  ];

  // Animar al entrar en viewport
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('global-reach-section');
      if (section && !hasAnimated) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          controls.start('visible');
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Comprobar al cargar
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, hasAnimated]);

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <SectionWrapper id="global-reach-section">
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src="https://pub-c37b7a23aa9c49239d088e3e0a3ba275.r2.dev/Video_de_Facturaci_n_Global_Listo.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </BackgroundVideo>

      {/* Elementos flotantes decorativos */}
      {floatingElements.map((el, index) => (
        <FloatingElement
          key={index}
          size={el.size}
          color={el.color}
          style={{ top: el.top, left: el.left }}
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <ContentOverlay maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <GradientTitle 
            variant="h2" 
            component="h2"
            sx={{ fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3rem' } }}
          >
            Adaptado a Cualquier País
          </GradientTitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{ 
              maxWidth: '800px', 
              mb: 6, 
              color: 'text.secondary',
              textAlign: 'center',
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            Nuestra plataforma está diseñada para adaptarse a normativas y usos horarios globales, 
            permitiéndote gestionar tu negocio sin fronteras y con total cumplimiento legal.
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{ 
            width: '100%',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: theme.spacing(4), 
            marginTop: theme.spacing(2)
          }}
        >
          {globalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    padding: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <IconBox>
                    <IconComponent sx={{ fontSize: '40px', color: feature.color }} />
                  </IconBox>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </motion.div>
            );
          })}
        </motion.div>
      </ContentOverlay>
    </SectionWrapper>
  );
};

export default GlobalReachSection;