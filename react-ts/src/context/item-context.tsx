import { createContext, FC, useContext, useState } from "react";

const ItemContext = createContext<ItemContextProps | null>(null);

/**
 * @export
 * @description Context provider for the Item Context
 * @param children React Elements components to be render insider the Item Context
 * @version 1.0.0
 */
export const ItemContextProvider: FC<ItemContextProviderProps> = ({
  children,
}) => {
  const [listItems, setListItems] = useState<ItemListProps[]>(
    [] as ItemListProps[]
  );
  const [selectedItem, setSelectedItem] = useState<ItemListProps>(
    {} as ItemListProps
  );

  function handleAddItem(item: ItemListProps) {
    setListItems([...listItems, item]);
  }

  function handleRemoveItem(item: ItemListProps) {
    const filtered = listItems.filter((list) => list.id !== item.id);
    setListItems(filtered);
  }

  function handleSelectedItem(item: ItemListProps) {
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

/**
 * @export
 * @description hook responsable to return the Item Context values
 * @returns {ItemContextProps | null}
 */
export function useItemContext(): ItemContextProps {
  const context = useContext(ItemContext);

  if (!context) {
    throw new Error("useItemContext must be used inside the Item Context");
  }

  return context;
}
