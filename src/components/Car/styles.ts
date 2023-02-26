import styled from "styled-components/native";
import Responsive from "react-native-lightweight-responsive";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${Responsive.font(24)}px;
  margin-bottom: ${Responsive.height(16)}px;
  width: 100%;
  height: ${Responsive.height(126)}px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;
export const Details = styled.View``;
export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${Responsive.font(10)}px;
  text-transform: uppercase;
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${Responsive.font(15)}px;
`;
export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${Responsive.height(16)}px;
`;
export const Rent = styled.View`
  margin-right: ${Responsive.width(24)}px;
`;
export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${Responsive.font(10)}px;
  text-transform: uppercase;
`;
export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${Responsive.font(15)}px;
  text-transform: uppercase;
`;
export const Type = styled.View`
  flex: 1;
`;
export const CarImage = styled.Image`
  width: ${Responsive.width(167)}px;
  height: ${Responsive.height(85)}px;
`;
