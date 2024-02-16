'use client';
import React, { useEffect, useState } from "react";
import { useDataContext } from "@/src/context";
// import { useSearchParams } from "next/navigation";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "22px",
  background: "#DCF5F2",
  height: "100vh",
  width: "100%",
  padding: "16px 20px",
});

const Price = styled(Typography)({
  background: "#01A38B",
  padding: "5px",
  borderRadius: "5px",
  color: "white",
  fontSize: "35px",
});

const StyledTitle = styled(Typography)({
  fontSize: "60px",
});

const StyledDescription = styled(Typography)({
  fontSize: "16px",
});

const StyledTable = styled(Table)({
  borderCollapse: "collapse",
  width: "25%",
});

const StyledTableHead = styled(TableHead)({});

const StyledTableBody = styled(TableBody)({});

const StyledTableCell = styled(TableCell)({
  padding: "5px 10px",
  color: "white",
  background: "#01A38B",
  border: "1px solid #333",
});

const StyledTableData = styled(TableCell)({
  padding: "5px 10px",
  color: "#333",
  background: "#DCF5F2",
  border: "1px solid #333",
});

const StyledTableRow = styled(TableRow)({
  border: "1px solid #333",
  padding: "8px 10px",
});

function Result() {
  const [data, setData] = useState<any>();
  

  const { selectedBrand, selectedModel, selectedYear } = useDataContext();

  // const params = useSearchParams();
  // const marca = params.get("marca");
  // const modelo = params.get("modelo");
  // const ano = params.get("ano");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrand}/modelos/${selectedModel}/anos/${selectedYear}`
      );
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [ selectedBrand, selectedModel, selectedYear, setData]);

  return (
    <Container>
      <StyledTitle variant="h1">Tabela Fipe</StyledTitle>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            <StyledTableCell>Marca</StyledTableCell>
            <StyledTableCell>Modelo</StyledTableCell>
            <StyledTableCell>Ano</StyledTableCell>
          </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>
          <StyledTableRow>
            <StyledTableData>{data?.Marca}</StyledTableData>
            <StyledTableData>{data?.Modelo}</StyledTableData>
            <StyledTableData>{data?.AnoModelo}</StyledTableData>
          </StyledTableRow>
        </StyledTableBody>
      </StyledTable>
      <Price variant="h3">{data?.Valor}</Price>
      <StyledDescription variant="body1">
        Este é o preço de compra do veículo
      </StyledDescription>
      <Button href="/" LinkComponent={"a"} variant="contained">
        Nova Pesquisa
      </Button>
    </Container>
  );
}

export default Result;
