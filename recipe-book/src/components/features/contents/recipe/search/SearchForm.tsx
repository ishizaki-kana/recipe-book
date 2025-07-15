'use client'
import Button from "@/components/ui/button/button/Button";
import Alert from "@/components/ui/feedback/alert/Alert";
import TextBox from "@/components/ui/form/input/text/TextBox";
import { Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material";
import { RecipeCategory } from "@prisma/client";
import { Controller, useForm } from "react-hook-form";
import { useRecipe } from "../hooks";
import { RecipeSearchInput } from "../types";

export default function SearchForm({
    categories,
    searchInput
}: {
    categories: RecipeCategory[]
    searchInput: RecipeSearchInput
}) {
    const {
        register,
        handleSubmit,
        control,
        formState: { isSubmitting }
    } = useForm<RecipeSearchInput>({
        defaultValues: searchInput
    });

    const { error, search } = useRecipe();

    // 検索ボタンクリックイベント
    const onSubmit = async (data: RecipeSearchInput) => {
        search(data);
    }

    return (
        <>
            <Alert severity="error" visible={!!error}>{error}</Alert>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack>

                    {/* キーワード */}
                    <TextBox
                        label="キーワード"
                        {...register("keyword")}
                    />

                    {/* カテゴリ */}
                    <Controller
                        name="categoryIds"
                        control={control}
                        render={({ field }) => (
                            <FormGroup row>
                                {categories.map((category) => (
                                    <FormControlLabel
                                        key={category.id}
                                        control={
                                            <Checkbox
                                                checked={field.value.includes(category.id)}
                                                onChange={(e) => {
                                                    const checked = e.target.checked;
                                                    const value = category.id;
                                                    const newValue = checked
                                                        ? [...field.value, value]
                                                        : field.value.filter((id) => id !== value);
                                                    field.onChange(newValue);
                                                }}
                                            />
                                        }
                                        label={category.name} />
                                ))}
                            </FormGroup>
                        )} />

                    <Button
                        type="submit"
                        loading={isSubmitting}>
                        検索
                    </Button>
                </Stack>
            </form>
        </>
    )
}