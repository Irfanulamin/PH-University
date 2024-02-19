import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/api/authApi";
import { Button } from "antd";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [login, { data, error }] = useLoginMutation();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
