export const Formats: FormatList = [

	// Hallowed Fantasy
	///////////////////////////////////////////////////////////////////

	{
		section: "Hallowed Fantasy",
	},
	{
		name: "HF OU",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Darkrai', 'Darmanitan-Galar',
			'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega',
			'Lugia', 'Lunala', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra',
			'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Tornadus-Therian', 'Urshifu-Base',
			'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "HF UU",
		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex'],
		banlist: [
			// National Dex OU
			'Blissey', 'Chansey', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Clefable', 'Corviknight', 'Excadrill', 'Ferrothorn',
			'Garchomp', 'Gliscor', 'Greninja', 'Heatran', 'Kartana', 'Kommo-o', 'Landorus-Therian', 'Lopunny-Mega', 'Magearna', 'Magnezone',
			'Mawile-Mega', 'Medicham-Mega', 'Pelipper', 'Rillaboom', 'Scizor-Mega', 'Serperior', 'Slowbro-Base', 'Swampert-Mega', 'Tangrowth',
			'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Toxapex', 'Tyranitar', 'Volcarona', 'Zapdos-Base',
			'nduubl', // National Dex UUBL
			'Aerodactyl-Mega', 'Arcanine-HF', 'Azumarill', 'Blacephalon', 'Diancie-Mega', 'Gallade-Mega', 'Gardevoir-Mega', 'Gengar', 'Gyarados', 'Hawlucha',
			'Heracross-Mega', 'Hydreigon', 'Kyurem', 'Latias', 'Latias-Mega', 'Latios', 'Manaphy', 'Pinsir-Mega', 'Slowbro-Mega', 'Thundurus',
			'Venusaur-Mega', 'Victini', 'Xurkitree', 'Zapdos-Galar', 'Drizzle', 'Drought',
			// Slowbronite is banned so it doesn't validate on Galarian Slowbro
			'Slowbronite',
		],
		// Used to distinguish UU from below UU in the client
		restricted: [
			'Absol-Mega', 'Aegislash', 'Aggron-Mega', 'Altaria-Mega', 'Amoonguss', 'Beedrill-Mega', 'Bisharp', 'Breloom', 'Buzzwole', 'Celesteela',
			'Chesnaught', 'Crobat', 'Donphan', 'Dragonite', 'Hippowdon', 'Honchkrow', 'Hoopa-Unbound', 'Infernape', 'Jirachi', 'Keldeo', 'Krookodile',
			'Mamoswine', 'Mandibuzz', 'Manectric-Mega', 'Melmetal', 'Mew', 'Mienshao', 'Moltres-Base', 'Nihilego', 'Porygon2', 'Regieleki', 'Ribombee',
			'Rotom-Heat', 'Rotom-Wash', 'Sableye-Mega', 'Scizor', 'Shuckle', 'Skarmory', 'Slowking', 'Slowking-Galar', 'Staraptor', 'Swampert', 'Umbreon',
			'Urshifu-Rapid-Strike', 'Weavile',
		],
	},
	{
		name: "HF Monotype",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677638/">National Dex Monotype Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677637/">National Dex Monotype Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677636/">National Dex Monotype Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Arceus', 'Blastoise-Mega', 'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dracovish', 'Dragapult',
			'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo',
			'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo',
			'Spectrier', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Battle Bond', 'Moody', 'Power Construct', 'Shadow Tag', 'Damp Rock', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "HF Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672423/">National Dex AG</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex'],
	},
	{
		name: "HF DOU",
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Darkrai', 'Darmanitan-Galar',
			'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega',
			'Lugia', 'Lunala', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra',
			'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Tornadus-Therian', 'Urshifu-Base',
			'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
];
