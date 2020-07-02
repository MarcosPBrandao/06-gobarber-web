import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import * as Yup from 'yup';
import getValidationsErrors from '../../utils/getValidationErrors'
const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  console.log(formRef);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

    } catch (err) {
      console.log(err);
      const errors = getValidationsErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiUser} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="http://">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
