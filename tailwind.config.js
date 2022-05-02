module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
  },
  //브라우저 기본값을 따라가려면 media 그대로 놔두면됨
  //브라우저 설정과 상관없이 토글로 쓰고싶다면 class 로 해야함
  darkMode:"media",
  plugins: [
    require("@tailwindcss/forms")
  ],
}
