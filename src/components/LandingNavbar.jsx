// src/components/LandingNavbar.jsx
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Stack,
  Typography,
  useScrollTrigger,
  Slide,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Menu as MenuIcon, Close as CloseIcon, KeyboardArrowDown } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DemoDialog from './DemoDialog'; 

// Componente para ocultar navbar al scroll
function HideOnScroll({ children }) {
  // Removemos el comportamiento de ocultar con scroll
  return children;
}

// Barra de navegación estilizada con fondo mejorado para legibilidad
const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
  // Fondo blanco cuando hace scroll, transparente al inicio
  background: scrolled 
    ? '#ffffff'
    : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)',
  backdropFilter: scrolled ? 'blur(8px)' : 'none',
  transition: 'all 0.4s ease',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 1100,
}));

// Contenedor principal del navbar
const NavbarContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 24px',
  maxWidth: '1200px',
  height: '100%',
}));

// Contenedor del logo y nombre
const BrandContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  gap: '12px',
});

// Contenedor de los enlaces de navegación
const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

// Enlace de navegación con mejor legibilidad
const NavLink = styled(Box)(({ theme, active, scrolled }) => ({
  color: scrolled ? (active ? '#4338ca' : '#536083') : '#ffffff',
  fontWeight: scrolled ? 500 : 600,
  fontSize: '15px',
  padding: '8px 16px',
  cursor: 'pointer',
  position: 'relative',
  textShadow: scrolled ? 'none' : '0 1px 4px rgba(0, 0, 0, 0.5)',
  letterSpacing: scrolled ? 'normal' : '0.3px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: scrolled ? '#4338ca' : '#10b981',
    textShadow: scrolled ? 'none' : '0 1px 8px rgba(0, 0, 0, 0.7)',
  },
  '&:after': active ? {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '16px',
    right: '16px',
    height: '2px',
    background: scrolled ? '#4338ca' : '#ffffff',
    borderRadius: '2px',
    transform: 'scaleX(1)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease',
  } : {},
}));

// Estilo para el logo con gradiente
const LogoText = styled(Typography)({
  fontWeight: 700,
  background: 'linear-gradient(135deg, #4338ca, #38bdf8)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
});

// Botón de acción principal con efectos
const DemoButtonWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  borderRadius: '8px',
  overflow: 'hidden',
}));

// Botón de menú móvil
const MobileMenuButton = styled(IconButton)(({ theme, scrolled }) => ({
  color: scrolled ? '#536083' : '#ffffff',
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

// Drawer para móvil mejorado
const DrawerContent = styled(Box)(({ theme }) => ({
  width: '100%', // Cambiamos a full width para mejor experiencia en móvil
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#ffffff',
  backgroundImage: 'linear-gradient(to bottom, rgba(79, 70, 229, 0.02), rgba(16, 185, 129, 0.02))', // Sutíl gradiente de fondo
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px 20px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
}));

// Mejoramos el estilo de los items del menú
const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  margin: '4px 16px',
  borderRadius: '8px',
  overflow: 'hidden',
  background: active ? 'rgba(79, 70, 229, 0.04)' : 'transparent',
  transition: 'all 0.2s ease',
}));

const StyledListItemButton = styled(ListItemButton)(({ theme, active }) => ({
  padding: '12px 16px',
  borderRadius: '8px',
  color: active ? '#4338ca' : '#536083',
  fontWeight: active ? 600 : 500,
  position: 'relative',
  '&:hover': {
    background: 'rgba(79, 70, 229, 0.04)',
  },
  '&::before': active ? {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '4px',
    height: '60%',
    background: 'linear-gradient(to bottom, #4f46e5, #10b981)',
    borderRadius: '0 4px 4px 0',
  } : {},
}));

const DrawerFooter = styled(Box)(({ theme }) => ({
  padding: '24px 20px',
  marginTop: 'auto',
  borderTop: '1px solid rgba(0, 0, 0, 0.06)',
}));

