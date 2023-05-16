import Layout from '@/components/laout/Layout'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const NotFound: NextPage = () => {
    return (
        <Layout title="Page 404">
            <Head>
                <title>Not found</title>
            </Head>
            {/* <img src="/404.png" alt="" /> */}
            {/* <Image src="/404.png" alt="" fill /> */}
            <div
                style={{
                    textAlign: 'center'
                }}
            >
                <Image
                    priority // загрузится сразу
                    src="/401.webp"
                    alt=""
                    width={450}
                    height={433} // 747x720 (450*720/747)
                />
                <button>
                    <Link href={'/'}>на главную</Link>
                </button>
            </div>
        </Layout>
    )
}
export default NotFound
