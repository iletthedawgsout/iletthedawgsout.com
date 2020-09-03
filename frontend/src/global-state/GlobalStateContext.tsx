import React, { createContext, useContext, useReducer } from 'react';
import { PropsWithChildren } from 'react';
import { GlobalState } from './models';
import { reducer } from './reducer';
import { RootAction } from './actions';

// The initial value of our global state object
const initialGlobalState: GlobalState = {
    postList: undefined,
};
// The initial value of our dispatch function. Will get overwritten on first render
const initialDispatch = () => {
    return;
};

type Context = [GlobalState, React.Dispatch<RootAction>];

export const GlobalStateContext = createContext<Context>([initialGlobalState, initialDispatch]);
export const useGlobalState = (): Context => useContext(GlobalStateContext); // Convenience hook for functional components

type GlobalStateContextProps = PropsWithChildren<unknown>;

export const GlobalStateContextProvider = ({ children }: GlobalStateContextProps): JSX.Element => {
    const reduction = useReducer(reducer, initialGlobalState);
    return <GlobalStateContext.Provider value={reduction}>{children}</GlobalStateContext.Provider>;
};
