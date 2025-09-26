// src/useDolar.js
import { useEffect, useState } from "react";

export function useDolar(tipo = "blue") {
  const [cotizacion, setCotizacion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dolarapi.com/v1/dolares/${tipo}`)
      .then(res => {
        if (!res.ok) throw new Error("Error al obtener cotización");
        return res.json();
      })
      .then(data => {
        setCotizacion(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [tipo]);

  return { cotizacion, loading, error };
}
