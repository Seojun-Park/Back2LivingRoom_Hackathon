interface IProps {
    palette: {
      primary: string;
      secondary: string;
      background: string;
      white: string;
      black: string;
      lightgray: string;
      gray: string;
      darkgray: string;
      orange: string;
    };
    typography: {
      title: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
      };
      subtitle: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      heading: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
      };
      subheading: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
      };
      label: {
        fontFamily: string;
        fontWeight: number;
      };
      description: {
        fontFamily: string;
        lineHeight: number;
      };
      body: {
        fontFamily: string;
      };
      caption: {
        fontFamily: string;
        fontSize: string;
      };
      button: {
        fontFamily: string;
        fontSize: string;
      };
      textbutton: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        border: number;
      };
    };
  }
  
  const theme: IProps = {
    palette: {
      primary: "#0063FF",
      secondary: "#0a8080",
      background: "#f8f5f2",
      white: "#ffffff",
      black: "#222525",
      lightgray: "#e2e2e2",
      gray: "#8a8a8a",
      darkgray: "#505050",
      orange: "#f45d48",
    },
    typography: {
      title: {
        fontFamily: '"Noto Sans", sans-serif',
        fontSize: "3rem",
        fontWeight: 600,
      },
      subtitle: {
        fontFamily: '"Noto Sans", sans-serif',
        fontSize: "2.5rem",
        fontWeight: 600,
        lineHeight: 1.1,
      },
      heading: {
        fontFamily: '"Noto Sans", sans-serif',
        fontSize: "1.5rem",
        fontWeight: 500,
      },
      subheading: {
        fontFamily: '"Noto Sans", sans-serif',
        fontSize: "1.25rem",
        fontWeight: 700,
      },
      label: {
        fontFamily: '"Noto Sans", sans-serif',
        fontWeight: 700,
      },
      description: {
        fontFamily: '"Noto Sans", sans-serif',
        lineHeight: 1.5,
      },
      body: {
        fontFamily: '"Noto Sans", sans-serif',
      },
      caption: {
        fontFamily: '"Noto Sans", sans-serif',
        fontSize: "0.875rem",
      },
      button: {
        fontFamily: '"Noto Sans", sans-serif',
        fontSize: "0.875rem",
      },
      textbutton: {
        fontFamily: '"Noto Sans", sans-serif',
        fontWeight: 700,
        fontSize: "1rem",
        border: 0,
      },
    },
  };
  
  export default theme;
  