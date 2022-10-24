const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletL: "800px",
  tabletXL: "860px",
  tablettXXL: "950px",
  laptop: "1024px",
  laptopL: "1440px",
  LaptopXL: "2000px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${deviceSizes.mobileS})`,
  mobileM: `(min-width: ${deviceSizes.mobileM})`,
  mobileL: `(min-width: ${deviceSizes.mobileL})`,
  tablet: `(min-width: ${deviceSizes.tablet})`,
  tabletL: `(min-width: ${deviceSizes.tabletL})`,
  tabletXL: `(min-width: ${deviceSizes.tabletXL})`,
  tabletXXL: `(min-width: ${deviceSizes.tabletXXL})`,
  laptop: `(min-width: ${deviceSizes.laptop})`,
  laptopL: `(min-width: ${deviceSizes.laptopL})`,
  laptopXL: `(min-width: ${deviceSizes.laptopXL})`,
  desktop: `(min-width: ${deviceSizes.desktop})`,
};
