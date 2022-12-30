import { Form } from "./components/Form";

function App() {
  return (
    <div className='flex items-center flex-col bg-gradient-to-r from-neutral-900 to-indigo-900 h-screen'>
      <h1 className='text-center p-6 mb-6 text-white font-extrabold text-transparent text-5xl xl:text-8xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500'>OpenAI Image generator</h1>
      <Form />
    </div>
  );
}

export default App;
