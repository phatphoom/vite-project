import axios from "axios";
import React, { useEffect, useState } from "react";
import Word from "./component/Word";
import Meanings from "./component/Meanings";
import Example from "./component/Example";
import Synonym from "./component/Synonymns";
import Antonym from "./component/Antonym";
import "./style/syn.css";
import "./style/api.css";

function Api() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
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
    <div className="container">
      <h3>DF</h3>
      <p>vite-project</p>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={search}
      />
      {result && (
        <div className="api">
          <Word {...{ result }} />
          <Meanings {...{ result }} />
          <Example {...{ result }} />
          <div className="sa">
            <Synonym {...{ result }} />
            <Antonym {...{ result }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Api;
