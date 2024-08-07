import Image from "next/image";
import Link from "next/link";
import iconKakao from "../../../../public/images/icons/icon-kakaotalk.svg";
import iconGoogle from "../../../../public/images/icons/icon-google.svg";
export default function Page() {
  return (
    <div className="max-w-[428px] mt-28 flex flex-col justify-between h-[600px]">
      <div className="flex flex-col ml-10">
        <p className="font-medium text-[36px] text-primary ">삐빅!!</p>
        <div className="text-[25px] ">
          <p className="text-black">너무 동안이세요!!</p>
          <p className="mt-1 text-black">실례지만 민증검사 하겠습니다!!</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 contentMedium text-darkGray">
        <Link
          href="#"
          className="flex w-[377px] h-[60px] justify-center items-center border border-[#F2C94C] rounded-[44px]"
        >
          <div className="flex flex-row items-center justify-center">
            <Image src={iconKakao} width={30} height={30} alt="카카오톡 로그인" className="m-3" />
            <p className="mt-1">카카오톡 계정으로 로그인</p>
          </div>
        </Link>
        <Link
          href="#"
          className="flex w-[377px] h-[60px] justify-center items-center border border-darkGray rounded-[44px]"
        >
          <div className="flex flex-row items-center justify-center mr-6">
            <Image src={iconGoogle} width={30} height={30} alt="구글 로그인" className="m-3" />
            <p className="mt-1">구글 계정으로 로그인</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
