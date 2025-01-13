import { usersCollection } from "../Screens/LoginScreen/mock";

export enum Endpoints {
  Meeting = "meeting",
  User = "user",
}

const baseUrl = "http://localhost:3200/";

// Create a new item
export const createItem = async (endpoint: string, itemData: any) => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};

// Fetch all items
export const getItems = async (endpoint: string) => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting items:", error);
    throw error;
  }
};

// Fetch a single item by ID
export const getItemById = async (endpoint: string, itemId: any) => {
  try {
    return usersCollection;
    const response = await fetch(`${baseUrl}${endpoint}/${itemId}`);
    const data = await response.json();
  } catch (error) {
    console.error(`Error getting item with ID ${itemId}:`, error);
    throw error;
  }
};

// TODO: UPDATE, DELETE
