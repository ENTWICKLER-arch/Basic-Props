
import Card from './Card';
import contactInfo from '../assets/data';
const DisplayCard = () => {
  return (
    <div className="flex flex-wrap  text-center ">
      {
        contactInfo.map((user, index) => {
         return   <Card key={index} user={user}/>;
      })}
    </div>
  );
};

export default DisplayCard;
