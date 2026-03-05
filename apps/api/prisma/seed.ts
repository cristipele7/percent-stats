import { Prisma, ProductType, UserType } from '@prisma/client'
import prisma from './'

const id = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'
const USERS_SEED_DATA: Prisma.UserCreateInput[] = [
    {
        id: id,
        name: 'Admin',
        type: UserType.ADMIN,
    },
]

const PRODUCTS_SEED_DATA: Prisma.ProductCreateInput[] = [
    {
        id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        name: 'T-shirt',
        type: ProductType.CLOTHES,
        user: {
            connect: { id: id },
        },
    },
]

async function main() {
    const user = await prisma.user.findUnique({
        where: { id },
    })
    if (!user) {
        await Promise.all(
            USERS_SEED_DATA.map((user) => {
                return prisma.user.upsert({
                    where: { id: user.id },
                    update: user,
                    create: user,
                })
            }),
        )
    }

    const productCount = await prisma.product.count({
        where: { id },
    })
    if (!productCount) {
        await Promise.all(
            PRODUCTS_SEED_DATA.map((product) => {
                return prisma.product.upsert({
                    where: { id: product.id },
                    update: product,
                    create: product,
                })
            }),
        )
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
