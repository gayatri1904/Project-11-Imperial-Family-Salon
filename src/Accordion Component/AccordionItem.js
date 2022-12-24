import {MdExpandLess } from "react-icons/md";
import {MdExpandMore } from "react-icons/md";
import "./AccordionStyles.css";
const AccordionItem = ({ item, open,handleExpandMore, handleExpandLess }) => {

  return (
    <>
    <div onClick={() => {open?(handleExpandLess(item)):(handleExpandMore(item))}} className='card'>
      <div className='titleContainer'>
        <h3 className='title'>{item.title.slice(0, 30)}</h3>
        {open ? (
            <MdExpandLess
            className='expandBtn'
            onClick={() => handleExpandLess(item)}
          />
        ) : (
          <MdExpandMore
            className='expandBtn'
            onClick={() => handleExpandMore(item)}
          />
        )}
      </div>
      <div>
      {open && <p className='desc'>{item.description} </p>}
    </div>
    </div>
    </>
  );
};

export default AccordionItem;
