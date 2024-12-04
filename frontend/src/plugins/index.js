// ============================================================================
// Tanstack query
// ============================================================================
import { VueQueryPlugin } from '@tanstack/vue-query'
// ============================================================================

// ============================================================================
// PrimeVue
// ============================================================================
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import Tooltip from 'primevue/tooltip'
import KeyFilter from 'primevue/keyfilter'
import StyleClass from 'primevue/styleclass'
import Preset from './primevue/preset.js'
import Locale from './primevue/locale.json'
// ============================================================================

export default function registerPlugins(app) {
  app.use(VueQueryPlugin)

  app.use(PrimeVue, {
    theme: {
      preset: Preset,
      options: {
        prefix: 'p',
        darkModeSelector: '.p-dark-mode',
        cssLayer: {
          name: 'default',
          order: 'reset, default, theme, app',
        },
      },
    },
    locale: Locale,
    ripple: false,
  })
  app.use(ToastService)
  app.use(ConfirmationService)
  app.directive('tooltip', Tooltip)
  app.directive('keyfilter', KeyFilter)
  app.directive('styleclass', StyleClass)
}