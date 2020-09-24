import React from 'react';
import {Body, Header, H1, Input, Button, Div, Form, Label} from './styles';
import Main from './main';
import './styles.css';

function App() {
  return (
    <div className='App'>
      <Body>
        <Header>
          <H1>Previsão do tempo</H1>
          <Div>
          <Input placeholder="Insira aqui o nome da cidade"></Input>
          <Button type="submit"><i class="fa fa-search"></i></Button>
          </Div>
        </Header>
        <Form>
            <Main/>
            <Label>Min</Label>
            <Label>Max</Label>
            <Label>City</Label>
        </Form>
      </Body>
    </div>
  );
}

export default App;
