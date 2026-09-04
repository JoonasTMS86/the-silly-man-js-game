var deviceWidth, deviceHeight, mainGfxBufferSdata, doubleGfxBufferSdata, gfx_energyBarSdata,
gametitleClownSpriteFrame, gametitleClownSpriteTimer, titleScrollTextX,
currentScreen, playerX, playerY, playerAnimFrame, playerFaceDir,
playerState, jumpDeltaPos, score, energy, lives, deadTimer;
var fullSizeWidth                            = 1910; // Width of screen when the game is played on a screen with 1920 x 1080 resolution capability.
var fullSizeHeight                           = 909; // Height of screen when the game is played on a screen with 1920 x 1080 resolution capability.
var keyDown                                  = false;
var upArrowPressed                           = false;
var downArrowPressed                         = false;
var leftArrowPressed                         = false;
var rightArrowPressed                        = false;
var spacePressed                             = false;
var cPressed                                 = false;
var dPressed                                 = false;
var xPressed                                 = false;
var zPressed                                 = false;
var mustReleaseAnyKey                        = false;
var mustReleaseKeyC                          = false;
var mustReleaseKeyD                          = false;
var mustReleaseKeyX                          = false;
var mustReleaseKeyZ                          = false;
var mainGfxBuffer                            = document.getElementById("mainGfxBuffer");
var mainGfxBufferCtx                         = mainGfxBuffer.getContext("2d");
var doubleGfxBuffer                          = document.getElementById("doubleGfxBuffer");
var doubleGfxBufferCtx                       = doubleGfxBuffer.getContext("2d");
var gfxScaledToCurrentDeviceResolutionBuffer = document.getElementById("gfxScaledToCurrentDeviceResolutionBuffer");
var gfxScaledToCurrentDeviceResolutionCtx    = gfxScaledToCurrentDeviceResolutionBuffer.getContext("2d");
var gfxScaledToCurrentDeviceResolutionSdata  = gfxScaledToCurrentDeviceResolutionCtx.createImageData(1910, 909);
var gfx_gametitlebgSprite                    = document.getElementById("gfx_gametitlebg");
var gfx_gametitleletter1Buffer               = document.getElementById("gfx_gametitleletter1Buffer");
var gfx_gametitleletter1Ctx                  = gfx_gametitleletter1Buffer.getContext("2d");
var gfx_gametitleletter1Sdata                = gfx_gametitleletter1Ctx.createImageData(370, 336);
var gfx_gametitleletter1Sprite               = document.getElementById("gfx_gametitleletter1");
var gfx_gametitleletter2Buffer               = document.getElementById("gfx_gametitleletter2Buffer");
var gfx_gametitleletter2Ctx                  = gfx_gametitleletter2Buffer.getContext("2d");
var gfx_gametitleletter2Sdata                = gfx_gametitleletter2Ctx.createImageData(370, 336);
var gfx_gametitleletter2Sprite               = document.getElementById("gfx_gametitleletter2");
var gfx_gametitleletter3Buffer               = document.getElementById("gfx_gametitleletter3Buffer");
var gfx_gametitleletter3Ctx                  = gfx_gametitleletter3Buffer.getContext("2d");
var gfx_gametitleletter3Sdata                = gfx_gametitleletter3Ctx.createImageData(370, 336);
var gfx_gametitleletter3Sprite               = document.getElementById("gfx_gametitleletter3");
var gfx_gametitleletter4Buffer               = document.getElementById("gfx_gametitleletter4Buffer");
var gfx_gametitleletter4Ctx                  = gfx_gametitleletter4Buffer.getContext("2d");
var gfx_gametitleletter4Sdata                = gfx_gametitleletter4Ctx.createImageData(370, 336);
var gfx_gametitleletter4Sprite               = document.getElementById("gfx_gametitleletter4");
var gfx_gametitleletter5Buffer               = document.getElementById("gfx_gametitleletter5Buffer");
var gfx_gametitleletter5Ctx                  = gfx_gametitleletter5Buffer.getContext("2d");
var gfx_gametitleletter5Sdata                = gfx_gametitleletter5Ctx.createImageData(370, 336);
var gfx_gametitleletter5Sprite               = document.getElementById("gfx_gametitleletter5");
var gfx_gametitleletter6Buffer               = document.getElementById("gfx_gametitleletter6Buffer");
var gfx_gametitleletter6Ctx                  = gfx_gametitleletter6Buffer.getContext("2d");
var gfx_gametitleletter6Sdata                = gfx_gametitleletter6Ctx.createImageData(370, 336);
var gfx_gametitleletter6Sprite               = document.getElementById("gfx_gametitleletter6");
var gfx_gametitleletter7Buffer               = document.getElementById("gfx_gametitleletter7Buffer");
var gfx_gametitleletter7Ctx                  = gfx_gametitleletter7Buffer.getContext("2d");
var gfx_gametitleletter7Sdata                = gfx_gametitleletter7Ctx.createImageData(370, 336);
var gfx_gametitleletter7Sprite               = document.getElementById("gfx_gametitleletter7");
var gfx_gametitleletter8Buffer               = document.getElementById("gfx_gametitleletter8Buffer");
var gfx_gametitleletter8Ctx                  = gfx_gametitleletter8Buffer.getContext("2d");
var gfx_gametitleletter8Sdata                = gfx_gametitleletter8Ctx.createImageData(370, 336);
var gfx_gametitleletter8Sprite               = document.getElementById("gfx_gametitleletter8");
var gfx_gametitleletter9Buffer               = document.getElementById("gfx_gametitleletter9Buffer");
var gfx_gametitleletter9Ctx                  = gfx_gametitleletter9Buffer.getContext("2d");
var gfx_gametitleletter9Sdata                = gfx_gametitleletter9Ctx.createImageData(370, 336);
var gfx_gametitleletter9Sprite               = document.getElementById("gfx_gametitleletter9");
var gfx_gametitleletter10Buffer              = document.getElementById("gfx_gametitleletter10Buffer");
var gfx_gametitleletter10Ctx                 = gfx_gametitleletter10Buffer.getContext("2d");
var gfx_gametitleletter10Sdata               = gfx_gametitleletter10Ctx.createImageData(370, 336);
var gfx_gametitleletter10Sprite              = document.getElementById("gfx_gametitleletter10");
var gfx_gametitleletter11Buffer              = document.getElementById("gfx_gametitleletter11Buffer");
var gfx_gametitleletter11Ctx                 = gfx_gametitleletter11Buffer.getContext("2d");
var gfx_gametitleletter11Sdata               = gfx_gametitleletter11Ctx.createImageData(370, 336);
var gfx_gametitleletter11Sprite              = document.getElementById("gfx_gametitleletter11");
var gfx_gametitleclownframe1Buffer           = document.getElementById("gfx_gametitleclownframe1Buffer");
var gfx_gametitleclownframe1Ctx              = gfx_gametitleclownframe1Buffer.getContext("2d");
var gfx_gametitleclownframe1Sdata            = gfx_gametitleclownframe1Ctx.createImageData(406, 573);
var gfx_gametitleclownframe1Sprite           = document.getElementById("gfx_gametitleclownframe1");
var gfx_gametitleclownframe2Buffer           = document.getElementById("gfx_gametitleclownframe2Buffer");
var gfx_gametitleclownframe2Ctx              = gfx_gametitleclownframe2Buffer.getContext("2d");
var gfx_gametitleclownframe2Sdata            = gfx_gametitleclownframe2Ctx.createImageData(406, 573);
var gfx_gametitleclownframe2Sprite           = document.getElementById("gfx_gametitleclownframe2");
var gfx_gametitleclownframe3Buffer           = document.getElementById("gfx_gametitleclownframe3Buffer");
var gfx_gametitleclownframe3Ctx              = gfx_gametitleclownframe3Buffer.getContext("2d");
var gfx_gametitleclownframe3Sdata            = gfx_gametitleclownframe3Ctx.createImageData(406, 573);
var gfx_gametitleclownframe3Sprite           = document.getElementById("gfx_gametitleclownframe3");
var gfx_gametitleclownframe4Buffer           = document.getElementById("gfx_gametitleclownframe4Buffer");
var gfx_gametitleclownframe4Ctx              = gfx_gametitleclownframe4Buffer.getContext("2d");
var gfx_gametitleclownframe4Sdata            = gfx_gametitleclownframe4Ctx.createImageData(406, 573);
var gfx_gametitleclownframe4Sprite           = document.getElementById("gfx_gametitleclownframe4");
var gfx_backgroundSprite                     = document.getElementById("gfx_background");
var gfx_facingeBuffer                        = document.getElementById("gfx_facingeBuffer");
var gfx_facingeCtx                           = gfx_facingeBuffer.getContext("2d");
var gfx_facingeSdata                         = gfx_facingeCtx.createImageData(228, 345);
var gfx_facingeSprite                        = document.getElementById("gfx_facinge");
var gfx_walke1Buffer                         = document.getElementById("gfx_walke1Buffer");
var gfx_walke1Ctx                            = gfx_walke1Buffer.getContext("2d");
var gfx_walke1Sdata                          = gfx_walke1Ctx.createImageData(228, 345);
var gfx_walke1Sprite                         = document.getElementById("gfx_walke1");
var gfx_walke2Buffer                         = document.getElementById("gfx_walke2Buffer");
var gfx_walke2Ctx                            = gfx_walke2Buffer.getContext("2d");
var gfx_walke2Sdata                          = gfx_walke2Ctx.createImageData(228, 345);
var gfx_walke2Sprite                         = document.getElementById("gfx_walke2");
var gfx_facingwBuffer                        = document.getElementById("gfx_facingwBuffer");
var gfx_facingwCtx                           = gfx_facingwBuffer.getContext("2d");
var gfx_facingwSdata                         = gfx_facingwCtx.createImageData(228, 345);
var gfx_facingwSprite                        = document.getElementById("gfx_facingw");
var gfx_walkw1Buffer                         = document.getElementById("gfx_walkw1Buffer");
var gfx_walkw1Ctx                            = gfx_walkw1Buffer.getContext("2d");
var gfx_walkw1Sdata                          = gfx_walkw1Ctx.createImageData(228, 345);
var gfx_walkw1Sprite                         = document.getElementById("gfx_walkw1");
var gfx_walkw2Buffer                         = document.getElementById("gfx_walkw2Buffer");
var gfx_walkw2Ctx                            = gfx_walkw2Buffer.getContext("2d");
var gfx_walkw2Sdata                          = gfx_walkw2Ctx.createImageData(228, 345);
var gfx_walkw2Sprite                         = document.getElementById("gfx_walkw2");
var gfx_puncheBuffer                         = document.getElementById("gfx_puncheBuffer");
var gfx_puncheCtx                            = gfx_puncheBuffer.getContext("2d");
var gfx_puncheSdata                          = gfx_puncheCtx.createImageData(228, 345);
var gfx_puncheSprite                         = document.getElementById("gfx_punche");
var gfx_kickeBuffer                          = document.getElementById("gfx_kickeBuffer");
var gfx_kickeCtx                             = gfx_kickeBuffer.getContext("2d");
var gfx_kickeSdata                           = gfx_kickeCtx.createImageData(228, 345);
var gfx_kickeSprite                          = document.getElementById("gfx_kicke");
var gfx_punchwBuffer                         = document.getElementById("gfx_punchwBuffer");
var gfx_punchwCtx                            = gfx_punchwBuffer.getContext("2d");
var gfx_punchwSdata                          = gfx_punchwCtx.createImageData(228, 345);
var gfx_punchwSprite                         = document.getElementById("gfx_punchw");
var gfx_kickwBuffer                          = document.getElementById("gfx_kickwBuffer");
var gfx_kickwCtx                             = gfx_kickwBuffer.getContext("2d");
var gfx_kickwSdata                           = gfx_kickwCtx.createImageData(228, 345);
var gfx_kickwSprite                          = document.getElementById("gfx_kickw");
var gfx_flyingkickeBuffer                    = document.getElementById("gfx_flyingkickeBuffer");
var gfx_flyingkickeCtx                       = gfx_flyingkickeBuffer.getContext("2d");
var gfx_flyingkickeSdata                     = gfx_flyingkickeCtx.createImageData(228, 345);
var gfx_flyingkickeSprite                    = document.getElementById("gfx_flyingkicke");
var gfx_flyingkickwBuffer                    = document.getElementById("gfx_flyingkickwBuffer");
var gfx_flyingkickwCtx                       = gfx_flyingkickwBuffer.getContext("2d");
var gfx_flyingkickwSdata                     = gfx_flyingkickwCtx.createImageData(228, 345);
var gfx_flyingkickwSprite                    = document.getElementById("gfx_flyingkickw");
var gfx_knockedbackwBuffer                   = document.getElementById("gfx_knockedbackwBuffer");
var gfx_knockedbackwCtx                      = gfx_knockedbackwBuffer.getContext("2d");
var gfx_knockedbackwSdata                    = gfx_knockedbackwCtx.createImageData(228, 345);
var gfx_knockedbackwSprite                   = document.getElementById("gfx_knockedbackw");
var gfx_knockedbackeBuffer                   = document.getElementById("gfx_knockedbackeBuffer");
var gfx_knockedbackeCtx                      = gfx_knockedbackeBuffer.getContext("2d");
var gfx_knockedbackeSdata                    = gfx_knockedbackeCtx.createImageData(228, 345);
var gfx_knockedbackeSprite                   = document.getElementById("gfx_knockedbacke");
var gfx_deadBuffer                           = document.getElementById("gfx_deadBuffer");
var gfx_deadCtx                              = gfx_deadBuffer.getContext("2d");
var gfx_deadSdata                            = gfx_deadCtx.createImageData(255, 345);
var gfx_deadSprite                           = document.getElementById("gfx_dead");
var gfx_energybar1Buffer                     = document.getElementById("gfx_energybar1Buffer");
var gfx_energybar1Ctx                        = gfx_energybar1Buffer.getContext("2d");
var gfx_energybar1Sdata                      = gfx_energybar1Ctx.createImageData(73, 69);
var gfx_energybar1Sprite                     = document.getElementById("gfx_energybar1");
var gfx_energybar2Buffer                     = document.getElementById("gfx_energybar2Buffer");
var gfx_energybar2Ctx                        = gfx_energybar2Buffer.getContext("2d");
var gfx_energybar2Sdata                      = gfx_energybar2Ctx.createImageData(73, 69);
var gfx_energybar2Sprite                     = document.getElementById("gfx_energybar2");
var gfx_energybar3Buffer                     = document.getElementById("gfx_energybar3Buffer");
var gfx_energybar3Ctx                        = gfx_energybar3Buffer.getContext("2d");
var gfx_energybar3Sdata                      = gfx_energybar3Ctx.createImageData(73, 69);
var gfx_energybar3Sprite                     = document.getElementById("gfx_energybar3");
var gfx_energyBarBuffer                      = document.getElementById("gfx_energyBarBuffer");
var gfx_energyBarCtx                         = gfx_energyBarBuffer.getContext("2d");
var gfx_enemy1_flyingkickeBuffer             = document.getElementById("gfx_enemy1_flyingkickeBuffer");
var gfx_enemy1_flyingkickeCtx                = gfx_enemy1_flyingkickeBuffer.getContext("2d");
var gfx_enemy1_flyingkickeSdata              = gfx_enemy1_flyingkickeCtx.createImageData(228, 345);
var gfx_enemy1_flyingkickeSprite             = document.getElementById("gfx_enemy1_flyingkicke");
var gfx_enemy1_kickeBuffer                   = document.getElementById("gfx_enemy1_kickeBuffer");
var gfx_enemy1_kickeCtx                      = gfx_enemy1_kickeBuffer.getContext("2d");
var gfx_enemy1_kickeSdata                    = gfx_enemy1_kickeCtx.createImageData(228, 345);
var gfx_enemy1_kickeSprite                   = document.getElementById("gfx_enemy1_kicke");
var gfx_enemy1_knockedbackeBuffer            = document.getElementById("gfx_enemy1_knockedbackeBuffer");
var gfx_enemy1_knockedbackeCtx               = gfx_enemy1_knockedbackeBuffer.getContext("2d");
var gfx_enemy1_knockedbackeSdata             = gfx_enemy1_knockedbackeCtx.createImageData(228, 345);
var gfx_enemy1_knockedbackeSprite            = document.getElementById("gfx_enemy1_knockedbacke");
var gfx_enemy1_walke1Buffer                  = document.getElementById("gfx_enemy1_walke1Buffer");
var gfx_enemy1_walke1Ctx                     = gfx_enemy1_walke1Buffer.getContext("2d");
var gfx_enemy1_walke1Sdata                   = gfx_enemy1_walke1Ctx.createImageData(228, 345);
var gfx_enemy1_walke1Sprite                  = document.getElementById("gfx_enemy1_walke1");
var gfx_enemy1_walke2Buffer                  = document.getElementById("gfx_enemy1_walke2Buffer");
var gfx_enemy1_walke2Ctx                     = gfx_enemy1_walke2Buffer.getContext("2d");
var gfx_enemy1_walke2Sdata                   = gfx_enemy1_walke2Ctx.createImageData(228, 345);
var gfx_enemy1_walke2Sprite                  = document.getElementById("gfx_enemy1_walke2");
var gfx_enemy1_flyingkickwBuffer             = document.getElementById("gfx_enemy1_flyingkickwBuffer");
var gfx_enemy1_flyingkickwCtx                = gfx_enemy1_flyingkickwBuffer.getContext("2d");
var gfx_enemy1_flyingkickwSdata              = gfx_enemy1_flyingkickwCtx.createImageData(228, 345);
var gfx_enemy1_flyingkickwSprite             = document.getElementById("gfx_enemy1_flyingkickw");
var gfx_enemy1_kickwBuffer                   = document.getElementById("gfx_enemy1_kickwBuffer");
var gfx_enemy1_kickwCtx                      = gfx_enemy1_kickwBuffer.getContext("2d");
var gfx_enemy1_kickwSdata                    = gfx_enemy1_kickwCtx.createImageData(228, 345);
var gfx_enemy1_kickwSprite                   = document.getElementById("gfx_enemy1_kickw");
var gfx_enemy1_knockedbackwBuffer            = document.getElementById("gfx_enemy1_knockedbackwBuffer");
var gfx_enemy1_knockedbackwCtx               = gfx_enemy1_knockedbackwBuffer.getContext("2d");
var gfx_enemy1_knockedbackwSdata             = gfx_enemy1_knockedbackwCtx.createImageData(228, 345);
var gfx_enemy1_knockedbackwSprite            = document.getElementById("gfx_enemy1_knockedbackw");
var gfx_enemy1_walkw1Buffer                  = document.getElementById("gfx_enemy1_walkw1Buffer");
var gfx_enemy1_walkw1Ctx                     = gfx_enemy1_walkw1Buffer.getContext("2d");
var gfx_enemy1_walkw1Sdata                   = gfx_enemy1_walkw1Ctx.createImageData(228, 345);
var gfx_enemy1_walkw1Sprite                  = document.getElementById("gfx_enemy1_walkw1");
var gfx_enemy1_walkw2Buffer                  = document.getElementById("gfx_enemy1_walkw2Buffer");
var gfx_enemy1_walkw2Ctx                     = gfx_enemy1_walkw2Buffer.getContext("2d");
var gfx_enemy1_walkw2Sdata                   = gfx_enemy1_walkw2Ctx.createImageData(228, 345);
var gfx_enemy1_walkw2Sprite                  = document.getElementById("gfx_enemy1_walkw2");
var gamepadXPressed                          = false;                          // PS4 Gamepad
var gamepadOPressed                          = false;                          // PS4 Gamepad
var gamepadSquarePressed                     = false;                          // PS4 Gamepad
var gamepadTrianglePressed                   = false;                          // PS4 Gamepad
var gamepadUpPressed                         = false;                          // PS4 Gamepad
var gamepadDownPressed                       = false;                          // PS4 Gamepad
var gamepadLeftPressed                       = false;                          // PS4 Gamepad
var gamepadRightPressed                      = false;                          // PS4 Gamepad
var gamepadpresent                           = false;                          // PS4 Gamepad
var haveEvents                               = 'ongamepadconnected' in window; // PS4 Gamepad
var controllers                              = {};                             // PS4 Gamepad
var titleletterCoords                        = [
	0, 0,
	0, 0,
	0, 0,
	0, 0,
	0, 0,
	0, 0,
	0, 0,
	0, 0,
	0, 0,
	0, 0,
	0, 0
];
/*
All enemies have common properties. They are (in this order):
 - X coord
 - Y coord
 - Movement speed
 - Direction the enemy is facing (0 = E, 1 = W)
 - Current sprite frame
 - Sprite anim phase
*/
var enemy1Properties                         = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const snd_sillyman001          = new Audio("sillyman001.wav");
const snd_sillyman002          = new Audio("sillyman002.wav");
const snd_sillyman003          = new Audio("sillyman003.wav");
const snd_sillyman004          = new Audio("sillyman004.wav");
const snd_sillyman005          = new Audio("sillyman005.wav");
const snd_sillyman006          = new Audio("sillyman006.wav");
const titleletterDeltas        = [
	-5, -5,
	5, 0,
	-5, 0,
	-105, 5,
	-85, 5,
	-65, 5,
	-45, 5,
	-25, 5,
	-15, 5,
	-11, 5,
	-8, 8
];
const titleletterTargetCoords  = [
	0, 0,
	250, 0,
	500, 0,
	0, 250,
	250, 250,
	500, 250,
	750, 250,
	1000, 250,
	0, 500,
	300, 500,
	600, 500
];
const animation_playerWalkingE = [
	gfx_walke1Buffer, gfx_walke1Buffer, gfx_walke1Buffer, gfx_walke1Buffer, gfx_walke1Buffer,
	gfx_walke2Buffer, gfx_walke2Buffer, gfx_walke2Buffer, gfx_walke2Buffer, gfx_walke2Buffer
];
const animation_playerWalkingW = [
	gfx_walkw1Buffer, gfx_walkw1Buffer, gfx_walkw1Buffer, gfx_walkw1Buffer, gfx_walkw1Buffer,
	gfx_walkw2Buffer, gfx_walkw2Buffer, gfx_walkw2Buffer, gfx_walkw2Buffer, gfx_walkw2Buffer
];
const jumpDeltasX              = [
	6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6
];
const jumpDeltasY              = [
	-15, -29, -42, -54, -65, -75, -84, -92, -99, -105, -110, -114, -117, -119, -120, -120, -119, -117, -114, -110, -105, -99, -92, -84, -75, -65, -54, -42, -29, -15, 0
];
const screenLeftBoundary       = -54;
const screenRightBoundary      = 1800;
const playerMovementSpeed      = 5;
const coordXOfEnergyBar        = 400;
const coordYOfEnergyBar        = 820;
const coordXOfLives            = 180;
const coordYOfLives            = 880;
const coordXOfScore            = 880;
const coordYOfScore            = 880;

