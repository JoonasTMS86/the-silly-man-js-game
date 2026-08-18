var deviceWidth, deviceHeight, mainGfxBufferSdata, doubleGfxBufferSdata,
gametitleClownSpriteFrame, gametitleClownSpriteTimer, titleScrollTextX,
currentScreen, playerX, playerY, playerAnimFrame, playerFaceDir;
var fullSizeWidth                            = 1910; // Width of screen when the game is played on a screen with 1920 x 1080 resolution capability.
var fullSizeHeight                           = 909; // Height of screen when the game is played on a screen with 1920 x 1080 resolution capability.
var keyDown                                  = false;
var goingup                                  = false;
var goingdown                                = false;
var goingleft                                = false;
var goingright                               = false;
var spacePressed                             = false;
var mustReleaseKey                           = false;
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

const snd_sillyman001                        = new Audio("sillyman001.wav");
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
const titleletterDeltas                      = [
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
const titleletterTargetCoords                = [
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
const playerMovementSpeed = 5;

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

function setup() 
{
	// Capture the keyboard arrow keys.
	let left = keyboard(37),
	up = keyboard(38),
	right = keyboard(39),
	down = keyboard(40),
	spacebar = keyboard(32);
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
		goingup = true;
	};
	up.release = () =>
	{
		goingup = false;
	};
	// Key "Down Arrow Key".
	down.press = () =>
	{
		goingdown = true;
	};
	down.release = () =>
	{
		goingdown = false;
	};
	// Key "Left Arrow Key".
	left.press = () =>
	{
		goingleft = true;
	};
	left.release = () =>
	{
		goingleft = false;
	};
	// Key "Right Arrow Key".
	right.press = () =>
	{
		goingright = true;
	};
	right.release = () =>
	{
		goingright = false;
	};
	state = play;
	app.ticker.add(delta => gameLoop(delta));
}

function updateStatus()
{
	requestAnimationFrame(updateStatus);
}

function gameLoop(delta)
{
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
	snd_sillyman001.play();
	titleScrollTextX = 1910;
}

window.onload = function() {
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

};

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
	gfxScaledToCurrentDeviceResolutionCtx.fillText("2026 Joonas Lindberg. Code, graphics & sound: Joonas Lindberg. Press Space to start the game.", titleScrollTextX, 454);

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
	titleScrollTextX -= 3;
	if(titleScrollTextX < -4000) {
		titleScrollTextX = 1910;
	}
	if(spacePressed) {
		currentScreen = 1;
		playerX = 50;
		playerY = 50;
		playerAnimFrame = 0;
		playerFaceDir = 0;
	}
}

function doGameStuff() {
	var playerActualX;
	var playerMoving = false;
	if(playerFaceDir != 0) playerActualX -= 50;
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_backgroundSprite, 0, 0);
	if(goingup) {
		playerMoving = true;
		playerY -= playerMovementSpeed;
		if(playerY < -5) playerY = -5;
	}
	if(goingdown) {
		playerMoving = true;
		playerY += playerMovementSpeed;
		if(playerY > 445) playerY = 445;
	}
	if(goingleft) {
		playerFaceDir = 1;
		playerMoving = true;
		playerX -= playerMovementSpeed;
		if(playerX < -54) playerX = -54;
	}
	if(goingright) {
		playerFaceDir = 0;
		playerMoving = true;
		playerX += playerMovementSpeed;
		if(playerX > 1800) playerX = 1800;
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
		if(playerFaceDir == 0) {
			gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_facingeBuffer, playerActualX, playerY);
		}
		else {
			gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_facingwBuffer, playerActualX, playerY);
		}
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
	return key;
}
