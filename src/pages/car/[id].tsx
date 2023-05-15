import { NextPage } from 'next'
import { useRouter } from 'next/router'

const CarPage: NextPage = () => {
    // const { asPath, pathname } = useRouter()
    // const { query } = useRouter()
    const { push, replace } = useRouter()
    // console.log(asPath, pathname) // /car/[id] /car/[id] и /car/1 /car/[id]
    // console.log(query.id) // 1
    return (
        <div>
            <button onClick={() => push('/')}>На домашниюю push</button>
            <button
                onClick={() => replace('/')} // нет  возможности вернутся обратно
            >
                На домашниюю replace
            </button>
        </div>
    )
}

export default CarPage
