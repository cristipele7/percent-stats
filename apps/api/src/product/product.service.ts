import { BadRequestException, Injectable } from '@nestjs/common'
import prisma from '../../prisma'
import {
    CreateOneProductArgs,
    DeleteOneProductArgs,
    FindUniqueProductArgs,
    Product,
    UpdateOneProductArgs,
} from '../../@generated/types/product'

@Injectable()
export class ProductService {
    create(createOneProductArgs: CreateOneProductArgs): Promise<Product> {
        return prisma.product.create(createOneProductArgs)
    }

    async findOne(findUniqueProductArgs: FindUniqueProductArgs): Promise<Product> {
        const product = await prisma.product.findUnique({
            where: findUniqueProductArgs.where,
            include: {
                user: true,
            },
        })

        if (!product) {
            throw new BadRequestException('Product not found')
        }

        return product
    }

    update(updateOneProductArgs: UpdateOneProductArgs): Promise<Product> {
        return prisma.product.update(updateOneProductArgs)
    }

    remove(deleteOneProductArgs: DeleteOneProductArgs): Promise<Product> {
        return prisma.product.delete(deleteOneProductArgs)
    }
}
