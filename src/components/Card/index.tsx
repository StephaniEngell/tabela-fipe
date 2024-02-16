"use client";

import { useState, useEffect } from "react";
import Select from "../ui/Select";
import { Box, Button, styled } from "@mui/material";
import { useDataContext } from "@/src/context";

import { useRouter } from "next/navigation";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  background: "white",
  height: "400px",
  width: "500px",
  padding: "16px 20px",
  marginTop: "15px",
});

function Card() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);

  const router = useRouter();

  const {
    selectedBrand,
    setSelectedBrand,
    selectedModel,
    setSelectedModel,
    selectedYear,
    setSelectedYear,
  } = useDataContext();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://parallelum.com.br/fipe/api/v1/carros/marcas"
      );
      const data = await response.json();
      setBrands(data);
    };

    fetchData();
  }, [setBrands]);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedBrand) {
        const response = await fetch(
          `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrand}/modelos`
        );
        const data = await response.json();
        setModels(data.modelos);
      }
    };

    fetchData();
  }, [selectedBrand, setModels]);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedBrand && selectedModel) {
        const response = await fetch(
          `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrand}/modelos/${selectedModel}/anos`
        );
        const data = await response.json();
        setYears(data);
      }
    };

    fetchData();
  }, [selectedBrand, selectedModel]);

  return (
    <Container>
      <Select
        name="Marca"
        data={brands}
        onChange={(event) => setSelectedBrand(event.target.value as "")}
        value={selectedBrand}
      />
      <Select
        name="Modelo"
        data={models}
        onChange={(event) => setSelectedModel(event.target.value as "")}
        value={selectedModel}
        disabled={!selectedBrand}
      />
      {selectedModel && (
        <Select
          name="Ano"
          data={years}
          onChange={(event) => setSelectedYear(event.target.value as "")}
          disabled={!selectedModel}
        />
      )}

      {/*
      * Achei interessante deixar uma segunda alternativa, enviando os dados através da url já que não se trata de nenhum dado sensível.

      <Button onClick={() => router.push(`/result?marca=${selectedBrand}&modelo=${selectedModel}&ano=${selectedYear}`)} variant="contained" disabled={!selectedYear}>
        Consultar preço
      </Button>*/}
      <Button
        onClick={() => router.push("/result?")}
        variant="contained"
        disabled={!selectedYear}
      >
        Consultar preço
      </Button>
    </Container>
  );
}

export default Card;
