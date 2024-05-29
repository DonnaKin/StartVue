const url = "http://localhost:5226";

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/app/" : "/",
    // 빌드 시 다음 오류가 발생하면 parallel: false로 설정함
    // "Cannot read property 'createChildCompiler' of undefined"
    // parallel: false,
    assetsDir: "assets",
    devServer: {
        proxy: {
            "/api": {
                target: url
            }
        },
        port: 3000,
        https: false,
    },
};