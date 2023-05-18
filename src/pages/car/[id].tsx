import CarDetail from '@/components/screens/car-detail/CarDetail'
import { ICarData, ICarDataSingle } from '@/interfaces/car.interface'
import {
    GetServerSideProps,
    GetStaticPaths,
    GetStaticProps,
    NextPage
} from 'next'
import { ParsedUrlQuery } from 'querystring'
import api from '../../../carbd/index'

const CarDetailPage: NextPage<ICarDataSingle> = ({ car }) => {
    return <CarDetail car={car} />
}

interface Params extends ParsedUrlQuery {
    id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const cars = await api.cars.fetchAll()
    return {
        paths: cars.map((car) => ({
            params: {
                id: car.id.toString()
            }
        })),
        fallback: 'blocking'
    }
}
export const getStaticProps: GetStaticProps<ICarData> = ({ params }) => {
    const car = api.cars.getById(String(params?.id))
    return {
        props: { car },
        revalidate: 60 // будет обновлятся кажые 60 ISR
    }
}

export default CarDetailPage
