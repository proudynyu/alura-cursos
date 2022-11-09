interface ItemsProps {
  id: string;
  title: string;
  time: TimeToParse;
}

interface ItemListProps extends ItemsProps {
  completed: boolean;
}

interface ItemContextProps {
  items: ItemListProps[];
  selectedItem: ItemListProps;
  handleSelectedItem(item: ItemListProps): void;
  handleAddItem(item: ItemListProps): void;
  handleRemoveItem(item: ItemListProps): void;
}

interface ItemContextProviderProps {
  children?: React.ReactElement;
}