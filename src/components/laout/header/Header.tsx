import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import styles from './Header.module.css'

const Header: FC = () => {
    const { pathname } = useRouter()

    console.log(pathname) // 33:53
    return (
        <header className={styles.header}>
            <Link href="/">Home</Link>
            <Link href="/about">About page</Link>
        </header>
    )
}

export default Header
