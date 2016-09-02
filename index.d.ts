declare module "redux-mock-store" {
    import {MockStore} from "redux-mock-store-typings"
    
    function createMockStore<T>(middlewares?: Redux.Middleware[]): MockStore<T>

    export = createMockStore
}

declare module "redux-mock-store-typings" {
    import {Store} from 'redux'

    export type MockStore<T> = (state?: T) => IStore<T>;
    
    export interface IStore<T> extends Store<T> {
        dispatch(action: any): any
        getState(): T
        getActions(): Object[]
        clearActions(): void
    }   
}

