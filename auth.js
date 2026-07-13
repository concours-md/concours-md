import { account, ID, databases, DB_ID, COLLECTIONS } from "./appwrite.js";

// ============================================
// Authentication Functions
// ============================================

export async function signUp(name, email, password, prefs = {}) {
  await account.create(ID.unique(), email, password, name);
  await logIn(email, password);
  if (Object.keys(prefs).length > 0) {
    await account.updatePrefs(prefs);
  }
}

export async function logIn(email, password) {
  await account.createEmailPasswordSession(email, password);
}

export async function logOut() {
  await account.deleteSession("current");
}

export async function getCurrentUser() {
  try {
    return await account.get();
  } catch {
    return null;
  }
}

export async function sendPasswordReset(email) {
  const resetURL = `${window.location.origin}/reset-password.html`;
  await account.createRecovery(email, resetURL);
}

export async function confirmPasswordReset(userId, secret, newPassword) {
  await account.updateRecovery(userId, secret, newPassword);
}

// ============================================
// User Preferences & Language
// ============================================

export async function getUserPrefs() {
  try {
    const user = await account.get();
    return user.prefs || {};
  } catch {
    return {};
  }
}

export async function updateUserPrefs(prefs) {
  await account.updatePrefs(prefs);
}

export async function getUserLanguage() {
  const prefs = await getUserPrefs();
  return prefs.language || "en";
}

// ============================================
// Database Helpers
// ============================================

export async function createDocument(collectionId, data, docId = ID.unique()) {
  return await databases.createDocument(DB_ID, collectionId, docId, data);
}

export async function getDocuments(collectionId, queries = []) {
  return await databases.listDocuments(DB_ID, collectionId, queries);
}

export async function updateDocument(collectionId, docId, data) {
  return await databases.updateDocument(DB_ID, collectionId, docId, data);
}

export async function deleteDocument(collectionId, docId) {
  return await databases.deleteDocument(DB_ID, collectionId, docId);
}
