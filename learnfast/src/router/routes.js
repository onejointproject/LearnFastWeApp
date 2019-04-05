import Footer from '@/components/common/Footer';
import Home from '@/components/pages/home'
import News from '@/components/pages/news'
import Myself from '@/components/pages/myself'

import Chat from '@/components/pages/news/chat'
const routes = [
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      footer: Footer
    }
  },
  {
    path: '/news',
    name: 'news',
    components: {
      default: News,
      footer: Footer
    },
    children:[
        {
            path:'/chat',
            name: 'chat',
            component:Chat
        }
    ] 
  },
  {
    path: '/myself',
    name: 'myself',
    components: {
      default:  Myself,
      footer: Footer
    }
  },
  {
    path:'/',
    redirect:'/home'
  }
]

export default routes;