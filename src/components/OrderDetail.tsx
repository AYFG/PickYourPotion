import Image from "next/image";

import { ImageProps } from "@/app/order/order";

interface OrderDetailProps {
  image: ImageProps;
  name: string;
  brewery: string;
  price: number;
  quantity: number;
  className?: string;
}

export default function OrderDetail({
  image,
  name,
  brewery,
  price,
  quantity,
  className,
}: OrderDetailProps) {
  const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={`${API_SERVER}${image.path}`}
        alt={image.name}
        width={75}
        height={75}
        className="round w-[75px] h-[75px]"
        priority={true}
      />
      <div className="ml-3">
        <p className="text-black contentMedium">{name}</p>
        <p className="description text-gray ">{brewery}</p>
        <p className="text-[14px] font-medium">
          <span className="text-primary">{price.toLocaleString()}원</span>
          <span> | {quantity}개</span>
        </p>
      </div>
    </div>
  );
}
