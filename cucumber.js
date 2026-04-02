module.exports = {
  default: {
    paths: [
      "openspec/specs/**/*.feature",
      "openspec/changes/**/specs/**/*.feature",
    ],
    requireModule: ["tsx"],
    require: [
      "features/support/*.ts",
      "features/**/steps/*.steps.ts",
    ],
    language: "zh-CN",
  },
};
