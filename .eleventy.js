module.exports = function(eleventyConfig) {

  // Shortcode for blog transmissions
  eleventyConfig.addShortcode("transmission", function(title, text) {
    return `
      <div class="transmission">
        <h3>📡 ${title}</h3>
        <p>${text}</p>
      </div>
    `;
  });

  // Copy styles folder to output
  eleventyConfig.addPassthroughCopy("styles");

  // Use default directories (_site is default output)
  return {
    dir: {
      input: ".",            // project root
      includes: "_includes"  // layout folder
    }
  };
};