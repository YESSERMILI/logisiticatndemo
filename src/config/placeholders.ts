/**
 * Single source of truth for all missing company information.
 * These values are displayed as "À renseigner" chips in the UI.
 */

export const placeholders = {
  contact: {
    whatsapp: "[À REMPLACER]",
    phone: "[À REMPLACER]",
    email: "[À REMPLACER]",
    address: "[À REMPLACER]",
    hours: "[À CONFIRMER]",
  },
  delivery: {
    times: "[À CONFIRMER]",
    reversalDelay: "[À CONFIRMER]",
    coverageZones: "[À CONFIRMER]",
  },
  partners: {
    integrations: "[À CONFIRMER]",
  },
  onboarding: {
    time: "[À CONFIRMER]",
  },
  meta: {
    responseDelay: "à renseigner",
  }
};

export type PlaceholderKey = keyof typeof placeholders;
