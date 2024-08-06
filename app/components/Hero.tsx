"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import type { CurrentSlideData, Data } from "../data";
import { AnimatePresence } from "framer-motion";
import BackgroundImage from "./BackgroundImage";
import Navbar from "./Navbar";
import SlideInfo from "./SlideInfo";
import Slides from "./Slides";
import Controls from "./Controls";

const Hero = () => {
  // Estado para armazenar os dados do slide após a transformação (array de objetos do tipo Data)
  const [sliderData, setSliderData] = useState<Data[]>([]);
  // Estado para armazenar os dados excluindo o primeiro item (será usado para os slides seguintes)
  const [data, setData] = useState<Data[]>([]);
  // Estado para armazenar os dados do slide atual em transição (pode ser nulo inicialmente)
  const [transitionData, setTransitionData] = useState<Data | null>(null);
  // Estado para armazenar o dado do slide atual e seu índice (inicialmente, data é nulo e o índice é 0)
  const [currentSlideData, setCurrentSlideData] = useState<CurrentSlideData>({
    data: null,
    index: 0,
  });

  // useEffect para buscar os dados da API ao carregar o componente
  useEffect(() => {
    async function fetchData() {
      try {
        // Faz a requisição GET para a API do TMDb
        const res = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY, // Chave de API
              language: "pt-BR", // Idioma dos resultados
            },
          }
        );

        // Extrai os dados da resposta da API
        const data = res.data;
        // Transforma os dados da API em um formato mais adequado para o slider
        const transformedData = data.results.map((item: any) => ({
          img: `https://image.tmdb.org/t/p/original${item.poster_path}`, // URL da imagem do poster
          bgImg: `https://image.tmdb.org/t/p/original${item.backdrop_path}`, // URL da imagem de fundo
          location: item.popularity, // Popularidade do filme
          description: item.overview, // Descrição do filme
          title: item.title, // Título do filme
        }));
        // Atualiza o estado 'sliderData' com os dados transformados
        setSliderData(transformedData);
      } catch (erro) {
        // Loga o erro caso a requisição falhe
        console.error("Erro ao buscar os dados da API:", erro);
      }
    }
    fetchData();
  }, []); // O array vazio [] faz com que esse useEffect seja executado apenas uma vez após o componente ser montado

  // useEffect para configurar os estados iniciais quando 'sliderData' é atualizado
  useEffect(() => {
    if (sliderData.length > 0) {
      // Atualiza o estado 'data' com todos os itens, exceto o primeiro
      setData(sliderData.slice(1));
      // Define o primeiro item como o slide atual em transição
      setTransitionData(sliderData[0]);
      // Define o estado 'currentSlideData' com o primeiro slide e o índice 0
      setCurrentSlideData({ data: sliderData[0], index: 0 });
    }
  }, [sliderData]); // Este useEffect depende de 'sliderData', então será executado toda vez que 'sliderData' mudar

  // Retorno do JSX
  if (!transitionData || !currentSlideData.data) {
    return <div>Carregando...</div>;
  }
  return (
    <main className="relative min-h-screen select-none overflow-hidden text-white antialiased">
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full">
          <Navbar />
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:justify-center md:mb-0 md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>

            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={sliderData[0]}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
};

export default Hero;
