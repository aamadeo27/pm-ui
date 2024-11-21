import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginJest from "eslint-plugin-jest";
import eslintPluginTestingLibrary from "eslint-plugin-testing-library";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

const config = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
      parser: typescriptParser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTypescript,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      jest: eslintPluginJest,
      "testing-library": eslintPluginTestingLibrary,
      prettier: eslintPluginPrettier,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      curly: ["error", "multi-line", "consistent"],
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "prettier/prettier": "warn",

      "@typescript-eslint/explicit-function-return-type": "warn", // Warn when function return types are missing
      "@typescript-eslint/no-explicit-any": "warn", // Warn on the use of 'any'
      "@typescript-eslint/consistent-type-assertions": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { args: "none", ignoreRestSiblings: true },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/explicit-function-return-type": "warn",

      "jest/no-disabled-tests": "warn",
      "testing-library/no-debugging-utils": "warn",
      "react/jsx-uses-vars": "error", // Prevent unused variables in JSX
      "react/jsx-no-target-blank": "warn", // Warn on <a> tags without rel="noopener noreferrer"
      "jest/valid-expect": "error", // Enforce valid expect() calls
      "jest/valid-title": "error", // Ensure tests have titles
      "jest/no-duplicate-hooks": "error", // Disallow duplicate hooks in tests
      "prettier/prettier": ["error", { singleQuote: true, semi: false }], // Enforce Prettier's formatting rules
    },
  },
  {
    files: ["**/*.ts?(x)"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json", // Ensure TypeScript type-aware linting
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-assertions": "warn", // Enforce consistent type assertion style
      "@typescript-eslint/no-unused-vars": [
        "error",
        { args: "none", ignoreRestSiblings: true },
      ], // Avoid unused variables
      "@typescript-eslint/explicit-module-boundary-types": "warn", // Require function boundary types
      "@typescript-eslint/explicit-function-return-type": "warn", // Warn on missing function return types
      "@typescript-eslint/no-explicit-any": "warn", // Discourage the use of 'any'
      "@typescript-eslint/prefer-optional-chain": "warn", // Encourage optional chaining over explicit checks
    },
  },
  {
    files: ["**/*.test.[jt]s?(x)"],
    plugins: {
      jest: eslintPluginJest,
      "testing-library": eslintPluginTestingLibrary,
    },
    rules: {
      "jest/expect-expect": "warn", // Enforce assert statements in Jest tests
      "jest/no-mocks-import": "error", // Disallow imports from mocks
      "jest/no-duplicate-hooks": "error", // Disallow duplicate hooks in Jest tests
      "testing-library/prefer-screen-queries": "error", // Prefer `screen` queries over destructured methods
      "testing-library/no-debugging-utils": "warn", // Avoid leaving debugging code in production
    },
  },
  {
    files: ["**/*.jsx", "**/*.tsx"],
    plugins: {
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    rules: {
      "react/jsx-uses-react": "error", // Prevent React imports from being marked as unused
      "react/jsx-uses-vars": "error", // Prevent variables used in JSX from being marked as unused
      "react/jsx-no-target-blank": "warn", // Warn when using target="_blank" without rel="noopener noreferrer"
      "react/react-in-jsx-scope": "error", // Ensure React is in scope when using JSX
      "react-hooks/rules-of-hooks": "error", // Enforce the Rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Warn on missing dependencies in useEffect
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error", // Treat Prettier issues as ESLint errors
    },
  },
];

export default config;
