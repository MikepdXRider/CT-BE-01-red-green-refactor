const capitalizeAndFilter = (arr) => {
  const accArr = [];
  for (const item of arr){
    if (item[0].toLowerCase() !== 'f'){
      accArr.push(item.toUpperCase());
    }
  }
  return accArr;
};
    
module.exports = capitalizeAndFilter;

