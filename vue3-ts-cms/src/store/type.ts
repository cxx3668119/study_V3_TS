import { IloginModule } from './login/login'

export interface IRootWithModule {
  login: IloginModule
}
export interface IRootState {
  name: string
  age: number
}
export type IStoreType = IRootState & IRootWithModule
