import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async login() {
    const { ctx, app } = this;
    const { body } = ctx.request;

    const res = await ctx.service.home.login(body);

    if (res.length !== 0) {
      const token = app.jwt.sign({
        username: res[0].username,
      }, app.config.jwt.secret);

      ctx.body = {
        code: 200,
        data: { token },
        message: '登录成功',
      };
    } else {
      ctx.body = {
        code: 400,
        data: null,
        message: '登录失败',
      };
    }
  }

  public async getInfo() {
    const { ctx } = this;

    const res = await ctx.service.home.getInfo();
    if (res.length !== 0) {
      ctx.body = {
        code: 200,
        data: res[0],
        message: '获取信息成功',
      };
    } else {
      ctx.body = {
        code: 400,
        data: null,
        message: '获取信息失败',
      };
    }
  }
}
