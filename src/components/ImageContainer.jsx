import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";
import { Image } from '../components/Image';

export const ImageContainer = () => {

    const { imageURL } = useContext(ImageContext);

    return (
        <ul className='flex flex-wrap justify-center'>
            {
                imageURL.map(img => (
                    <li key={img.url} className='m-2'>
                        <Image url={img.url} />
                    </li>
                ))
            }
        </ul>
    )
}
