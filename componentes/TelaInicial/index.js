import React from "react";
import { Text, ImageBackground } from "react-native";

import imgCapa from '../../assets/capa.jpg';
import estilos from './estilos';

export default function TelaInicial () {
  return (
    <ImageBackground 
      blurRadius={ 10 } 
      style={ estilos.container } 
      source={ imgCapa }
    >
      <Text style={ estilos.titulo }>Chefe dos Iphones</Text>  
      <Text style={ estilos.subtitulo }>Especialista em venda e revenda de produtos Apple</Text>
    </ImageBackground>
  )
}
