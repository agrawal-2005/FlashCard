import React, { useEffect, useState } from "react";
import axios from "axios";
import Flashcard from "./components/Flashcard";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5001/api/flashcards");
        setFlashcards(response.data);
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };
    fetchFlashcards();
  }, []);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Router>
      <div className="App min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-600 text-white py-4 shadow-md">
          <h1 className="text-3xl font-bold text-center">Flashcard App</h1>
        </header>

        <main className="flex-1 p-6">
          <Routes>
            <Route
              path="/"
              element={
                <div className="container mx-auto">
                  {flashcards.length > 0 ? (
                    <Flashcard
                      flashcards={flashcards}
                      currentIndex={currentIndex}
                      onNext={handleNext}
                      onPrevious={handlePrev}
                    />
                  ) : (
                    <p className="text-center text-lg">Loading flashcards...</p>
                  )}
                </div>
              }
            />
            {/* Uncomment to enable the dashboard route */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
          <Dashboard />
        </main>

        <footer className="bg-gray-800 text-white py-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Flashcard App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
