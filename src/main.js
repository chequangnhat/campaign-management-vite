// import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

//===============================

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faList, faToggleOn, faBars, faTableColumns, faCaravan, faUsers, faAngleDown } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faUserSecret, faList, faToggleOn,faBars, faTableColumns, faCaravan, faUsers, faAngleDown )

const app = createApp(App)

app.use(router)
app.use(bootstrap)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
