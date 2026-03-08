export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Sora','system-ui','sans-serif'] },
      colors: {
        saffron: { DEFAULT:'#E8591A', light:'#F97316', dark:'#C04A0F' },
        navy: { DEFAULT:'#0B1628', 2:'#112240', 3:'#1A3050', 4:'#0D1B35' },
        teal: { DEFAULT:'#0D7377', 2:'#14A085' },
        govt: { DEFAULT:'#16783A', 2:'#1DA050' },
      },
    },
  },
  plugins: [],
}
