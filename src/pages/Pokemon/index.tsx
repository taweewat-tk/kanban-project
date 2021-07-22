import { FC, useState } from "react";
import { useLocalStorage } from "../../hooks/localStorage";

const PokemonList: FC = () => {
  console.log("Test Log");

  const [keyValue, setKeyValue, removeKeyValue] = useLocalStorage("key");
  const [inputValue, setInputValue] = useState<string>();

  const handleClick = (type: string) => {
    switch (type) {
      case "set":
        setKeyValue(inputValue ?? "");
        break;
      case "remove":
        removeKeyValue("key");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      localStorage of 'key' value : {keyValue}
      <div>
        <input
          name="key"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="button" onClick={() => handleClick("set")}>
          Set key
        </button>
        <button type="button" onClick={() => handleClick("remove")}>
          Remove key
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
