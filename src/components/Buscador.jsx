import React from 'react';
import { Input} from 'antd';
import './css/buscar.css';

export const Buscador = (props) => {
    const { Search } = Input;
    const onFinish = async (values) =>  searchMovies(values);
    const searchMovies = (values) =>   {   
       
        console.log(values)
        
        props.BuscarPeliculas(values);
      };   
    return(
      <Search
      placeholder="Busca tu pelicula favorita aquí"
      allowClear
      enterButton
      size="large"
      onSearch={onFinish}
      style={{padding:"20px"}}
      className="custom-search-input"
    />
    );
};
