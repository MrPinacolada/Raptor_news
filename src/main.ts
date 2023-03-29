import { createApp } from 'vue'
import Main from './Main.vue'
import router from './router'
import { createPinia } from 'pinia'
import HeadBar from './components/Header/HeadBar.vue'
import Swiper from '@/components/HotNewsHead/Swiper.vue'
import VueLazyload from 'vue-lazyload';
const pinia = createPinia()
const app = createApp(Main)
app.use(VueLazyload);
app.use(router)
app.use(pinia)
app.component('HeadBar', HeadBar)
app.component('Swiper', Swiper)
app.mount('#Main')
export default app