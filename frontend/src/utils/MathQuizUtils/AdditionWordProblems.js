import { fetchAllData } from "../../Services/MathServices/MathService";

export const getLevelOneQuestions = async () => {
  try {
    const data = await fetchAllData();
    if (!data || !Array.isArray(data)) {
      console.error("Data Error");
    }

    const simpleAdditionScenarios = data.simpleAddition;
    const randomIndex = Math.floor(
      Math.random() * simpleAdditionScenarios.length
    );
    const seleactedScenario = simpleAdditionScenarios[randomIndex];

    return seleactedScenario;
  } catch (err) {
    console.error("Error Fetching Data", err);
  }
};
