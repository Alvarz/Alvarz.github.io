
const baseTestRomURL = 'https://www.emulatorjs.com'

function baseEmulator(game, clientId = 1, player = '#game'){
	EJS_player = player;
    	EJS_core = game.core;
	EJS_biosUrl = game.bios || ''; // Url to Bios file
    	EJS_gameUrl = game.url; // Url to Game rom 
    	EJS_gameID = clientId; // ID in your website, required for netplay.
	EJS_mouse = false; // SNES Mouse
    	EJS_multitap = false; // SNES Multitap
      	EJS_gameID = clientId; // ID in your website, required for netplay.
}


const consoles = ['nes', 'snes', 'gb', 'gba', 'vb', 'n64', 'nds', 'segaMS',
 'segaGG', 'segaMD', 'sega32x', 'segaSaturn', 'segaCD', 'atari2600', 'atari7800', 'lynx',
'jaguar', 'ws', 'msx', 'ngp', 'pce', '3do', 'psx', 'arcade'
]


const needBios = ['segaCD', 'msx', 'pce', '3do', 'psx', 'arcade']


const games = [
{
	url: `${baseTestRomURL}/roms/mega_mountain.nes`,
	core:'nes'
},
{
	url: `${baseTestRomURL}/roms/snes/Super Boss Gaiden (J).7z`,
	core:'snes'
},
{
	url: `${baseTestRomURL}/roms/gb/dangan v1.1.zip`,
	core:'gb'
},
{
	url: `${baseTestRomURL}/roms/gba/BombOAMan Game_by_Nokturn_and_SimonB_-_Version_02_(PD).zip`,
	core:'gba'
},

{
	url: `${baseTestRomURL}/roms/vb/VB Racing (FlashBoy Version) (PVBCC).zip`,
	core:'vb'
},
{
	url: `${baseTestRomURL}/roms/md/uwol_quest_for_money.zip`,
	core:'segaMD'
},
{
	url: `${baseTestRomURL}/roms/a2600/wall_jump_ninja_20141129.bin`,
	core:'atari2600'
},
]





