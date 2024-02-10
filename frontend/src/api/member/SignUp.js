import axios from "axios";
const BASE_URL = "https://i10b207.p.ssafy.io/api/v1/";

// 일반 회원가입

export async function signup(user) {
  //console.log(user);
  try {
    const response = await axios.post(BASE_URL + "member", user);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// 이메일 인증 요청
export async function verifyEmail(email) {
  try {
    const response = await axios.post(BASE_URL + "member/email/verification", {
      email: email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// 인증번호 검사
export async function verifyCode(email, code) {
  try {
    const response = await axios.post(BASE_URL + "member/email/verify", {
      email: email,
      authNum: code,
    });
    //console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
}
// 닉네임 중복 검사
export async function checkNickName(nickname) {
  try {
    const response = await axios.get(
      BASE_URL + `member/nickname/${nickname}/exists`
    );
    //console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// /* 소셜 회원가입 */
// export async function socialSignUp(object) {
//   try {
//     const response = await axios.post(BASE_URL + "member/social", object);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }
