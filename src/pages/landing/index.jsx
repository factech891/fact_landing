// src/pages/landing/index.jsx
import React, { useState } from 'react';
import { Box } from '@mui/material';

// Importar componentes de landing
import Navbar from '../../components/LandingNavbar';
import Hero from '../../components/Hero';
import CoreModules from '../../components/FeatureCards/CoreModules';
import IndustrySolutions from '../../components/FeatureCards/IndustrySolutions';
import CallToAction from '../../components/CallToAction';
import GlobalReachSection from '../../components/GlobalReachSection';
import Footer from '../../components/Footer';
import DemoDialog from '../../components/DemoDialog'; // Importamos el diálogo aquí

const LandingPage = () => {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const handleOpenDemoDialog = () => setDemoDialogOpen(true);
  const handleCloseDemoDialog = () => setDemoDialogOpen(false);

  return (
    <Box sx={{ bgcolor: 'background.default', overflow: 'hidden' }}>
      <Navbar
        transparent
        activeSection="home"
      />

      <div id="home">
        {typeof Hero === 'function' ? <Hero onOpenDemoDialog={handleOpenDemoDialog} /> : <Box>Error: Hero</Box>}
      </div>

      <div id="features">
         {typeof CoreModules === 'function' ? <CoreModules /> : <Box>Error: CoreModules</Box>}
      </div>

      {/* Stats Comentado */}
      {/* Industries */}
      <div id="industries">
        {typeof IndustrySolutions === 'function' ? <IndustrySolutions /> : <Box>Error: IndustrySolutions</Box>}
      </div>
      {/* Testimonials Comentado */}

      <div id="contact">
        {typeof CallToAction === 'function' ? <CallToAction onOpenDemoDialog={handleOpenDemoDialog} /> : <Box>Error: CallToAction</Box>}
      </div>

      {/* --- 2. AÑADIMOS LA NUEVA SECCIÓN AQUÍ --- */}
      {typeof GlobalReachSection === 'function' ? <GlobalReachSection /> : <Box>Error: GlobalReachSection</Box> }
      {/* --- FIN NUEVA SECCIÓN --- */}

      <Footer />

      {/* Renderizamos el diálogo aquí para que sea accesible a todos los componentes */}
      <DemoDialog 
        open={demoDialogOpen} 
        onClose={handleCloseDemoDialog} 
      />
    </Box>
  );
};

export default LandingPage;