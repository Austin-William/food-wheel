"use client"

import { useEffect, useState } from "react";

import Input from "./components/input";
import List from "./components/list";
import Button from "./components/button";
import Wheel from "./components/wheel";

export default function Home() {
  const baseFoods = ["Pizza", "Burgers", "Tacos", "Sushi", "Pâtes", "Salade"];

  const [foods, setFoods] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const [isSpinningAnimation, setIsSpinningAnimation] = useState<boolean>(false);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [choosedFood, setChoosedFood] = useState<string | null>(null);

  // logic functions
  function startSpinning() {
    setIsSpinningAnimation(true);
    setIsSpinning(false);
    setTimeout(() => {
      selectRandomFood();
      setIsSpinning(true);
      setIsSpinningAnimation(false);
    }
      , 2000);
  }

  function selectRandomFood() {
    const randomIndex = Math.floor(Math.random() * foods.length);

    setChoosedFood(foods[randomIndex]);
  }

  // local storage functions
  function saveFoods() {
    localStorage.setItem("foods", JSON.stringify(foods));
  }

  function loadFoods() {
    const savedFoods = localStorage.getItem("foods");

    if (savedFoods) {
      setFoods(JSON.parse(savedFoods));
    } else {
      setFoods(baseFoods);
    }
  }

  function deleteFoods() {
    localStorage.removeItem("foods");
    setFoods(baseFoods);
  }

  // helper functions
  function addFood(food: string) {
    const newFoods = [...foods, food];

    setFoods(newFoods);
  }

  function resetFoods() {
    setFoods(baseFoods);
    setIsSpinning(false);
  }

  function removeFood(index: number) {
    const newFoods = [...foods];

    newFoods.splice(index, 1);
    setFoods(newFoods);
  }

  // handle functions
  function handleInput(e: any) {
    if (e.key === "Enter") {
      addFood(value);
      setValue("");
    }
  }

  function handleAddButton() {
    if (value !== "") {
      addFood(value);
      setValue("");
    }
  }

  useEffect(() => {
    loadFoods();
  }, []);

  return (
    <main className="min-h-screen container mx-auto">
      <div className="py-28 px-6 xl:px-32">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-5xl font-bold text-center tracking-wide">
            Ultimate Food Picker
          </h1>
          <p className="text-xl mt-6 text-center text-white/80 tracking-wide">
            Vous ne savez pas quoi manger ? <br /> <ins>Ajouter</ins> ou <ins>supprimer</ins> les repas de votre choix et laissez la roue choisir pour vous.
          </p>
          <section className="flex flex-col items-center w-full gap-10 mt-40">
            <div className="flex flex-col gap-36 items-center lg:flex-row">
              <Wheel
                items={foods}
                isSpinning={isSpinning}
                isSpinningAnimation={isSpinningAnimation}
                choosedItem={choosedFood}
              />
              <List
                items={foods}
                onClick={removeFood}
              />
            </div>
            <div className="flex flex-row items-center justify-center mt-8">
              <Input
                type="text"
                placeholder="Enter a food"
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
                onKeyPress={(e) => { handleInput(e) }}
              />
              <Button
                text="+"
                type="button"
                onClick={handleAddButton}
              />
            </div>
            <div className="w-100 flex flex-row justify-around gap-6">
              <Button
                text="Save list"
                type="button"
                classname="p-2 transition-all duration-200 hover:bg-teal-900 border-teal-900 border-2 text-white rounded"
                onClick={saveFoods}
              />
              <Button
                text="Reset"
                type="button"
                classname="p-2 transition-all duration-200 hover:bg-orange-700 border-orange-700 border-2 text-white rounded"
                onClick={resetFoods}
              />
              <Button
                text="Delete saved list"
                type="button"
                classname="p-2 transition-all duration-200 hover:bg-red-700 border-red-700 border-2 text-white rounded"
                onClick={deleteFoods}
              />
            </div>
            <div className="mt-5">
              <Button
                text="Spin the Wheel"
                type="button"
                classname="p-3 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-200"
                onClick={startSpinning}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
