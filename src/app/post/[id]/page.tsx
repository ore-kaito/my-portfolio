import { notFound } from "next/navigation";
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  description: string;
  imagePath: string | null;
  createdAt: string;
}



const posts: Post[] = [
  { id: 1, title: "サンプル投稿 1", description: "これはサンプル", imagePath: "/images/default.jpg", createdAt: "2025-07-25T12:00:00" },
  { id: 2, title: "サンプル投稿 2", description: "もう1つのサンプル", imagePath: "/images/test02.jpg", createdAt: "2025-07-24T18:30:00" },
];

export default function PostDetail({ params }: any) {
  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) return notFound();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
        {post.imagePath && (
            <div className="mt-4">
            <Image
                src={post.imagePath}
                alt={post.title}
                width={400}
                height={300}
                className="rounded-lg"
            />
            </div>
        )}
      <p className="mt-2">{post.description}</p>
      <p className="text-gray-500 text-sm mt-4">
        投稿日: {new Date(post.createdAt).toLocaleString("ja-JP")}
      </p>
    </div>
  );
}