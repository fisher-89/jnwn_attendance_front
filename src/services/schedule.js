import request from '../utils/request';

// 编辑排班
export function editSchedule(params) {
  const { data } = params
  return request(`/api/schedule/${params.staff_sn}`, {
    method: 'POST',
    body: data,
  });
}