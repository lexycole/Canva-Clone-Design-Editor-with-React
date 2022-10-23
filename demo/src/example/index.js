import React, { useRef } from 'react';
import styled from 'styled-components';

import EmailEditor from '../../../src';
// import sample from './sample.json';

import "../../src/index.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;

  a {
    display:none!important;
  }
`;

const Bar = styled.div`
  flex: 1;
  background-color: #61dafb;
  color: #000;
  padding: 10px;
  display: flex;
  max-height: 70px;

  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }

  button {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
  }
`;

const Example = (props) => {
  const emailEditorRef = useRef(null);

  const saveDesign = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
      console.log('saveDesign', design);
      alert('Design JSON has been logged in your developer console.');
    });
  };

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
      alert('Output HTML has been logged in your developer console.');
    });
  };

  const onDesignLoad = (data) => {
    console.log('onDesignLoad', data);
  };

  const onLoad = () => {
    console.log('onLoad');

    emailEditorRef.current.editor.addEventListener(
      'design:loaded',
      onDesignLoad
    );

    emailEditorRef.current.editor.loadDesign(sample);
  }

  const onReady = () => {
    console.log('onReady');
  }; 

 

  return (
    <Container>
      <Bar>
        <h1>React Design Editor</h1>
        <button onClick={saveDesign}>Save Design</button>
        <button onClick={exportHtml}>Export HTML</button>
      </Bar>
      
    <React.StrictMode>
      <EmailEditor 
        ref={emailEditorRef} 
        projectId={'88689'}
        onLoad={onLoad} 
        onReady={onReady}
        appearance={{
          theme:'dark',
          panels: {
            tools: {
              dock:'left'
            }
          }
        }}
        options={{
          customCSS: [
            `
              a {
                display:none!important;     
                visibility: hidden!important;
              }
            `
          ]
        }}
         />
      </React.StrictMode>
    </Container>
  );
};

export default Example;
