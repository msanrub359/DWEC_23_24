"use strict";
const url = "http://localhost:3000/clientes";

export const addCliente = async (cliente) => {
  const param = {
    method: "POST",
    body: cliente, //nomCliente="pepe"&emailCliente="dkldl@gmail.com"
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  try {
    const response = await fetch(url, param);
    const data = await response.json();
    return { mensaje: "insertado" };
  } catch (error) {
    return { mensaje: "NO insertado" };
  }
};
export const getClientes = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return { data: data };
  } catch (error) {
    return { error: error };
  }
};

export const getCliente = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error };
  }
};

export const deleteCliente = async (id) => {
  const param = {
    method: "DELETE",
  };
  try {
    const response = await fetch(`${url}/${id}`, param);
    const data = await response.json();
    return { mensaje: "borrado" };
  } catch (error) {
    return { mensaje: "No borrado" };
  }
};

export const updateCliente = async (cliente) => {
    const param = {
      method: "PUT",
      body:JSON.stringify(cliente),
      headers:{
       "Content-Type":"application/json"
      }
    };
    try {
      const response = await fetch(`${url}/${cliente.id}`, param);
      const data = await response.json();
      return { 'mensaje': "actualizado" };
    } catch (error) {
      return { 'mensaje': "No actualizado" };
    }
  };
