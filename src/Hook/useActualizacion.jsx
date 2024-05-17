
import { useState, useCallback } from 'react';

const useActualizacion = () => {
    const [, actualizacion] = useState();
    const actualizarpag = useCallback(() => actualizacion({}), []);
    return actualizarpag;
};

export default useActualizacion;