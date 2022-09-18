import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../assets/profileImage.jpeg";

type Props = {};

export default function About({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex flex-col text-center md:text-left relative md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>

			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				src="https://www.google.com/imgres?imgurl=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F50610396%3Fv%3D4&imgrefurl=https%3A%2F%2Fgithub.com%2Fmariosknl&tbnid=xSHMwWcvSQImzM&vet=12ahUKEwjUkteD1Z36AhXq7rsIHUIHCK4QMygAegQIARAw..i&docid=mpEOOjE4EB20jM&w=460&h=460&itg=1&q=marios%20kanellopoulos&ved=2ahUKEwjUkteD1Z36AhXq7rsIHUIHCK4QMygAegQIARAw"
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
			/>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a{" "}
					<span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
					background
				</h4>
				<p className="text-base">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem
					minus nisi in cupiditate, recusandae est nam atque consequuntur nulla
					ab tenetur distinctio illum. Rem perferendis hic, facere reiciendis
					est deserunt dolores libero et porro iste, tempora dicta consequatur
					vero corporis pariatur vitae laudantium, rerum error architecto. Qui,
					perferendis sapiente?
				</p>
			</div>
		</motion.div>
	);
}
