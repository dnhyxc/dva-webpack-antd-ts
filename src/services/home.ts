import request from '../utils/request';

export function query() {
  return request('/api/users');
}



export interface BrowseInfo {

}

export async function getUserInfo(param: any) {
  const res = request('/api/user/currentUserInfo', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(param),
  });
  return res;
}