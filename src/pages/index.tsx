/* eslint-disable @next/next/no-img-element */
// import Image from "next/image"
import { getOptionsForVote } from "@/utils/getRandomPokemon"
import { trpc } from "@/utils/trpc"

export default function Home() {
  const [first, second] = getOptionsForVote()

  const firstPokemon = trpc.getPokemonById.useQuery({ id: first })
  const secondPokemon = trpc.getPokemonById.useQuery({ id: second })

  if (firstPokemon.isLoading || secondPokemon.isLoading) return null

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-center mb-2">Witch Pokémon Rounder?</div>
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-64 h-64 flex flex-col">
          {firstPokemon.data?.sprites.front_default && (
            <>
              <img
                src={firstPokemon.data.sprites.front_default}
                alt={firstPokemon.data.name}
                className="w-full"
                // layout="fill"
              />
              <div className="text-xl text-center capitalize mt-[-2rem]">
                {firstPokemon.data.name}
              </div>
            </>
          )}
        </div>

        <div className="p-8">VS</div>

        <div className="w-64 h-64 flex flex-col">
          {secondPokemon.data?.sprites.front_default && (
            <>
              <img
                src={secondPokemon.data.sprites.front_default}
                alt={secondPokemon.data.name}
                className="w-full"
                // layout="fill"
              />
              <div className="text-xl text-center capitalize mt-[-2rem]">
                {secondPokemon.data?.name}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
