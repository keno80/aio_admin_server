import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, jwt } = app;

  router.post('/admin/login', controller.home.login);
  router.post('/admin/getInfo', jwt, controller.home.getInfo);
};
