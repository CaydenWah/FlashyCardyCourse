import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

// A deck is a named collection of cards owned by a Clerk user.
export const decks = pgTable("decks", {
  id: serial("id").primaryKey(),
  clerkUserId: text("clerk_user_id").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// A card belongs to a deck and has a front (prompt) and back (answer).
export const cards = pgTable("cards", {
  id: serial("id").primaryKey(),
  deckId: integer("deck_id")
    .notNull()
    .references(() => decks.id, { onDelete: "cascade" }),
  front: text("front").notNull(),
  back: text("back").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Tracks how a user answered a specific card during a study session.
// "correct" / "incorrect" lets us implement spaced repetition later.
export const reviewResultEnum = pgEnum("review_result", [
  "correct",
  "incorrect",
]);

export const cardReviews = pgTable("card_reviews", {
  id: serial("id").primaryKey(),
  clerkUserId: text("clerk_user_id").notNull(),
  cardId: integer("card_id")
    .notNull()
    .references(() => cards.id, { onDelete: "cascade" }),
  result: reviewResultEnum("result").notNull(),
  // When the user should next see this card (for spaced repetition).
  nextReviewAt: timestamp("next_review_at"),
  reviewedAt: timestamp("reviewed_at").defaultNow().notNull(),
});
