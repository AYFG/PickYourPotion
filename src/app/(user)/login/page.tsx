"use client";
import {
  signInWithGoogle,
  signInWithDiscord,
  signInWithNaver,
} from "../../../model/action/userAction";
import Image from "next/image";
import iconGoogle from "../../../../public/images/icons/icon-google.svg";
import iconDiscord from "../../../../public/images/icons/icon-discord.svg";
import iconNaver from "../../../../public/images/icons/icon-naver.png";
import FastLogin from "./FastLogin";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <div className="mt-24">
        <h2 className="text-[50px] font-medium">환영합니다🍶</h2>
        <p className="text-[25px]">
          저희와 함께 <span className="text-2xl text-primary">인생술</span>을 찾아봐요
        </p>
      </div>
      <div className="w-full flex flex-col gap-5 contentMedium text-darkGray mb-24">
        <FastLogin />
        <button
          onClick={() => signInWithNaver()}
          className="flex py-3 px-10 justify-center items-center text-white bg-[#2db400]  rounded-[44px] border box-border"
        >
          <div className="w-full flex items-center justify-center">
            <Image
              src={iconNaver}
              width={30}
              height={30}
              alt="네이버 계정으로 로그인"
              className="m-3"
            />
            <p className="mt-1">네이버 계정으로 로그인</p>
          </div>
        </button>
        <button
          onClick={() => signInWithDiscord()}
          className="flex py-3 px-10 justify-center items-center text-white  bg-[#5865F2] rounded-[44px]"
        >
          <div className="flex flex-row items-center justify-center">
            <Image
              src={iconDiscord}
              width={30}
              height={30}
              alt="디스코드 계정으로 로그인"
              className="m-3"
            />
            <p className="mt-1">디스코드 계정으로 로그인</p>
          </div>
        </button>

        <button
          onClick={() => signInWithGoogle()}
          className="flex py-3 px-10 justify-center items-center text-gray bg-white rounded-[44px]  border box-border"
        >
          <div className="w-full flex items-center justify-center">
            <Image
              src={iconGoogle}
              width={30}
              height={30}
              alt="구글 계정으로 로그인"
              className="m-3"
            />
            <p className="mt-1">구글 계정으로 로그인</p>
          </div>
        </button>
      </div>
    </main>
  );
}
