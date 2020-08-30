import { GlobalState } from './models';
import { RootAction } from './actions';

export const reducer = (previousState: GlobalState, action: RootAction): GlobalState => {
    switch (action.type) {
        case 'UPDATE_COUNTER':
            return {
                counter: 0,
            };
        default:
            return previousState;
    }
};
