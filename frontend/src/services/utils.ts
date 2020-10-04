import { IS_PROD } from '../utils';

export const HOST_NAME = IS_PROD ? '' : 'http://localhost:8001';
