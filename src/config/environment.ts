// Environment configuration utility
export interface AppConfig {
  app: {
    name: string
    version: string
    env: 'development' | 'test' | 'production'
    url: string
    domain: string
  }
  api: {
    baseUrl: string
    timeout: number
  }
  features: {
    analytics: boolean
    debug: boolean
    hotReload: boolean
  }
  services: {
    googleAnalyticsId: string
    contactEmail: string
    supportEmail: string
  }
  social: {
    linkedin: string
    twitter: string
    facebook: string
  }
  contact: {
    phone: string
    address: string
  }
  build: {
    date: string
    version: string
  }
}

// Helper function to parse boolean environment variables
const parseBoolean = (value: string | undefined): boolean => {
  return value === 'true' || value === '1'
}

// Helper function to parse number environment variables
const parseNumber = (value: string | undefined, defaultValue: number): number => {
  const parsed = Number(value)
  return isNaN(parsed) ? defaultValue : parsed
}

// App configuration from environment variables
export const appConfig: AppConfig = {
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Teinno Website',
    version: import.meta.env.VITE_APP_VERSION || '3.0.0',
    env: (import.meta.env.VITE_APP_ENV as AppConfig['app']['env']) || 'development',
    url: import.meta.env.VITE_APP_URL || 'http://localhost:5173',
    domain: import.meta.env.VITE_APP_DOMAIN || 'localhost',
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
    timeout: parseNumber(import.meta.env.VITE_API_TIMEOUT, 10000),
  },
  features: {
    analytics: parseBoolean(import.meta.env.VITE_ENABLE_ANALYTICS),
    debug: parseBoolean(import.meta.env.VITE_ENABLE_DEBUG),
    hotReload: parseBoolean(import.meta.env.VITE_ENABLE_HOT_RELOAD),
  },
  services: {
    googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '',
    contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'info@teinno.com',
    supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || 'support@teinno.com',
  },
  social: {
    linkedin: import.meta.env.VITE_LINKEDIN_URL || '',
    twitter: import.meta.env.VITE_TWITTER_URL || '',
    facebook: import.meta.env.VITE_FACEBOOK_URL || '',
  },
  contact: {
    phone: import.meta.env.VITE_COMPANY_PHONE || '',
    address: import.meta.env.VITE_COMPANY_ADDRESS || '',
  },
  build: {
    date: __BUILD_DATE__ || new Date().toISOString(),
    version: __APP_VERSION__ || import.meta.env.VITE_APP_VERSION || '3.0.0',
  },
}

// Environment helpers
export const isDevelopment = appConfig.app.env === 'development'
export const isProduction = appConfig.app.env === 'production'
export const isTest = appConfig.app.env === 'test'

// Debug logger (only in development)
export const debugLog = (...args: unknown[]) => {
  if (appConfig.features.debug) {
    console.log('[DEBUG]', ...args)
  }
}

// Environment validation
export const validateEnvironment = (): string[] => {
  const errors: string[] = []

  if (!appConfig.app.name) {
    errors.push('VITE_APP_NAME is required')
  }

  if (!appConfig.app.version) {
    errors.push('VITE_APP_VERSION is required')
  }

  if (!appConfig.api.baseUrl) {
    errors.push('VITE_API_BASE_URL is required')
  }

  if (appConfig.features.analytics && !appConfig.services.googleAnalyticsId) {
    errors.push('VITE_GOOGLE_ANALYTICS_ID is required when analytics is enabled')
  }

  return errors
}