let Application = PIXI.Application,
	Container = PIXI.Container,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	TextureCache = PIXI.utils.TextureCache,
	Sprite = PIXI.Sprite;
let app = new Application(
{
	width: fullSizeWidth, 
	height: fullSizeHeight,
	antialiasing: false, 
	transparent: false, 
	resolution: 1,
	forceCanvas: true
}
);
loader
	.load(setup);

// PS4 Gamepad
function connecthandler(e) {
	gamepadpresent = true;
	addgamepad(e.gamepad);
}

// PS4 Gamepad
function addgamepad(gamepad) {
	controllers[gamepad.index] = gamepad;
	requestAnimationFrame(updateStatus);
}

// PS4 Gamepad
function disconnecthandler(e) {
	gamepadpresent = false;
	removegamepad(e.gamepad);
}

// PS4 Gamepad
function removegamepad(gamepad) {
	var d = document.getElementById("controller" + gamepad.index);
	document.body.removeChild(d);
	delete controllers[gamepad.index];
}

function setup() 
{
	// Capture the keyboard arrow keys.
	let left = keyboard(37),
	up = keyboard(38),
	right = keyboard(39),
	down = keyboard(40),
	spacebar = keyboard(32),
	keyC = keyboard(67),
	keyD = keyboard(68),
	keyX = keyboard(88),
	keyZ = keyboard(90);
	// Key "C".
	keyC.press = () =>
	{
		cPressed = true;
	};
	keyC.release = () =>
	{
		cPressed = false;
	};
	// Key "D".
	keyD.press = () =>
	{
		dPressed = true;
	};
	keyD.release = () =>
	{
		dPressed = false;
	};
	// Key "X".
	keyX.press = () =>
	{
		xPressed = true;
	};
	keyX.release = () =>
	{
		xPressed = false;
	};
	// Key "Z".
	keyZ.press = () =>
	{
		zPressed = true;
	};
	keyZ.release = () =>
	{
		zPressed = false;
	};
	// Key "Space".
	spacebar.press = () =>
	{
		spacePressed = true;
	};
	spacebar.release = () =>
	{
		spacePressed = false;
	};
	// Key "Up Arrow Key".
	up.press = () =>
	{
		upArrowPressed = true;
	};
	up.release = () =>
	{
		upArrowPressed = false;
	};
	// Key "Down Arrow Key".
	down.press = () =>
	{
		downArrowPressed = true;
	};
	down.release = () =>
	{
		downArrowPressed = false;
	};
	// Key "Left Arrow Key".
	left.press = () =>
	{
		leftArrowPressed = true;
	};
	left.release = () =>
	{
		leftArrowPressed = false;
	};
	// Key "Right Arrow Key".
	right.press = () =>
	{
		rightArrowPressed = true;
	};
	right.release = () =>
	{
		rightArrowPressed = false;
	};
	state = play;
	app.ticker.add(delta => gameLoop(delta));
}

