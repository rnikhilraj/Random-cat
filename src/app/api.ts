import axios from "axios";

export interface CatData {
  id: string;
  url: string;
  width: number;
  height: number;
}

export const fetchcatData = async (): Promise<CatData[]> => {
  try {
    const response = await axios.get<CatData[]>(
      "https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=10" // Adjust limit as needed
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching cat data:", error);
    return [];
  }
};
