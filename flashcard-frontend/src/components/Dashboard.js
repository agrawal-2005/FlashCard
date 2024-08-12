import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";

const Dashboard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState({
    question: "",
    answer: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editFlashcard, setEditFlashcard] = useState({
    question: "",
    answer: "",
  });

  useEffect(() => {
    axios
      .get(`${API_URL}/api/flashcards`)
      .then((response) => {
        console.log("Flashcards fetched:", response.data); // Debug log
        setFlashcards(response.data);
      })
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, []);

  const handleAddFlashcard = () => {
    axios
      .post(`${API_URL}/api/flashcards`, newFlashcard)
      .then((response) => {
        console.log("Flashcard added:", response.data); // Debug log
        setFlashcards([...flashcards, response.data]);
        setNewFlashcard({ question: "", answer: "" });
      })
      .catch((error) => console.error("Error adding flashcard:", error));
  };

  const handleEditFlashcard = (index) => {
    console.log("Editing flashcard at index:", index); // Debug log
    setEditIndex(index);
    setEditFlashcard(flashcards[index]);
  };

  const handleUpdateFlashcard = () => {
    if (editIndex === null) return;
    console.log("Updating flashcard:", editFlashcard); // Debug log
    axios
      .put(
        `${API_URL}/api/flashcards/${flashcards[editIndex].id}`,
        editFlashcard
      )
      .then((response) => {
        const updatedFlashcards = flashcards.map((fc, index) =>
          index === editIndex ? response.data : fc
        );
        console.log("Flashcard updated:", response.data); // Debug log
        setFlashcards(updatedFlashcards);
        setEditIndex(null);
        setEditFlashcard({ question: "", answer: "" });
      })
      .catch((error) => console.error("Error updating flashcard:", error));
  };

  const handleDeleteFlashcard = (id) => {
    console.log("Deleting flashcard with id:", id); // Debug log
    axios
      .delete(`${API_URL}/api/flashcards/${id}`)
      .then(() => {
        console.log("Flashcard deleted:", id); // Debug log
        setFlashcards(flashcards.filter((fc) => fc.id !== id));
      })
      .catch((error) => console.error("Error deleting flashcard:", error));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add Flashcard</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Question"
            value={newFlashcard.question}
            onChange={(e) =>
              setNewFlashcard({ ...newFlashcard, question: e.target.value })
            }
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          />
          <input
            type="text"
            placeholder="Answer"
            value={newFlashcard.answer}
            onChange={(e) =>
              setNewFlashcard({ ...newFlashcard, answer: e.target.value })
            }
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          />
        </div>
        <button
          onClick={handleAddFlashcard}
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Add
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Manage Flashcards</h2>
        {flashcards.map((flashcard, index) => (
          <div
            key={flashcard.id}
            className="mb-6 p-4 border border-gray-300 rounded-lg shadow-md bg-white"
          >
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editFlashcard.question}
                  onChange={(e) =>
                    setEditFlashcard({
                      ...editFlashcard,
                      question: e.target.value,
                    })
                  }
                  className="border border-gray-300 p-3 mb-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                />
                <input
                  type="text"
                  value={editFlashcard.answer}
                  onChange={(e) =>
                    setEditFlashcard({
                      ...editFlashcard,
                      answer: e.target.value,
                    })
                  }
                  className="border border-gray-300 p-3 mb-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                />
                <button
                  onClick={handleUpdateFlashcard}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
                >
                  Update
                </button>
                <button
                  onClick={() => setEditIndex(null)}
                  className="ml-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <p className="text-lg font-medium">{flashcard.question}</p>
                <p className="text-gray-700 mt-1">{flashcard.answer}</p>
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => handleEditFlashcard(index)}
                    className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition duration-300 ease-in-out"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteFlashcard(flashcard.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
