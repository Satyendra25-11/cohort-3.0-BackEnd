import React, { act, useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [urls, setUrls] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentUrl, setCurrentUrl] = useState(null);

  async function fetchUrls() {
    const response = await axios.get("http://localhost:5173/api/url");
    const responseData = response.data;

    setUrls(responseData.data.urls);
  }

  async function createShortUrl() {
    const response = await axios.post("http://localhost:5173/api/url", {
      url: inputValue,
    });

    setCurrentUrl({
      originalUrl: response.data.data.originalUrl,
      shortCode: response.data.data.shortCode,
    });

    setInputValue("");

    fetchUrls();
  }

  async function deleteUrl(id) {
    await axios.delete(`http://localhost:5173/api/url/${id}`);
    fetchUrls();
  }

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <main className="w-screen p-10 flex flex-col gap-4   ">
      <h1 className="self-center text-2xl font-bold text-orange-600">URL Shortner</h1>
      {/* <div className="w-full max-w-4xl p-2    "></div> */}
      <div className="w-full min-w-4xl p-2 flex gap-2   ">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter long Url"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="border rounded w-full p-2 flex gap-2 "
        />
        <button
          onClick={createShortUrl}
          className="rounded p-2 bg-orange-600 text-white cursor-pointer "
        >
          Shorten
        </button>
      </div>
      <div className="w-full min-w-4xl p-2 flex flex-col gap-2   ">
        {urls.map((url) => {
          return (
            <div
              key={url._id}
              className="border flex gap-2 border-neutral-200 p-2"
            >
              <a
                onClick={() => {
                  fetchUrls();
                }}
                href={`http://localhost:3000/${url.shortCode}`}
                target="_blank"
              >
                {url.shortCode}
              </a>
              <p className="truncate">{url.originalUrl}</p>
              <p>{url.clicks}</p>

              <div className="flex gap-2 ">
                <button className="p-2  rounded bg-orange-600 text-white cursor-pointer">
                  Copy
                </button>
                <button
                  onClick={() => {
                    deleteUrl(url._id);
                  }}
                  className="p-2  rounded bg-orange-600 text-white cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default App;
