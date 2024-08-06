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
  const [sliderData, setSliderData] = useState<Data[]>([]);
  const [data, setData] = useState<Data[]>([]);
  const [transitionData, setTransitionData] = useState<Data | null>(null);
  const [currentSlideData, setCurrentSlideData] = useState<CurrentSlideData>({
    data: null,
    index: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
              language: "pt-BR",
            },
          }
        );

        const data = res.data;
        const transformedData = data.results.map((item: any) => ({
          img: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          bgImg: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
          location: item.popularity,
          description: item.overview,
          title: item.title,
        }));

        setSliderData(transformedData);
      } catch (erro) {
        console.error("Erro ao buscar os dados da API:", erro);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (sliderData.length > 0) {
      setData(sliderData.slice(1));
      setTransitionData(sliderData[0]);
      setCurrentSlideData({ data: sliderData[0], index: 0 });
    }
  }, [sliderData]);

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
