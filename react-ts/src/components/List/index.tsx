import { FC, useState } from "react";
import { ListItem } from "./ListItem";

interface ItemsProps {
  id: number;
  title: string;
  time: string;
}

const MOCKED_ITEMS = [
  {
    id: 1,
    title: "React",
    time: "01:00:00",
  },
  {
    id: 2,
    title: "Node",
    time: "01:00:00",
  },
];

export const List: FC = () => {
  const [listItems, setListItems] = useState<ItemsProps[]>(MOCKED_ITEMS);

  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {listItems.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </aside>
  );
};
