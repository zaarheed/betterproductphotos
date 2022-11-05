import { createContext, useContext, useState } from "react";

const INITIAL_STATE = {
    tool: {
        inputJson: "",
        loadedImages: [],
    },
    setTool: () => {},
    step: 1,
    setStep: () => {},
    previousStep: () => {}
};

export const ToolContext = createContext(INITIAL_STATE);

export function ToolProvider({ children }) {
    const [tool, setTool] = useState(INITIAL_STATE.tool);
    const [step, setStep] = useState(INITIAL_STATE.step);

    const previousStep = () => {
        if (step === 1) return;

        setStep(step - 1);
    }

    const nextStep = () => {

        setStep(step + 1);
    }

    const value = { tool, setTool, step, setStep, previousStep, nextStep };

    return (
        <ToolContext.Provider value={value}>
            {children}
        </ToolContext.Provider>
    )
}

export function useTool() {
    const context = useContext(ToolContext);
    return context;
}