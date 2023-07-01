module.exports = {
    module: {
        rules: [
            {
                test: /\.gif$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
};
