import React,{createContext} from "react";

const userLogged=createContext();

const userContext=createContext();

const travelDateContext=createContext();
const pickUpLocContext=createContext();
const dropLocContext=createContext();
const travelPriceContext=createContext();
const travelTimeContext=createContext();
const noOfPassengersContext=createContext();
const startCityNameRideContext=createContext();
const destCityNameRideContext=createContext();

export {travelDateContext,pickUpLocContext,dropLocContext,travelPriceContext,travelTimeContext,noOfPassengersContext,startCityNameRideContext,destCityNameRideContext,userContext,userLogged};
