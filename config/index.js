const Config = {
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? 'http://127.0.0.1:3000'
      : 'http://localhost:5000'
}
//
export default Config
