tailwind.config = {
  variants: {
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"]
},
    theme: {
      extend: {
        colors: {
          azulOscuro: "#04364A",
          azulClaro: "#176B87",
          verdeClaro: "#64CCC5",
          blanco: "#DAFFFB",
        }
      }
    },

    plugins: [
      function ({ addUtilities }) {
          const newUtilities = {
              ".no-scrollbar::-webkit-scrollbar": {
                  display: "none",
              },
              ".no-scrollbar": {
                  "-ms-overflow-style": "none",
                  "scrollbar-width": "none",
              },
          };
          addUtilities(newUtilities);
      },
  ],
  };

  