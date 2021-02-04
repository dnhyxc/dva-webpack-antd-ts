import {
  Model, createActionCreaters,
} from '@shuwen/dva-ts-wrapper';
import * as Service from '@/services/project';
import { Result } from '@/utils/tool';
import {
  GlobalState,
} from './types';

interface ProjectParams {
  id: number | null,
  desc: string,
  checked: boolean,
}

export type IProjectModelState = {
  selectedProject: ProjectParams[],
  name: string;
}

interface IReducersPayloads {
  updateSelectedProject: Partial<IProjectModelState>;
  save: void | Partial<IProjectModelState>;
}

interface IEffectsPayloads {
  getProjectedList: void;
  // getApplyList: {
  //   status?: string;
  //   pageNo: number;
  //   pageSize?: number;
  // };
}

const projectModel: Model<IProjectModelState, GlobalState, IReducersPayloads, IEffectsPayloads> = {
  namespace: 'project',
  state: {
    selectedProject: [],
    name: 'dnhyxc'
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    updateSelectedProject(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {
    *getProjectedList({ payload }, { call, put }) {
      const res: Result<Service.ProjectResponse> = yield call(Service.getProjectList);
      if (res.success) {
        yield put({
          type: 'save',
          payload: {
            selectedProject: res.data || {},
          },
        });
      }
    },
  },
};

export default projectModel;

export const projectActions = createActionCreaters(projectModel);
