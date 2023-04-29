import axios from "axios";
import React, { useState } from "react";
import Comp from "./Comp";
function Api() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  async function search(e) {
    try {
      if (e.key === "Enter") {
        const res = await axios.get(`${api}${keyword}`);
        console.log(res, "res");
        setResult(res.data[0]);
      }
    } catch (e) {
      console.log({ e });
    }
  }
  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={search}
      />
      {result && <Comp {...{ result }} />}
    </div>
  );
}

export default Api;
