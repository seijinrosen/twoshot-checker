import { Container } from "@chakra-ui/react";
import TagsField from "../components/TagsField";
import { TagType } from "../types";

const TopPage = ({
  searchQuery,
  allTags,
}: {
  searchQuery: string;
  allTags: TagType[];
}) => (
  <Container as="main" maxW="container.md" mt={4}>
    <TagsField searchQuery={searchQuery} allTags={allTags} />
  </Container>
);

export default TopPage;
