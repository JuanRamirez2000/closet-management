import {
  pgTable,
  text,
  serial,
  pgEnum,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const itemStatusEnum = pgEnum("item_status", [
  "active",
  "sold",
  "donated",
]);

export const sites = pgTable("sites", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const storageTypes = pgTable("storage_types", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text().notNull(),
});

export const items = pgTable("items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  imageUrl: text("image_url").notNull(),

  isFavorite: boolean("is_favorite").default(false),
  status: itemStatusEnum("status").default("active"),

  siteId: integer("site_id").references(() => sites.id),
  storageTypeId: integer("storage_type_id").references(() => storageTypes.id),
  categoryId: integer("category_id").references(() => categories.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Relations for Drizzle queries
export const itemsRelations = relations(items, ({ one }) => ({
  site: one(sites, { fields: [items.siteId], references: [sites.id] }),
  storage: one(storageTypes, {
    fields: [items.storageTypeId],
    references: [storageTypes.id],
  }),
  category: one(categories, {
    fields: [items.categoryId],
    references: [categories.id],
  }),
}));
