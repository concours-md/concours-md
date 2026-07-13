import { Client, Account, Databases, ID, Query } from "https://cdn.jsdelivr.net/npm/appwrite@16/+esm";

// ============================================
// Appwrite Configuration
// ============================================
const ENDPOINT = "https://nyc.cloud.appwrite.io/v1";
const PROJECT_ID = "6a5507f900219f8e9ea8";

export const client = new Client()
  .setEndpoint(ENDPOINT)
  .setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);

export { ID, Query };

// Database IDs
export const DB_ID = "concours_db";

// Collection IDs
export const COLLECTIONS = {
  QUESTIONS: "questions",
  TESTS: "tests",
  NOTEBOOK: "notebook",
  USERS: "users"
};
