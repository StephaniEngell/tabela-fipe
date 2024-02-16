"use client";
import { Box, Typography, styled } from "@mui/material";

const ContainerStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  borderRadius: "8px",
});

const StyledTitle = styled(Typography)({
  fontSize: "50px",
});

const StyledSubtitle = styled(Typography)({
  fontSize: "16px",
});

function PageTitle() {

  return (
    <ContainerStyle>
      <StyledTitle>Tabela Fipe</StyledTitle>
      <StyledSubtitle>
        Consulte o valor de um veículo de forma gratuita
      </StyledSubtitle>
    </ContainerStyle>
  );
}

export default PageTitle;
