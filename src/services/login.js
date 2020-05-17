import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('/api/user/login', {
    method: 'POST',
    headers: {
      "Content-Type":"application/x-www-form-urlencoded"
    },
    data: params,
    requestType: "form",
  });
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
