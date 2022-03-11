import request from 'antd-management-fast-framework/es/utils/request';

export async function fakeAccountLogin(params) {
  return request({
    api: `/api/login/account`,
    params,
  });
}

export async function getCaptcha(mobile) {
  return request({
    api: `/api/login/captcha?mobile=${mobile}`,
  });
}
