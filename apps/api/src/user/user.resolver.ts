import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UserService } from './user.service'
import {
    CreateOneUserArgs,
    DeleteOneUserArgs,
    FindUniqueUserArgs,
    UpdateOneUserArgs,
    User,
} from '../../@generated/types/user'

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [User])
    users() {
        return this.userService.findAll()
    }

    @Query(() => User)
    user(@Args() findUniqueUserArgs: FindUniqueUserArgs) {
        return this.userService.findOne(findUniqueUserArgs)
    }

    @Mutation(() => User)
    createUser(@Args() createOneUserArgs: CreateOneUserArgs) {
        return this.userService.create(createOneUserArgs)
    }

    @Mutation(() => User)
    updateUser(@Args() updateOneUserArgs: UpdateOneUserArgs) {
        return this.userService.update(updateOneUserArgs)
    }

    @Mutation(() => User)
    deleteUser(@Args() deleteOneUserArgs: DeleteOneUserArgs) {
        return this.userService.delete(deleteOneUserArgs)
    }
}
