import React from "react";
import Badge from '../Badge';

import './List.scss';

const List = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item, index)=> (
        <li key={index}>
          <i>
            {item.icon ? ( item.icon ) : (
              <i>{item.icon ? item.icon : <Badge color={item.color.name} />}</i>
            )}
          </i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
