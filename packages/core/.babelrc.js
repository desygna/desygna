const isDev = process.env.NODE_ENV !== "production";

const envPreset = isDev
  ? ["@babel/preset-env", { loose: true }]
  : [
      "@babel/preset-env",
      {
        modules: false,
        useBuiltIns: "entry",
        corejs: 3,
        exclude: ["transform-typeof-symbol"],
        loose: true,
        targets: {
          node: "current"
        }
      }
    ];

module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        development: isDev,
        runtime: "automatic",
        importSource: "@emotion/react"
      }
    ],
    [
      "@babel/preset-typescript",
      {
        isTSX: true,
        allExtensions: true
      }
    ],
    envPreset
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    "@babel/plugin-syntax-dynamic-import",
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: false,
        helpers: !isDev,
        regenerator: !isDev,
        useESModules: !isDev
      }
    ]
  ]
};
