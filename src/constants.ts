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

// 一帧的时间（前端最小可操作单位，任何时间操作将对齐到这个时间的整数倍）
export const FRAME_DUR = 0.04;
// 最小媒资时长
export const MEDIA_MIN_DURATION = FRAME_DUR;

export const enum LIBRARY {
  PERSONAL = 'personal',
  ARCHIVE = 'archive',
  INTERNAL_SHARE = 'internal_share',
  EXTERNAL_SHARE = 'external_share',
  OPEN_RESOURCE = 'open_resource',
}

/**
 * @type {Array<{type: import('./models/videoEdit/types').PreviewSpecName, text: string }>}
 */
export const editorPreviewSpecs = [{
  type: 'HD',
  text: '高清',
}, {
  type: 'LD',
  text: '标清',
}];

export const SEARCH_ARRAY = [
  {
    key: 'textAlgo', label: '标准', value: 'textAlgo', power: true, icon: 'font-size', tip: '根据素材的标题、文本说明、文本标签进行搜索',
  },
  {
    key: 'imageAlgo', label: '视觉', value: 'imageAlgo', power: true, icon: 'desktop', tip: '根据素材的视频标签、图片标签、人脸识别进行搜索',
  },
  {
    key: 'asrAlgo', label: '语音', value: 'asrAlgo', power: true, icon: 'audio', tip: '根据素材的音频标签、语音识别结果进行搜索',
  },
  {
    key: 'ocrAlgo', label: '字幕', value: 'ocrAlgo', power: true, icon: 'file-text', tip: '根据素材的字幕识别结果进行搜索',
  },
  {
    key: 'allAlgo', label: '混合', value: '', power: true, icon: 'team', tip: '对全部搜索条件进行搜索，搜全部将等待更长的时间',
  },
];
// 视频缩略图地址
// export const thumbHost = [
//   'dev.magic.shuwen.com',
//   'test.magic.shuwen.com',
//   'test.mix.shuwen.com',
//   'dev.ys.shuwen.com',
//   'test.ys.shuwen.com',
//   'dev.olip.in',
//   'test.olip.in',
// ].includes(location.hostname)
//   ? location.protocol + '//test.thumb-image.shuwen.com'
//   : location.protocol + '//thumb-image.shuwen.com';
// 线上地址不确定

// 视频缩略图地址
export const thumbUrl = location.protocol + '//' + (location.hostname === 'dev.mediax.shuwen.com' ? 'test.magic-mediax.shuwen.com'
  : location.hostname) + '/web/mediax-busi-platform/video/v1/thumb';

export const FACT_STATUS: Record<string, {
  key: string;
  value: string;
  color: string;
  filter?: boolean;
}> = {
  none: {
    key: 'none',
    value: '未检测',
    color: '#D8D8D8',
  },
  processing: {
    key: 'processing',
    value: '核查中',
    color: '#FC8B0E',
  },
  normal: {
    key: 'normal',
    value: '正常',
    color: '#0DBB20',
  },
  suspected: {
    key: 'suspected',
    value: '疑似违规',
    color: '#F04D56',
  },
  manual_normal: {
    key: 'manual_normal',
    value: '人工设为正常',
    color: '#0DBB20',
  },
  manual_suspected: {
    key: 'manual_suspected',
    value: '人工设为违规',
    color: '#F04D56',
  },
  failed: {
    key: 'failed',
    value: '检测失败',
    color: '#F04D56',
    filter: false,
  },
};

export const ALGORITHM_CODE: string[] = ['21011', '21012', '21013'];

export const ALGORITHM_CODE_DESC: {
  [code: string]: string;
} = {
  21011: '算法执行中', // 未查询到状态信息
  21012: '算法未执行',
  21013: '算法执行失败',
};

export const ALGORITHM_CODE_ENUM = {
  executing: '21011',
  notExecution: '21012',
  executionFailed: '21013',
};

export const ALGORITHM_RESULT = {
  ALGORITHM_CODE,
  ALGORITHM_CODE_DESC,
  ALGORITHM_CODE_ENUM,
};

export const MEDIA_HANDLER_ORDER = {
  SIMPLE: ['magic', 'share', 'archive', 'inListDownload', 'transcode', 'move', 'externalShare', 'edit', 'inspect', 'takeMedia', 'delete'],
  DETAILS: ['magic', 'share', 'archive', 'download', 'cut', 'transcode', 'move', 'externalShare', 'edit', 'inspect', 'takeMedia', 'delete'],
  FOLDER: ['takeMedia', 'edit', 'share', 'move', 'externalShare', 'delete'],
  MULTI: ['takeMedia', 'download', 'move', 'archive', 'inspect', 'magic', 'share', 'externalShare', 'delete'],
};

// const ALL_HANDLER_ORDER = {
//   [LIBRARY.PERSONAL]: {
//     SIMPLE: ['magic', 'share', 'archive', 'download', 'transcode', 'move', 'externalShare', 'edit', 'inspect', 'takeMedia', 'delete'],
//   },
//   [LIBRARY.EXTERNAL_SHARE]: {
//     SIMPLE: ['magic', 'takeMedia', 'archive', 'download', 'transcode', 'move', 'externalShare', 'edit', 'inspect', 'delete'],
//   },
//   [LIBRARY.ARCHIVE]: {
//     SIMPLE: ['magic', 'takeMedia', 'download', 'transcode', 'move', 'externalShare', 'edit', 'inspect', 'delete'],
//   }
// }

const detailsPageHandler = ['magic', 'takeMedia', 'transcode', 'download', 'cut', 'share', 'archive', 'delete'];
export const HANDLER_LIST = {
  DETAILS: MEDIA_HANDLER_ORDER.DETAILS.filter(i => detailsPageHandler.includes(i)),
  LIST: {
    SIMPLE: MEDIA_HANDLER_ORDER.SIMPLE,
    FOLDER: MEDIA_HANDLER_ORDER.FOLDER,
  },
  MULTI: MEDIA_HANDLER_ORDER.MULTI,
};
// 部门管理模块兜底 Enum
export const STATUS = {
  StatusEnum: { 启用: 0, 停用: 1 }, // 部门状态
  UserStatusEnum: { 正常: '10', 未激活: '00', 停用: '20' }, // 部门成员状态
  RoleEnum: [
    { 200: '主账号' },
    { 201: '管理员' },
    { 202: '编辑' },
    { 1957: 'test' },
    { 2063: '账号权限账号' },
    { 2064: '归档库权限' },
    { 2065: '媒资操作权限' },
    { 2066: '文件夹管理权限' },
    { 2067: '测试角色' },
    { 2260: '测试角色啊' },
    { 2492: '开放资源池' },
  ],
};