function updateStatus()
{
	// PS4 Gamepad
	if (!haveEvents) {
		scangamepads();
	}
	var i = 0;
	var j;

	for (j in controllers) {
		var controller = controllers[j];
		var d = document.getElementById("controller" + j);
		var buttons = d.getElementsByClassName("button");
		for (i = 0; i < controller.buttons.length; i++) {
			var b = buttons[i];
			var val = controller.buttons[i];
			var pressed = val == 1.0;
			if (typeof(val) == "object") {
				pressed = val.pressed;
				val = val.value;
			}
			var pct = Math.round(val * 100) + "%";
			b.style.backgroundSize = pct + " " + pct;
			if (pressed) {
				b.className = "button pressed";
			} else {
				b.className = "button";
			}
		}
		var axes = d.getElementsByClassName("axis");
		for (i = 0; i < controller.axes.length; i++) {
			var a = axes[i];
			a.innerHTML = i + ": " + controller.axes[i].toFixed(4);
			a.setAttribute("value", controller.axes[i] + 1);
		}
	}
	requestAnimationFrame(updateStatus);
}

// PS4 Gamepad
function scangamepads() {
	var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
	for (var i = 0; i < gamepads.length; i++) {
		if (gamepads[i]) {
			if (gamepads[i].index in controllers) {
				controllers[gamepads[i].index] = gamepads[i];
			} else {
				addgamepad(gamepads[i]);
			}
		}
	}
}

