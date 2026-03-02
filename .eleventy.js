module.exports = function(eleventyConfig) {

  // Shortcode
  eleventyConfig.addShortcode("transmission", function(title, text) {
    return `
      <div class="transmission">
        <h3>📡 ${title}</h3>
        <p>${text}</p>
      </div>
    `;
  });

  // Copy styles folder
  eleventyConfig.addPassthroughCopy("styles");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_UX815-ll"
    }
  };
};