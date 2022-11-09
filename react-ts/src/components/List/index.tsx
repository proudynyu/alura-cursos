import { FC } from "react";

import { useItemContext } from "../../context/item-context";
import { ListItem } from "./ListItem";

import "./styles.scss";

/**
 * @export
 * @description Component that handles the task list
 * @version 1.0.0
 */
export const List: FC = () => {
  const { items } = useItemContext();
  return (
    <aside>
      <h2>Tasks</h2>
      <ul className="list">
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </aside>
  );
};
