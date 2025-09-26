import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useDolar } from "./hooks/useDolar";


function App() {
  // Podés cambiar "blue" por "oficial", "mep", "ccl", "mayorista", etc.
  const { cotizacion, loading, error } = useDolar("blue");

  if (loading) return <p style={{ color: "white" }}>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h1>💵 Cotización Dólar Blue</h1>
      <p>Compra: {cotizacion.compra}</p>
      <p>Venta: {cotizacion.venta}</p>
      <p>Última actualización: {new Date(cotizacion.fechaActualizacion).toLocaleString()}</p>
    </div>
  );
}

export default App;
