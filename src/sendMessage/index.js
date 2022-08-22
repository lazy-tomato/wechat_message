var axios = require('axios')

function sendMessage(data) {
  return axios.post(
    'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=' +
      data.access_token,
    {
      touser: data.touser,
      template_id: data.template_id,
      data: data.data || {},
    }
  )
}

module.exports = sendMessage
