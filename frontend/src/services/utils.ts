export const HOST_NAME = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8001';
const POST_ENDPOINT = `${HOST_NAME}/api/posts`;
