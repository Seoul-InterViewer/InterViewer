const INPUT_FIELDS = [
  {
    label: "이메일을 입력해주세요.",
    type: "email",
    placeholder: "이메일",
    name: "email",
    id: "email",
    withButton: false,
  },
  {
    label: "닉네임을 입력해주세요.",
    type: "text",
    placeholder: "닉네임",
    name: "nickname",
    id: "nickname",
    withButton: false,
  },
  {
    label: "비밀번호를 입력해주세요.",
    type: "password",
    placeholder: "비밀번호",
    name: "password",
    id: "password",
    withButton: false,
  },
  {
    label: "비밀번호를 입력해주세요.",
    type: "password",
    placeholder: "비밀번호 확인",
    name: "passwordConfirm",
    id: "passwordConfirm",
    withButton: true,
  },
];

export default INPUT_FIELDS;
