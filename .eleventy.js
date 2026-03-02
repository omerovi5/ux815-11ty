module.exports = function(eleventyConfig) {

  // Shortcode for transmissions
  eleventyConfig.addShortcode("transmission", function(title, text) {
    return `
      <div class="transmission">
        <h3>📡 ${title}</h3>
        <p>${text}</p>
      </div>
    `;
  });

  // Copy the styles folder
  eleventyConfig.addPassthroughCopy("styles");

  // Use default directories
  return {
    dir: {
      input: ".",            // source files
      includes: "_includes"  // layouts
    }
  };
};