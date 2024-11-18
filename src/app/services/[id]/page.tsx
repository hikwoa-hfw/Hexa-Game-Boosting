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
//   params: { id: number };
// }

// export const generateMetadata = async ( {params}: Props, parent: ResolvingMetadata): Promise<Metadata> => {
//   const response = await getEntries(params.id)
//   const service = 
//   const image = service?.thumbnail
//   const previousImages = (await parent).openGraph?.images
//   return{

//   }
// }

// export default generateMetadata;