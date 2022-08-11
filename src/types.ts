export type SearchFieldType = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export type TagType = {
  name: string;
  mainIds: number[];
};
