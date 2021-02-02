import { IUserInfoState } from './home';

export type Loading = Readonly<{
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    home?: boolean;
    auth?: boolean;
  };
}>;

export interface ILocation {
  pathname: string;
  search: string;
  hash: string;
  key: string;
}

export type IRouterState = Readonly<{
  location: ILocation;
  action: string;
}>;

export type GlobalState = Readonly<{
  router: IRouterState;
  loading: Loading;
  // base: IBaseState;
  home: IUserInfoState;
}>;

export interface Data {
  [key: string]: any;
}

// onResult 回调函数接口
export interface IOnResultCallBack<T> {
  onResult: (error: Error | null | string, data?: T) => void;
}
