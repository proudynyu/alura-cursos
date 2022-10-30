import { createContext, FC, useContext, useEffect, useState } from "react";

export interface ItemsProps {
  id: number;
  title: string;
  time: string;
}

interface ItemContextProps {
  items: ItemsProps[];
  selectedItem: ItemsProps;
  handleSelectedItem(item: ItemsProps): void;
  handleAddItem(item: ItemsProps): void;
  handleRemoveItem(item: ItemsProps): void;
}

interface ItemContextProviderProps {
  children?: React.ReactElement;
}

const ItemContext = createContext<ItemContextProps | null>(null);

export const ItemContextProvider: FC<ItemContextProviderProps> = ({
  children,
}) => {
  const [listItems, setListItems] = useState<ItemsProps[]>([] as ItemsProps[]);
  const [selectedItem, setSelectedItem] = useState<ItemsProps>(
    {} as ItemsProps
  );

  function handleAddItem(item: ItemsProps) {
    setListItems([...listItems, item]);
  }

  function handleRemoveItem(item: ItemsProps) {
    const filtered = listItems.filter((list) => list.id !== item.id);
    setListItems(filtered);
  }

  function handleSelectedItem(item: ItemsProps) {
    setSelectedItem(item);
  }

  return (
    <ItemContext.Provider
      value={{
        items: listItems,
        selectedItem,
        handleSelectedItem,
        handleAddItem,
        handleRemoveItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  const context = useContext(ItemContext);

  if (!context) {
    throw new Error("useItemContext must be used inside the Item Context");
  }

  return context;
};
