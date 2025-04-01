import React, { useState, useEffect, useMemo, useCallback, useReducer } from "react";
import { ProgressBar, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container mt-4">
      <h3 className="mb-3">Real-Time Character Counter</h3>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={4}
          value={state.text}
          onChange={(e) => updateText(e.target.value)}
          placeholder="Type here..."
          className="mb-2"
        />
      </Form.Group>
      <div className="d-flex justify-content-between">
        <span>{state.count} / {CHAR_LIMIT}</span>
        {percentageUsed >= 90 && <span className="text-danger">⚠️ Approaching limit!</span>}
      </div>
      <ProgressBar
        now={percentageUsed}
        variant={percentageUsed >= 90 ? "danger" : "primary"}
        className="mt-2"
      />
      <Button
        className="mt-3"
        onClick={() => dispatch({ type: "COPY_TEXT" })}
        disabled={!state.text}
      >
        {state.copied ? "Copied! ✅" : "Copy to Clipboard"}
      </Button>
    </div>
  );
};

export default CharacterCounter;
