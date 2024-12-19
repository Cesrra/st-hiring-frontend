import * as Yup from 'yup';

export const deliveryMethodSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  selected: Yup.boolean(),
});

export const fulfillmentFormatSchema = Yup.object({
  rfid: Yup.boolean(),
  print: Yup.boolean(),
});

export const scanningSchema = Yup.object({
  scanManually: Yup.boolean(),
  scanWhenComplete: Yup.boolean(),
});

export const paymentMethodsSchema = Yup.object({
  cash: Yup.boolean(),
  creditCard: Yup.boolean(),
  comp: Yup.boolean(),
});

export const printerSchema = Yup.object({
  id: Yup.number().nullable(),
});

export const printingFormatSchema = Yup.object({
  formatA: Yup.boolean(),
  formatB: Yup.boolean(),
});

export const ticketDisplaySchema = Yup.object({
  leftInAllotment: Yup.boolean(),
  soldOut: Yup.boolean(),
});

export const customerInfoSchema = Yup.object({
  active: Yup.boolean(),
  basicInfo: Yup.boolean(),
  addressInfo: Yup.boolean(),
});

export const settingsValidationSchema = Yup.object({
  deliveryMethods: Yup.array().of(deliveryMethodSchema),
  fulfillmentFormat: fulfillmentFormatSchema,
  scanning: scanningSchema,
  paymentMethods: paymentMethodsSchema,
  printer: printerSchema,
  printingFormat: printingFormatSchema,
  ticketDisplay: ticketDisplaySchema,
  customerInfo: customerInfoSchema,
});
