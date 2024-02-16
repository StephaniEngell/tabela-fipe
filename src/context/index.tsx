'use client';

import React, { createContext, useState, useContext } from "react";

type DataContextType = {
  selectedBrand: string | undefined;
  setSelectedBrand: React.Dispatch<React.SetStateAction<any>>;
  selectedModel: string | undefined;
  setSelectedModel: React.Dispatch<React.SetStateAction<any>>;
  selectedYear: string | undefined;
  setSelectedYear: React.Dispatch<React.SetStateAction<any>>;
};

export const DataContext = createContext<DataContextType>({
  selectedBrand: "",
  setSelectedBrand: () => {},
  selectedModel: "",
  setSelectedModel: () => {},
  selectedYear: "",
  setSelectedYear: () => {},
});

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [selectedBrand, setSelectedBrand] = useState();
  const [selectedModel, setSelectedModel] = useState();
  const [selectedYear, setSelectedYear] = useState();

  const values = {
    selectedBrand,
    setSelectedBrand,
    selectedModel,
    setSelectedModel,
    selectedYear,
    setSelectedYear,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}

export function useDataContext() {
  return useContext(DataContext);
}
