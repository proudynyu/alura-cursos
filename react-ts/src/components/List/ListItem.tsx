import { FC } from "react";
import { ItemsProps, useItemContext } from "../../context/item-context";

interface ListItemProps {
  item: ItemsProps;
}

export const ListItem: FC<ListItemProps> = ({ item }) => {
  const { handleSelectedItem, handleRemoveItem } = useItemContext();

  return (
    <li className="list-item">
      <div className="list-add" onClick={() => handleSelectedItem(item)} role="button">
        <h3>{item.title}</h3>
        <span>{item.time}</span>
      </div>
      <span className="list-remove" onClick={() => handleRemoveItem(item)}>
        X
      </span>
    </li>
  );
};
