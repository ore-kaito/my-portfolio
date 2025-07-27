import PostResult from "./components/PostResult/PostResult";

export default async function Home() {

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 w-full">投稿一覧</h1>
     <PostResult />
    </>


  );
}