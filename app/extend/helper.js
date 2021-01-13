exports.success = ({ctx, res = null, msg='处理成功'}) => {
  ctx.body = {
    code: 0,
    data: res,
    msg
  }
  ctx.status = 200
}