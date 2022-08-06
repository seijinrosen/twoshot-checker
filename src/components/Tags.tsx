import onesJson from "../assets/ones.json";
import tagsJson from "../assets/tags.json";

const Tags = ({ searchQuery }: { searchQuery: string }) => {
  const onesAndTags = onesJson
    .concat(tagsJson)
    .filter(({ name }) => name.includes(searchQuery));

  return (
    <div>
      {onesAndTags.map(({ name, mainIds }, i) => (
        <button key={i} onClick={() => console.log(mainIds)}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default Tags;
