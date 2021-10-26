const capitalizeAndFilter = (arr) => {
  return arr
    .filter(item => item[0].toLowerCase() !== 'f')
    .map(item => item.toUpperCase());
};
    
module.exports = capitalizeAndFilter;

