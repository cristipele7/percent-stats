import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ProductService } from './product.service'
import {
    CreateOneProductArgs,
    DeleteOneProductArgs,
    FindUniqueProductArgs,
    Product,
    UpdateOneProductArgs,
} from '../../@generated/types/product'

@Resolver(() => Product)
export class ProductResolver {
    constructor(private readonly productService: ProductService) {}

    @Mutation(() => Product)
    createProduct(@Args() createOneProductArgs: CreateOneProductArgs) {
        return this.productService.create(createOneProductArgs)
    }

    @Query(() => Product)
    product(@Args() findUniqueProductArgs: FindUniqueProductArgs) {
        return this.productService.findOne(findUniqueProductArgs)
    }

    @Mutation(() => Product)
    updateProduct(@Args() updateOneProductArgs: UpdateOneProductArgs) {
        return this.productService.update(updateOneProductArgs)
    }

    @Mutation(() => Product)
    removeProduct(@Args() deleteOneProductArgs: DeleteOneProductArgs) {
        return this.productService.remove(deleteOneProductArgs)
    }
}
