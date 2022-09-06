import { useEffect, useState } from "react";

export const useRecipes = () => {
    const [recipes, setRecipes] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            const response: Promise<Response> = fetch("https://api.jsonbin.io/v3/b/62d56dbd5ecb581b56c3e44d");
            const data = (await response).json()
            const result = await data;
            const fetchedRecipes = result.record.recipes
            setRecipes(fetchedRecipes)
        })();
    }, []) 

    return recipes;
}