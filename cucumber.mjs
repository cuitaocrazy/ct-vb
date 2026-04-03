export default {
  paths: ["features/**/*.feature"],
  requireModule: ["ts-node/register"],
  require: ["features/support/**/*.ts", "features/step-definitions/**/*.ts"],
  format: ["progress-bar", "html:test-results/cucumber-report.html"],
};
