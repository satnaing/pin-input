const controlledPinInput = `function ControlledPinInput() {
  const [pinInput, setPinInput] = useState('');

  return (
    <PinInput
      className='flex h-10 space-x-4'
      value={pinInput}
      onChange={setPinInput}
      onComplete={(str) => 
        console.log('completed', str)
      }
    >
      {Array.from({ length: 4 }, (_, i) => (
        <PinInputField key={i} component={Input} />
      ))}
    </PinInput>
  )
}`;

export { controlledPinInput };
