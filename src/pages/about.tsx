import Layout from '@/components/laout/Layout'
import { NextPageAuth } from '@/interfaces/page.interface'
// import { NextPage } from 'next'

// const AboutPage: NextPage = () => {
const AboutPage: NextPageAuth = () => {
    return <Layout title="about">about</Layout>
}

// AboutPage.isOnlyUser = false // about открыта
AboutPage.isOnlyUser = true // about закрыта

export default AboutPage
