import Link from "next/link";

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await res.json();
    const paths = users?.map((user: any) => {
        return{
            params: {
                UID: user.id.toString(),
            }
        }
    })
    return {
      paths,
      fallback: false
    }
}

export const getStaticProps= async(context: any) => {
    const id = context.params.UID
    console.log(id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    return {
        props: {
            user
        }
    }
}
const uid = (user : any) => {

    return (
        <div className="flex justify-center">
            <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center w-96">
                <div className="py-3 px-6 border-b text-gray-400 border-gray-300">
                username: {user.user.username}
                </div>
                <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                    name: {user.user.name}
                    </h5>
                <p className="text-gray-700 text-base mb-4">
                email: {user.user.email}
                </p>
                <Link href={'/users/users'}>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Back
                    </button>
                </Link>
                </div>
                <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                2 days ago
                </div>
            </div>
        </div>
    );
};

export default uid;