import PropTypes from 'prop-types';

const WantItem = ({ itm, index, handlePreparingItem }) => {
    const { Recipe_name, preparing_time, calories } = itm;
    return (
        <>
        <tr key={index} className="font-bold text-[#150B2B99]">
            <th>{index + 1}</th>
            <td>{Recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <tr>
                <button onClick={() => handlePreparingItem(itm)} className="bg-[#0be58a] text-black font-semibold py-2 px-6 mr-2 mt-4 rounded-2xl border border-[#0be58a] hover:bg-white">Preparing</button>
            </tr>
        </tr>
        </>
    );
};

WantItem.propTypes = {
    itm: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handlePreparingItem: PropTypes.func
}

export default WantItem;