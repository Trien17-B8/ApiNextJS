interface DataType {
    key: string
    name: string
    price: number
    quantity: number
}

interface Category {
    key: string
    name: string
    type: string
}

export const data: DataType[] = [
    {
        key: '1',
        name: 'Ban ',
        price: 20,
        quantity: 10,
    },
    {
        key: '2',
        name: 'Ghe',
        price: 42,
        quantity: 12,
    },
    {
        key: '4',
        name: 'May tinh',
        price: 32,
        quantity: 13,
    },
    {
        key: '5',
        name: 'May Loc',
        price: 3,
        quantity: 9,
    },
    {
        key: '6',
        name: 'May anh',
        price: 3,
        quantity: 2,
    },
]

export const dataCategory: Category[] = [
    {
        key: '1',
        name: 'Ban',
        type: 'Go',
    },
    {
        key: '3',
        name: 'Ban nhua',
        type: 'Nhua',
    },
    {
        key: '4',
        name: 'Ghe so pha',
        type: 'Xin',
    },
    {
        key: '5',
        name: 'Dien Thoai',
        type: 'Kem',
    },
]
