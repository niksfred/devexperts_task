import React, { useState } from "react";
import { useRecipes } from "./api";
import RecipeCard, { RecipeProps } from "./components/RecipeCard";
import TagsInput from "./components/tagsInput";

const Application: React.FC = () => {
  const [tags, setTags] = useState(Array<string>);
  const recipes = useRecipes();

  const filterRecipes = (
    recipes: RecipeProps[],
    tags: string[]
  ): Array<RecipeProps> => {
    let matchedRecipes: Set<RecipeProps> = new Set();
    recipes.forEach((recipe) => {
      const { ingredients } = recipe;
      const allIngredients = ingredients.join(" ");
      tags.forEach((tag) => {
        if (allIngredients.includes(tag)) {
          matchedRecipes.add(recipe);
        }
      });
    });

    return Array.from(matchedRecipes);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-4/5">
        <header className="flex justify-between h-12 mt-4 px-3 py-2 shadow-md rounded-md z-10">
          <div className="h-full">
            <img className="h-full" src="./devexperts_logo.png" alt="logo" />
          </div>
          <div>
            <TagsInput tags={tags} setTags={setTags} />
          </div>
        </header>
        <main className="flex flex-wrap mt-12 gap-y-4 gap-x-5 z-0">
          {tags.length > 0
            ? filterRecipes(recipes, tags).map((recipe, index) => (
                <RecipeCard key={index} {...recipe} />
              ))
            : recipes.map((recipe, index) => (
                <RecipeCard key={index} {...recipe} />
              ))}
        </main>
      </div>
      <footer className="w-full flex flex-col items-center p-4 shadow-inner mt-8 mb-4">
        <p className="text-center text-sm font-semibold text-slate-700">
          Please do not try these recipes at home. We hope that they will
          inspire you to cook more, but consider that their main idea is your
          coding task for Devexperts.
        </p>
        <p className="text-center text-sm font-semibold text-slate-700">
          Copyright 2022. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Application;
