import {
  Alfa_Slab_One,
  Poppins,
  Open_Sans,
  Inter,
  EB_Garamond,
  Quicksand,
} from "@next/font/google";

export const poppins = Poppins({
  weight: ["300", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  // variable: "--font-poppins",
});

export const inter = Inter({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

export const quicksand = Quicksand({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const eb_garamond = EB_Garamond({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

export const alfa_slab_one = Alfa_Slab_One({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

export const open_sans = Open_Sans({
  weight: ["300", "400"],
  display: "swap",
  subsets: ["latin"],
});
