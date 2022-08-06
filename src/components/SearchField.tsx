const SearchField = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
);

export default SearchField;
