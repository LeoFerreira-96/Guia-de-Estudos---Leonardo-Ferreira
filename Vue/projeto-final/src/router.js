import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'

import CoacheDetails from './components/coachesDetails.vue'
import Coacheregistration from './components/coaches/CoacheRegistration.vue'
import CoacheList from './components/coaches/CoacheList.vue'
import ContactCoach from './components/requests/ContactCoach.vue'
import RequestsReceived from './components/requests/RequestsReceived.vue'
import NotFound from './components'


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {path: '/', redirect: '/coaches'},
      {path: '/coaches', component: CoacheList},
      {path: '/coaches/:id', component: CoacheDetails, children: [
        {path: '/contact', component: ContactCoach},
      ]},
      {path: '/register', component: Coacheregistration},
      {path: '/requests', component: RequestsReceived},
      {path: '/:notFound{.*}', component: NotFound}
    ]
})

export default router;