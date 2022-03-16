const fetchNationality = async (nationality) => {
  const urlNationality = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`;
  const response = await fetch(urlNationality);
  try {
    const data = await response.json();
    return data;
  } catch (e) {
    return undefined;
  }
};
export default fetchNationality;
