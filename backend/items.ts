import { api, APIError } from "encore.dev/api";

interface Item {
  id: string;
  name: string;
  description?: string;
}

interface ItemInput {
  name: string;
  description?: string;
}

let items: Item[] = [];

export const createItem = api(
  { expose: true, method: "POST", path: "/items" },
  async (input: ItemInput): Promise<Item> => {
    const item: Item = { id: Date.now().toString(), ...input };
    items.push(item);
    return item;
  }
);

export const listItems = api(
  { expose: true, method: "GET", path: "/items" },
  async (): Promise<{ items: Item[] }> => {
    return { items };
  }
);

export const getItem = api(
  { expose: true, method: "GET", path: "/items/:id" },
  async ({ id }: { id: string }): Promise<Item> => {
    const item = items.find(i => i.id === id);
    if (!item) throw APIError.notFound("Item not found");
    return item;
  }
);

export const updateItem = api(
  { expose: true, method: "PUT", path: "/items/:id" },
  async ({ id, ...input }: Partial<Item> & { id: string }): Promise<Item> => {
    const idx = items.findIndex(i => i.id === id);
    if (idx === -1) throw APIError.notFound("Item not found");
    items[idx] = { ...items[idx], ...input };
    return items[idx];
  }
);

export const deleteItem = api(
  { expose: true, method: "DELETE", path: "/items/:id" },
  async ({ id }: { id: string }): Promise<{ success: boolean }> => {
    const idx = items.findIndex(i => i.id === id);
    if (idx === -1) throw APIError.notFound("Item not found");
    items.splice(idx, 1);
    return { success: true };
  }
); 