import { Model, createActionCreaters } from '@shuwen/dva-ts-wrapper';
import * as Service from '@/services/home';
// import { Toast } from 'antd-mobile';
import { GlobalState } from './types';

export type IUserInfoState = Readonly<{
  success?: boolean;
  code?: string;
  msg?: string;
  requestId?: string;
  userInfoData: any;
}>

interface IReducersPayloads {
  save: Partial<IUserInfoState>;
}

interface IEffectsPayloads {

  getUserInfo: {
    // suffix: string;
  };
}

const homeModel: Model<IUserInfoState, GlobalState, IReducersPayloads, IEffectsPayloads> = {
  namespace: 'home',
  state: {
    success: false,
    code: '',
    msg: '',
    requestId: '',
    userInfoData: {},
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    *getUserInfo({ payload, onResult }, { call, put }) {
      const res = yield call(Service.getUserInfo, {});
      console.log(res);
      if (res && res.success) {
        onResult && onResult(null, res);
      }
      // else {
      //   Toast.info(res);
      // }
    }
  },
};

export default homeModel;

export const homeAction = createActionCreaters(homeModel);
