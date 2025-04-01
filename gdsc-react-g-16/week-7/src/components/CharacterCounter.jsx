import React, { useState, useEffect, useMemo, useCallback, useReducer } from "react";
import "./index.css";

const CHAR_LIMIT = 200;

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.payload.slice(0, CHAR_LIMIT),
        count: Math.min(action.payload.length, CHAR_LIMIT),
      };
    case "COPY_TEXT":
      navigator.clipboard.writeText(state.text);
      return { ...state, copied: true };
    case "RESET_COPY":
      return { ...state, copied: false };
    default:
      return state;
  }
};

// Custom Hook for character count handling
const useCharacterCount = (initialText) => {
  const [state, dispatch] = useReducer(reducer, {
    text: initialText,
    count: initialText.length,
    copied: false,
  });

  const updateText = useCallback((newText) => {
    dispatch({ type: "SET_TEXT", payload: newText });
  }, []);

  return { state, dispatch, updateText };
};

const CharacterCounter = () => {
  const { state, dispatch, updateText } = useCharacterCount("");

  // Memoized percentage calculation
  const percentageUsed = useMemo(
    () => (state.count / CHAR_LIMIT) * 100,
    [state.count]
  );

  useEffect(() => {
    if (state.copied) {
      setTimeout(() => dispatch({ type: "RESET_COPY" }), 2000);
    }
  }, [state.copied, dispatch]);

  return (
    <div className="container">
      <h3 className="title">Real-Time Character Counter</h3>
      <textarea
        className="text-area"
        rows={4}
        value={state.text}
        onChange={(e) => updateText(e.target.value)}
        placeholder="Type here..."
      />
      <div className="info">
        <span>{state.count} / {CHAR_LIMIT}</span>
        {percentageUsed >= 90 && <span className="warning">⚠️ Approaching limit!</span>}
      </div>
      <div className="progress-bar" style={{ width: `${percentageUsed}%`, backgroundColor: percentageUsed >= 90 ? "red" : "blue" }}></div>
      <button
        className="copy-button"
        onClick={() => dispatch({ type: "COPY_TEXT" })}
        disabled={!state.text}
      >
        {state.copied ? "Copied! ✅" : "Copy to Clipboard"}
      </button>
    </div>
  );
};

export default CharacterCounter;
