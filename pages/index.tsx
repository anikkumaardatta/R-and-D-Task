import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const Home = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<FormValues>();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = data => {
    if(data.email === "admin@mail.com" && data.password === "admin1234"){
      
      router.push("/users/users")
    }
    else{
      console.log(false);
    }
  };

  return (
    <div className="bg-slate-50 max-w-md p-12 mx-auto m-24">
      <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <input className="my-3 shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="E-Mail:"
        type="email"
        {...register("email", {
          required: true,
        })}
        required
        /> {errors.email && "E-mail is required"}
        <input className="my-3 shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Password:"
        type="password"
        {...register("password", {
          required: true,
        })}
        required
        />{errors.password && "Password is required"}

        <button className="my-3 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
export default Home;