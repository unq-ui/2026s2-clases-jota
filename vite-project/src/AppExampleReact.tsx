import { useCallback, useState } from "react";

const AppExampleReact = () => {
  
  const [numberWithCallback, setNumberWithCallback] = useState<number>(5);
  // Esta funcion no se recalcula en cada render, sino que se mantiene la misma referencia a la funcion, pero al usar la funcion dentro del setState, se actualiza el valor del state correctamente.
  const handleClickWorkingWithUseCallback = useCallback(() => {
    setNumberWithCallback(prev => prev + 10);
  }, []);

  
  const [numberWorkinBadWithUseCallback, setNumberWorkinBadWithUseCallback] = useState<number>(5);
  // Esta funcion no se recalcula en cada render, sino que se mantiene la misma referencia a la funcion, por lo que no se vuelve a crear una nueva funcion en cada render y por ese motivo trae el problame de que el numero no se actualice.
  const handleClickWorkingBadWithUseCallback = useCallback(() => {
    setNumberWorkinBadWithUseCallback(numberWorkinBadWithUseCallback + 10);
  }, []); // Esta lista son las dependencias para realizar un recalculo de la funcion, si no se pone nada, la funcion no se recalcula nunca y por eso el numero no se actualiza.

  const [numberWithouCallback, setNumberWithouCallback] = useState<number>(5);
  // Esta funcion se recalcula siempre que se realice un render; (Si la funcion fuera muy pesada, esto podria afectar el rendimiento de la aplicacion)
  const handleClickWithoutUseCallback = () => {
    setNumberWithouCallback(numberWithouCallback + 10);
  }

  return (
    <div>
      <div>
        <h2>Numero sin usar callback: {numberWithouCallback}</h2>
        <button onClick={handleClickWithoutUseCallback}>Cambiar</button>
      </div>
      <div>
        <h2>Numero usando incorrectamente useCallback: {numberWorkinBadWithUseCallback}</h2>
        <button onClick={handleClickWorkingBadWithUseCallback}>Cambiar</button>
      </div>
      <div>
        <h2>Numero usando correctamente useCallback: {numberWithCallback}</h2>
        <button onClick={handleClickWorkingWithUseCallback}>Click me</button>
      </div>
    </div>
  )
}

export default AppExampleReact;
