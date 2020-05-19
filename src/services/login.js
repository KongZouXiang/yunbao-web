import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export function getUserById(id) {
  return request.get('/user/userById', {
    params: {
      userId: id,
    },
  }).then(function(data) {
    console.log(data);
  });
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
