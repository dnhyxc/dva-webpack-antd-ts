import { post } from '@/utils/request';
import { normalizeResult } from '@/utils/tool';

export interface ProjectResponse {

}

export async function getProjectList() {
  const res = await post('/api/user/currentUserInfo');
  return normalizeResult<ProjectResponse>(res);
}
