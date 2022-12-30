import { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [imageProviderState, setImageProviderState] = useState({
        prompt: '',
        n: 1,
        size: 'medium'
    });

    const [imageURL, setImageURL] = useState([]);

    const value = {
        imageProviderState,
        setImageProviderState,
        imageURL,
        setImageURL
    };

    return (
        <ImageContext.Provider value={value}>
            {children}
        </ImageContext.Provider>
    );
};