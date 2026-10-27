import { pgTable, serial, text, timestamp, integer, boolean } from "drizzle-orm/pg-core";

export const quotes = pgTable("quotes", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  zipCode: text("zip_code").notNull(),
  serviceType: text("service_type").notNull(),
  preferredDate: text("preferred_date"),
  preferredTime: text("preferred_time"),
  description: text("description").notNull(),
  estimatedVolume: text("estimated_volume"), // e.g. "single-item", "quarter-truck", "half-truck", "full-property"
  photoUrls: text("photo_urls"), // JSON stringified array of uploaded photo paths
  status: text("status").default("pending").notNull(), // pending, contacted, scheduled, completed, cancelled
  ipHash: text("ip_hash"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  status: text("status").default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const privacyAuditLogs = pgTable("privacy_audit_logs", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  strictlyNecessary: boolean("strictly_necessary").default(true).notNull(),
  functionalAccepted: boolean("functional_accepted").default(false).notNull(),
  analyticsAccepted: boolean("analytics_accepted").default(false).notNull(),
  marketingAccepted: boolean("marketing_accepted").default(false).notNull(),
  action: text("action").notNull(), // "accept_all", "reject_optional", "custom_save", "gpc_applied"
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
