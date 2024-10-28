/**
 * Safely checks if a nested property exists
 * @param {Object} obj - The object to check
 * @param {string} path - Dot notation path to the property
 * @returns {boolean} Whether the property exists and has a value
 */
export const hasProperty = (obj, path) => {
  const value = path.split('.').reduce((curr, key) => curr?.[key], obj);
  return value !== undefined && value !== null;
};

/**
 * Safely gets a nested value if it exists
 * @param {Object} obj - The object to check
 * @param {string} path - Dot notation path to the property
 * @returns {*} The value or undefined
 */
export const getProperty = (obj, path) => {
  return path.split('.').reduce((curr, key) => curr?.[key], obj);
};
