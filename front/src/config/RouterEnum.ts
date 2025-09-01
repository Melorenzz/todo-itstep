// export enum RouterEnum {
//     MAIN = '/',
//     API_CONFIG = '/api/config'
// }

export const RouterEnum = {
    MAIN: '/',
    API_CONFIG: '/api/config'
};

export type RouterEnum = typeof RouterEnum[keyof typeof RouterEnum]