import { GlobalState } from './models';
import { RootAction } from './actions';

export const reducer = (previousState: GlobalState, action: RootAction): GlobalState => {
    switch (action.type) {
        case "FETCH_POSTS_COMPLETE":
            return {
                postList: action.postList
            }
        default:
            return previousState;
    }
};
