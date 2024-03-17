import PropTypes from 'prop-types';

const CookingItem = ({ cook, index }) => {
    const { Recipe_name, preparing_time, calories } = cook;
    return (
            <tr className="font-bold text-[#150B2B99]">
                <th>{index + 1}</th>
                <td>{Recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tr>
    );
};

CookingItem.propTypes = {
    cook: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default CookingItem;