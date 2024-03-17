import { MdOutlineWatchLater } from "react-icons/md";
import { GiRollingEnergy } from "react-icons/gi";
import PropTypes from 'prop-types';

const Items = ({ food, handleCookItem }) => {
    const { Recipe_img, Recipe_name, short_description, Ingredients, calories, preparing_time
    } = food;
    return (
        <div className="shadow-xl p-4 border rounded-2xl space-y-4 font-fira-sans">
            <img className="h-[210px] w-[100%] rounded-2xl" src={Recipe_img} alt="" />
            <h3 className="text-xl font-bold text-[#282828]">{Recipe_name}</h3>
            <p className="text-[#150B2B99] font-medium pb-3 border-b border-b-gray-300">{short_description}</p>
            <h2 className="text-xl font-semibold text-[#282828]">Ingradient :</h2>
            <ol className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400 pb-3 border-b border-b-gray-300 font-medium text-sm">
                <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li>{Ingredients[1]}</li>
                    <li>{Ingredients[2]}</li>
                    <li>{Ingredients[3]}</li>
                    <li>{Ingredients[4]}</li>
                </ul>
            </ol>
            <div className="flex gap-6 text-[#150B2B99] font-semibold">
                <p className="flex items-center gap-2"><MdOutlineWatchLater /> {preparing_time}</p>
                <p className="flex items-center gap-2"><GiRollingEnergy /> {calories} Calories</p>
            </div>
            <button onClick={() => {
                handleCookItem(food)

            }} className="py-2 px-4 bg-[#0be58a] rounded-3xl font-semibold border border-[#0be58a] hover:bg-white">Want to cook</button>
        </div>
    );
};

Items.propTypes = {
    food: PropTypes.object.isRequired,
    handleCookItem: PropTypes.func
}

export default Items;