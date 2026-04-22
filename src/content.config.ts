import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const features = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/features" }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    category: z.enum(["core", "gamepad", "platform", "integration"]),
    order: z.number().default(0),
    locale: z.enum(["en", "zh-TW", "zh-CN"]),
  }),
});

export const collections = { features };
