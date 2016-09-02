import {Store} from 'redux'

export type MockStore<T> = (state?: T) => IStore<T>;

export interface IStore<T> extends Store<T> {
    dispatch(action: any): any
    getState(): T
    getActions(): Object[]
    clearActions(): void
}   

export default function createMockStore<T>(middlewares?: Redux.Middleware[]): MockStore<T>
