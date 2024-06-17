const { default: axios } = require("axios");

axios.get({
    url:"www.baidu.com/s",
    // data: {'k':'v'}
}).then(response=>{
    console.log(response)
    }
)
