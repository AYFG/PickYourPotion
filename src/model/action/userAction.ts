"use server";

import { signIn } from "@/auth";
import {
  ApiRes,
  ApiResWithValidation,
  FileRes,
  MultiItem,
  OAuthUser,
  SingleItem,
  UserData,
  UserForm,
  UserLoginForm,
} from "@/types";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

// 회원 가입
export async function signup(
  formData: FormData,
): Promise<ApiResWithValidation<SingleItem<UserData>, UserForm>> {
  const userObj = {
    type: formData.get("type") || "user",
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    image: "",
  };

  // 이미지 먼저 업로드
  const attach = formData.get("attach") as File;

  if (attach?.size > 0) {
    // 프로필 이미지를 추가한 경우
    const fileRes = await fetch(`${SERVER}/files`, {
      method: "POST",
      headers: {
        "client-id": process.env.NEXT_PUBLIC_CLIENT_ID || "",
      },
      body: formData,
    });

    if (!fileRes.ok) {
      throw new Error("파일 업로드 실패");
    }
    const fileData: MultiItem<FileRes> = await fileRes.json();
    // 서버로부터 응답받은 이미지 이름을 회원 정보에 포함
    userObj.image = fileData.item[0].path;
  }

  const res = await fetch(`${SERVER}/users`, {
    method: "POST",
    headers: {
      "client-id": process.env.NEXT_PUBLIC_CLIENT_ID || "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  });

  return res.json();
}

// auth provider 인증 후 자동 회원 가입
export async function signupWithOAuth(
  user: OAuthUser,
): Promise<ApiResWithValidation<SingleItem<UserData>, UserForm>> {
  const res = await fetch(`${SERVER}/users/signup/oauth`, {
    method: "POST",
    headers: {
      "client-id": process.env.NEXT_PUBLIC_CLIENT_ID || "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return res.json();
}

// 아이디/패스워드 로그인
export async function login(
  userObj: UserLoginForm,
): Promise<ApiResWithValidation<SingleItem<UserData>, UserLoginForm>> {
  const res = await fetch(`${SERVER}/users/login`, {
    method: "POST",
    headers: {
      "client-id": process.env.NEXT_PUBLIC_CLIENT_ID || "",
      "Content-type": "application/json",
    },
    body: JSON.stringify(userObj),
  });
  return res.json();
}

// auth provider로 인증된 사용자 로그인
export async function loginOAuth(providerAccountId: string): Promise<ApiRes<SingleItem<UserData>>> {
  const res = await fetch(`${SERVER}/users/login/with`, {
    method: "POST",
    headers: {
      "client-id": process.env.NEXT_PUBLIC_CLIENT_ID || "",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ providerAccountId }),
  });
  return res.json();
}

// 구글 로그인
export async function signInWithGoogle() {
  await signIn("google", { redirectTo: `/` });
}

export async function signInWithDiscord() {
  await signIn("discord", { redirectTo: `/` });
}

// // 깃허브 로그인
// export async function signInWithGithub(formData: FormData) {
//   await signIn("github", { redirectTo: "/" });
// }
