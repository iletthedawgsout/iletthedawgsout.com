import { CSSProperties } from 'react';

export const IS_PROD = process.env.NODE_ENV === 'production';
export const IS_DEV = !IS_PROD;

export const combineStyles = (style1: CSSProperties, style2?: CSSProperties): CSSProperties => ({
    ...style1,
    ...style2,
});
