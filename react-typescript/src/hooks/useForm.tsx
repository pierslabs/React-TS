import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object /* | T extends Array */>(
  initalState: T
) => {
  const [formulario, setFormulario] = useState(initalState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  return { formulario, handleChange, ...formulario };
};
