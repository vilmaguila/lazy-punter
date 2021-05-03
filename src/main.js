import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./tailwind.css"

import BaseCard from '@/components/ui/BaseCard.vue'
import BaseAvenue from '@/components/ui/BaseAvenue.vue'
import BaseIsland from '@/components/ui/BaseIsland.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

const app= createApp(App)

app.component('base-card', BaseCard)
app.component('base-avenue', BaseAvenue)
app.component('base-island', BaseIsland)
app.component('the-footer', TheFooter)

app.use(store).use(router).mount('#app')
