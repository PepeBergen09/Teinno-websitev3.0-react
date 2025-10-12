/// <reference types="vite/client" />

// Environment Variables Interface
interface ImportMetaEnv {
  // App Configuration
  readonly VITE_APP_NAME: string
  readonly VITE_APP_VERSION: string
  readonly VITE_APP_ENV: 'development' | 'test' | 'production'

  // API Configuration
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_TIMEOUT: string

  // Application URLs
  readonly VITE_APP_URL: string
  readonly VITE_APP_DOMAIN: string

  // Feature Flags
  readonly VITE_ENABLE_ANALYTICS: string
  readonly VITE_ENABLE_DEBUG: string
  readonly VITE_ENABLE_HOT_RELOAD: string

  // External Services
  readonly VITE_GOOGLE_ANALYTICS_ID: string
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_SUPPORT_EMAIL: string

  // Build Information
  readonly VITE_BUILD_DATE: string
  readonly VITE_BUILD_VERSION: string

  // Social Media
  readonly VITE_LINKEDIN_URL: string
  readonly VITE_TWITTER_URL: string
  readonly VITE_FACEBOOK_URL: string

  // Contact Information
  readonly VITE_COMPANY_PHONE: string
  readonly VITE_COMPANY_ADDRESS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Global constants injected by Vite
declare const __APP_VERSION__: string
declare const __BUILD_DATE__: string
declare const __APP_ENV__: string