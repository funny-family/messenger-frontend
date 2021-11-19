export const fromCabeToCamelCase = (str) => {
  const arr = str.split('-');
  const capital = arr.map((item, index) => (index ?
    item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase()));
  const capitalString = capital.join('');

  return capitalString;
};
