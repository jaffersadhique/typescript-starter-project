const { defaults } = require("jest-config");
module.exports = {
  roots: ["<rootDir>/test"],
  testMatch: ["**/*.test.ts"],
  transform: { "^.+\\.tsx?$": "ts-jest" },
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
};
