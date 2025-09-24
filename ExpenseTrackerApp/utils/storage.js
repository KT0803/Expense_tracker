import AsyncStorage from '@react-native-async-storage/async-storage';


const TRANSACTIONS_KEY = '@transactions_v1';


export async function loadTransactions() {
try {
const json = await AsyncStorage.getItem(TRANSACTIONS_KEY);
return json ? JSON.parse(json) : [];
} catch (e) {
console.error('Failed to load transactions', e);
return [];
}
}


export async function saveTransactions(transactions) {
try {
await AsyncStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
} catch (e) {
console.error('Failed to save transactions', e);
}
}


export async function clearTransactions() {
try {
await AsyncStorage.removeItem(TRANSACTIONS_KEY);
} catch (e) {
console.error('Failed to clear transactions', e);
}
}
