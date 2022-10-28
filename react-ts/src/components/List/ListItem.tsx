import { FC } from "react";

interface ItemsProps {
  title: string
  time: string
}

interface ListItemProps {
  item: ItemsProps;
}

export const ListItem: FC<ListItemProps> = ({ item }) => {
  return (
    <li>
      <h3>{item.title}</h3>
      <span>{item.time}</span>
    </li>
  );
};
