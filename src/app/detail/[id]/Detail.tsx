import { ProductDetail } from "./page";
import Image from "next/image";

export default function Detail({ data }: { data: ProductDetail }) {
  const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;
  const contentImg = data.extra?.detailImage.map((item, index) => {
    return (
      <div className="flex justify-center mt-3 " key={index}>
        <Image
          src={`${API_SERVER}${item?.path}`}
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="w-full h-auto "
          alt={item.name}
        />
      </div>
    );
  });

  return <>{contentImg}</>;
}
