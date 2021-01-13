const Controller = require('egg').Controller;
/**
 * @Controller 用户管理
 */
class UserController extends Controller {
  /**
   * @Router post /api/user
   * @request body createUserRequest *body
   * @description 创建用户，记录用户账户/密码/类型
   * @response 200 baseResponse 创建成功
   */
  async create() {
    const { ctx } = this
    ctx.helper.success({ctx, res:{
      username: 'timokie',
      age: 18
    }})
    // ctx.body = {
    //   code: 0,
    //   data: {
    //     username: 'timokie',
    //     age: 18
    //   }
    // }
  }
}

module.exports = UserController;
