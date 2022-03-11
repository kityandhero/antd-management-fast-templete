import moment from 'moment';

import { queryStringify } from 'antd-management-fast-framework/es/utils/tools';
import { request } from 'antd-management-fast-framework/es/utils/requestAssistor';

export async function accountLogin(params) {
  return request({
    api: '/entrance/signIn',
    params,
    virtualSuccessResponse: {
      data: {
        token: 'e03c9a65-6537-4a44-acf4-bbf472fdd0fe',
        name: '张三量',
        currentAuthority: ['super'],
      },
    },
    virtualNeedAuthorize: false,
  });
}

export async function register(params) {
  return request({
    api: `/entrance/register`,
    params,
  });
}

export async function getCaptcha(mobile) {
  return request({
    api: `/entrance/captcha?mobile=${mobile}`,
  });
}

/**
 * 占位函数
 *
 * @export
 * @returns
 */
export async function empty() {
  return {};
}
