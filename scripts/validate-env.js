#!/usr/bin/env node

/**
 * Environment validation script for Teinno Website v3.0
 * This script validates environment variables and configuration
 */

import { validateEnvironment, appConfig } from '../src/config/environment.js'

console.log('🔍 Validating Environment Configuration...\n')

// Display current environment
console.log(`📍 Environment: ${appConfig.app.env}`)
console.log(`📦 App Name: ${appConfig.app.name}`)
console.log(`🔢 Version: ${appConfig.app.version}`)
console.log(`🌐 URL: ${appConfig.app.url}`)
console.log(`🔗 API Base URL: ${appConfig.api.baseUrl}`)
console.log(`⏱️  API Timeout: ${appConfig.api.timeout}ms`)
console.log(`📊 Analytics Enabled: ${appConfig.features.analytics}`)
console.log(`🐛 Debug Mode: ${appConfig.features.debug}`)
console.log('');

// Validate environment
const errors = validateEnvironment()

if (errors.length === 0) {
  console.log('✅ Environment configuration is valid!')
  console.log('');
  
  // Display build information
  console.log('🏗️  Build Information:')
  console.log(`   Build Date: ${appConfig.build.date}`)
  console.log(`   Build Version: ${appConfig.build.version}`)
  console.log('');
  
  // Display feature flags
  console.log('🎛️  Feature Flags:')
  console.log(`   Analytics: ${appConfig.features.analytics ? '🟢' : '🔴'}`)
  console.log(`   Debug: ${appConfig.features.debug ? '🟢' : '🔴'}`)
  console.log(`   Hot Reload: ${appConfig.features.hotReload ? '🟢' : '🔴'}`)
  console.log('');
  
  // Display contact information
  console.log('📞 Contact Information:')
  console.log(`   Contact Email: ${appConfig.services.contactEmail}`)
  console.log(`   Support Email: ${appConfig.services.supportEmail}`)
  console.log(`   Phone: ${appConfig.contact.phone}`)
  console.log('');
  
  process.exit(0)
} else {
  console.log('❌ Environment configuration has errors:')
  errors.forEach(error => {
    console.log(`   • ${error}`)
  })
  console.log('');
  console.log('Please check your environment variables and try again.')
  process.exit(1)
}