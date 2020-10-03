import { GlobalState } from './models';
import {
    FECH_POST_COMPLETE,
    FETCH_ABOUT_ME_COMPLETE,
    FETCH_BLACK_LIVES_MATTER_COMPLETE,
    FETCH_POST_FAILED,
    RootAction,
} from './actions';

export const reducer = (previousState: GlobalState, action: RootAction): GlobalState => {
    switch (action.type) {
        case FECH_POST_COMPLETE:
            const post_list = previousState.postList ?? [];
            return {
                ...previousState,
                postList: [...post_list, action.post],
            };
        case FETCH_POST_FAILED:
            return {
                ...previousState,
                postList: [],
            };

        case FETCH_ABOUT_ME_COMPLETE:
            return {
                ...previousState,
                aboutMe: action.markdown,
            };
        case FETCH_BLACK_LIVES_MATTER_COMPLETE:
            return {
                ...previousState,
                blackLivesMatterMarkdown: action.markdown,
            };
        default:
            return previousState;
    }
};
