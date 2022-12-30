export const Image = ({url}) => {
  return (
    <img 
    src={`${url}`} 
    alt={'Generated with AI based on the user input'}
    className='my-2 mx-auto max-w-[90%] lg:max-w-full'
    />
  )
}
