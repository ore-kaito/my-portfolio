import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


interface Post {
  id: number;
  title: string;
  description: string;
  imagePath: string | null;
  createdAt: string; 
}

const posts: Post[] = [
  {
    id: 1,
    title: "サンプル投稿 1",
    description: "これはサンプルの説明文です。",
    imagePath: null,
    createdAt: "2025-07-25T12:00:00",
  },
  {
    id: 2,
    title: "サンプル投稿 2",
    description: "もう1つのサンプル投稿です。",
    imagePath: "/images/test02.jpg",
    createdAt: "2025-07-24T18:30:00",
  },
];

export default function PostResult() {
  return (
    <ul className="flex flex-wrap">
      {posts.map((post) => (
        <div key={post.id} className="relative">
          <Link href={`/post/${post.id}`} className="relative">
            <div className="border p-4 hover:bg-gray-100 cursor-pointer w-96 mr-4 mb-4">
              <div className="flex justify-center">
                <Image
                  src={post.imagePath || "/images/default.jpg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  priority
                  className="h-auto w-auto"
                />
              </div>
              

              <div>
                <div className="flex items-center">
                  <div>
                    <h2 className="font-bold mt-2">{post.title}</h2>
                    <p className="text-sm text-gray-600">{post.description}</p>
                  </div>
                  <div className="absolute bottom-[70px] right-[34px]">
                  </div>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-red-500"
                    style={{ width: "20px", height: "20px", color: "#000" }}
                  />
                  <div className="text-xs text-gray-400">
                    {new Date(post.createdAt).toLocaleString("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </ul>
  );
}
