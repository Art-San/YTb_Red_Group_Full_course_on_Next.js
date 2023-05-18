import type { NextApiRequest, NextApiResponse } from 'next'
import api from '../../../carbd/index'

const cars = api.cars.fetchAll()

// type Data = {
//     // name: string
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(cars)
}
