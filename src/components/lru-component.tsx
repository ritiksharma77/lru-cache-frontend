import { useEffect, useState } from "react";
import "./lru-component.css";
import { CacheData } from "../types";
import { deleteData } from "../fetch-data/delete-data";
import { getData } from "../fetch-data/get-data";
import { setData } from "../fetch-data/set-data";

export const LruComponent = () => {
  const [key, setKey] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [ttl, setTTL] = useState<number>(0);
  const [cacheData, setCacheData] = useState<CacheData[]>([]);

  const fetchCacheData = () => {
    setCacheData([...cacheData, { key, value, ttl }]);
  };

  useEffect(() => {
    fetchCacheData();
  }, []);

  return (
    <div className="lru-wrapper">
      <div className="lru-input-wrapper">
        <h1>LRU Cache Management</h1>
        <div className="input-group">
          <input
            className="input-field"
            placeholder="Key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <input
            className="input-field"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            className="input-field"
            type="number"
            placeholder="TTL (seconds)"
            value={ttl}
            onChange={(e) => setTTL(parseInt(e.target.value))}
          />
        </div>
        <div className="button-group">
          <button className="button" onClick={() => getData(key)}>
            Get
          </button>
          <button
            className="button"
            onClick={() => setData(key, value, ttl, fetchCacheData)}
          >
            Set
          </button>
          <button
            className="button"
            onClick={() => deleteData(key, fetchCacheData)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="cache-wrapper">
        <h2>Current Cache State:</h2>
        <ul className="cache-list">
          {cacheData.map((item, index) => (
            <li key={index} className="cache-item">
              <span>{`Key: ${item.key}, Value: ${item.value}, TTL: ${item.ttl}s`}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
