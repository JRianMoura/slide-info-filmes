import { useEffect, useState } from "react";

// export const sliderData = [
//   {
//     img: "https://img.freepik.com/fotos-gratis/tigre-olhando-com-a-boca-aberta_1150-18083.jpg?t=st=1722628177~exp=1722631777~hmac=8b609941835462b5bac3bc96af996bec2fff283b52679c6f81cff6104b7350aa&w=740",
//     location: "Tigrolandia",
//     description:
//       "Tigre Bravo, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna odio, fermentum in tristique in, malesuada eget felis. In et augue quis ante consequat maximus sit amet eu mi.",
//     title: "Gatinho Mau",
//   },
//   {
//     img: "https://www.petz.com.br/blog/wp-content/uploads/2022/07/feneco-interna-1.jpg",
//     location: "Fenecolandia",
//     description:
//       "Feneco bolado, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna odio, fermentum in tristique in, malesuada eget felis. In et augue quis ante consequat maximus sit amet eu mi.",
//     title: "Fenequin",
//   },
//   {
//     img: "https://img.freepik.com/fotos-gratis/um-grupo-de-passaros-coloridos-esta-voando-em-formacao-com-um-sendo-pilotado-por-outro_188544-8130.jpg?t=st=1722627721~exp=1722631321~hmac=1ce96772beed6ae6911091f6ded810b82c3b02135a5dc0dd3b8b5842bdc2c55f&w=740",
//     location: "Papagolandia",
//     description:
//       "Papagaio Cororido, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna odio, fermentum in tristique in, malesuada eget felis. In et augue quis ante consequat maximus sit amet eu mi.",
//     title: "Pagaio Cororido",
//   },
//   {
//     img: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/03/panda-vermelho-arvore.jpg",
//     location: "Pandolandia",
//     description:
//       "Pandinha, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna odio, fermentum in tristique in, malesuada eget felis. In et augue quis ante consequat maximus sit amet eu mi.",
//     title: "Panda Vermelho",
//   },
//   {
//     img: "https://img.freepik.com/fotos-gratis/foto-aproximada-de-cachorro-curvo-com-boca-negra-no-campo_181624-39393.jpg?t=st=1722627976~exp=1722631576~hmac=e0bc0261a08751968da8fb93df6632d1023760e811aa97e6cb417f242cf4ca85&w=740",
//     location: "Caramelolandia",
//     description:
//       "Cachorro Caramelo, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna odio, fermentum in tristique in, malesuada eget felis. In et augue quis ante consequat maximus sit amet eu mi.",
//     title: "Cachorro Caramelo",
//   },
//   {
//     img: "https://image.lexica.art/full_webp/308bd43b-f3cb-430c-a7bc-2754192021dc",
//     location: "Coelholandia",
//     description:
//       "Coelho Branco, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna odio, fermentum in tristique in, malesuada eget felis. In et augue quis ante consequat maximus sit amet eu mi.",
//     title: "Coelhin Correndo",
//   },
//   {
//     img: "https://img.freepik.com/fotos-gratis/close-em-um-gatinho-adoravel-olhando-para-cima_23-2150782225.jpg?t=st=1722628462~exp=1722632062~hmac=6b26403857837be28680eecae4a9e1614b410fbb7eeee6516c0546def57abacc&w=740",
//     location: "Gatinholandia",
//     description:
//       "Gatin pequeno, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna odio, fermentum in tristique in, malesuada eget felis. In et augue quis ante consequat maximus sit amet eu mi.",
//     title: "Gatin Fofo",
//   },
//   {
//     img: "https://img.freepik.com/fotos-gratis/papel-de-parede-de-quinta-de-porcos_1409-6801.jpg?t=st=1722627264~exp=1722630864~hmac=ebb41751086f5f4b89bd0d38b6daa78c3bb43748d89aa4a3487980f4d1376ed6&w=740",
//     location: "Porquinholand",
//     description:
//       "Porquinho da India, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna odio, fermentum in tristique in, malesuada eget felis. In et augue quis ante consequat maximus sit amet eu mi.",
//     title: "Porquinho da India",
//   },
// ];

export type Data = {
  img: string;
  bgImg: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data | null;
  index: number;
};

// d44ce5c6185c889d44ed894780c4e569
// https://api.themoviedb.org/3/discover/movie
// https://developer.themoviedb.org/docs/image-basics
