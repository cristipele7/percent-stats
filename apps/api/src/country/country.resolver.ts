import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CountryService } from './country.service'
import { Country, CreateOneCountryArgs, DeleteOneCountryArgs } from '../../@generated/types/country'

@Resolver()
export class CountryResolver {
    constructor(private readonly countryService: CountryService) {}

    @Query(() => [Country])
    countries() {
        return this.countryService.findAll()
    }

    @Mutation(() => Country)
    createCountry(@Args() createOneCountryArgs: CreateOneCountryArgs) {
        return this.countryService.create(createOneCountryArgs)
    }

    @Mutation(() => Country)
    deleteCountry(@Args() deleteOneCountryArgs: DeleteOneCountryArgs) {
        return this.countryService.delete(deleteOneCountryArgs)
    }
}
