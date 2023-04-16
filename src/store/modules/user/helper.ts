import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface Times {
  freeTotalTimes: number
  freeRemainingTimes: number
  cardTotalTimes: number
  cardRemainingTimes: number
}

export interface UserInfo {
  level: string
  times: Times
  avatar: string
  name: string
  description: string
  root: boolean
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: '',
      name: '',
      description: '',
      root: false,
      times: {
        freeTotalTimes: 0,
        freeRemainingTimes: 0,
        cardTotalTimes: 0,
        cardRemainingTimes: 0,
      },
      level: 'regular',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
