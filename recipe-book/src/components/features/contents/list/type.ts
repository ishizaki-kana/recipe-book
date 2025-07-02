import { ListCategory, ListItem } from "@prisma/client";
import { z } from "zod";
import { createSchema } from "./schema";

/**
 * カテゴリごとに分類されたリストアイテムタイプ
 */
export type categorizedItem = {
    category: ListCategory,
    items: ListItem[]
}

/**
 * リストアイテム新規登録フォームタイプ
 */
export type CreateFormInput = z.infer<typeof createSchema>;

