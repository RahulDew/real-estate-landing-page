import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

export const FooterData = {
  createdBy: "2024 CodeCamber. All Right Reserved.",
  footerLogoData: {
    logo: "https://assets-netstorage.groww.in/stock-assets/logos2/WallfortFin_54102882444_7773.png",
    logoText: "Wallfort Heights",
    textData: " Central India’s most trusted real estate brand. With over 30+ years of experience, we have redefined luxury living and commercial spaces in Raipur, Durg, and beyond."
  },
  socialIcons: [
    {
      name: "X",
      link: "https://www.x.com/",
      icon: <IconBrandX size={25} className="text-white" />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/",
      icon: <IconBrandFacebook size={25} className="text-white" />,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/",
      icon: <IconBrandYoutube size={25} className="text-white" />,
    },
  ],
  impLinks: [
    { name: "Our Projects", link: "/our-projects" },
    { name: "Blogs", link: "/blogs" },
    { name: "Services", link: "/services" },
    { name: "Contect Us", link: "/contectus" },
    { name: "Privacy Policy", link: "/privacy-policy" },
  ],
};
