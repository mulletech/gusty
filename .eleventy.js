const { execSync } = require("child_process");

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/main.css');
  eleventyConfig.addPassthroughCopy('./src/img');

  return {
    // htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '_site'
    }
  }
}
