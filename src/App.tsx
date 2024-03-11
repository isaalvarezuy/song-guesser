import React, { useRef, useState } from "react";
import { red } from "@/lyrics/lyrics";
import { twMerge } from "tailwind-merge";

function App() {
  const [guessedWords, setGuessedWords] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const lyricsArray = red.split(" ");
  const lowercaseLyrics = red.toLowerCase().split(" ");
  console.log(lyricsArray);
  console.log(guessedWords);

  const checkForWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.target.value;
    if (
      lowercaseLyrics.includes(word.toLowerCase()) &&
      !guessedWords.includes(word.toLowerCase())
    ) {
      setGuessedWords((prev) => [...prev, word.toLowerCase()]);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        onChange={checkForWord}
        className="border"
      />
      <div className="flex flex-col h-screen flex-wrap ">
        {lyricsArray.map((word, idx) => (
          <p
            className={twMerge("w-40 border bg-blue-200 h-8")}
            key={`${word}=${idx}`}
          >
            {guessedWords.includes(word.toLowerCase()) && word}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
