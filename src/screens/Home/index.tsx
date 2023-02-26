import React from "react";
import { StatusBar } from "react-native";
import Responsive from "react-native-lightweight-responsive";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import { Container, Header, TotalCars } from "./styles";

export function Home() {
  const carData = {
    brand: "audi",
    name: "RS 5 Coupé",
    rent: {
      period: "ao dia",
      price: 120,
    },
    thumbnail:
      "https://w7.pngwing.com/pngs/110/895/png-transparent-2017-audi-s5-2018-audi-a6-audi-a5-car-audi-car-vehicle-rim.png",
  };
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
      <Car data={carData} />
    </Container>
  );
}
