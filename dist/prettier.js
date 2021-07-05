"use strict";
/** @format */
module.exports = {
    // printWidth: 80, // 每行代码长度（默认80）
    tabWidth: 2,
    useTabs: false,
    singleQuote: true,
    semi: true,
    trailingComma: "all",
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: "avoid",
    vueIndentScriptAndStyle: true,
    // singleQuote: true,
    // trailingComma: 'all',
    printWidth: 100,
    proseWrap: 'never',
    endOfLine: 'lf',
    overrides: [
        {
            files: '.prettierrc',
            options: {
                parser: 'json',
            },
        },
        {
            files: 'document.ejs',
            options: {
                parser: 'html',
            },
        },
    ],
};
