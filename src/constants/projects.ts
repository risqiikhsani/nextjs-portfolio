interface Project {
    name: string;
    imageUrl: string;
    url: string;
    text: string;
}

export const ProjectUrl:Project[] = [
  {
    name: "Galaxy",
    imageUrl: "projects/galaxy.jpg",
    url: "/",
    text: "Galaxy app is , facebook like app . Social Media platform where you can pretty much do anything with your friends !",
  },
  {
    name: "Tgen",
    imageUrl: "projects/textgenerator.jpg",
    url: "/",
    text: "Tgen helps you pick some random beneficial text !",
  },
  {
    name: "Calcstar",
    imageUrl: "projects/calculator.jpg",
    url: "/",
    text: "Basic calculator app handcrafted with the beauty of react",
  },
];
