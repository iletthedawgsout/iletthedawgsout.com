import axios from 'axios';
import { useEffect } from 'react';
import { FETCH_ABOUT_ME_COMPLETE, FETCH_ABOUT_ME_FAILED } from '../global-state/actions';
import { useGlobalState } from '../global-state/GlobalStateContext';

const ENDPOINT =
    'https://raw.githubusercontent.com/iletthedawgsout/iletthedawgsout.com/blog-ui/frontend/public/about_me/about_me.md';

const fetchAboutMe = (): Promise<string> => axios.get(ENDPOINT).then((response) => response.data);

export const useAboutMe = (): string | undefined => {
    const [{ aboutMe }, dispatch] = useGlobalState();
    useEffect(() => {
        if (!aboutMe) {
            fetchAboutMe()
                .then((markdown) =>
                    dispatch({
                        type: FETCH_ABOUT_ME_COMPLETE,
                        markdown,
                    }),
                )
                .catch((error) =>
                    dispatch({
                        type: FETCH_ABOUT_ME_FAILED,
                        error,
                    }),
                );
        }
    }, [dispatch, aboutMe]);
    return aboutMe;
};
