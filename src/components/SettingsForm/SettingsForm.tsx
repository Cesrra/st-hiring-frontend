import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { AppDispatch, RootState } from '../../store';
import { Settings, updateSettings, fetchSettings } from '../../store/slices/settingsSlice';
import DeliveryMethodsSection from './DeliveryMethodsSection';
import FulfillmentFormatSection from './FulfillmentFormatSection';
import ScanningSection from './ScanningSection';
import PaymentMethodsSection from './PaymentMethodsSection';
import TicketDisplaySection from './TicketDisplaySection';
import PrintingFormatSection from './PrintingFormatSection';
import PrinterSection from './PrinterSection';
import CustomerInfoSection from './CustomerInfoSection';
import * as Yup from 'yup';

const SettingsForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const settings = useSelector((state: RootState) => state.settings.data);
  const loading = useSelector((state: RootState) => state.settings.loading);
  const error = useSelector((state: RootState) => state.settings.error);

  useEffect(() => {
    dispatch(fetchSettings(1));
  }, [dispatch]);

  const validationSchema = Yup.object({
    deliveryMethods: Yup.array().required(),
    fulfillmentFormat: Yup.object().required(),
    scanning: Yup.object().required(),
    paymentMethods: Yup.object().required(),
  });

  const initialValues: Settings = settings || {
    clientId: 1,
    deliveryMethods:[
      {
        name: 'Print Now',
        enum: 'PRINT_NOW',
        order: 1,
        isDefault: true,
        selected: false,
      },
      {
        name: 'Print@Home',
        enum: 'PRINT_AT_HOME',
        order: 2,
        isDefault: false,
        selected: false,
      },
    ],
    fulfillmentFormat: { rfid: false, print: false },
    scanning: { scanManually: false, scanWhenComplete: false },
    paymentMethods: { cash: false, creditCard: false, comp: false },
    printer: { id: null },
    printingFormat: { formatA: true, formatB: false },
    ticketDisplay: { leftInAllotment: true, soldOut: true },
    customerInfo: { active: false, basicInfo: false, addressInfo: false },
  };

  const handleSubmit = (values: Settings) => {
    const payload = { ...values };
    delete payload._id;
    dispatch(updateSettings({ clientId: 1, settings: payload }));
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h3" gutterBottom>
        Update Settings
      </Typography>

      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}

      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
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

            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary" disabled={loading}>
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