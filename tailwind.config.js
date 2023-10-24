// tailwind.config.js
module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
      "roboto-thin": ["ThinRoboto"],
      "roboto-light": ["LightRoboto"],
      sans: ["Niramit", "Sans-serif"],
      archivo: ["Archivo"],
      paytone: ["Paytone"],
    },
    extend: {},
    colors: {
      "catalina-blue": {
        DEFAULT: "#052F6B",
        50: "#3283F5",
        100: "#1F77F5",
        200: "#0A62E0",
        300: "#0951B9",
        400: "#074092",
        500: "#052F6B",
        600: "#021735",
        700: "#000000",
        800: "#000000",
        900: "#000000",
        950: "#000000",
      },
      "great-blue": {
        DEFAULT: "#2A669F",
        50: "#E4F7F8",
        100: "#CCEEF2",
        200: "#9CD7E5",
        300: "#6CB9D8",
        400: "#3B94CB",
        500: "#2A669F",
        600: "#234B83",
        700: "#1B3366",
        800: "#14204A",
        900: "#0C102E",
      },
      "catskill-white": {
        DEFAULT: "#F5F7FA",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#F5F7FA",
        500: "#D0D9E7",
        600: "#AABBD5",
        700: "#859DC2",
        800: "#5F7FAF",
        900: "#48648F",
        950: "#3E577C",
      },
      "athens-gray": {
        DEFAULT: "#F0F3F6",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#F0F3F6",
        500: "#CDD7E1",
        600: "#AABBCC",
        700: "#879FB7",
        800: "#6483A2",
        900: "#4D6780",
        950: "#43596F",
      },
      "mid-gray": {
        DEFAULT: "#6C6D71",
        50: "#B4B5B8",
        100: "#AAABAE",
        200: "#95969A",
        300: "#808186",
        400: "#6C6D71",
        500: "#515154",
        600: "#353638",
        700: "#1A1A1B",
        800: "#000000",
        900: "#000000",
        950: "#000000",
      },
      concrete: {
        DEFAULT: "#F2F2F2",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#F2F2F2",
        500: "#D6D6D6",
        600: "#BABABA",
        700: "#9E9E9E",
        800: "#828282",
        900: "#666666",
        950: "#585858",
      },
      flamingo: {
        DEFAULT: "#EF4444",
        50: "#FAC8C8",
        100: "#F9B5B5",
        200: "#F58F8F",
        300: "#F26A6A",
        400: "#EF4444",
        500: "#E71414",
        600: "#B30F0F",
        700: "#800B0B",
        800: "#4C0707",
        900: "#180202",
        950: "#000000",
      },
      "dodger-blue": {
        DEFAULT: "#3283F5",
        50: "#BAD5FC",
        100: "#A7CAFB",
        200: "#80B2F9",
        300: "#599BF7",
        400: "#3283F5",
        500: "#0B65E4",
        600: "#094DAE",
        700: "#063679",
        800: "#031E43",
        900: "#01060E",
        950: "#000000",
      },
      spray: {
        DEFAULT: "#66F2C3",
        50: "#EAFDF7",
        100: "#D7FCEF",
        200: "#B1F8E0",
        300: "#8CF5D2",
        400: "#66F2C3",
        500: "#32EEAF",
        600: "#12D694",
        700: "#0EA270",
        800: "#096E4C",
        900: "#053B29",
        950: "#032117",
      },
      seance: {
        DEFAULT: "#7E2A9F",
        50: "#F8E4F6",
        100: "#F2CCF0",
        200: "#E29CE5",
        300: "#CB6CD8",
        400: "#AE3BCB",
        500: "#7E2A9F",
        600: "#602383",
        700: "#451B66",
        800: "#2D144A",
        900: "#190C2E",
      },
      buttercup: {
        DEFAULT: "#F59E0B",
        50: "#FCE4BB",
        100: "#FBDCA8",
        200: "#FACD81",
        300: "#F8BD59",
        400: "#F7AE32",
        500: "#F59E0B",
        600: "#C07C08",
        700: "#8A5906",
        800: "#543603",
        900: "#1E1401",
        950: "#030200",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};