module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ["file-loader"],
            },
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
