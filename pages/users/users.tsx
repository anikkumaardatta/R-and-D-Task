import { GetStaticProps } from 'next'
import Link from "next/link";

export interface UserList{
     users: UsersIn[] | undefined;
}
export interface UsersIn {
    name: string,
    email: string,
}
export const getStaticProps: GetStaticProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users: UsersIn[] | undefined = await res.json();
  return {
    props: {
      users
    }
  }
}
const users = ({users}: UserList) => {
    return (
        <>
        {users?.slice(0,5).map((user: any) => {
            return(
                <div key={user.id} className="flex justify-center my-5">
                    <div className="block p-6 rounded-lg shadow-lg bg-white w-96 text-center">
                        <h4 className="text-lg font-semibold bg-sky-100 text-sky-500 rounded-full inline px-6">{user.id}</h4>
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{user.name}</h5>
                        <p className="text-gray-700 text-base mb-4"></p>
                        <Link href={`${user.id}`}>
                            <button type="button"
                                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            )
        })}
        </>
    );
};

export default users;