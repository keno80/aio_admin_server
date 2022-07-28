import { Service } from 'egg';
import { Login } from '../../typings/app';

export default class HomeService extends Service {

  public async login(data: Login) {
    const { username, password } = data;

    const res = await this.app.mysql.select('user', {
      where: { username, password },
      columns: [ 'username', 'password' ],
    });

    return res;

  }

  public async getInfo() {
    const { ctx } = this;
    const name = ctx.state.user.username;
    const res = await this.app.mysql.select('user', { name });

    return res;
  }
}
