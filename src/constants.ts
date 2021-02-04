// Your custom iconfont Symbol script Url
// eg：//at.alicdn.com/t/font_1039637_btcrd5co4w.js
// 注意：如果需要图标多色，Iconfont 图标项目里要进行批量去色处理
// Usage: https://github.com/ant-design/ant-design-pro/pull/3517
export const iconfontUrl = '//at.alicdn.com/t/font_1203261_yvy8ld6j34n.js';

// 分页
// 1.只有一页的时候 不显示分页
// 2.大于一页小于等于20页 正常分页
// 3.大于20页 显示跳页
export const JUMPER_PAGENUM = 20; // 显示跳页

export const DOMAIN = 'mediax.shuwen.com'; // 项目主域名

export const PAGE_ICON = 'https://s.newscdn.cn/account-frontend/0.1.9/img/favicon.ico'; // 默认页面标题左侧 icon

export const PAGE_TITLE = '智能媒资'; // 默认页面标题

export const SIDER_LOGO_PIC = 'https://s.newscdn.cn/file/2020/12/02c3d489-4a0f-4a99-96e5-8f089618a3fc.png'; // 默认左侧导航栏顶部 logo picture

// Sentry DSN 链接 => https://sentry.xinhuazhiyun.com/
export const SENTRY_DSN = 'https://5208eee9b7774b38a6113a584a4488f9@sentry.xinhuazhiyun.com/40';

// 是否是开发模式
export const IS_DEV = location.hostname.includes('dev');

// 是否是测试模式
export const IS_TEST = location.hostname.includes('test');

// 是否是预发模式
export const IS_PRE = location.hostname.includes('pre');

export const GATEWAY_HOST = '';

const socketProtocol = location.protocol.startsWith('https') ? 'wss' : 'ws';
const socketUrl = IS_DEV ? 'test.magic-mediax.shuwen.com' : location.hostname;
export const GATEWAY_WS = `${socketProtocol}://${socketUrl}/mediax/webSocket`;

// 视频缩略图地址
export const thumbUrl = location.protocol + '//' + (location.hostname === 'dev.mediax.shuwen.com' ? 'test.magic-mediax.shuwen.com'
  : location.hostname) + '/web/mediax-busi-platform/video/v1/thumb';

export const ALGORITHM_CODE: string[] = ['21011', '21012', '21013'];

export const ALGORITHM_CODE_ENUM = {
  executing: '21011',
  notExecution: '21012',
  executionFailed: '21013',
};

export const ALGORITHM_RESULT = {
  ALGORITHM_CODE,
  ALGORITHM_CODE_ENUM,
};
