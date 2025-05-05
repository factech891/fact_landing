// src/components/DemoDialog.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  IconButton,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { 
  Close as CloseIcon, 
  CheckCircle, 
  ErrorOutline  // Importamos el ícono de error
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const DemoDialog = ({ open, onClose }) => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    industria: '',
  });
  // Estado para el diálogo de éxito
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  // Estados nuevos para el diálogo de error
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Opciones de industria
  const industrias = [
    'Retail/Comercio', 
    'Restaurantes/Hostelería', 
    'Servicios Profesionales', 
    'Transporte/Logística',
    'Manufactura', 
    'Construcción', 
    'Salud/Medicina', 
    'Educación', 
    'Tecnología',
    'Otra'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Función para enviar datos al Worker de Cloudflare
  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    try {
      // URL de tu Worker de Cloudflare
      const workerUrl = 'https://facttech.syoliverts.workers.dev';
      
      // Enviar datos al Worker
      const response = await fetch(workerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Éxito - cerrar diálogo y limpiar formulario
        setFormSubmitting(false);
        onClose(); // Cerramos el diálogo de demo
        
        // Limpiamos el formulario para futuras aperturas
        setFormData({
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          industria: '',
        });
        
        // Mostramos el diálogo de éxito en lugar del alert
        setSuccessDialogOpen(true);
      } else {
        throw new Error(result.error || 'Error desconocido');
      }
    } catch (error) {
      // Mostrar error con diálogo en lugar de alert
      console.error('Error al enviar formulario:', error);
      setFormSubmitting(false);
      
      // En lugar de usar alert, establecemos el mensaje y abrimos el diálogo
      setErrorMessage(error.message || 'Error al enviar la solicitud. Intenta nuevamente más tarde.');
      setErrorDialogOpen(true);
    }
  };

  return (
    <>
      {/* Diálogo del formulario */}
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '12px',
            overflow: 'hidden',
            maxHeight: '95vh', // Evitar que se salga de la pantalla
          }
        }}
      >
        {/* El contenido del formulario permanece igual */}
        <DialogTitle
          sx={{
            background: 'linear-gradient(90deg, rgba(79, 70, 229, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)',
            p: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Solicitar Demo Personalizada
          </Typography>
          <IconButton onClick={onClose} aria-label="Cerrar">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ p: 3, pb: 5 }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Complete el formulario y nos pondremos en contacto para mostrarle cómo FactTech se adapta a su negocio.
            <span style={{ display: 'block', fontSize: '0.85rem', marginTop: '4px', opacity: 0.8 }}>Todos los campos son obligatorios</span>
          </Typography>
          
          <form onSubmit={handleDemoSubmit}>
            <Stack spacing={2.5}>
              <TextField
                fullWidth
                label="Nombre completo"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                variant="outlined"
                InputProps={{
                  sx: { borderRadius: '8px' }
                }}
                InputLabelProps={{
                  sx: {
                    '&.Mui-required .MuiFormLabel-asterisk': {
                      display: 'none'
                    }
                  }
                }}
              />
              
              <TextField
                fullWidth
                label="Nombre de la empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleInputChange}
                required
                variant="outlined"
                InputProps={{
                  sx: { borderRadius: '8px' }
                }}
                InputLabelProps={{
                  sx: {
                    '&.Mui-required .MuiFormLabel-asterisk': {
                      display: 'none'
                    }
                  }
                }}
              />
              
              <TextField
                fullWidth
                label="Email de contacto"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                variant="outlined"
                InputProps={{
                  sx: { borderRadius: '8px' }
                }}
                InputLabelProps={{
                  sx: {
                    '&.Mui-required .MuiFormLabel-asterisk': {
                      display: 'none'
                    }
                  }
                }}
              />
              
              <TextField
                fullWidth
                label="Teléfono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
                variant="outlined"
                InputProps={{
                  sx: { borderRadius: '8px' }
                }}
                InputLabelProps={{
                  sx: {
                    '&.Mui-required .MuiFormLabel-asterisk': {
                      display: 'none'
                    }
                  }
                }}
              />
              
              <TextField
                select
                fullWidth
                label="Industria o Sector"
                name="industria"
                value={formData.industria}
                onChange={handleInputChange}
                required
                variant="outlined"
                InputLabelProps={{ 
                  shrink: true,
                  sx: {
                    backgroundColor: 'white',
                    paddingLeft: '5px',
                    paddingRight: '5px',
                    '&.Mui-required .MuiFormLabel-asterisk': {
                      display: 'none'
                    }
                  }
                }}
                sx={{
                  '& .MuiSelect-select': {
                    padding: '14px 16px'
                  }
                }}
                InputProps={{
                  sx: { borderRadius: '8px' }
                }}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    PaperProps: { 
                      sx: { 
                        borderRadius: '8px', 
                        mt: 1, 
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' 
                      } 
                    }
                  }
                }}
              >
                <option value="" disabled={formData.industria !== ""}>Seleccione una industria</option>
                {industrias.map((industria) => (
                  <option key={industria} value={industria}>
                    {industria}
                  </option>
                ))}
              </TextField>
              
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'center' }}>
                <Button 
                  onClick={onClose}
                  sx={{ 
                    color: '#536083',
                    fontSize: '15px',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: 'rgba(83, 96, 131, 0.05)'
                    }
                  }}
                >
                  Cancelar
                </Button>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={formSubmitting}
                    sx={{
                      background: 'linear-gradient(90deg, #4f46e5 0%, #10b981 100%)',
                      color: '#ffffff',
                      borderRadius: '8px',
                      padding: '12px 28px',
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '15px',
                      boxShadow: '0 4px 14px rgba(79, 70, 229, 0.15)',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #4338ca 0%, #059669 100%)',
                        boxShadow: '0 6px 20px rgba(79, 70, 229, 0.25)',
                      },
                      transition: 'all 0.3s ease'
                    }}
                    startIcon={formSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
                  >
                    {formSubmitting ? 'Enviando...' : 'Solicitar Demo'}
                  </Button>
                </motion.div>
              </Box>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>

      {/* Diálogo de confirmación de éxito */}
      <Dialog
        open={successDialogOpen}
        onClose={() => setSuccessDialogOpen(false)}
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: '12px',
            padding: '10px',
            background: 'white',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
          }
        }}
      >
        <DialogContent sx={{ p: 4, textAlign: 'center' }}>
          <CheckCircle sx={{ 
            fontSize: 64, 
            color: '#10b981', 
            mb: 2 
          }} />
          <Typography variant="h5" fontWeight={600} mb={1}>
            ¡Solicitud enviada con éxito!
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            Nos pondremos en contacto contigo pronto para mostrarte cómo FactTech se adapta a tu negocio.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setSuccessDialogOpen(false)}
              sx={{
                background: 'linear-gradient(90deg, #4f46e5 0%, #10b981 100%)',
                color: '#ffffff',
                borderRadius: '8px',
                padding: '10px 24px',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '15px',
                boxShadow: '0 4px 14px rgba(79, 70, 229, 0.15)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #4338ca 0%, #059669 100%)',
                  boxShadow: '0 6px 20px rgba(79, 70, 229, 0.3)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Entendido
            </Button>
          </motion.div>
        </DialogActions>
      </Dialog>

      {/* Nuevo diálogo de error */}
      <Dialog
        open={errorDialogOpen}
        onClose={() => setErrorDialogOpen(false)}
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: '12px',
            padding: '10px',
            background: 'white',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
          }
        }}
      >
        <DialogContent sx={{ p: 4, textAlign: 'center' }}>
          <ErrorOutline sx={{ 
            fontSize: 64, 
            color: '#ef4444', // Color rojo para error
            mb: 2 
          }} />
          <Typography variant="h5" fontWeight={600} mb={1}>
            Error al enviar la solicitud
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            {errorMessage || 'Ha ocurrido un error. Por favor, intenta nuevamente más tarde.'}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setErrorDialogOpen(false)}
              sx={{
                background: 'linear-gradient(90deg, #ef4444 0%, #f43f5e 100%)',
                color: '#ffffff',
                borderRadius: '8px',
                padding: '10px 24px',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '15px',
                boxShadow: '0 4px 14px rgba(239, 68, 68, 0.25)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #dc2626 0%, #e11d48 100%)',
                  boxShadow: '0 6px 20px rgba(239, 68, 68, 0.3)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Entendido
            </Button>
          </motion.div>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DemoDialog;