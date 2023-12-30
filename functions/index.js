/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
import { Profile } from '@meumobi/shared';

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

export const helloWorld = onRequest((request, response) => {
  logger.info('Hello logs!', { structuredData: true });
  new Profile();
  response.send('Hello from Firebase!');
});
