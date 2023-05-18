const cars = [
    {
        id: 1,
        name: 'Toyota Corolla',
        price: 25000,
        image: '/images/1.jpg'
    },
    {
        id: 2,
        name: 'Ford F-Series',
        price: 24000,
        image: '/images/2.jpg'
    },
    {
        id: 3,
        name: 'Volkswagen Golf',
        price: 30000,
        image: '/images/3.jpg'
    },
    {
        id: 4,
        name: 'Honda Civic',
        price: 15000,
        image: '/images/4.jpg'
    },
    {
        id: 5,
        name: 'Toyota Rav4',
        price: 45000,
        image: '/images/5.jpg'
    },
    {
        id: 6,
        name: 'Honda Accord',
        price: 40000,
        image: '/images/6.jpg'
    },
    {
        id: 7,
        name: 'Nissan Sentra',
        price: 50000,
        image: '/images/7.jpg'
    },
    {
        id: 8,
        name: 'Jeep Cherokee',
        price: 47000,
        image: '/images/8.jpg'
    },
    {
        id: 9,
        name: 'Dodge Grand Caravan',
        price: 70000,
        image: '/images/9.jpg'
    },
    {
        id: 10,
        name: 'Chevrolet Silverado',
        price: 17000,
        image: '/images/10.jpg'
    }
]

// const fetchAll = () => {
//     return cars
// }

const fetchAll = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cars)
        }, 100)
    })
}

// const getById = (id) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(cars[id - 1])
//         }, 100)
//     })
// }

const getById = (id) => {
    return cars[id - 1]
}

export default {
    fetchAll,
    getById
}
