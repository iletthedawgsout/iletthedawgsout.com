import axios from 'axios';
import { useEffect } from 'react';
import { FETCH_BLACK_LIVES_MATTER_COMPLETE, FETCH_BLACK_LIVES_MATTER_FAILED } from '../global-state/actions';
import { useGlobalState } from '../global-state/GlobalStateContext';

const ENDPOINT =
    '/black_lives_matter/black_lives_matter.md';

const fetchBlackLivesMatter = (): Promise<string> => axios.get(ENDPOINT).then((response) => response.data);

export const useBlackLivesMatter = (): string | undefined => {
    const [{ blackLivesMatterMarkdown }, dispatch] = useGlobalState();
    useEffect(() => {
        if (!blackLivesMatterMarkdown) {
            fetchBlackLivesMatter()
                .then((markdown) =>
                    dispatch({
                        type: FETCH_BLACK_LIVES_MATTER_COMPLETE,
                        markdown,
                    }),
                )
                .catch((error) =>
                    dispatch({
                        type: FETCH_BLACK_LIVES_MATTER_FAILED,
                        error,
                    }),
                );
        }
    }, [dispatch, blackLivesMatterMarkdown]);
    return blackLivesMatterMarkdown;
};
