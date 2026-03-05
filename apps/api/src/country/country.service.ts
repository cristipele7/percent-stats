import { Injectable } from '@nestjs/common'
import prisma from '../../prisma'
import { Country, CreateOneCountryArgs, DeleteOneCountryArgs } from '../../@generated/types/country'

@Injectable()
export class CountryService {
    findAll(): Promise<Country[]> {
        return prisma.country.findMany()
    }

    create(createOneCountryArgs: CreateOneCountryArgs): Promise<Country> {
        return prisma.country.create(createOneCountryArgs)
    }

    delete(deleteOneCountryArgs: DeleteOneCountryArgs): Promise<Country> {
        return prisma.country.delete(deleteOneCountryArgs)
    }
}
