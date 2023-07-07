import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

const TextInput = ({extractKeywords}) => {
  const [text, setText] = useState('');
  const toast = useToast();

  const submitText = () => {
    if(text === '' ){
      toast({
        title: 'Text input is empty',
        description: 'Please enter some text to extract keywords',
        status: 'error',
        duration: 5000,
        isClosable: false,
        position: 'top-center',
      });

      return;
    } else{
      extractKeywords(text);
    }
  }

  return (
    <>
      <Textarea 
        bg='teal.400'
        color='white'
        p={4}
        mt={6}
        h={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        bg='teal.500'
        color='white'
        mt={4}
        w='100%'
        _hover={{bg: 'teal.700'}}
        onClick={submitText}
      >
        Extract keywords
      </Button>
    </>
  )
}

export default TextInput
