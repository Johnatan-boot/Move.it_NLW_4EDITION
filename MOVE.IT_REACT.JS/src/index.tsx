import React from 'react';  /*importando o  react e o react-dom */
import ReactDOM from 'react-dom'; /*importando o  react e o react-dom */
import App from './App';  /* dom arvores de Elementos do html */

ReactDOM.render(  /* Componente é uma função que retorna em jsx  */
    <App />,
  document.getElementById('root')
);

/*componentes são formas de isolar pedaços de codigos e reaproveita-los */
/*propriedades são formar de passar informações para os componentes */
/* buttonProps => propriedades que o botão recebe */
/* Propriedade Children=> quando passamos algo para dentro
de um componente */
/* Estado=> Armazena informações dentro de um componente
e muda com o tempo, não é fixa*/
/* usestate é um hook ou um gaancho funcion. definir estados  
dentro de um  componente , retorna em array, uma ela mesma, e outra 
ela atualizada como uma funcionalidade*/
/* sempre ao importar arquivos css importar pelo java script  */
