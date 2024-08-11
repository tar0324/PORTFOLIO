import { createWebHistory, createRouter } from 'vue-router'
import PortfolioMain from '@/components/portfolioMain'

const routes = [
    {
        path: '/',
        name: 'PortfolioMain',
        component: PortfolioMain
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router