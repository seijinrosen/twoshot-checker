import TagsField from "../components/TagsField";
import { TagType } from "../types";

const TopPage = ({
  searchQuery,
  allTags,
}: {
  searchQuery: string;
  allTags: TagType[];
}) => {
  return <TagsField searchQuery={searchQuery} allTags={allTags} />;
};

export default TopPage;
