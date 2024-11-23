import React, { createContext, useContext, useState, useCallback } from "react";

type MicIndicatorContextType = {
  show: boolean;
  handleMicDisplay: (message: string) => void;
};

const MicIndicatorContext = createContext<MicIndicatorContextType | undefined>(
  undefined,
);

export const MicIndicatorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [show, setShow] = useState(true);

  const handleMicDisplay = useCallback((message: string) => {
    if (message === "RECORD_START") {
      setShow(true);
    } else if (message === "RECORD_STOP") {
      setShow(false);
    }
  }, []);

  return (
    <MicIndicatorContext.Provider value={{ show, handleMicDisplay }}>
      {children}
    </MicIndicatorContext.Provider>
  );
};

export const useMicIndicator = () => {
  const context = useContext(MicIndicatorContext);
  if (!context) {
    throw new Error("useMicContext must be used within a MicProvider");
  }
  return context;
};
