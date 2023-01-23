import { useForm } from '../hooks/useForm';

interface FormData {
  email: string;
  password: string;
  edad: number;
}

const Form = () => {
  const { password, edad, email, handleChange } = useForm<FormData>({
    email: '',
    password: '',
    edad: 0,
  });

  // const { email, password, edad } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Edad</label>
        <input
          type="number"
          className="form-control"
          name="edad"
          value={edad}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify({ email, password, edad })}</pre>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
