
import { useEffect, useState } from "react";
import Items from "../Items/Items";
import WantItem from "../WantItem/WantItem";
import CookingItem from "../CookingItem/CookingItem";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const [foods, setFoods] = useState([]);
    const [item, setItem] = useState([]);
    const [cooking, setCooking] = useState([]);

    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const handleCookItem = food => {
        const isExist = item.find(itm => itm.recipe_id == food.recipe_id);
        if (!isExist) {
            setItem([...item, food])
        } else {
            toast("Already Exist !");
        }
    }

    const handlePreparingItem = newCooking => {
        // remove item 
        const newArray = item.filter(itm => itm.recipe_id != newCooking.recipe_id)
        setItem(newArray);

        // adding item 
        setCooking([...cooking, newCooking]);
    }
    
    return (
        <div className="py-10 md:pt-20 md:pb-2 space-y-12">
            <div className="w-[100%] md:w-[70%] mx-auto text-center space-y-4 font-lexend px-4">
                <h2 className="text-4xl font-bold">Our Recipes</h2>
                <p className="text-[#150B2B99] font-medium">Savor the irresistible harmony of succulent chicken Parmesan, draped in tangy marinara sauce and molten mozzarella, atop a bed of al dente spaghetti.</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div className="w-[100%]  lg:w-[58%] grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        foods.map(food => <Items
                            key={food.id}
                            food={food}
                            handleCookItem={handleCookItem}
                        ></Items>)
                    }
                </div>
                <div className="w-[100%] lg:w-[38%] rounded-2xl">
                    <div className="shadow-xl border pb-20 rounded-2xl">
                        {/* want to cooking */}
                        <div className="">
                            <h2 className="text-2xl font-bold text-center my-4">Want to cook: {item.length}</h2>
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    {/* <!-- head --> */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Time</th>
                                            <th>Calories</th>
                                            <tr className=""></tr>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            item.map((itm, index) => <WantItem
                                                key={index}
                                                itm={itm}
                                                index={index}
                                                handlePreparingItem={handlePreparingItem}
                                            ></WantItem>)
                                        }
                                    </tbody>

                                </table>
                            </div>
                        </div>
                        {/* currently cooking */}
                        <div className="my-12">
                            <h2 className="text-2xl font-bold text-center my-4">Currently cooking: {cooking.length}</h2>
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    {/* <!-- head --> */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Time</th>
                                            <th>Calories</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cooking.map((cook, index) => <CookingItem
                                                key={index}
                                                cook={cook}
                                                index={index}
                                            ></CookingItem>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Main;