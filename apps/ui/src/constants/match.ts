import { MatchState } from 'api/types'

export const STATUS_MAP = {
    [MatchState.NotStarted]: 'NS',
    [MatchState.FirstHalf]: '1H',
    [MatchState.HalfTime]: 'HT',
    [MatchState.SecondHalf]: '2H',
    [MatchState.FullTime]: 'FT',
}
