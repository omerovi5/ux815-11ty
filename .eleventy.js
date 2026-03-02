
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("styles");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_UX815-llTY"
    }
  };
};

module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode("transmission", function(title, text) {
    return `
      <div class="transmission">
        <h3>📡 ${title}</h3>
        <p>${text}</p>
      </div>
    `;
  });

  eleventyConfig.addPassthroughCopy("css");
};