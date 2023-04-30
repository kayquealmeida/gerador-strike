import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Input from './components/Input/Input';
import Textarea from './components/Textarea/Textarea';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Input inputType='text' labelTarget="nome" labelTitle="Nome:"/>
    <Input inputType='text' labelTarget="telefone" labelTitle="Telefone:"/>
    <Input inputType='text' labelTarget="telefone" labelTitle="Telefone:"/>
    <Input inputType='text' labelTarget="telefone" labelTitle="Telefone:"/>
    <span>Canais de contato:</span>
    <Input inputType='checkbox' labelTarget="cel" labelTitle="cel:"/>
    <Textarea labelTarget='descricao' labelTitle='Descrição:'/>
  </React.StrictMode>
);