function gameLoop(delta)
{
	// PS4 Gamepad
	if(gamepadpresent) {
		/*
		PS4 Gamepad buttons property:
		buttons[0] = X Button
		buttons[1] = O Button
		buttons[2] = Square Button
		buttons[3] = Triangle Button
		buttons[4] = L1 Shoulder Button
		buttons[5] = R1 Shoulder Button
		buttons[6] = L2 Shoulder Button
		buttons[7] = R2 Shoulder Button
		buttons[8] = SHARE Button
		buttons[9] = OPTIONS Button
		buttons[12] = Up Arrow
		buttons[13] = Down Arrow
		buttons[14] = Left Arrow
		buttons[15] = Right Arrow
		*/
		gamepadXPressed = false;
		gamepadOPressed = false;
		gamepadSquarePressed = false;
		gamepadTrianglePressed = false;
		gamepadUpPressed = false;
		gamepadDownPressed = false;
		gamepadLeftPressed = false;
		gamepadRightPressed = false;
		if(navigator.webkitGetGamepads) {
			var gp = navigator.webkitGetGamepads()[0];
			if(gp.buttons[0] == 1) {
				gamepadXPressed = true;
				console.log("** GAMEPAD X BUTTON PRESSED **");
			}
			if(gp.buttons[1] == 1) {
				gamepadOPressed = true;
				console.log("** GAMEPAD O BUTTON PRESSED **");
			}
			if(gp.buttons[2] == 1) {
				gamepadSquarePressed = true;
				console.log("** GAMEPAD SQUARE BUTTON PRESSED **");
			}
			if(gp.buttons[3] == 1) {
				gamepadTrianglePressed = true;
				console.log("** GAMEPAD TRIANGLE BUTTON PRESSED **");
			}
		}
		else {
			var gp = navigator.getGamepads()[0];
			if(gp.buttons[0].value > 0 || gp.buttons[0].pressed == true) {
				gamepadXPressed = true;
				console.log("** GAMEPAD X BUTTON PRESSED **");
			}
			if(gp.buttons[1].value > 0 || gp.buttons[1].pressed == true) {
				gamepadOPressed = true;
				console.log("** GAMEPAD O BUTTON PRESSED **");
			}
			if(gp.buttons[2].value > 0 || gp.buttons[2].pressed == true) {
				gamepadSquarePressed = true;
				console.log("** GAMEPAD SQUARE BUTTON PRESSED **");
			}
			if(gp.buttons[3].value > 0 || gp.buttons[3].pressed == true) {
				gamepadTrianglePressed = true;
				console.log("** GAMEPAD TRIANGLE BUTTON PRESSED **");
			}
			if(gp.axes[0] < -0.2 || gp.buttons[14].value > 0 || gp.buttons[14].pressed == true) {
				gamepadLeftPressed = true;
				console.log("** GAMEPAD LEFT DIRECTION PRESSED **");
			}
			if(gp.axes[0] > 0.6 || gp.buttons[15].value > 0 || gp.buttons[15].pressed == true) {
				gamepadRightPressed = true;
				console.log("** GAMEPAD RIGHT DIRECTION PRESSED **");
			}
			if(gp.axes[1] < -0.2 || gp.buttons[12].value > 0 || gp.buttons[12].pressed == true) {
				gamepadUpPressed = true;
				console.log("** GAMEPAD UP DIRECTION PRESSED **");
			}
			if(gp.axes[1] > 0.6 || gp.buttons[13].value > 0 || gp.buttons[13].pressed == true) {
				gamepadDownPressed = true;
				console.log("** GAMEPAD DOWN DIRECTION PRESSED **");
			}
		}
	}
	state(delta);
}

function doSpriteTransparency(givenbufferctx, givenbuffer, givenpic, keyR, keyG, keyB)
{
	var sizeofit = 4 * givenbuffer.width * givenbuffer.height;
	for(var tpPos = 0; tpPos < sizeofit; tpPos += 4)
	{
		if(givenpic.data[tpPos + 0] == keyR && givenpic.data[tpPos + 1] == keyG && givenpic.data[tpPos + 2] == keyB) {
			givenpic.data[tpPos + 3] = 0;
		}
	}
	givenbufferctx.putImageData(givenpic, 0, 0);
}

function resetTitleScreen() {
	currentScreen = 0;
	titleletterCoords[0] = 1300;
	titleletterCoords[1] = 1300;
	titleletterCoords[2] = -300;
	titleletterCoords[3] = 0;
	titleletterCoords[4] = 2100;
	titleletterCoords[5] = 0;
	titleletterCoords[6] = 2100;
	titleletterCoords[7] = -100;
	titleletterCoords[8] = 2550;
	titleletterCoords[9] = -200;
	titleletterCoords[10] = 3000;
	titleletterCoords[11] = -300;
	titleletterCoords[12] = 3450;
	titleletterCoords[13] = -400;
	titleletterCoords[14] = 3900;
	titleletterCoords[15] = -500;
	titleletterCoords[16] = 1300;
	titleletterCoords[17] = -400;
	titleletterCoords[18] = 1600;
	titleletterCoords[19] = 250;
	titleletterCoords[20] = 1900;
	titleletterCoords[21] = 0;
	gametitleClownSpriteFrame = 0;
	gametitleClownSpriteTimer = 0;
	titleScrollTextX = 1910;
	snd_sillyman001.load();
	snd_sillyman001.play();
}

