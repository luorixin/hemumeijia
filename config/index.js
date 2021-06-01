const Config = {
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? 'http://127.0.0.1:3000'
      : 'http://localhost:5000',
  redirectUrl:
    process.env.NODE_ENV === 'production'
      ? 'brands-local.parllay.cn:3001'
      : 'brands-local.parllay.cn:3001'
}
//
export default Config
