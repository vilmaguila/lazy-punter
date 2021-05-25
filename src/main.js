import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./tailwind.css"
import  Auth  from './auth'

import BaseCard from '@/components/ui/BaseCard.vue'
import BaseAvenue from '@/components/ui/BaseAvenue.vue'
import BaseIsland from '@/components/ui/BaseIsland.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

const app= createApp(App)

app.component('base-card', BaseCard)
app.component('base-avenue', BaseAvenue)
app.component('base-island', BaseIsland)
app.component('the-footer', TheFooter)

async function init() {
  const AuthPlugin = await Auth.init({
    onRedirectCallback: (appState) => {
      router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname,
      )
    },
  })

  app.use(AuthPlugin).use(router).use(store).mount('#app')
}

init()