window.onload = function() {

	console.log("jumpDeltasX length = " + jumpDeltasX.length);
	console.log("jumpDeltasY length = " + jumpDeltasY.length);

	// Detect the resolution of the user's device in order to scale images correctly.
	screen_width  = window.screen.availWidth;
	screen_height = window.screen.availHeight;

	console.log("SCREEN DIMENSIONS: " + screen_width + " x " + screen_height);

	var gfx1 = document.getElementById("mainGfxBuffer");
	var gfx2 = document.getElementById("doubleGfxBuffer");
	deviceWidth = screen_width - 10;
	deviceHeight = screen_height - 137;
	if(screen_height == 768) deviceHeight = 599;
	// Resolutions:
	// * 1920 x 1080 (1920 x 1046) (1910 x 909)
	// * 1366 x 768 (1366 x 736) (1356 x 599)
	// * 412 x 915 (412 x 915) (402 x 778) portrait, 915 x 412 (915 x 412) (905 x 275) landscape

	gfx1.width = deviceWidth;
	gfx1.height = deviceHeight;
	gfx2.width = deviceWidth;
	gfx2.height = deviceHeight;

	mainGfxBufferSdata = mainGfxBufferCtx.createImageData(fullSizeWidth, fullSizeHeight);
	mainGfxBufferCtx.putImageData(mainGfxBufferSdata, 0, 0);
	mainGfxBufferSdata = mainGfxBufferCtx.getImageData(0, 0, mainGfxBuffer.width, mainGfxBuffer.height);

	doubleGfxBufferSdata = doubleGfxBufferCtx.createImageData(fullSizeWidth, fullSizeHeight);
	doubleGfxBufferCtx.putImageData(doubleGfxBufferSdata, 0, 0);
	doubleGfxBufferSdata = doubleGfxBufferCtx.getImageData(0, 0, doubleGfxBuffer.width, doubleGfxBuffer.height);

	gfx_energyBarSdata = gfx_energyBarCtx.createImageData(365, 69);
	gfx_energyBarCtx.putImageData(gfx_energyBarSdata, 0, 0);
	gfx_energyBarSdata = gfx_energyBarCtx.getImageData(0, 0, gfx_energyBarBuffer.width, gfx_energyBarBuffer.height);

	for(var pos = 0; pos < 100740; pos += 4) {
		gfx_energyBarSdata.data[pos + 0] = 0;
		gfx_energyBarSdata.data[pos + 1] = 0;
		gfx_energyBarSdata.data[pos + 2] = 0;
		gfx_energyBarSdata.data[pos + 3] = 0;
	}
	gfx_energyBarCtx.putImageData(gfx_energyBarSdata, 0, 0);

	resetTitleScreen();

	mainGfxBufferSdata = mainGfxBufferCtx.createImageData(fullSizeWidth, fullSizeHeight);
	mainGfxBufferCtx.putImageData(mainGfxBufferSdata, 0, 0);
	mainGfxBufferSdata = mainGfxBufferCtx.getImageData(0, 0, mainGfxBuffer.width, mainGfxBuffer.height);
	doubleGfxBufferSdata = doubleGfxBufferCtx.createImageData(fullSizeWidth, fullSizeHeight);
	doubleGfxBufferCtx.putImageData(doubleGfxBufferSdata, 0, 0);
	doubleGfxBufferSdata = doubleGfxBufferCtx.getImageData(0, 0, doubleGfxBuffer.width, doubleGfxBuffer.height);

	doubleGfxBufferCtx.drawImage(gfx_gametitlebgSprite, 0, 0);

	gfx_gametitleletter1Ctx.drawImage(gfx_gametitleletter1Sprite, 0, 0);
	gfx_gametitleletter2Ctx.drawImage(gfx_gametitleletter2Sprite, 0, 0);
	gfx_gametitleletter3Ctx.drawImage(gfx_gametitleletter3Sprite, 0, 0);
	gfx_gametitleletter4Ctx.drawImage(gfx_gametitleletter4Sprite, 0, 0);
	gfx_gametitleletter5Ctx.drawImage(gfx_gametitleletter5Sprite, 0, 0);
	gfx_gametitleletter6Ctx.drawImage(gfx_gametitleletter6Sprite, 0, 0);
	gfx_gametitleletter7Ctx.drawImage(gfx_gametitleletter7Sprite, 0, 0);
	gfx_gametitleletter8Ctx.drawImage(gfx_gametitleletter8Sprite, 0, 0);
	gfx_gametitleletter9Ctx.drawImage(gfx_gametitleletter9Sprite, 0, 0);
	gfx_gametitleletter10Ctx.drawImage(gfx_gametitleletter10Sprite, 0, 0);
	gfx_gametitleletter11Ctx.drawImage(gfx_gametitleletter11Sprite, 0, 0);
	gfx_gametitleclownframe1Ctx.drawImage(gfx_gametitleclownframe1Sprite, 0, 0);
	gfx_gametitleclownframe2Ctx.drawImage(gfx_gametitleclownframe2Sprite, 0, 0);
	gfx_gametitleclownframe3Ctx.drawImage(gfx_gametitleclownframe3Sprite, 0, 0);
	gfx_gametitleclownframe4Ctx.drawImage(gfx_gametitleclownframe4Sprite, 0, 0);
	gfx_facingeCtx.drawImage(gfx_facingeSprite, 0, 0);
	gfx_walke1Ctx.drawImage(gfx_walke1Sprite, 0, 0);
	gfx_walke2Ctx.drawImage(gfx_walke2Sprite, 0, 0);
	gfx_facingwCtx.drawImage(gfx_facingwSprite, 0, 0);
	gfx_walkw1Ctx.drawImage(gfx_walkw1Sprite, 0, 0);
	gfx_walkw2Ctx.drawImage(gfx_walkw2Sprite, 0, 0);
	gfx_puncheCtx.drawImage(gfx_puncheSprite, 0, 0);
	gfx_kickeCtx.drawImage(gfx_kickeSprite, 0, 0);
	gfx_punchwCtx.drawImage(gfx_punchwSprite, 0, 0);
	gfx_kickwCtx.drawImage(gfx_kickwSprite, 0, 0);
	gfx_flyingkickeCtx.drawImage(gfx_flyingkickeSprite, 0, 0);
	gfx_flyingkickwCtx.drawImage(gfx_flyingkickwSprite, 0, 0);
	gfx_knockedbackwCtx.drawImage(gfx_knockedbackwSprite, 0, 0);
	gfx_knockedbackeCtx.drawImage(gfx_knockedbackeSprite, 0, 0);
	gfx_deadCtx.drawImage(gfx_deadSprite, 0, 0);
	gfx_energybar1Ctx.drawImage(gfx_energybar1Sprite, 0, 0);
	gfx_energybar2Ctx.drawImage(gfx_energybar2Sprite, 0, 0);
	gfx_energybar3Ctx.drawImage(gfx_energybar3Sprite, 0, 0);
	gfx_enemy1_flyingkickeCtx.drawImage(gfx_enemy1_flyingkickeSprite, 0, 0);
	gfx_enemy1_kickeCtx.drawImage(gfx_enemy1_kickeSprite, 0, 0);
	gfx_enemy1_knockedbackeCtx.drawImage(gfx_enemy1_knockedbackeSprite, 0, 0);
	gfx_enemy1_walke1Ctx.drawImage(gfx_enemy1_walke1Sprite, 0, 0);
	gfx_enemy1_walke2Ctx.drawImage(gfx_enemy1_walke2Sprite, 0, 0);
	gfx_enemy1_flyingkickwCtx.drawImage(gfx_enemy1_flyingkickwSprite, 0, 0);
	gfx_enemy1_kickwCtx.drawImage(gfx_enemy1_kickwSprite, 0, 0);
	gfx_enemy1_knockedbackwCtx.drawImage(gfx_enemy1_knockedbackwSprite, 0, 0);
	gfx_enemy1_walkw1Ctx.drawImage(gfx_enemy1_walkw1Sprite, 0, 0);
	gfx_enemy1_walkw2Ctx.drawImage(gfx_enemy1_walkw2Sprite, 0, 0);

	gfx_gametitleletter1Sdata = gfx_gametitleletter1Ctx.getImageData(0, 0, gfx_gametitleletter1Buffer.width, gfx_gametitleletter1Buffer.height);
	gfx_gametitleletter2Sdata = gfx_gametitleletter2Ctx.getImageData(0, 0, gfx_gametitleletter2Buffer.width, gfx_gametitleletter2Buffer.height);
	gfx_gametitleletter3Sdata = gfx_gametitleletter3Ctx.getImageData(0, 0, gfx_gametitleletter3Buffer.width, gfx_gametitleletter3Buffer.height);
	gfx_gametitleletter4Sdata = gfx_gametitleletter4Ctx.getImageData(0, 0, gfx_gametitleletter4Buffer.width, gfx_gametitleletter4Buffer.height);
	gfx_gametitleletter5Sdata = gfx_gametitleletter5Ctx.getImageData(0, 0, gfx_gametitleletter5Buffer.width, gfx_gametitleletter5Buffer.height);
	gfx_gametitleletter6Sdata = gfx_gametitleletter6Ctx.getImageData(0, 0, gfx_gametitleletter6Buffer.width, gfx_gametitleletter6Buffer.height);
	gfx_gametitleletter7Sdata = gfx_gametitleletter7Ctx.getImageData(0, 0, gfx_gametitleletter7Buffer.width, gfx_gametitleletter7Buffer.height);
	gfx_gametitleletter8Sdata = gfx_gametitleletter8Ctx.getImageData(0, 0, gfx_gametitleletter8Buffer.width, gfx_gametitleletter8Buffer.height);
	gfx_gametitleletter9Sdata = gfx_gametitleletter9Ctx.getImageData(0, 0, gfx_gametitleletter9Buffer.width, gfx_gametitleletter9Buffer.height);
	gfx_gametitleletter10Sdata = gfx_gametitleletter10Ctx.getImageData(0, 0, gfx_gametitleletter10Buffer.width, gfx_gametitleletter10Buffer.height);
	gfx_gametitleletter11Sdata = gfx_gametitleletter11Ctx.getImageData(0, 0, gfx_gametitleletter11Buffer.width, gfx_gametitleletter11Buffer.height);
	gfx_gametitleclownframe1Sdata = gfx_gametitleclownframe1Ctx.getImageData(0, 0, gfx_gametitleclownframe1Buffer.width, gfx_gametitleclownframe1Buffer.height);
	gfx_gametitleclownframe2Sdata = gfx_gametitleclownframe2Ctx.getImageData(0, 0, gfx_gametitleclownframe2Buffer.width, gfx_gametitleclownframe2Buffer.height);
	gfx_gametitleclownframe3Sdata = gfx_gametitleclownframe3Ctx.getImageData(0, 0, gfx_gametitleclownframe3Buffer.width, gfx_gametitleclownframe3Buffer.height);
	gfx_gametitleclownframe4Sdata = gfx_gametitleclownframe4Ctx.getImageData(0, 0, gfx_gametitleclownframe4Buffer.width, gfx_gametitleclownframe4Buffer.height);
	gfx_facingeSdata = gfx_facingeCtx.getImageData(0, 0, gfx_facingeBuffer.width, gfx_facingeBuffer.height);
	gfx_walke1Sdata = gfx_walke1Ctx.getImageData(0, 0, gfx_walke1Buffer.width, gfx_walke1Buffer.height);
	gfx_walke2Sdata = gfx_walke2Ctx.getImageData(0, 0, gfx_walke2Buffer.width, gfx_walke2Buffer.height);
	gfx_facingwSdata = gfx_facingwCtx.getImageData(0, 0, gfx_facingwBuffer.width, gfx_facingwBuffer.height);
	gfx_walkw1Sdata = gfx_walkw1Ctx.getImageData(0, 0, gfx_walkw1Buffer.width, gfx_walkw1Buffer.height);
	gfx_walkw2Sdata = gfx_walkw2Ctx.getImageData(0, 0, gfx_walkw2Buffer.width, gfx_walkw2Buffer.height);
	gfx_puncheSdata = gfx_puncheCtx.getImageData(0, 0, gfx_puncheBuffer.width, gfx_puncheBuffer.height);
	gfx_kickeSdata = gfx_kickeCtx.getImageData(0, 0, gfx_kickeBuffer.width, gfx_kickeBuffer.height);
	gfx_punchwSdata = gfx_punchwCtx.getImageData(0, 0, gfx_punchwBuffer.width, gfx_punchwBuffer.height);
	gfx_kickwSdata = gfx_kickwCtx.getImageData(0, 0, gfx_kickwBuffer.width, gfx_kickwBuffer.height);
	gfx_flyingkickeSdata = gfx_flyingkickeCtx.getImageData(0, 0, gfx_flyingkickeBuffer.width, gfx_flyingkickeBuffer.height);
	gfx_flyingkickwSdata = gfx_flyingkickwCtx.getImageData(0, 0, gfx_flyingkickwBuffer.width, gfx_flyingkickwBuffer.height);
	gfx_knockedbackwSdata = gfx_knockedbackwCtx.getImageData(0, 0, gfx_knockedbackwBuffer.width, gfx_knockedbackwBuffer.height);
	gfx_knockedbackeSdata = gfx_knockedbackeCtx.getImageData(0, 0, gfx_knockedbackeBuffer.width, gfx_knockedbackeBuffer.height);
	gfx_deadSdata = gfx_deadCtx.getImageData(0, 0, gfx_deadBuffer.width, gfx_deadBuffer.height);
	gfx_energybar1Sdata = gfx_energybar1Ctx.getImageData(0, 0, gfx_energybar1Buffer.width, gfx_energybar1Buffer.height);
	gfx_energybar2Sdata = gfx_energybar2Ctx.getImageData(0, 0, gfx_energybar2Buffer.width, gfx_energybar2Buffer.height);
	gfx_energybar3Sdata = gfx_energybar3Ctx.getImageData(0, 0, gfx_energybar3Buffer.width, gfx_energybar3Buffer.height);
	gfx_enemy1_flyingkickeSdata = gfx_enemy1_flyingkickeCtx.getImageData(0, 0, gfx_enemy1_flyingkickeBuffer.width, gfx_enemy1_flyingkickeBuffer.height);
	gfx_enemy1_kickeSdata = gfx_enemy1_kickeCtx.getImageData(0, 0, gfx_enemy1_kickeBuffer.width, gfx_enemy1_kickeBuffer.height);
	gfx_enemy1_knockedbackeSdata = gfx_enemy1_knockedbackeCtx.getImageData(0, 0, gfx_enemy1_knockedbackeBuffer.width, gfx_enemy1_knockedbackeBuffer.height);
	gfx_enemy1_walke1Sdata = gfx_enemy1_walke1Ctx.getImageData(0, 0, gfx_enemy1_walke1Buffer.width, gfx_enemy1_walke1Buffer.height);
	gfx_enemy1_walke2Sdata = gfx_enemy1_walke2Ctx.getImageData(0, 0, gfx_enemy1_walke2Buffer.width, gfx_enemy1_walke2Buffer.height);
	gfx_enemy1_flyingkickwSdata = gfx_enemy1_flyingkickwCtx.getImageData(0, 0, gfx_enemy1_flyingkickwBuffer.width, gfx_enemy1_flyingkickwBuffer.height);
	gfx_enemy1_kickwSdata = gfx_enemy1_kickwCtx.getImageData(0, 0, gfx_enemy1_kickwBuffer.width, gfx_enemy1_kickwBuffer.height);
	gfx_enemy1_knockedbackwSdata = gfx_enemy1_knockedbackwCtx.getImageData(0, 0, gfx_enemy1_knockedbackwBuffer.width, gfx_enemy1_knockedbackwBuffer.height);
	gfx_enemy1_walkw1Sdata = gfx_enemy1_walkw1Ctx.getImageData(0, 0, gfx_enemy1_walkw1Buffer.width, gfx_enemy1_walkw1Buffer.height);
	gfx_enemy1_walkw2Sdata = gfx_enemy1_walkw2Ctx.getImageData(0, 0, gfx_enemy1_walkw2Buffer.width, gfx_enemy1_walkw2Buffer.height);

	doSpriteTransparency(gfx_gametitleletter1Ctx, gfx_gametitleletter1Buffer, gfx_gametitleletter1Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_gametitleletter2Ctx, gfx_gametitleletter2Buffer, gfx_gametitleletter2Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_gametitleletter3Ctx, gfx_gametitleletter3Buffer, gfx_gametitleletter3Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_gametitleletter4Ctx, gfx_gametitleletter4Buffer, gfx_gametitleletter4Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_gametitleletter5Ctx, gfx_gametitleletter5Buffer, gfx_gametitleletter5Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_gametitleletter6Ctx, gfx_gametitleletter6Buffer, gfx_gametitleletter6Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_gametitleletter7Ctx, gfx_gametitleletter7Buffer, gfx_gametitleletter7Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_gametitleletter8Ctx, gfx_gametitleletter8Buffer, gfx_gametitleletter8Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_gametitleletter9Ctx, gfx_gametitleletter9Buffer, gfx_gametitleletter9Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_gametitleletter10Ctx, gfx_gametitleletter10Buffer, gfx_gametitleletter10Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_gametitleletter11Ctx, gfx_gametitleletter11Buffer, gfx_gametitleletter11Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_gametitleclownframe1Ctx, gfx_gametitleclownframe1Buffer, gfx_gametitleclownframe1Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_gametitleclownframe2Ctx, gfx_gametitleclownframe2Buffer, gfx_gametitleclownframe2Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_gametitleclownframe3Ctx, gfx_gametitleclownframe3Buffer, gfx_gametitleclownframe3Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_gametitleclownframe4Ctx, gfx_gametitleclownframe4Buffer, gfx_gametitleclownframe4Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_facingeCtx, gfx_facingeBuffer, gfx_facingeSdata, 255, 119, 0);
	doSpriteTransparency(gfx_walke1Ctx, gfx_walke1Buffer, gfx_walke1Sdata, 255, 119, 0);
	doSpriteTransparency(gfx_walke2Ctx, gfx_walke2Buffer, gfx_walke2Sdata, 255, 119, 0);
	doSpriteTransparency(gfx_facingwCtx, gfx_facingwBuffer, gfx_facingwSdata, 255, 119, 0);
	doSpriteTransparency(gfx_walkw1Ctx, gfx_walkw1Buffer, gfx_walkw1Sdata, 255, 119, 0);
	doSpriteTransparency(gfx_walkw2Ctx, gfx_walkw2Buffer, gfx_walkw2Sdata, 255, 119, 0);
	doSpriteTransparency(gfx_puncheCtx, gfx_puncheBuffer, gfx_puncheSdata, 255, 119, 0);
	doSpriteTransparency(gfx_kickeCtx, gfx_kickeBuffer, gfx_kickeSdata, 255, 119, 0);
	doSpriteTransparency(gfx_punchwCtx, gfx_punchwBuffer, gfx_punchwSdata, 255, 119, 0);
	doSpriteTransparency(gfx_kickwCtx, gfx_kickwBuffer, gfx_kickwSdata, 255, 119, 0);
	doSpriteTransparency(gfx_flyingkickeCtx, gfx_flyingkickeBuffer, gfx_flyingkickeSdata, 255, 119, 0);
	doSpriteTransparency(gfx_flyingkickwCtx, gfx_flyingkickwBuffer, gfx_flyingkickwSdata, 255, 119, 0);
	doSpriteTransparency(gfx_knockedbackwCtx, gfx_knockedbackwBuffer, gfx_knockedbackwSdata, 255, 119, 0);
	doSpriteTransparency(gfx_knockedbackeCtx, gfx_knockedbackeBuffer, gfx_knockedbackeSdata, 255, 119, 0);
	doSpriteTransparency(gfx_deadCtx, gfx_deadBuffer, gfx_deadSdata, 255, 119, 0);
	doSpriteTransparency(gfx_energybar1Ctx, gfx_energybar1Buffer, gfx_energybar1Sdata, 255, 119, 0);
	doSpriteTransparency(gfx_energybar2Ctx, gfx_energybar2Buffer, gfx_energybar2Sdata, 255, 119, 0);
	doSpriteTransparency(gfx_energybar3Ctx, gfx_energybar3Buffer, gfx_energybar3Sdata, 255, 119, 0);
	doSpriteTransparency(gfx_enemy1_flyingkickeCtx, gfx_enemy1_flyingkickeBuffer, gfx_enemy1_flyingkickeSdata, 255, 119, 0);
	doSpriteTransparency(gfx_enemy1_kickeCtx, gfx_enemy1_kickeBuffer, gfx_enemy1_kickeSdata, 255, 119, 0);
	doSpriteTransparency(gfx_enemy1_knockedbackeCtx, gfx_enemy1_knockedbackeBuffer, gfx_enemy1_knockedbackeSdata, 255, 119, 0);
	doSpriteTransparency(gfx_enemy1_walke1Ctx, gfx_enemy1_walke1Buffer, gfx_enemy1_walke1Sdata, 255, 119, 0);
	doSpriteTransparency(gfx_enemy1_walke2Ctx, gfx_enemy1_walke2Buffer, gfx_enemy1_walke2Sdata, 255, 119, 0);
	doSpriteTransparency(gfx_enemy1_flyingkickwCtx, gfx_enemy1_flyingkickwBuffer, gfx_enemy1_flyingkickwSdata, 255, 119, 0);
	doSpriteTransparency(gfx_enemy1_kickwCtx, gfx_enemy1_kickwBuffer, gfx_enemy1_kickwSdata, 255, 119, 0);
	doSpriteTransparency(gfx_enemy1_knockedbackwCtx, gfx_enemy1_knockedbackwBuffer, gfx_enemy1_knockedbackwSdata, 255, 119, 0);
	doSpriteTransparency(gfx_enemy1_walkw1Ctx, gfx_enemy1_walkw1Buffer, gfx_enemy1_walkw1Sdata, 255, 119, 0);
	doSpriteTransparency(gfx_enemy1_walkw2Ctx, gfx_enemy1_walkw2Buffer, gfx_enemy1_walkw2Sdata, 255, 119, 0);

};