// Componente principal del Navbar
const Navbar = ({ activeSection = "home" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  
  // Estado para controlar la apertura/cierre del diálogo de demo
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  
  // Funciones para abrir/cerrar el diálogo
  const openDemoDialog = () => setDemoDialogOpen(true);
  const closeDemoDialog = () => setDemoDialogOpen(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    // Ejecutar handleScroll inmediatamente para establecer el estado inicial
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar apertura/cierre del drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Items de navegación - Eliminados "Precios" y "Testimonios"
  const navItems = [
    { id: 'home', label: 'Inicio', href: '#home' },
    { id: 'features', label: 'Características', href: '#features' },
    { id: 'industries', label: 'Industrias', href: '#industries' },
    { id: 'contact', label: 'Contacto', href: '#contact' },
  ];

  // Rutas de imágenes
  const logoSrc = '/assets/images/logo-facttech.png';
  const logoHeight = '38px';

  return (
    <HideOnScroll>
      <StyledAppBar position="fixed" elevation={0} scrolled={scrolled}>
        <NavbarContainer>
          {/* Logo y nombre de la empresa */}
          <BrandContainer component={RouterLink} to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <Box 
                component="img" 
                src={logoSrc} 
                alt="FactTech" 
                sx={{
                  height: logoHeight,
                  width: 'auto',
                }}
              />
              {/* Aplicamos el mismo estilo de gradiente del footer */}
              {scrolled ? (
                <LogoText 
                  variant="h5" 
                  component="div" 
                  sx={{ 
                    fontSize: { xs: '18px', sm: '20px', md: '22px' },
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  FactTech
                </LogoText>
              ) : (
                <Typography 
                  variant="h5" 
                  component="div" 
                  sx={{ 
                    fontWeight: 700, 
                    color: '#ffffff',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
                    fontSize: { xs: '18px', sm: '20px', md: '22px' },
                    display: { xs: 'none', sm: 'block' },
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                  }}
                >
                  FactTech
                </Typography>
              )}
            </motion.div>
          </BrandContainer>

          {/* Enlaces de navegación */}
          <NavLinks>
            {navItems.map((item, index) => (
              <NavLink
                key={item.id}
                active={activeSection === item.id}
                scrolled={scrolled}
                onClick={() => {
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          {/* Botones de acción */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <DemoButtonWrapper>
              <motion.div
                initial={false}
                animate={buttonHovered ? { scale: 1.05 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  onClick={openDemoDialog}
                  endIcon={<KeyboardArrowDown />}
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                  sx={{
                    background: 'linear-gradient(90deg, #4f46e5 0%, #10b981 100%)',
                    color: '#ffffff',
                    borderRadius: '8px',
                    padding: '10px 24px',
                    fontWeight: 600,
                    fontSize: '15px',
                    boxShadow: scrolled ? '0 4px 14px rgba(79, 70, 229, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.3)',
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 2,
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                    letterSpacing: '0.3px',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #4338ca 0%, #059669 100%)',
                      boxShadow: scrolled ? '0 6px 20px rgba(79, 70, 229, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Solicitar Demo
                </Button>
              </motion.div>
              <AnimatePresence>
                {buttonHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.8 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '120%',
                      height: '120%',
                      background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(79, 70, 229, 0.1) 40%, rgba(79, 70, 229, 0) 70%)',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 1,
                      borderRadius: '50%',
                      pointerEvents: 'none',
                      filter: 'blur(4px)',
                    }}
                  />
                )}
              </AnimatePresence>
            </DemoButtonWrapper>

            {/* Botón menú móvil */}
            <MobileMenuButton 
              onClick={toggleDrawer(true)}
              aria-label="Menú"
              scrolled={scrolled}
            >
              <MenuIcon />
            </MobileMenuButton>
          </Box>

          {/* Drawer móvil mejorado */}
          <Dialog
            fullScreen
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            TransitionComponent={Slide}
            TransitionProps={{ direction: 'right' }}
            sx={{
              '& .MuiDialog-paper': {
                width: '100%',
                maxWidth: '100%',
                margin: 0,
                boxShadow: '0 0 25px rgba(0, 0, 0, 0.15)',
              }
            }}
          >
            <DrawerContent>
              <DrawerHeader>
                <BrandContainer onClick={toggleDrawer(false)}>
                  <Box component="img" src={logoSrc} alt="FactTech" sx={{ height: '38px' }} />
                  <LogoText variant="h6" sx={{ fontWeight: 700, fontSize: '22px' }}>
                    FactTech
                  </LogoText>
                </BrandContainer>
                <IconButton 
                  onClick={toggleDrawer(false)} 
                  aria-label="Cerrar menú"
                  sx={{ 
                    color: '#536083',
                    background: 'rgba(0, 0, 0, 0.03)',
                    '&:hover': { background: 'rgba(0, 0, 0, 0.05)' },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DrawerHeader>
              
              <Box sx={{ p: 2, mt: 1 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, opacity: 0.7, px: 2, fontWeight: 500 }}>
                  NAVEGACIÓN
                </Typography>
                
                <List sx={{ p: 0 }}>
                  {navItems.map((item) => (
                    <StyledListItem key={item.id} disablePadding active={activeSection === item.id ? 1 : 0}>
                      <StyledListItemButton
                        active={activeSection === item.id ? 1 : 0}
                        onClick={() => {
                          const el = document.getElementById(item.id);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                            toggleDrawer(false)();
                          }
                        }}
                      >
                        <ListItemText 
                          primary={item.label}
                          primaryTypographyProps={{
                            fontSize: '16px',
                            fontWeight: activeSection === item.id ? 600 : 500,
                          }}
                        />
                      </StyledListItemButton>
                    </StyledListItem>
                  ))}
                </List>
              </Box>
              
              <DrawerFooter>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, opacity: 0.7, fontWeight: 500 }}>
                  ¿LISTO PARA COMENZAR?
                </Typography>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => {
                      toggleDrawer(false)();
                      openDemoDialog();
                    }}
                    startIcon={<KeyboardArrowDown />}
                    sx={{
                      background: 'linear-gradient(90deg, #4f46e5 0%, #10b981 100%)',
                      color: '#ffffff',
                      borderRadius: '8px',
                      padding: '14px',
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '16px',
                      boxShadow: '0 4px 14px rgba(79, 70, 229, 0.15)',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #4338ca 0%, #059669 100%)',
                        boxShadow: '0 6px 20px rgba(79, 70, 229, 0.25)',
                      },
                    }}
                  >
                    Solicitar Demo
                  </Button>
                </motion.div>
                
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mt: 3, 
                    textAlign: 'center',
                    fontSize: '14px', 
                    opacity: 0.7 
                  }}
                >
                  © 2025 FactTech. Todos los derechos reservados.
                </Typography>
              </DrawerFooter>
            </DrawerContent>
          </Dialog>

          {/* Renderizamos el componente del diálogo de demo */}
          <DemoDialog 
            open={demoDialogOpen} 
            onClose={closeDemoDialog} 
          />
        </NavbarContainer>
      </StyledAppBar>
    </HideOnScroll>
  );
};

export default Navbar;