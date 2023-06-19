import React, { ComponentType } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'

interface Props {
  saludo?: string,
  nombre?: string,
}

function App(props:Props) {
  return (
  <h1>¡{props.saludo}, {props.nombre}!</h1>
  );
}

function withSaludo<T>( WrapperdComponent: ComponentType<T>) {
  return function WrapperdComponentWithSaludo(saludo:string) {
    return function ComponenteDeVerdad (props: T) {
        return (
        <>
          <WrapperdComponent {...props} saludo={saludo}/>
          <p>Estamos acompañamdo al WrapperdComponent</p>
        </>
        );
    }
  }
}

const AppWithSaludo = withSaludo(App)('Holi');
// const AppWithSaludo2 = AppWithSaludo('Buenos');
// const AppWithSaludo3 = AppWithSaludo('Buenos amigos');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppWithSaludo nombre={"Alex"} />
    {/* <AppWithSaludo3 nombre={"jose"} /> */}
  </React.StrictMode>,
)
