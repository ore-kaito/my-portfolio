import Image from "next/image"
import Link from "next/link";
import { ROUTES } from "../../../const";



export default function Logo() {

    return (
    <div>
        <Link href={ROUTES.HOME}>
            <Image
                src="/images/logo.png"
                alt="ロゴ画像"
                width={200}
                height={100}
                className="h-auto w-auto"
            />
        </Link>
        
    </div>
    )
}
  
