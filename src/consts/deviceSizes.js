const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletL: "800px",
  tabletXL: "860px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${deviceSizes.mobileS})`,
  mobileM: `(min-width: ${deviceSizes.mobileM})`,
  mobileL: `(min-width: ${deviceSizes.mobileL})`,
  tablet: `(min-width: ${deviceSizes.tablet})`,
  tabletL: `(min-width: ${deviceSizes.tabletL})`,
  tabletXL: `(min-width: ${deviceSizes.tabletXL})`,
  laptop: `(min-width: ${deviceSizes.laptop})`,
  laptopL: `(min-width: ${deviceSizes.laptopL})`,
  desktop: `(min-width: ${deviceSizes.desktop})`,
};
