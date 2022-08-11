import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
    <Link to="/all-twoshots">ALL TWOSHOTs</Link>
    <TagsField searchQuery={searchQuery} allTags={allTags} />
  </Container>
);

export default TopPage;