function moveEnemy1() {
	if(enemy1Properties[0] < (playerX - 100)) {
		enemy1Properties[0] += enemy1Properties[2];
		if(enemy1Properties[0] > (playerX - 100)) enemy1Properties[0] = playerX - 100;
	}
	if(enemy1Properties[0] > (playerX + 35)) {
		enemy1Properties[0] -= enemy1Properties[2];
		if(enemy1Properties[0] < (playerX + 35)) enemy1Properties[0] = playerX + 35;
	}
	if(enemy1Properties[1] < playerY) {
		enemy1Properties[1] += enemy1Properties[2];
		if(enemy1Properties[1] > playerY) enemy1Properties[1] = playerY;
	}
	if(enemy1Properties[1] > playerY) {
		enemy1Properties[1] -= enemy1Properties[2];
		if(enemy1Properties[1] < playerY) enemy1Properties[1] = playerY;
	}
}

function updateEnergyBar() {
	var energyBar1 = gfx_energybar1Buffer;
	var energyBar2 = gfx_energybar1Buffer;
	var energyBar3 = gfx_energybar1Buffer;
	var energyBar4 = gfx_energybar1Buffer;
	var energyBar5 = gfx_energybar1Buffer;
	if(energy >= 2) {
		energyBar1 = gfx_energybar3Buffer;
	}
	if(energy >= 4) {
		energyBar2 = gfx_energybar3Buffer;
	}
	if(energy >= 6) {
		energyBar3 = gfx_energybar3Buffer;
	}
	if(energy >= 8) {
		energyBar4 = gfx_energybar3Buffer;
	}
	if(energy >= 10) {
		energyBar5 = gfx_energybar3Buffer;
	}
	switch(energy) {
		case 1:
			energyBar1 = gfx_energybar2Buffer;
			break;
		case 3:
			energyBar2 = gfx_energybar2Buffer;
			break;
		case 5:
			energyBar3 = gfx_energybar2Buffer;
			break;
		case 7:
			energyBar4 = gfx_energybar2Buffer;
			break;
		case 9:
			energyBar5 = gfx_energybar2Buffer;
			break;
	}
	gfx_energyBarCtx.drawImage(energyBar1, 73 * 0, 0);
	gfx_energyBarCtx.drawImage(energyBar2, 73 * 1, 0);
	gfx_energyBarCtx.drawImage(energyBar3, 73 * 2, 0);
	gfx_energyBarCtx.drawImage(energyBar4, 73 * 3, 0);
	gfx_energyBarCtx.drawImage(energyBar5, 73 * 4, 0);
}

