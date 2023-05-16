import { FC, PropsWithChildren } from 'react'
import Meta from '../seo/meta'
import Header from './header/Header'
import { IMeta } from './../seo/meta.interface'

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
        </Meta>
    )
}

export default Layout
