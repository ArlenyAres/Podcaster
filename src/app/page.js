'use client'
import { useEffect, useState } from "react";
import {podcastsFetch } from './services/Api.jsx'

export default function Home() {
    const  [data, setData] = useState([]);

    useEffect(()=> {
      const loadData = async () => {
        const podcasts = await podcastsFetch();
        setData(podcasts)
    }
    loadData();
  },[])

    

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>HOLA  </h1>
      <div>{data?.map((podcast)=> (
        <div key={podcast.id}>{podcast.title.label} </div>
      ))}</div>
    </main>
  );
}
