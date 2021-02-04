import {
  Model, createActionCreaters,
} from '@shuwen/dva-ts-wrapper';
import * as Service from '@/services/home';
import { Result } from '@/utils/tool';
import {
  GlobalState,
} from './types';

export type IhomeModelState = Readonly<{
  userInfo: Service.UserInfoResponse;
}>

interface IReducersPayloads {
  save: void | Partial<IhomeModelState>;
}

interface IEffectsPayloads {
  getUserInfo: void;
}

const homeModel: Model<IhomeModelState, GlobalState, IReducersPayloads, IEffectsPayloads> = {
  namespace: 'home',
  state: {
    userInfo: {},
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getUserInfo({ payload }, { call, put }) {
      const res: Result<Service.UserInfoResponse> = yield call(Service.getUserInfo);
      if (res.success) {
        yield put({
          type: 'save',
          payload: {
            userInfo: res.data || {},
          },
        });
      }
    },
  },
};

export default homeModel;

export const homeActions = createActionCreaters(homeModel);
