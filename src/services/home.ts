import { post } from '@/utils/request';
import { normalizeResult } from '@/utils/tool';

export interface UserInfoResponse {
  attributes?: null,
  authStr?: string,
  avatarUrl?: string,
  dingtalkUserId?: string,
  email?: string,
  id?: string,
  trueName?: string,
  type?: number,
  userName?: string,
}

export async function getUserInfo() {
  const res = await post('/api/user/currentUserInfo');
  return normalizeResult<UserInfoResponse>(res);
}
