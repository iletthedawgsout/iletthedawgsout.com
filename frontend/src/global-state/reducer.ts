import { GlobalState } from './models';
import { FECH_POST_COMPLETE, RootAction } from './actions';

export const reducer = (previousState: GlobalState, action: RootAction): GlobalState => {
    switch (action.type) {
        case FECH_POST_COMPLETE:
            const post_list = previousState.postList ?? [];
            return {
                postList: [...post_list, action.post],
            };
        default:
            return previousState;
    }
};
