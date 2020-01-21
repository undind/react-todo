import React from "react";
import Badge from "../Badge";
import classNames from "classnames";

import axios from "../../request";

import removeSvg from "../../assets/img/remove.svg";

import "./List.scss";

const List = ({ items, onClick, isRemovable, onRemove, activeItem, onClickItem }) => {
  const removeList = item => {
    if (window.confirm("Вы действительно хотите удалить список?")) {
      axios.delete("/lists/" + item.id).then(() => {
        onRemove(item.id);
      });
    }
  };

  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li 
          key={index} 
          className={classNames(item.className, {
            active: item.active
              ? item.active
              : activeItem && activeItem.id === item.id
          })}
          onClick={onClickItem ? () => onClickItem(item) : null}
        >
          <i>
            {item.icon ? (
              item.icon
            ) : (
              <i>{item.icon ? item.icon : <Badge color={item.color.name} />}</i>
            )}
          </i>
          <span>
            {item.name}
            {item.tasks && ` (${item.tasks.length})`}
          </span>
          {isRemovable && (
            <img
              className="list__remove-icon"
              src={removeSvg}
              alt="Remove icon"
              onClick={() => removeList(item)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
