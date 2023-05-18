import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'
import Meta from '../seo/Meta'
import { IMeta } from './../seo/meta.interface'
// import Footer from './Footer'
import Header from './header/Header'

const DynamicFooter = dynamic(() => import('./Footer'), {
    // выключен серверный рендеринг
    ssr: false
})

// import { Titillium_Web } from 'next/font/google'

// const titillium = Titillium_Web({ weight: ['300', '400', '600', '700']})

const Layout: FC<PropsWithChildren<IMeta>> = ({
    children,
    title,
    description
}) => {
    return (
        <Meta title={title} description={description}>
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
            <DynamicFooter />
        </Meta>
    )
}

export default Layout
