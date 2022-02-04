import { useParams } from 'react-router';

const Details = () => {
    const {foodId} = useParams();
    return (
        <div>
            <h2>This is food {foodId}</h2>
        </div>
    );
};

export default Details;