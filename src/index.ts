import '@babel/polyfill';
import 'url-polyfill';
import dva, { DvaInstance } from 'dva';
import createLoading from 'dva-loading';
import { createBrowserHistory as createHistory } from 'history';
import { Toast } from 'antd-mobile';
import * as ModelSet from './models/index';
import './index.less';

export interface IDvaInstance extends DvaInstance {
  _store?: any;
}

export interface versionInfoProps {
  VERSION: string;
  ENV: 'DEV' | 'TEST' | 'PRE' | 'PROD';
  INIT: boolean;
}

declare global {
  interface Window {
    __app?: IDvaInstance;
    versionInfo: versionInfoProps;
    spm: any;
  }
}

// 1. Initialize
const app: IDvaInstance = dva({
  history: createHistory(),
  ...createLoading({
    effects: true,
  }),
  onError(error) {
    Toast.fail(error.message);
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
Object.values(ModelSet).forEach(model => {
  app.model(model as any);
});

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app._store;

window.__app = app;
