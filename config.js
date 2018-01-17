// 存放未编译的文件夹
const ROOT_DEV ='dev';
// 存放编译过后的文件夹
const ROOT_BUILD ='dist';


module.exports = {
    // 未编译的路径
    dev: {
        css  : ROOT_DEV + '/**/*.less',
        js   : ROOT_DEV + '/**/*.js',
        image: ROOT_DEV + '/**/*.{png,jpg,gif,ico}',
    },
    // 编译过后的路径
    build:{
        css  : ROOT_BUILD + '/',
        js   : ROOT_BUILD + '/',
        image     : ROOT_BUILD + '/',
    },
};

