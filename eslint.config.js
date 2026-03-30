const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 12,
            globals: {
                console: "readonly"
            }
        }
    }
];