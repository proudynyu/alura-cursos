import { FC } from "react";
import classnames from "classnames";

import { useItemContext } from "../../context/item-context";

interface ListItemProps {
  item: ItemListProps;
}

/**
 * @export
 * @description Component that handles the task item
 * @version 1.0.0
 */
export const ListItem: FC<ListItemProps> = ({ item }) => {
  const { handleSelectedItem, handleRemoveItem, selectedItem } =
    useItemContext();

  const isSelected = selectedItem.id === item.id;

  return (
    <li
      className={classnames("list-item", isSelected ? "selected": "")}
    >
      <div
        className="list-add"
        onClick={() => handleSelectedItem(item)}
        role="button"
      >
        <h3>{item.title}</h3>
        <span>{item.time}</span>
      </div>
      <span className="list-remove" onClick={() => handleRemoveItem(item)}>
        X
      </span>
    </li>
  );
};
