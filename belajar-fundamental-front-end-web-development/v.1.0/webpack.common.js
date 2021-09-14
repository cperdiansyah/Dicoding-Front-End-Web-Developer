const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = ['index', 'discover', 'details'];
module.exports = {
    entry: pages.reduce((config, page) => {
        config[page] = `./src/${page}.js`;
        return config;
    }, {}),

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts/'
                }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: {
                        removeComments: true,
                        collapseWhitespace: false
                    },
                    sources: {
                        list: [
                            {
                                tag: 'img',
                                attribute: 'data-src',
                                type: 'src'
                            },
                            {
                                tag: 'img',
                                attribute: 'data-srcset',
                                type: 'srcset'
                            },
                            {
                                // Tag name
                                tag: 'link',
                                // Attribute name
                                attribute: 'href',
                                // Type of processing, can be `src` or `scrset`
                                type: 'src',
                                // Allow to filter some attributes
                                filter: (
                                    tag,
                                    attribute,
                                    attributes,
                                    resourcePath
                                ) => {
                                    // The `tag` argument contains a name of the HTML tag.
                                    // The `attribute` argument contains a name of the HTML attribute.
                                    // The `attributes` argument contains all attributes of the tag.
                                    // The `resourcePath` argument contains a path to the loaded HTML file.

                                    if (/my-html\.html$/.test(resourcePath)) {
                                        return false;
                                    }

                                    if (!/stylesheet/i.test(attributes.rel)) {
                                        return false;
                                    }

                                    if (
                                        attributes.type &&
                                        attributes.type.trim().toLowerCase() !==
                                            'text/css'
                                    ) {
                                        return false;
                                    }

                                    return true;
                                }
                            }
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/, /// untuk membuat plugin yang ada di node_modules menjadi chunks
                    name: 'vendor', /// nama bundlenya
                    chunks: 'all' /// code yang ingin dipisahkan untuk contoh menggunakan semuanya
                }
            }
        }
    },
    /* pulgins */
    plugins: [].concat(
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/img/'),
                    to: path.resolve(__dirname, 'dist/img/')
                }
            ]
        }),
        pages.map(
            (page) =>
                new HtmlWebpackPlugin({
                    template: path.resolve(
                        __dirname,
                        `src/scripts/pages/${page}/${page}.html`
                    ),
                    favicon: path.resolve(__dirname, 'src/img/favicon.ico'),
                    filename: `${page}.html`,
                    chunks: [`${page}`]
                })
        )
    )
};
