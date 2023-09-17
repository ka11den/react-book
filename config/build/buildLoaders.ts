import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
      const cssLoader = {
    // regular ones don't work on css, only scss/sass
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ]
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typescriptLoader,
    cssLoader,
  ]
}
