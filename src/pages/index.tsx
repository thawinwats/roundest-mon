export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-center mb-2">Witch Pokémon Rounder?</div>
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-14 h-16 bg-slate-200"></div>
        <div className="p-8">VS</div>
        <div className="w-14 h-16 bg-slate-200"></div>
      </div>
    </div>
  )
}
