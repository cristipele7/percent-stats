import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
class FixtureStatus {
    @Field() short: string
}

@ObjectType()
class FixtureInfo {
    @Field(() => Int) id: number
    @Field() date: string
    @Field(() => FixtureStatus) status: FixtureStatus
}

@ObjectType()
class FixtureLeague {
    @Field(() => Int) id: number
    @Field() name: string
    @Field() country: string
    @Field() round: string
}

@ObjectType()
class FixtureTeam {
    @Field(() => Int) id: number
    @Field() name: string
}

@ObjectType()
class FixtureTeams {
    @Field(() => FixtureTeam) home: FixtureTeam
    @Field(() => FixtureTeam) away: FixtureTeam
}

@ObjectType()
class FixtureGoals {
    @Field(() => Int, { nullable: true }) home: number | null
    @Field(() => Int, { nullable: true }) away: number | null
}

@ObjectType()
export class ApiFootballFixtureType {
    @Field(() => FixtureInfo) fixture: FixtureInfo
    @Field(() => FixtureLeague) league: FixtureLeague
    @Field(() => FixtureTeams) teams: FixtureTeams
    @Field(() => FixtureGoals) goals: FixtureGoals
}
