// "use client";
// import { getEntries, getEntry } from "@/lib/contentful";
// import { format } from "date-fns";
// // import { motion } from "framer-motion";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { FC } from "react";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { Metadata, ResolvingMetadata } from "next";

// interface Props {
//   params: { id: string };
// }

// export const generateMetadata = async ( {params}: Props, parent: ResolvingMetadata): Promise<Metadata> => {
//   const service = await getEntries(params.id)
//   const image = service?.thumbnail!
//   const previousImages = (await parent).openGraph?.images
//   return{
//     title: "Hexa Kumpeni | " + service?.title

//   }
// }

// export default generateMetadata;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page