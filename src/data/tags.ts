export interface TagCategory {
  label: string;
  color: string;
  textColor: string;
}

export const TAG_CATEGORIES: Record<string, TagCategory> = {
  method:  { label: "Method",  color: "#c0532d", textColor: "#fff" },
  protein: { label: "Protein", color: "#6b8e5a", textColor: "#fff" },
  meal:    { label: "Meal",    color: "#b08832", textColor: "#fff" },
  cuisine: { label: "Cuisine", color: "#7a6599", textColor: "#fff" },
};

const CATEGORY_ORDER = ["method", "protein", "meal", "cuisine"];

export const TAGS: Record<string, string> = {
  // Method
  "Stovetop":     "method",
  "Oven":         "method",
  "Instant Pot":  "method",
  "Pellet Grill": "method",
  "Stockpot":     "method",
  "No-Cook":      "method",

  // Protein
  "Beef":       "protein",
  "Chicken":    "protein",
  "Pork":       "protein",
  "Vegetarian": "protein",

  // Meal
  "Dinner":    "meal",
  "Dessert":   "meal",
  "Side":      "meal",
  "Snack":     "meal",
  "Condiment": "meal",
  "Bread":     "meal",

  // Cuisine
  "American": "cuisine",
  "Mexican":  "cuisine",
  "Italian":  "cuisine",
  "Indian":   "cuisine",
  "Chinese":  "cuisine",
  "Thai":     "cuisine",
  "Japanese": "cuisine",
};

export function getTagCategory(tag: string): TagCategory | undefined {
  const categoryKey = TAGS[tag];
  return categoryKey ? TAG_CATEGORIES[categoryKey] : undefined;
}

const CARD_CATEGORIES = new Set(["method", "protein"]);

export function cardTags(tags: string[]): string[] {
  return sortTags(tags).filter((tag) => CARD_CATEGORIES.has(TAGS[tag] ?? ""));
}

export function sortTags(tags: string[]): string[] {
  return [...tags].sort((a, b) => {
    const aIdx = CATEGORY_ORDER.indexOf(TAGS[a] ?? "");
    const bIdx = CATEGORY_ORDER.indexOf(TAGS[b] ?? "");
    return aIdx - bIdx;
  });
}
