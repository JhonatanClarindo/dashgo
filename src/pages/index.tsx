import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'



type SingInFormData = {
  email: string;
  password: string;
}

const singInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email(),
  password: yup.string().required("Senha obrigatória"),
})

export default function SingIn() {

   const { register, handleSubmit, formState, formState: {errors} } = useForm({
      resolver: yupResolver(singInFormSchema)
   });

   const handleSingIn: SubmitHandler<SingInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
   }

  return (
    <Flex 
    w="100vw"
    h = "100vh"
    align = "center"
    justify = "center"
    >
      <Flex
      as = 'form'
      w = '100%'
      maxW = {360}
      bg = 'gray.800'
      p = '8'
      borderRadius = {8}
      flexDir = 'column'
      onSubmit = {handleSubmit(handleSingIn)}
      >
        <Stack spacing = '4'>
         
        <Input  type= 'email' 
        name = "email" 
        error={errors.email}
        {...register('email')} 
        label = 'E-mail'  />

        <Input  type= 'password' 
        name = "password" 
        {...register('password')} 
        error={errors.password}
        
        label = 'Senha'  />

          </Stack>

          <Button 
          type='submit' 
          mt='6' 
          colorScheme='pink' 
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
    </Flex>
    </Flex>
  )
}
