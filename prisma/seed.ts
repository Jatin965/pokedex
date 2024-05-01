import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const pokemonData = [
  {
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
  },
  {
    name: "Ivysaur",
    types: ["Grass", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/ivysaur.jpg",
  },
  {
    name: "Venusaur",
    types: ["Grass", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/venusaur.jpg",
  },
  {
    name: "Charmander",
    types: ["Fire"],
    sprite: "https://img.pokemondb.net/artwork/charmander.jpg",
  },
  {
    name: "Charmeleon",
    types: ["Fire"],
    sprite: "https://img.pokemondb.net/artwork/charmeleon.jpg",
  },
  {
    name: "Charizard",
    types: ["Fire", "Flying"],
    sprite: "https://img.pokemondb.net/artwork/charizard.jpg",
  },
  {
    name: "Squirtle",
    types: ["Water"],
    sprite: "https://img.pokemondb.net/artwork/squirtle.jpg",
  },
  {
    name: "Wartortle",
    types: ["Water"],
    sprite: "https://img.pokemondb.net/artwork/wartortle.jpg",
  },
  {
    name: "Blastoise",
    types: ["Water"],
    sprite: "https://img.pokemondb.net/artwork/blastoise.jpg",
  },
  {
    name: "Caterpie",
    types: ["Bug"],
    sprite: "https://img.pokemondb.net/artwork/caterpie.jpg",
  },
  {
    name: "Metapod",
    types: ["Bug"],
    sprite: "https://img.pokemondb.net/artwork/metapod.jpg",
  },
  {
    name: "Butterfree",
    types: ["Bug", "Flying"],
    sprite: "https://img.pokemondb.net/artwork/butterfree.jpg",
  },
  {
    name: "Weedle",
    types: ["Bug", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/weedle.jpg",
  },
  {
    name: "Kakuna",
    types: ["Bug", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/kakuna.jpg",
  },
  {
    name: "Beedrill",
    types: ["Bug", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/beedrill.jpg",
  },
  {
    name: "Pidgey",
    types: ["Normal", "Flying"],
    sprite: "https://img.pokemondb.net/artwork/pidgey.jpg",
  },
  {
    name: "Pidgeotto",
    types: ["Normal", "Flying"],
    sprite: "https://img.pokemondb.net/artwork/pidgeotto.jpg",
  },
  {
    name: "Pidgeot",
    types: ["Normal", "Flying"],
    sprite: "https://img.pokemondb.net/artwork/pidgeot.jpg",
  },
  {
    name: "Rattata",
    types: ["Normal"],
    sprite: "https://img.pokemondb.net/artwork/rattata.jpg",
  },
  {
    name: "Raticate",
    types: ["Normal"],
    sprite: "https://img.pokemondb.net/artwork/raticate.jpg",
  },
  {
    name: "Spearow",
    types: ["Normal", "Flying"],
    sprite: "https://img.pokemondb.net/artwork/spearow.jpg",
  },
  {
    name: "Fearow",
    types: ["Normal", "Flying"],
    sprite: "https://img.pokemondb.net/artwork/fearow.jpg",
  },
  {
    name: "Ekans",
    types: ["Poison"],
    sprite: "https://img.pokemondb.net/artwork/ekans.jpg",
  },
  {
    name: "Arbok",
    types: ["Poison"],
    sprite: "https://img.pokemondb.net/artwork/arbok.jpg",
  },
  {
    name: "Pikachu",
    types: ["Electric"],
    sprite: "https://img.pokemondb.net/artwork/pikachu.jpg",
  },
  {
    name: "Raichu",
    types: ["Electric"],
    sprite: "https://img.pokemondb.net/artwork/raichu.jpg",
  },
  {
    name: "Sandshrew",
    types: ["Ground"],
    sprite: "https://img.pokemondb.net/artwork/sandshrew.jpg",
  },
  {
    name: "Sandslash",
    types: ["Ground"],
    sprite: "https://img.pokemondb.net/artwork/sandslash.jpg",
  },
  {
    name: "Nidoran♀",
    types: ["Poison"],
    sprite: "https://img.pokemondb.net/artwork/nidoranf.jpg",
  },
  {
    name: "Nidorina",
    types: ["Poison"],
    sprite: "https://img.pokemondb.net/artwork/nidorina.jpg",
  },
  {
    name: "Nidoqueen",
    types: ["Poison", "Ground"],
    sprite: "https://img.pokemondb.net/artwork/nidoqueen.jpg",
  },
  {
    name: "Nidoran♂",
    types: ["Poison"],
    sprite: "https://img.pokemondb.net/artwork/nidoranm.jpg",
  },
  {
    name: "Nidorino",
    types: ["Poison"],
    sprite: "https://img.pokemondb.net/artwork/nidorino.jpg",
  },
  {
    name: "Nidoking",
    types: ["Poison", "Ground"],
    sprite: "https://img.pokemondb.net/artwork/nidoking.jpg",
  },
  {
    name: "Clefairy",
    types: ["Fairy"],
    sprite: "https://img.pokemondb.net/artwork/clefairy.jpg",
  },
  {
    name: "Clefable",
    types: ["Fairy"],
    sprite: "https://img.pokemondb.net/artwork/clefable.jpg",
  },
  {
    name: "Vulpix",
    types: ["Fire"],
    sprite: "https://img.pokemondb.net/artwork/vulpix.jpg",
  },
  {
    name: "Ninetales",
    types: ["Fire"],
    sprite: "https://img.pokemondb.net/artwork/ninetales.jpg",
  },
  {
    name: "Jigglypuff",
    types: ["Normal", "Fairy"],
    sprite: "https://img.pokemondb.net/artwork/jigglypuff.jpg",
  },
  {
    name: "Wigglytuff",
    types: ["Normal", "Fairy"],
    sprite: "https://img.pokemondb.net/artwork/wigglytuff.jpg",
  },
  {
    name: "Zubat",
    types: ["Poison", "Flying"],
    sprite: "https://img.pokemondb.net/artwork/zubat.jpg",
  },
  {
    name: "Golbat",
    types: ["Poison", "Flying"],
    sprite: "https://img.pokemondb.net/artwork/golbat.jpg",
  },
  {
    name: "Oddish",
    types: ["Grass", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/oddish.jpg",
  },
  {
    name: "Gloom",
    types: ["Grass", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/gloom.jpg",
  },
  {
    name: "Vileplume",
    types: ["Grass", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/vileplume.jpg",
  },
  {
    name: "Paras",
    types: ["Bug", "Grass"],
    sprite: "https://img.pokemondb.net/artwork/paras.jpg",
  },
  {
    name: "Parasect",
    types: ["Bug", "Grass"],
    sprite: "https://img.pokemondb.net/artwork/parasect.jpg",
  },
  {
    name: "Venonat",
    types: ["Bug", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/venonat.jpg",
  },
  {
    name: "Venomoth",
    types: ["Bug", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/venomoth.jpg",
  },
  {
    name: "Diglett",
    types: ["Ground"],
    sprite: "https://img.pokemondb.net/artwork/diglett.jpg",
  },
  {
    name: "Dugtrio",
    types: ["Ground"],
    sprite: "https://img.pokemondb.net/artwork/dugtrio.jpg",
  },
  {
    name: "Meowth",
    types: ["Normal"],
    sprite: "https://img.pokemondb.net/artwork/meowth.jpg",
  },
  {
    name: "Persian",
    types: ["Normal"],
    sprite: "https://img.pokemondb.net/artwork/persian.jpg",
  },
  {
    name: "Psyduck",
    types: ["Water"],
    sprite: "https://img.pokemondb.net/artwork/psyduck.jpg",
  },
  {
    name: "Golduck",
    types: ["Water"],
    sprite: "https://img.pokemondb.net/artwork/golduck.jpg",
  },
  {
    name: "Mankey",
    types: ["Fighting"],
    sprite: "https://img.pokemondb.net/artwork/mankey.jpg",
  },
  {
    name: "Primeape",
    types: ["Fighting"],
    sprite: "https://img.pokemondb.net/artwork/primeape.jpg",
  },
  {
    name: "Growlithe",
    types: ["Fire"],
    sprite: "https://img.pokemondb.net/artwork/growlithe.jpg",
  },
  {
    name: "Arcanine",
    types: ["Fire"],
    sprite: "https://img.pokemondb.net/artwork/arcanine.jpg",
  },
  {
    name: "Poliwag",
    types: ["Water"],
    sprite: "https://img.pokemondb.net/artwork/poliwag.jpg",
  },
  {
    name: "Poliwhirl",
    types: ["Water"],
    sprite: "https://img.pokemondb.net/artwork/poliwhirl.jpg",
  },
  {
    name: "Poliwrath",
    types: ["Water", "Fighting"],
    sprite: "https://img.pokemondb.net/artwork/poliwrath.jpg",
  },
  {
    name: "Abra",
    types: ["Psychic"],
    sprite: "https://img.pokemondb.net/artwork/abra.jpg",
  },
  {
    name: "Kadabra",
    types: ["Psychic"],
    sprite: "https://img.pokemondb.net/artwork/kadabra.jpg",
  },
  {
    name: "Alakazam",
    types: ["Psychic"],
    sprite: "https://img.pokemondb.net/artwork/alakazam.jpg",
  },
  {
    name: "Machop",
    types: ["Fighting"],
    sprite: "https://img.pokemondb.net/artwork/machop.jpg",
  },
  {
    name: "Machoke",
    types: ["Fighting"],
    sprite: "https://img.pokemondb.net/artwork/machoke.jpg",
  },
  {
    name: "Machamp",
    types: ["Fighting"],
    sprite: "https://img.pokemondb.net/artwork/machamp.jpg",
  },
  {
    name: "Bellsprout",
    types: ["Grass", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/bellsprout.jpg",
  },
  {
    name: "Weepinbell",
    types: ["Grass", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/weepinbell.jpg",
  },
  {
    name: "Victreebel",
    types: ["Grass", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/victreebel.jpg",
  },
  {
    name: "Tentacool",
    types: ["Water", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/tentacool.jpg",
  },
  {
    name: "Tentacruel",
    types: ["Water", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/tentacruel.jpg",
  },
  {
    name: "Geodude",
    types: ["Rock", "Ground"],
    sprite: "https://img.pokemondb.net/artwork/geodude.jpg",
  },
  {
    name: "Graveler",
    types: ["Rock", "Ground"],
    sprite: "https://img.pokemondb.net/artwork/graveler.jpg",
  },
  {
    name: "Golem",
    types: ["Rock", "Ground"],
    sprite: "https://img.pokemondb.net/artwork/golem.jpg",
  },
  {
    name: "Ponyta",
    types: ["Fire"],
    sprite: "https://img.pokemondb.net/artwork/ponyta.jpg",
  },
  {
    name: "Rapidash",
    types: ["Fire"],
    sprite: "https://img.pokemondb.net/artwork/rapidash.jpg",
  },
  {
    name: "Slowpoke",
    types: ["Water", "Psychic"],
    sprite: "https://img.pokemondb.net/artwork/slowpoke.jpg",
  },
  {
    name: "Slowbro",
    types: ["Water", "Psychic"],
    sprite: "https://img.pokemondb.net/artwork/slowbro.jpg",
  },
  {
    name: "Magnemite",
    types: ["Electric", "Steel"],
    sprite: "https://img.pokemondb.net/artwork/magnemite.jpg",
  },
  {
    name: "Magneton",
    types: ["Electric", "Steel"],
    sprite: "https://img.pokemondb.net/artwork/magneton.jpg",
  },
  {
    name: "Farfetch'd",
    types: ["Normal", "Flying"],
    sprite: "https://img.pokemondb.net/artwork/farfetchd.jpg",
  },
  {
    name: "Doduo",
    types: ["Normal", "Flying"],
    sprite: "https://img.pokemondb.net/artwork/doduo.jpg",
  },
  {
    name: "Dodrio",
    types: ["Normal", "Flying"],
    sprite: "https://img.pokemondb.net/artwork/dodrio.jpg",
  },
  {
    name: "Seel",
    types: ["Water"],
    sprite: "https://img.pokemondb.net/artwork/seel.jpg",
  },
  {
    name: "Dewgong",
    types: ["Water", "Ice"],
    sprite: "https://img.pokemondb.net/artwork/dewgong.jpg",
  },
  {
    name: "Grimer",
    types: ["Poison"],
    sprite: "https://img.pokemondb.net/artwork/grimer.jpg",
  },
  {
    name: "Muk",
    types: ["Poison"],
    sprite: "https://img.pokemondb.net/artwork/muk.jpg",
  },
  {
    name: "Shellder",
    types: ["Water"],
    sprite: "https://img.pokemondb.net/artwork/shellder.jpg",
  },
  {
    name: "Cloyster",
    types: ["Water", "Ice"],
    sprite: "https://img.pokemondb.net/artwork/cloyster.jpg",
  },
  {
    name: "Gastly",
    types: ["Ghost", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/gastly.jpg",
  },
  {
    name: "Haunter",
    types: ["Ghost", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/haunter.jpg",
  },
  {
    name: "Gengar",
    types: ["Ghost", "Poison"],
    sprite: "https://img.pokemondb.net/artwork/gengar.jpg",
  },
  {
    name: "Onix",
    types: ["Rock", "Ground"],
    sprite: "https://img.pokemondb.net/artwork/onix.jpg",
  },
  {
    name: "Drowzee",
    types: ["Psychic"],
    sprite: "https://img.pokemondb.net/artwork/drowzee.jpg",
  },
  {
    name: "Hypno",
    types: ["Psychic"],
    sprite: "https://img.pokemondb.net/artwork/hypno.jpg",
  },
  {
    name: "Krabby",
    types: ["Water"],
    sprite: "https://img.pokemondb.net/artwork/krabby.jpg",
  },
  {
    name: "Kingler",
    types: ["Water"],
    sprite: "https://img.pokemondb.net/artwork/kingler.jpg",
  },
  {
    name: "Voltorb",
    types: ["Electric"],
    sprite: "https://img.pokemondb.net/artwork/voltorb.jpg",
  },
  {
    name: "Electrode",
    types: ["Electric"],
    sprite: "https://img.pokemondb.net/artwork/electrode.jpg",
  },
  {
    name: "Exeggcute",
    types: ["Grass", "Psychic"],
    sprite: "https://img.pokemondb.net/artwork/exeggcute.jpg",
  },
  {
    name: "Exeggutor",
    types: ["Grass", "Psychic"],
    sprite: "https://img.pokemondb.net/artwork/exeggutor.jpg",
  },
  {
    name: "Cubone",
    types: ["Ground"],
    sprite: "https://img.pokemondb.net/artwork/cubone.jpg",
  },
  {
    name: "Marowak",
    types: ["Ground"],
    sprite: "https://img.pokemondb.net/artwork/marowak.jpg",
  },
  {
    name: "Hitmonlee",
    types: ["Fighting"],
    sprite: "https://img.pokemondb.net/artwork/hitmonlee.jpg",
  },
  {
    name: "Hitmonchan",
    types: ["Fighting"],
    sprite: "https://img.pokemondb.net/artwork/hitmonchan.jpg",
  },
  {
    name: "Lickitung",
    types: ["Normal"],
    sprite: "https://img.pokemondb.net/artwork/lickitung.jpg",
  },
  {
    name: "Koffing",
    types: ["Poison"],
    sprite: "https://img.pokemondb.net/artwork/koffing.jpg",
  },
  {
    name: "Weezing",
    types: ["Poison"],
    sprite: "https://img.pokemondb.net/artwork/weezing.jpg",
  },
  {
    name: "Rhyhorn",
    types: ["Ground", "Rock"],
    sprite: "https://img.pokemondb.net/artwork/rhyhorn.jpg",
  },
  {
    name: "Rhydon",
    types: ["Ground", "Rock"],
    sprite: "https://img.pokemondb.net/artwork/rhydon.jpg",
  },
  {
    name: "Chansey",
    types: ["Normal"],
    sprite: "https://img.pokemondb.net/artwork/chansey.jpg",
  },
  {
    name: "Tangela",
    types: ["Grass"],
    sprite: "https://img.pokemondb.net/artwork/tangela.jpg",
  },
  {
    name: "Kangaskhan",
    types: ["Normal"],
    sprite: "https://img.pokemondb.net/artwork/kangaskhan.jpg",
  },
  {
    name: "Horsea",
    types: ["Water"],
    sprite: "https://img.pokemondb.net/artwork/horsea.jpg",
  },
  {
    name: "Seadra",
    types: ["Water"],
    sprite: "https://img.pokemondb.net/artwork/seadra.jpg",
  },
];

async function main() {
  for (const { name, types, sprite } of pokemonData) {
    await prisma.pokemon.create({
      data: {
        name,
        types: JSON.stringify(types), // Store types as a JSON string
        sprite,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
