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
    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                        plugins: ['@emotion'] 
                    }
                }
            },
        ]
    },
    navigations: {
        'sugarbun.home': '/sugarbun',
        'sugarbun.main': '/',
        'sugarbun.menu': '/menu',
        'sugarbun.constructor': '/constructor',
        'sugarbun.admin': '/admin'
    },
    features: {
        'sugarbun': {
            // add your features here in the format [featureName]: { value: string }
        },
    },
    config: {
        key: 'value'
    }
}
