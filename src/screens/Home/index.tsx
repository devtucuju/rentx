import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import Responsive from "react-native-lightweight-responsive";

import Logo from "../../assets/logo.svg";

import { Container, Header, TotalCars } from "./styles";

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <Logo width={Responsive.width(108)} height={Responsive.height(12)} />
        <TotalCars>Total de 12 carros</TotalCars>
      </Header>
    </Container>
  );
}
