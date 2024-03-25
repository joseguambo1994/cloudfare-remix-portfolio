import type { MetaFunction } from "@remix-run/node";
import { useRef } from "react";

import ProfilePhotoSheep from "../ProfilePhotoCalisthenics.png";
import ReactIcon from "../ReactIcon.png";
import HtmlIcon from "../HtmlIcon.png";
import GitIcon from "../GitIcon.png";
import CloudIcon from "../CloudIcon.png";
import AWSSAAIcon from "../AWSSAAIcon.png";
import CybersecurityChampionship from "../CybersecurityChampionship.png";


const years = [2024,2023,2022,2021,2020,2019]

const CustomRow = (year: number, index: number) => {
  const customClass = index % 2 === 0 ? "h-8 text-white text-end" : "h-8 text-white text-start"
  return <div>
    <div className="h-2 bg-pink-300"></div>
    <div className={customClass}>{year}</div>
  </div>
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="pl-8 pr-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 md:bg-gradient-to-tl from-slate-700 to-purple-600">
      
      <div className="flex md:justify-center lg:justify-end p-16">
        <div className="flex-col">
          <h1 className="text-white	text-4xl md:text-7xl lg:text-8xl">José Guambo</h1>
          <h2 className="text-white	text-3xl md:text-5xl lg:text-6xl">Software Explorer</h2>
        </div>
      </div>
      
      <div className="text-white text-5xl text-right">Bio</div>
      <div className="flex flex-col p-4 sm:flex-row rounded-2xl mb-8 bg-gradient-to-r from-fuchsia-900 from-20% via-purple-900 via-60% to-slate-900 to-100%">
        <div className="flex flex-col justify-center flex-1 text-white p-4 md:pr-16 lg:pr-32">
        <div className="text-white md:text-right p-2 md:text-xl lg:text-2xl">
            B. Sc. in Electronics - UDLA
          </div>
          <div className="text-white md:text-right p-2 md:text-xl lg:text-2xl">
            Master in DevOps - UNIR (in progress)
          </div>
          <div className="text-white md:text-right p-2 md:text-xl lg:text-2xl">
            3 years developer experience
          </div>
        </div>
        <div className="flex-1 text-white p-2 md:p-2 md:max-w-64">
          <img className="rounded-2xl" src={ProfilePhotoSheep} />
        </div>
      </div>
      
      <div className="text-white text-5xl text-right">Tech Stack</div>
      <div className="flex flex-col p-8 content-center sm:flex-row-reverse rounded-2xl mb-8 bg-gradient-to-r from-fuchsia-900 from-20% via-purple-900 via-60% to-slate-900 to-100%">
        <div className="flex flex-1 pl-8 pr-8 ">
          <div className="flex-1 flex-row justify-center content-center">
            <div className="text-white text-center pt-1 sm:text-xl md:text-2xl">React (JS/Native)</div>
            <div className="text-white text-center pt-1 sm:text-xl md:text-2xl">HTML, JS, CSS</div>
            <div className="text-white text-center pt-1 sm:text-xl md:text-2xl">Git</div>
            <div className="text-white text-center pt-1 sm:text-xl md:text-2xl">Cloud</div>
          </div>
          <div className="flex-row justify-center content-center p-4">
            <img className="w-8 md:w-12" src={ReactIcon} />
            <img className="w-8 md:w-12" src={HtmlIcon} />
            <img className="w-8 md:w-12" src={GitIcon} />
            <img className="w-8 md:w-12" src={CloudIcon} />
          </div>
        </div>
        <div className="flex flex-1 justify-center p-4 content-center">
          <img src={AWSSAAIcon} />
        </div>
      </div>

      <div className="text-white text-5xl text-right">Jobs</div>

      <div className="flex flex-col p-8 md:flex-row rounded-2xl mb-8 bg-gradient-to-r from-fuchsia-900 from-20% via-purple-900 via-60% to-slate-900 to-100%">
        <div className="flex-1 md:pr-16 md:pl-48">
        {
          years.map((item, index) => CustomRow(item,index) )
        }
        </div>
        <div className="pl-4 pr-4 md:pl-0">
          <div className="text-white pb-7">PubliPromueve</div>
          <div className="text-white pb-7">AppsArchitects</div>
          <div className="text-white pb-7">Formos</div>
          <div className="text-white pb-7">Huawei</div>
          <div className="text-white">BlueHat Consultores</div>
        </div>
      </div>

      <div className="text-white text-5xl text-right">Others</div>
      <div className="flex flex-col p-4 md:flex-row rounded-2xl mb-8 bg-gradient-to-r from-fuchsia-900 from-20% via-purple-900 via-60% to-slate-900 to-100%">
        <div className="flex-1 p-4">
          <div className="text-white text-4xl">
            Achievements
          </div>
          <div className="text-white">
          Cybersecurity National Championship - Ecuador
          </div>
          <div className="text-white">
          Best score granted to the team ”MFTeam” in the programming challenge: ”Detecting malicious network traffic with Machine Learning”.
          </div>
          <img className="pt-3 pb-3" src={CybersecurityChampionship} />
        </div>
        <div className="flex-1 p-4">
          <div className="text-white text-4xl">
            Hobbies
          </div >
          <div className="text-white">
            Calisthenics
          </div>
          <div className="text-white">
            Comics
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="text-white text-4xl">
            Contacts  
          </div>
          <div className="text-white">
            jlguambo@gmail.com
          </div>
          <div className="text-white">
            +593 963238559
          </div>
          <div className="text-white">
            @jose.guambo.616
          </div>
        </div>
      </div>

    </div>
  );
}
