import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { Box, Button, Typography } from '@mui/material';
import { useSettingsForm } from '../../hooks/useSettingsForm';
import CustomerInfoSection from './sections/CustomerInfoSection';
import DeliveryMethodsSection from './sections/DeliveryMethodsSection';
import FulfillmentFormatSection from './sections/FulfillmentFormatSection';
import PaymentMethodsSection from './sections/PaymentMethodsSection';
import PrinterSection from './sections/PrinterSection';
import PrintingFormatSection from './sections/PrintingFormatSection';
import ScanningSection from './sections/ScanningSection';
import TicketDisplaySection from './sections/TicketDisplaySection';
import { Settings } from '../../types';
import { settingsValidationSchema } from '../../utils/validationSchemas';

const SettingsForm: React.FC = () => {
  const { settings, loading, error, fetchSettingsData, saveSettings } = useSettingsForm();

  useEffect(() => {
    if (!settings) {
      fetchSettingsData(1);
    }
  }, [settings, fetchSettingsData]);
  
  const handleSubmit = (values: Settings) => {
    saveSettings(values);
  };

  if (!settings) {
    return <Typography>Loading initial data...</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom color="text.primary">
        Update Settings
      </Typography>

      {error && <Typography color="error">{error}</Typography>}

      <Formik
        initialValues={settings}
        validationSchema={settingsValidationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, handleChange }) => (
          <Form>
            <PrinterSection printer={values.printer} onChange={handleChange} />
            <DeliveryMethodsSection deliveryMethods={values.deliveryMethods} handleChange={handleChange} />
            <FulfillmentFormatSection fulfillmentFormat={values.fulfillmentFormat} handleChange={handleChange} />
            <ScanningSection scanning={values.scanning} handleChange={handleChange} />
            <PaymentMethodsSection paymentMethods={values.paymentMethods} handleChange={handleChange} />
            <PrintingFormatSection format={values.printingFormat} onChange={handleChange} />
            <TicketDisplaySection display={values.ticketDisplay} onChange={handleChange} />
            <CustomerInfoSection info={values.customerInfo} onChange={handleChange} />

            <Box mt={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                disabled={loading}
                sx={{
                  display: 'block',
                  margin: '0 auto',
                  width: {
                    xs: "95%",
                    md: "50%",
                  },
                }}
                >
                Save Settings
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SettingsForm;