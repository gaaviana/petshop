import { ReactNode } from 'react';
import estilos from './Container.module.css'

type ContainerProps = {
    children: ReactNode;
};

export default function Container({children} : ContainerProps) {
  return (
    <div>
      {children}
    </div>
  )
}
