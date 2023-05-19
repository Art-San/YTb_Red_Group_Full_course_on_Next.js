import type { NextApiRequest, NextApiResponse } from 'next'
import api from '../../../carbd/index'

const cars = api.cars.fetchAll()

type Data = {
    name: string
    channel: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ name: 'John Doe', channel: 'RED Group' })
}
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).json(cars)
// }
