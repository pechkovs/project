const pkg = require('./package')
const ESLintPlugin = require('eslint-webpack-plugin');

const changeEnvVersion = (version) => version === 'master' ? 'main' : version;

module.exports = {
    apiPath: 'stubs/api',
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${changeEnvVersion(process.env.VERSION) || pkg.version}/`
        },
        plugins: [new ESLintPlugin({extensions:["jsx", "tsx", "ts", "js"]})]
    },
    navigations: {
        'code.main': '/code'
    },
    features: {
        'code': {
            // add your features here in the format [featureName]: { value: string }
        },
    },
    config: {
        key: 'value'
    }
}
