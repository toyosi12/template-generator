import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Template } from "../interfaces";
import { templateList } from "../utils/templateList";

type TemplateContextType = {
  currentTemplate: Template;
  setCurrentTemplate: (t: Template) => void;
};

export const TemplateContext = createContext<TemplateContextType | undefined>(
  undefined
);

export const TemplateProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currentTemplate, setCurrentTemplate] = useState<
    TemplateContextType["currentTemplate"]
  >(templateList[0]);

  return (
    <TemplateContext.Provider value={{ currentTemplate, setCurrentTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplateContext = () => {
  const context = useContext(TemplateContext);

  if (!context) {
    throw new Error(
      "useTemplateContext must be used inside the TemplateProvider"
    );
  }

  return context;
};
