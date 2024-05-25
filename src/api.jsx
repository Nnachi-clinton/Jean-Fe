const API_BASE_URL = "https://localhost:7047/api";
export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Movie/search?title=${query}`);
    if (!response.ok) {
      throw new Error(`Failed to search movies:`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error occurred while searching movies:", error);
    throw error;
  }
};
export const getRecentSearchQueries = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/History/history`);
    if (!response.ok) {
      throw new Error("Failed to fetch recent search queries");
    }
    const data = await response.json(); // Await the JSON parsing
    console.log(data);
    return data.result;
  } catch (error) {
    console.error("Error fetching recent search queries:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};

export const getExtendedDetails = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Movie/details/${query}`);
    if (!response.ok) {
      //https://localhost:7047/api/Movie/details/tt1999890
      throw new Error(
        `Failed to search movies: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error occurred while searching movies:", error);
    throw error;
  }
};
