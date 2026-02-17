import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import Lara from '@primeuix/themes/lara'

export default defineNuxtPlugin((nuxtApp) => {
  // ✅ Only runs in browser (client-only)
  nuxtApp.vueApp.use(PrimeVue, {
    theme: { preset: Lara },
  })

  // ✅ register only services (light). Do NOT globally register DataTable etc.
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.use(ConfirmationService)
})
