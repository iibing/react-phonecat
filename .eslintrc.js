module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended", "plugin:react/recommended"
    ],
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
        "indent": [
            "error",
            4, 
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error", "unix"
        ],
        "quotes": [
            "error", "single"
        ],
        "semi": [
            "error", "never"
        ],
        "no-unused-vars": [
            "error", {
                "varsIgnorePattern": "Ignored"
            }
        ],
        "no-console": ["off"]
    }
};