function doTitleStuff() {
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitlebgSprite, 0, 0);
	switch(gametitleClownSpriteFrame) {
		case 0:
			gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleclownframe1Buffer, 625, 350);
			break;
		case 1:
			gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleclownframe2Buffer, 625, 350);
			break;
		case 2:
			gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleclownframe3Buffer, 625, 350);
			break;
		case 3:
			gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleclownframe4Buffer, 625, 350);
			break;
	}
	gametitleClownSpriteTimer++;
	if(gametitleClownSpriteTimer >= 6) {
		gametitleClownSpriteTimer = 0;
		gametitleClownSpriteFrame++;
		if(gametitleClownSpriteFrame >= 4) {
			gametitleClownSpriteFrame = 0;
		}
	}
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleletter11Buffer, titleletterCoords[20], titleletterCoords[21]);
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleletter10Buffer, titleletterCoords[18], titleletterCoords[19]);
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleletter9Buffer, titleletterCoords[16], titleletterCoords[17]);
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleletter8Buffer, titleletterCoords[14], titleletterCoords[15]);
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleletter7Buffer, titleletterCoords[12], titleletterCoords[13]);
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleletter6Buffer, titleletterCoords[10], titleletterCoords[11]);
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleletter5Buffer, titleletterCoords[8], titleletterCoords[9]);
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleletter4Buffer, titleletterCoords[6], titleletterCoords[7]);
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleletter3Buffer, titleletterCoords[4], titleletterCoords[5]);
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleletter2Buffer, titleletterCoords[2], titleletterCoords[3]);
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_gametitleletter1Buffer, titleletterCoords[0], titleletterCoords[1]);

	gfxScaledToCurrentDeviceResolutionCtx.font = "bold 70px Arial";
	gfxScaledToCurrentDeviceResolutionCtx.fillStyle = "#008888";
	gfxScaledToCurrentDeviceResolutionCtx.fillText("2026 Joonas Lindberg. Code, graphics & sound: Joonas Lindberg. Press Space to start the game. Controls: Arrow Keys - Move   Z - Flying Kick   X - Kick   C - Punch", titleScrollTextX, 454);

	doubleGfxBufferCtx.drawImage(gfxScaledToCurrentDeviceResolutionBuffer, 0, 0, deviceWidth, deviceHeight);
	mainGfxBufferCtx.drawImage(doubleGfxBuffer, 0, 0);

	for(var currentLetter = 0; currentLetter < 11; currentLetter++) {
		titleletterCoords[(currentLetter * 2) + 0] += titleletterDeltas[(currentLetter * 2) + 0];
		titleletterCoords[(currentLetter * 2) + 1] += titleletterDeltas[(currentLetter * 2) + 1];
	}

	for(var currentLetter = 0; currentLetter < 11; currentLetter++) {
		if(titleletterDeltas[(currentLetter * 2) + 0] < 0) {
			if(titleletterCoords[(currentLetter * 2) + 0] <= titleletterTargetCoords[(currentLetter * 2) + 0]) {
				titleletterCoords[(currentLetter * 2) + 0] = titleletterTargetCoords[(currentLetter * 2) + 0];
			}
		}
		else {
			if(titleletterCoords[(currentLetter * 2) + 0] >= titleletterTargetCoords[(currentLetter * 2) + 0]) {
				titleletterCoords[(currentLetter * 2) + 0] = titleletterTargetCoords[(currentLetter * 2) + 0];
			}
		}
		if(titleletterDeltas[(currentLetter * 2) + 1] < 0) {
			if(titleletterCoords[(currentLetter * 2) + 1] <= titleletterTargetCoords[(currentLetter * 2) + 1]) {
				titleletterCoords[(currentLetter * 2) + 1] = titleletterTargetCoords[(currentLetter * 2) + 1];
			}
		}
		else {
			if(titleletterCoords[(currentLetter * 2) + 1] >= titleletterTargetCoords[(currentLetter * 2) + 1]) {
				titleletterCoords[(currentLetter * 2) + 1] = titleletterTargetCoords[(currentLetter * 2) + 1];
			}
		}
	}
	titleScrollTextX -= 5;
	if(titleScrollTextX < -5600) {
		titleScrollTextX = 1910;
	}
	if(spacePressed || gamepadXPressed) {
		// Began a new game. Initialize the new game.
		snd_sillyman001.pause();
		currentScreen = 1;
		playerX = 50;
		playerY = 50;
		playerAnimFrame = 0;
		playerFaceDir = 0;
		playerState = 0;
		energy = 10;
		lives = 3;
		score = 0;
		enemy1Properties[0] = 1600;
		enemy1Properties[1] = 300;
		enemy1Properties[2] = 3;
		enemy1Properties[3] = 1;
		enemy1Properties[4] = 0;
		enemy1Properties[5] = 0;
		updateEnergyBar();
	}
}

