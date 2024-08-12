import React, { useState } from "react";
import FlashcardNavigator from "./FlashcardNavigator";

const Flashcard = ({ flashcards, currentIndex, onNext, onPrevious }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  if (flashcards.length === 0) return <p className="text-gray-600">Loading...</p>;

  return (
    <div className="flex flex-col items-center mt-10">
      <div
        className={`relative w-80 h-48 bg-gray-200 shadow-lg flex items-center justify-center rounded-lg cursor-pointer transform transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={handleFlip}
      >
        <div
          className={`absolute w-full h-full flex items-center justify-center text-center p-4 transition-opacity duration-300 ${
            isFlipped ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="text-lg font-semibold">Question:- {flashcards[currentIndex].question}</p>
        </div>
        <div
          className={`absolute w-full h-full flex items-center justify-center text-center p-4 transition-opacity duration-300 ${
            isFlipped ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-lg font-semibold">Answer:- {flashcards[currentIndex].answer}</p>
        </div>
      </div>
      <FlashcardNavigator
        currentIndex={currentIndex}
        totalCards={flashcards.length}
        onNext={onNext}
        onPrevious={onPrevious}
        className="mt-4"
      />
    </div>
  );
};

export default Flashcard;
