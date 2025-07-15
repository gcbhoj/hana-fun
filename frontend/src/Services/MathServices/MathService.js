export const fetchAllData = async () => {
  try {
    const response = await fetch("../../../public/data/Math/wordProblems.json");

    if (!response.ok) {
      return console.log("Error Fetchng Data");
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      return console.error("Data Error");
    }

    return data;
  } catch (err) {
    console.error("Error FetchingData", err);
  }
};
