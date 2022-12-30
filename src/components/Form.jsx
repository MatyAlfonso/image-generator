import { useContext, useState } from "react";
import { ImageContext } from "../context/ImageContext";
import { ImageContainer } from "../components/ImageContainer";
import { Spinner } from "../components/Spinner";

export const Form = () => {

    const { imageProviderState, setImageProviderState, setImageURL } = useContext(ImageContext);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();

        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/openAI/generateImage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: imageProviderState.prompt,
                    n: imageProviderState.n,
                    size: imageProviderState.size
                })
            });

            const data = await response.json();
            setImageURL(data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <>
            {
                loading

                    ?

                    <Spinner />

                    :

                    <>
                        <form
                            onSubmit={handleSubmit}
                            className='text-center'
                        >
                            <label className='text-2xl text-white'>
                                Describe your image:
                                <br />

                                <textarea
                                    required
                                    type="text"
                                    value={imageProviderState.prompt}
                                    onChange={(event) => setImageProviderState({ ...imageProviderState, prompt: event.target.value })}
                                    className='rounded-lg mt-2 mb-4 p-10 text-center bg-neutral-900/25 border-2'
                                />
                            </label>

                            <br />

                            <label className='text-2xl text-white'>
                                Write how many examples of the image you want:
                                <br />

                                <input
                                    type="number"
                                    value={imageProviderState.n}
                                    onChange={(event) => setImageProviderState({ ...imageProviderState, n: event.target.value })}
                                    className='rounded-lg text-center mt-2 mb-4 py-2 bg-neutral-900/25 border-2'
                                />
                            </label>

                            <br />

                            <label className='text-2xl text-white'>
                                Select the size of the image/images:
                                <br />

                                <select
                                    value={imageProviderState.size}
                                    onChange={(event) => setImageProviderState({ ...imageProviderState, size: event.target.value })}
                                    className='rounded-lg text-center mt-2 mb-4 py-2 bg-neutral-900/25 border-2'
                                >
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </label>

                            <br />

                            <button
                                type="submit"
                                className='bg-gradient-to-r from-purple-700 to-pink-500 hover:from-yellow-500 hover:to-pink-500 text-white text-xl font-bold px-8 py-4 rounded m-10'
                            >
                                Submit
                            </button>
                        </form>
                        <ImageContainer />
                    </>
            }
        </>
    );
}

