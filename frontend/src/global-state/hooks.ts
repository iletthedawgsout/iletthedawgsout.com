import { useContext } from 'react';
import { Context, GlobalStateContext } from './GlobalStateContext';

export const useGlobalState = (): Context => useContext(GlobalStateContext);
