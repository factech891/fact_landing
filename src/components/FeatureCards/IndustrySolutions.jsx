// src/components/FeatureCards/IndustrySolutions.jsx
import React from 'react';
import { Box } from '@mui/material';
import IndustryListSection from '../IndustryListSection'; // Verifica ruta
import {
  StorefrontOutlined as RetailIcon,
  LocalShippingOutlined as TransportIcon,
  BuildOutlined as BuildIcon,
  HandymanOutlined as HandymanIcon,
  RestaurantOutlined as RestaurantIcon,
  MedicalServicesOutlined as MedicalIcon,
  FactoryOutlined as FactoryIcon,
  AccountBalanceOutlined as BankIcon
} from '@mui/icons-material';

// Colores principales para los iconos
const colorRetail = '#6366F1';       
const colorTransporte = '#10B981';    
const colorConstruccion = '#F59E0B'; 
const colorTalleres = '#3B82F6';     
const colorRestaurante = '#F43F5E';
const colorSalud = '#8B5CF6';
const colorManufactura = '#EC4899';
const colorBanca = '#14B8A6';

// Color azul cielo muy claro para las tarjetas
const skyBlueColor = '#f0f9ff';

const IndustrySolutions = () => {
  // 8 industrias (4 en primera fila, 4 en segunda)
  const features = [
    // Primera fila
    {
      icon: <RetailIcon />,
      title: 'Comercio Minorista',
      description: 'Emite facturas rápidamente, gestiona tu lista de clientes y organiza tus productos o servicios.',
      iconColor: colorRetail,
      cardBackground: skyBlueColor // Añadimos el color de fondo para la tarjeta
    },
    {
      icon: <TransportIcon />,
      title: 'Logística y Transporte',
      description: 'Crea presupuestos para tus fletes o servicios, factura a tus clientes y gestiona sus datos.',
      iconColor: colorTransporte,
      cardBackground: skyBlueColor
    },
    {
      icon: <BuildIcon />,
      title: 'Servicios y Construcción',
      description: 'Elabora presupuestos por proyecto u obra, factura a tus clientes y administra tus servicios.',
      iconColor: colorConstruccion,
      cardBackground: skyBlueColor
    },
    {
      icon: <HandymanIcon />,
      title: 'Talleres Mecánicos',
      description: 'Genera presupuestos de reparaciones, factura los trabajos y administra tu base de clientes.',
      iconColor: colorTalleres,
      cardBackground: skyBlueColor
    },
    // Segunda fila
    {
      icon: <RestaurantIcon />,
      title: 'Restaurantes',
      description: 'Controla inventario, gestiona pedidos y factura servicios de catering o eventos especiales.',
      iconColor: colorRestaurante,
      cardBackground: skyBlueColor
    },
    {
      icon: <MedicalIcon />,
      title: 'Servicios de Salud',
      description: 'Administra citas, factura consultas y servicios médicos cumpliendo normativas fiscales.',
      iconColor: colorSalud,
      cardBackground: skyBlueColor
    },
    {
      icon: <FactoryIcon />,
      title: 'Manufactura',
      description: 'Gestiona órdenes de producción, controla inventarios y factura a distribuidores o clientes.',
      iconColor: colorManufactura,
      cardBackground: skyBlueColor
    },
    {
      icon: <BankIcon />,
      title: 'Servicios Financieros',
      description: 'Administra carteras de clientes, factura servicios financieros y gestiona documentación.',
      iconColor: colorBanca,
      cardBackground: skyBlueColor
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#ffffff' }}>
      <IndustryListSection
        title="Adaptado a Tu Industria"
        subtitle="FactTech se configura para las necesidades únicas de tu sector, adaptándose a los procesos específicos de cada tipo de negocio."
        features={features} 
        centered={true}
        backgroundColor="#ffffff" // Pasamos el fondo blanco como prop
        cardBackgroundColor={skyBlueColor} // Pasamos el color para las tarjetas
        customStyles={{ 
          section: { backgroundColor: '#ffffff' },
          cards: { backgroundColor: skyBlueColor }
        }}
      />
    </Box>
  );
};

export default IndustrySolutions;