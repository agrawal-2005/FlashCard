import React from "react";

const FlashcardNavigator = ({
  currentIndex,
  totalCards,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="mt-6 flex items-center justify-between">
      <button
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <div className="bg-gray-200 px-4 py-2 flex items-center justify-center rounded-md mx-4 shadow-sm">
        <span className="text-lg font-medium text-gray-800">
          {currentIndex + 1} / {totalCards}
        </span>
      </div>
      <button
        onClick={onNext}
        disabled={currentIndex === totalCards - 1}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default FlashcardNavigator;
