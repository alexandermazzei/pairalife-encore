// Manual Encore API client
// This is a temporary solution until the generated client works

const API_BASE_URL = 'http://localhost:4000';

// Item type definitions
export interface Item {
  id: string;
  name: string;
  description?: string;
}

export interface ItemInput {
  name: string;
  description?: string;
}

// Items API
export const items = {
  create: async (item: ItemInput): Promise<Item> => {
    const response = await fetch(`${API_BASE_URL}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    return response.json();
  },
  
  list: async (): Promise<{ items: Item[] }> => {
    const response = await fetch(`${API_BASE_URL}/items`);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    return response.json();
  },
  
  get: async (id: string): Promise<Item> => {
    const response = await fetch(`${API_BASE_URL}/items/${id}`);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    return response.json();
  },
  
  update: async (id: string, item: Partial<Item>): Promise<Item> => {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    return response.json();
  },
  
  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
  },
};

// Ping API
export const ping = async (): Promise<{ message: string }> => {
  const response = await fetch(`${API_BASE_URL}/ping`);
  if (!response.ok) throw new Error(`HTTP error ${response.status}`);
  return response.json();
};

// Base client export
export default {
  items,
  ping
}; 