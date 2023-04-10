import { useState } from "react";

function App() {
	const [isShareOpen, setIsShareOpen] = useState(false);
	return (
		<div className="h-screen w-screen bg-blue-light flex flex-col p-8">
			<main className="rounded-xl flex flex-col bg-white m-auto max-w-sm gap-8 md:flex-row md:max-w-screen-lg shadow-2xl ">
				<img
					src="/drawers.jpg"
					alt="Drawers image"
					className="rounded-t-xl md:rounded-t-none md:rounded-l-xl md:rounded-tl-xl md:h-80"
				/>
				<div className="flex flex-col gap-8 justify-center">
					<div className="flex flex-col px-6 gap-4">
						<h1 className="text-blue-dark_gray font-bold text-lg">
							Shift the overall look and feel by adding these
							wonderful touches to furniture in your home
						</h1>
						<p className="text-sm text-blue-desaturated">
							Ever been in a room and felt like something was
							missing? Perhaps it felt slightly bare and
							uninviting. I've got some simple tips to help you
							make any room feel complete.
						</p>
					</div>
					<footer className="flex flex-row px-6 pb-6 items-center justify-between">
						<div
							style={{ display: isShareOpen ? "flex" : "none" }}
							className="transition-all"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Illum at rerum eaque vitae. Illo quas aperiam
							assumenda rerum perferendis saepe aspernatur maxime
							dolor quibusdam blanditiis ipsa iusto, placeat
							repudiandae ea.
						</div>
						<div
							style={{ display: isShareOpen ? "none" : "flex" }}
							className="flex flex-row gap-4 transition-all"
						>
							<img
								src="/avatar-michelle.jpg"
								alt="Michelle Appleton"
								className="rounded-full h-10 w-10"
							/>
							<div className="flex flex-col">
								<h2 className="text-blue-dark_gray font-bold">
									Michelle Appleton
								</h2>
								<h3 className="text-sm text-blue-desaturated/80">
									28 Jun 2020
								</h3>
							</div>
						</div>
						<div className="rounded-full p-3 py-3 bg-blue-light">
							<img
								src="/icon-share.svg"
								alt="Share"
								className="cursor-pointer"
								onClick={() => setIsShareOpen(!isShareOpen)}
							/>
						</div>
					</footer>
				</div>
			</main>
			<div className="text-center pt-4 justify-self-end">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href="https://github.com/guilhermefigueira"
					target="_blank"
					className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg hover:tracking-widest transition-all "
				>
					Guilherme Figueira
				</a>
				.
			</div>
		</div>
	);
}

export default App;
