import request from '../utils/request';

export async function getUserInfo() {
  return request('/api/current-user');
}

// 上传图片
export function fileUpload(data) {
  return request('/api/files', {
    method: 'POST',
    body: data,
  });
}