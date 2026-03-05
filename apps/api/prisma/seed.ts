import { Prisma, UserType } from '@prisma/client'
import prisma from './'

const id = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'
const USERS_SEED_DATA: Prisma.UserCreateInput[] = [
    {
        id: id,
        name: 'Admin',
        type: UserType.ADMIN,
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
