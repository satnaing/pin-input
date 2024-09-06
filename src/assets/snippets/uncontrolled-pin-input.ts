const uncontrolledPinInput = `<PinInput
  className='flex h-10 space-x-4'
  defaultValue=''
  onComplete={(str) => 
    console.log('completed', str)
  }  
  autoFocus
>
  <PinInputField component={Input} />
  <PinInputField component={Input} />
  <Separator orientation='vertical' />
  <PinInputField component={Input} />
  <PinInputField component={Input} />
</PinInput>`;

export { uncontrolledPinInput };