/*
playerState states:
0 = NORMAL - PLAYER NOT PERFORMING ANY MOVE
1 = PERFORMING FLYING KICK
2 = KICKING
3 = PUNCHING
4 = PLAYER HIT
5 = PLAYER DEAD
*/
function doGameStuff() {
	var playerActualX;
	var playerMoving = false;
	if(playerFaceDir != 0) playerActualX -= 50;
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_backgroundSprite, 0, 0);
	if(playerState == 0 && (dPressed || gamepadTrianglePressed) && !mustReleaseKeyD) {
		// DEBUG KEY: Player got hit.
		mustReleaseKeyD = true;
		playerState = 4;
		jumpDeltaPos = 0;
		energy--;
		updateEnergyBar();
		if(energy <= 0) {
			deadTimer = 200;
			playerState = 5;
			snd_sillyman004.load();
			snd_sillyman004.play();
		}
		else {
			snd_sillyman005.load();
			snd_sillyman005.play();
		}
	}
	if((zPressed || gamepadXPressed) && playerState == 0) {
		jumpDeltaPos = 0;
		playerState = 1;
		snd_sillyman006.load();
		snd_sillyman006.play();
	}
	if(playerState != 1 && playerState != 4 && playerState != 5 && (xPressed || gamepadSquarePressed) && !mustReleaseKeyX) {
		mustReleaseKeyX = true;
		playerState = 2;
		snd_sillyman002.load();
		snd_sillyman002.play();
	}
	if(playerState != 1 && playerState != 4 && playerState != 5 && (cPressed || gamepadOPressed) && !mustReleaseKeyC) {
		mustReleaseKeyC = true;
		playerState = 3;
		snd_sillyman003.load();
		snd_sillyman003.play();
	}
	if(!cPressed && !dPressed && !xPressed && !gamepadTrianglePressed && !gamepadSquarePressed && !gamepadOPressed) {
		mustReleaseKeyX = false;
		mustReleaseKeyC = false;
		mustReleaseKeyD = false;
		if(playerState != 1 && playerState != 4 && playerState != 5) {
			playerState = 0;
		}
	}
	if(playerState == 0) {
		if(upArrowPressed || gamepadUpPressed) {
			playerMoving = true;
			playerY -= playerMovementSpeed;
			if(playerY < -5) playerY = -5;
		}
		if(downArrowPressed || gamepadDownPressed) {
			playerMoving = true;
			playerY += playerMovementSpeed;
			if(playerY > 445) playerY = 445;
		}
		if(leftArrowPressed || gamepadLeftPressed) {
			playerFaceDir = 1;
			playerMoving = true;
			playerX -= playerMovementSpeed;
			if(playerX < screenLeftBoundary) playerX = screenLeftBoundary;
		}
		if(rightArrowPressed || gamepadRightPressed) {
			playerFaceDir = 0;
			playerMoving = true;
			playerX += playerMovementSpeed;
			if(playerX > screenRightBoundary) playerX = screenRightBoundary;
		}
	}
	playerActualX = playerX;
	if(playerFaceDir != 0) playerActualX -= 50;
	if(playerMoving) {
		if(playerFaceDir == 0) {
			gfxScaledToCurrentDeviceResolutionCtx.drawImage(animation_playerWalkingE[playerAnimFrame], playerActualX, playerY);
		}
		else {
			gfxScaledToCurrentDeviceResolutionCtx.drawImage(animation_playerWalkingW[playerAnimFrame], playerActualX, playerY);
		}
		playerAnimFrame++;
		if(playerAnimFrame >= animation_playerWalkingE.length) {
			playerAnimFrame = 0;
		}
	}
	else {
		playerAnimFrame = 0;
		if(playerState == 5) {
			deadTimer--;
			if(deadTimer <= 0) {
				playerState = 0;
				energy = 10;
				updateEnergyBar();
				lives--;
				if(lives < 0) {
					resetTitleScreen();
				}
			}
		}
		if(playerFaceDir == 0) {
			switch(playerState) {
				case 0:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_facingeBuffer, playerActualX, playerY);
					break;
				case 1:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_flyingkickeBuffer, playerActualX, (playerY + jumpDeltasY[jumpDeltaPos]));
					playerX += jumpDeltasX[jumpDeltaPos];
					if(playerX > screenRightBoundary) playerX = screenRightBoundary;
					jumpDeltaPos++;
					if(jumpDeltaPos >= jumpDeltasX.length) {
						playerState = 0;
					}
					break;
				case 2:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_kickeBuffer, playerActualX, playerY);
					break;
				case 3:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_puncheBuffer, playerActualX, playerY);
					break;
				case 4:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_knockedbackwBuffer, playerActualX, playerY);
					playerX -= 6;
					if(playerX < screenLeftBoundary) playerX = screenLeftBoundary;
					jumpDeltaPos++;
					if(jumpDeltaPos >= 20) {
						playerState = 0;
					}
					break;
				case 5:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_deadBuffer, playerActualX, playerY);
					break;
			}
		}
		else {
			switch(playerState) {
				case 0:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_facingwBuffer, playerActualX, playerY);
					break;
				case 1:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_flyingkickwBuffer, playerActualX, (playerY + jumpDeltasY[jumpDeltaPos]));
					playerX -= jumpDeltasX[jumpDeltaPos];
					if(playerX < screenLeftBoundary) playerX = screenLeftBoundary;
					jumpDeltaPos++;
					if(jumpDeltaPos >= jumpDeltasX.length) {
						playerState = 0;
					}
					break;
				case 2:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_kickwBuffer, playerActualX, playerY);
					break;
				case 3:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_punchwBuffer, playerActualX, playerY);
					break;
				case 4:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_knockedbackeBuffer, playerActualX, playerY);
					playerX += 6;
					if(playerX > screenRightBoundary) playerX = screenRightBoundary;
					jumpDeltaPos++;
					if(jumpDeltaPos >= 20) {
						playerState = 0;
					}
					break;
				case 5:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_deadBuffer, playerActualX, playerY);
					break;
			}
		}
	}
	// Draw all the enemies.
	var spriteToUse;
	if(enemy1Properties[0] < (playerX + 35)) {
		enemy1Properties[3] = 0;
	}
	else {
		enemy1Properties[3] = 1;
	}
	if(enemy1Properties[3] == 0) {
		switch(enemy1Properties[4]) {
			case 0:
				spriteToUse = gfx_enemy1_walke1Buffer;
				break;
			case 1:
				spriteToUse = gfx_enemy1_walke2Buffer;
				break;
		}
	}
	else {
		switch(enemy1Properties[4]) {
			case 0:
				spriteToUse = gfx_enemy1_walkw1Buffer;
				break;
			case 1:
				spriteToUse = gfx_enemy1_walkw2Buffer;
				break;
		}
	}
	enemy1Properties[5]++;
	if(enemy1Properties[5] >= 5) {
		enemy1Properties[5] = 0;
		enemy1Properties[4] ^= 1;
	}
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(spriteToUse, enemy1Properties[0], enemy1Properties[1]);

	// Move all the enemies.
	moveEnemy1();

	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_energyBarBuffer, coordXOfEnergyBar, coordYOfEnergyBar);
	gfxScaledToCurrentDeviceResolutionCtx.font = "70px Arial";
	gfxScaledToCurrentDeviceResolutionCtx.fillStyle = "black";
	gfxScaledToCurrentDeviceResolutionCtx.fillText(lives, coordXOfLives, coordYOfLives);
	if(score < 10) {
		gfxScaledToCurrentDeviceResolutionCtx.fillText("000000" + score, coordXOfScore, coordYOfScore);
	}
	else if(score < 100) {
		gfxScaledToCurrentDeviceResolutionCtx.fillText("00000" + score, coordXOfScore, coordYOfScore);
	}
	else if(score < 1000) {
		gfxScaledToCurrentDeviceResolutionCtx.fillText("0000" + score, coordXOfScore, coordYOfScore);
	}
	else if(score < 10000) {
		gfxScaledToCurrentDeviceResolutionCtx.fillText("000" + score, coordXOfScore, coordYOfScore);
	}
	else if(score < 100000) {
		gfxScaledToCurrentDeviceResolutionCtx.fillText("00" + score, coordXOfScore, coordYOfScore);
	}
	else if(score < 1000000) {
		gfxScaledToCurrentDeviceResolutionCtx.fillText("0" + score, coordXOfScore, coordYOfScore);
	}
	else {
		gfxScaledToCurrentDeviceResolutionCtx.fillText(score, coordXOfScore, coordYOfScore);
	}
	doubleGfxBufferCtx.drawImage(gfxScaledToCurrentDeviceResolutionBuffer, 0, 0, deviceWidth, deviceHeight);
	mainGfxBufferCtx.drawImage(doubleGfxBuffer, 0, 0);
}

function play(delta)
{
	if(mainGfxBufferSdata != null) {
		if(currentScreen == 0) {
			doTitleStuff();
		}
		else {
			doGameStuff();
		}
	}
}

function keyboard(keyCode)
{
	var key = {};
	key.code = keyCode;
	key.isDown = false;
	key.isUp = true;
	key.press = undefined;
	key.release = undefined;
	key.downHandler = event =>
	{
		if (event.keyCode === key.code)
		{
			if (key.press)
			{
				key.press();
				key.isDown = true;
				key.isUp = false;
			}
		}
		event.preventDefault();
	};
	key.upHandler = event =>
	{
		if (event.keyCode === key.code)
		{
			if (key.isDown && key.release)
			{
				key.release();
				key.isDown = false;
				key.isUp = true;
			}
		}
		event.preventDefault();
	};
	window.addEventListener("keydown", key.downHandler.bind(key), false);
	window.addEventListener("keyup", key.upHandler.bind(key), false);
	window.addEventListener("gamepadconnected", connecthandler);
	window.addEventListener("gamepaddisconnected", disconnecthandler);
	if (!haveEvents) {
		setInterval(scangamepads, 500);
	}
	return key;
}
