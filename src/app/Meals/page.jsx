"use client";
import { useEffect, useState } from "react"

export default function page() {

    const [meals, setMeals] = useState([])
    const [src, setSrc] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${src}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals ? data.meals : []))
    }, [src])


    return (
        <div className="p-10">

            <div className="p-5 text-center">
                <h1 className="text-2xl md:text-4xl text-blue-900 font-bold mb-2">Delicious Meal Recipes</h1>
                <p className="text-gray-400">Explore a variety of mouth-watering dishes from around the world.</p>
            </div>

            <input type="text" className="border my-5 w-full p-2 rounded" placeholder="Search For meal here" onChange={(e) => { setSrc(e.target.value) }} />


            {meals.length < 1 ?
                <div className="min-h-screen">
                    <p className="text-5xl text-yellow-700 text-center font-bold mt-20">No Meal Found</p>
                </div>
                : <div className="grid grid-cols-3 gap-5">
                    {meals.map((meal, i) => <div key={i} className=" mx-auto bg-gray-900 text-white rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src={meal.strMealThumb}
                            alt="Spicy Arrabiata Penne"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                            <h2 className="text-xl font-bold mb-2">{meal.strMeal}</h2>
                            <p className="text-sm text-gray-400">
                                Category: <span className="text-white">{meal.strCategory}</span>
                            </p>

                            <p className="text-sm text-gray-400">
                                Area: <span className="text-white">{meal.strArea}</span>
                            </p>

                            <p className="mt-3 text-sm text-gray-300 line-clamp-3">
                                {meal.strInstructions}
                            </p>

                            <a
                                href={meal.strYoutube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-3 text-blue-400 hover:text-blue-500"
                            >
                                Watch on YouTube
                            </a>

                        </div>
                    </div>)}
                </div>}

        </div>
    )
}