const Mock = require('mockjs');
const delay = require('mocker-api/utils/delay')
const request = {
    'GET /api/user': {
        id: 1,
        username: "kenny",
        sex: 6
    },
    'GET /api/hi': (req, res) => {
        res.json({
            id: 1,
            username: "jaja"
        })
    },
    'GET /api/mock': Mock.mock({
        success: true,
        //随机生成一段中文
        message: '@cparagraph',
        // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
        'list|1-5': [{
            // 属性 sid 是一个自增数，起始值为 1，每次增 1
            'sid|+1': 1,
            // 属性 userId 是一个5位的随机码
            'userId|5': '',
        }]
    })
}
//数据会延迟1000毫秒获得
module.exports = delay(request, 1000)