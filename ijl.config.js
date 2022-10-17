const pkg = require('./package')

module.exports = {
    apiPath: 'stubs/api',
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
        }
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
