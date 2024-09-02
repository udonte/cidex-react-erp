/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/images/login_img.png')",
      },

      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman", 
      },

      colors: {
        "gurugeeks-orange-700": "#C55514",
        "gurugeeks-orange-600": "#ED722B",
        "gurugeeks-gray-700": "#EFEFEF",
        "gurugeeks-dark-700": "#333333",
        "gurugeeks-dark-600": "#575757",
        "gurugeeks-dark-500": "#8F8F8F",
        "gurugeeks-dark-100": "#FAFAFA",
        "gurugeeks-green-700": "#128438",
        "gurugeeks-green-600": "#139F11",
        "gurugeeks-green-500": "#CBF8CB",
        "gurugeeks-green-400": "#E7FCEE",
        LandingPage_bg: "#aff4c6",
        "landing-page-text" : "#5A5A5A",
        gurugeeks_color: "#c55514",
        "gurugeeks-orange-100": "rgba(197, 85, 20, 0.7)",
        "gurugeeks-orange-200": "rgba(190, 133, 73, 1)",
        "gurugeeks-orange-300": "#7E2410",
        // "gurugeeks-orange-400": "#C4320A",
        "gurugeeks-orange-500": "#C55514",
        "gurugeeks-orangeLight": "rgba(251, 101, 20, 1)",
        "gurugeeks-grayDark-100": "#3F3F46",
        "gurugeeks-grayLight-100": "#d9d9d9",
        "gurugeeks-grayLight-200": "#EAF0F9",
        "gurugeeks-grayLight-300": "#b4bfce",
        "gurugeeks-grayLight-400": "#F3F4F6",
        "gurugeeks-text": "#333333",
        "gurugeeks-text-2": "#5f71977a",
        

        "gurugeeks-boxShadow": "0px 42.4441px 61.3082px rgba(0, 0, 0, 0.08)",
        btn_gradient_start: "rgba(197, 85, 20, 0.7)",
        btn_gradient_end: "#FFA82D",
        "cyan-green": "#AFF4C6",
        "orange-blue-gradient": "linear-gradient(to bottom, #fb6514, #aff4c6)",
        dark_color_grey: "#101828",
        gurugeeks_bold_color: "#FB6514",
        cta: "#fb6514",
        success_color: "#00b87c",
        hover_bg: "#1018280d",
        light_grey: "#667085",
        nav_icon_color: "#3f3f46",
        border_color: "#d0d5dd",
        button_bg_color: "#C55514;",
        light_green_bg_color: "#aff4c6;",

        //  New Design Text colors

        gray_text: "#9B9B9B;",
        black_text: "#252525",

        // CRM Colors
        crm_hover: "#CBF8CB",
      },

      fontFamily: {
        inter: ["Inter", "san-serif"],
        nunito: ["Nunito Sans", "san-serif"],
        jakatara: ["Plus Jakatara Sans", "san-serif"],
        lato: ["Lato","san-serif"]
      },
      
      width: {
        "second-line-1": "calc(100% - 16.6rem)",
        "second-line-2": "calc(100% - 25.5rem)",
        "second-line-3": "calc(100% - 36.18rem)",
      },
    },
  },
  plugins: [

    require('flowbite/plugin')

  ],
};
