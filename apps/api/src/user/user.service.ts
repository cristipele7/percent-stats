import { BadRequestException, Injectable } from '@nestjs/common'
import prisma from '../../prisma'
import {
    CreateOneUserArgs,
    DeleteOneUserArgs,
    FindUniqueUserArgs,
    UpdateOneUserArgs,
    User,
} from '../../@generated/types/user'

@Injectable()
export class UserService {
    create(createOneUserArgs: CreateOneUserArgs): Promise<User> {
        return prisma.user.create(createOneUserArgs)
    }

    findAll(): Promise<User[]> {
        return prisma.user.findMany()
    }

    async findOne(findUniqueUserArgs: FindUniqueUserArgs): Promise<User> {
        const user = await prisma.user.findUnique({
            where: findUniqueUserArgs.where,
            include: {
                products: true,
            },
        })

        if (!user) {
            throw new BadRequestException('User not found')
        }

        return user
    }

    update(updateOneUserArgs: UpdateOneUserArgs): Promise<User> {
        return prisma.user.update(updateOneUserArgs)
    }

    remove(deleteOneUserArgs: DeleteOneUserArgs): Promise<User> {
        return prisma.user.delete(deleteOneUserArgs)
    }
}
