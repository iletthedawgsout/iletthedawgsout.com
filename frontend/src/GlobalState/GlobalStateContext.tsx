import React, {createContext, useContext, useReducer} from 'react';
import {PropsWithChildren} from 'react';
import {GlobalState} from './models';
import {reducer} from './reducer';
import {RootAction} from './actions';

// The initial value of our global state object
const initialGlobalState: GlobalState = {
  counter: 1
};
// The initial value of our dispatch function. Will get overwritten on first render
const initialDispatch = () => {};

export const GlobalStateContext = createContext<
  [GlobalState, React.Dispatch<RootAction>]
>([initialGlobalState, initialDispatch]);
export const useGlobalState = () => useContext(GlobalStateContext); // Convenience hook for functional components

type GlobalStateContextProps = PropsWithChildren<{}>;

export const GlobalStateContextProvider = ({
  children,
}: GlobalStateContextProps) => {
  const reduction = useReducer(reducer, initialGlobalState);
  return (
    <GlobalStateContext.Provider value={reduction}>
      {children}
    </GlobalStateContext.Provider>
  );
};
