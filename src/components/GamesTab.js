import { useState } from "react"
import { useNavigate } from "react-router-dom"

const GamesTab = () => {
    const [selectedGenre, setSelectedGenre] = useState(null)
    const Survival = ['minecraft','rust','zomboid']
    const Sandbox = ['minecraft','rust','valheim','satisfactory','factorio','palworld', 'zomboid']
    const Shooter = ['helldivers2']
    const Coop = ['helldivers2','minecraft','rust','valheim','zomboid']
    
    const getImagePath = (game) => `/images/games/${game}.jpg`

    const navigate = useNavigate();

  return (
    <div className="mb-10">
        <div className="mt-6 w-full flex place-items-center justify-center text-white font-jersey text-6xl">
        Game servers on offer
        </div>
        <div className="flex space-x-32">
            <div className="mt-10 ml-10 w-40 flex flex-col">
                <div className="mt-10 font-jersey text-white text-center text-4xl border-2 border-transparent hover:border-cyan-300 hover:border-2 cursor-pointer" onClick={() => setSelectedGenre("Survival")}>
                    Survival
                </div>
                <div className="mt-10 font-jersey text-white text-center text-4xl border-2 border-transparent hover:border-cyan-300 hover:border-2 cursor-pointer" onClick={() => setSelectedGenre("Sandbox")}>
                    Sandbox
                </div>
                <div className="mt-10 font-jersey text-white text-center text-4xl border-2 border-transparent hover:border-cyan-300 hover:border-2 cursor-pointer" onClick={() => setSelectedGenre("Shooter")}>
                    Shooter
                </div>
                <div className="mt-10 font-jersey text-white text-center text-4xl border-2 border-transparent hover:border-cyan-300 hover:border-2 cursor-pointer" onClick={() => setSelectedGenre("Coop")}>
                    Co-op
                </div>
            </div>
            {selectedGenre !== null && (
            <div className="grid grid-cols-3 gap-4 mt-6">
                {selectedGenre === "Survival" && Survival.map((game) => (
                    <img key={game} src={getImagePath(game)} alt={game} className="w-full h-auto border-transparent hover:border-cyan-300 hover:border-2 cursor-pointer" onClick={() => navigate(`/games/${game}`)} />
                ))}
                {selectedGenre === "Sandbox" && Sandbox.map((game) => (
                    <img key={game} src={getImagePath(game)} alt={game} className="w-full h-auto border-transparent hover:border-cyan-300 hover:border-2 cursor-pointer" onClick={() => navigate(`/games/${game}`)} />
                ))}
                {selectedGenre === "Shooter" && Shooter.map((game) => (
                    <img key={game} src={getImagePath(game)} alt={game} className="w-full h-auto border-transparent hover:border-cyan-300 hover:border-2 cursor-pointer" onClick={() => navigate(`/games/${game}`)} />
                ))}
                {selectedGenre === "Coop" && Coop.map((game) => (
                    <img key={game} src={getImagePath(game)} alt={game} className="w-full h-auto border-transparent hover:border-cyan-300 hover:border-2 cursor-pointer" onClick={() => navigate(`/games/${game}`)} />
                ))}
            </div>
            )}
        </div>
    </div>
  )
}
export default GamesTab