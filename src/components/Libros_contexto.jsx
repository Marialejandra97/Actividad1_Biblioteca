import React, { createContext, useState } from 'react';

export const LibrosContext = createContext();

export const LibrosProvider = ({ children }) => {
    const [librosAlquilados, setLibrosAlquilados] = useState([]);

    return (
        <LibrosContext.Provider value={{ librosAlquilados, setLibrosAlquilados }}>
            {children}
        </LibrosContext.Provider>
    );
};


