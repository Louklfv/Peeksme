(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ANIMHAUTE C_atlas_1", frames: [[0,0,1400,1109]]},
		{name:"ANIMHAUTE C_atlas_2", frames: [[0,0,1400,1109]]},
		{name:"ANIMHAUTE C_atlas_3", frames: [[0,0,1400,1109]]},
		{name:"ANIMHAUTE C_atlas_4", frames: [[0,0,1400,1109]]},
		{name:"ANIMHAUTE C_atlas_5", frames: [[0,0,1400,1109]]},
		{name:"ANIMHAUTE C_atlas_6", frames: [[1396,1352,274,122],[698,1530,942,158],[1396,1111,494,239],[0,1111,696,417],[698,1111,696,417],[0,1530,696,417],[0,0,1400,1109]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_16 = function() {
	this.initialize(img.CachedBmp_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2429,400);


(lib.CachedBmp_15 = function() {
	this.initialize(ss["ANIMHAUTE C_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["ANIMHAUTE C_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["ANIMHAUTE C_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(img.CachedBmp_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2429,400);


(lib.CachedBmp_11 = function() {
	this.initialize(img.CachedBmp_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2429,400);


(lib.APNnu = function() {
	this.initialize(ss["ANIMHAUTE C_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.jaunedroite = function() {
	this.initialize(ss["ANIMHAUTE C_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.jaunegauche = function() {
	this.initialize(ss["ANIMHAUTE C_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.photo1 = function() {
	this.initialize(ss["ANIMHAUTE C_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo10 = function() {
	this.initialize(ss["ANIMHAUTE C_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo12 = function() {
	this.initialize(ss["ANIMHAUTE C_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo4 = function() {
	this.initialize(ss["ANIMHAUTE C_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo5 = function() {
	this.initialize(ss["ANIMHAUTE C_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo6 = function() {
	this.initialize(ss["ANIMHAUTE C_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.texte1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texte1, new cjs.Rectangle(0,0,1214.5,200), null);


(lib.ph6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.photo12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ph6, new cjs.Rectangle(0,0,1400,1109), null);


(lib.ph5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.photo5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ph5, new cjs.Rectangle(0,0,1400,1109), null);


(lib.ph4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_2
	this.instance = new lib.photo6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ph4, new cjs.Rectangle(0,0,1400,1109), null);


(lib.ph3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.photo10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ph3, new cjs.Rectangle(0,0,1400,1109), null);


(lib.ph2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.photo4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ph2, new cjs.Rectangle(0,0,1400,1109), null);


(lib.p1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.photo1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,1400,1109), null);


(lib.jaunegauche_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.jaunegauche();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jaunegauche_1, new cjs.Rectangle(0,0,696,417), null);


(lib.jaunedroite_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.jaunedroite();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jaunedroite_1, new cjs.Rectangle(0,0,696,417), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpALIAAgVIBSAAIAAAVg");
	mask.setTransform(4.15,1.1);

	// Calque_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAC147").s().p("AgpALIAAgVIBSAAIAAAVg");
	this.shape.setTransform(4.15,1.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,8.3,2.2), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpARIAAghIBSAAIAAAhg");
	mask.setTransform(4.15,1.65);

	// Calque_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAC147").s().p("AgpARIAAghIBSAAIAAAhg");
	this.shape.setTransform(4.15,1.65);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,8.3,3.3), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpAWIAAgrIBSAAIAAArg");
	mask.setTransform(4.15,2.15);

	// Calque_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAC147").s().p("AgpAWIAAgrIBSAAIAAArg");
	this.shape.setTransform(4.15,2.15);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,8.3,4.3), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnEDbIAAm1IOJAAIAAG1g");
	mask.setTransform(45.25,21.875);

	// Calque_3
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(0,0,0.183,0.183);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,90.4,43.8), null);


(lib.apnnu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.APNnu();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apnnu, new cjs.Rectangle(0,0,696,417), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(4.2,2.1,1,1,0,0,0,4.2,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,8.3,4.3), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(4.2,1.7,1,1,0,0,0,4.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,8.3,3.3), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(4.2,1.1,1,1,0,0,0,4.2,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,8.3,2.2), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Av/DPIAAmdIf+AAIAAGdg");
	mask.setTransform(102.35,20.65);

	// Calque_3
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(114.4,6.9,0.2174,0.2174);

	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(94.6,1.1,1,1,0,0,0,4.2,1.1);
	this.instance_1.alpha = 0.3008;

	this.instance_2 = new lib.Group_1();
	this.instance_2.setTransform(94.6,3.95,1,1,0,0,0,4.2,1.7);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Group_2();
	this.instance_3.setTransform(94.6,7.65,1,1,0,0,0,4.2,2.1);
	this.instance_3.alpha = 0.8281;

	this.instance_4 = new lib.CachedBmp_14();
	this.instance_4.setTransform(0,7,0.2174,0.2174);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,204.7,41.3), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Av/DPIAAmdIf+AAIAAGdg");
	mask_1.setTransform(102.35,20.65);

	// Calque_3
	this.instance_1 = new lib.ClipGroup_0();
	this.instance_1.setTransform(102.4,20.7,1,1,0,0,0,102.4,20.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,204.7,41.3), null);


(lib.logopeeksme = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(102.4,20.7,1,1,0,0,0,102.4,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logopeeksme, new cjs.Rectangle(0,0,204.8,41.4), null);


// stage content:
(lib.ANIMHAUTEC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_16
	this.instance = new lib.texte1();
	this.instance.setTransform(701.15,943.75,1,1,0,0,0,607.1,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(51).to({alpha:0},4).wait(1));

	// Calque_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_11 = new cjs.Graphics().p("AprGBIAAsBITXAAIAAMBg");
	var mask_graphics_12 = new cjs.Graphics().p("EgyIAGBIAAsBMBkRAAAIAAMBg");
	var mask_graphics_13 = new cjs.Graphics().p("EhKZAGBIAAsBMCUzAAAIAAMBg");
	var mask_graphics_14 = new cjs.Graphics().p("EhSeAGBIAAsBMCk+AAAIAAMBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_graphics_11,x:230.15,y:993.45}).wait(1).to({graphics:mask_graphics_12,x:488.975,y:993.45}).wait(1).to({graphics:mask_graphics_13,x:644.275,y:993.45}).wait(1).to({graphics:mask_graphics_14,x:696.05,y:993.45}).wait(5).to({graphics:null,x:0,y:0}).wait(56));

	// texte
	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(94.05,843.75,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({_off:true},8).wait(56));

	// Calque_3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_8 = new cjs.Graphics().p("AiVGBIAAsBIErAAIAAMBg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Egu3AGBIAAsBMBdvAAAIAAMBg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EhJkAGBIAAsBMCTJAAAIAAMBg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EhSeAGBIAAsBMCk+AAAIAAMBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_1_graphics_8,x:183.15,y:894.45}).wait(1).to({graphics:mask_1_graphics_9,x:468.075,y:894.45}).wait(1).to({graphics:mask_1_graphics_10,x:639.05,y:894.45}).wait(1).to({graphics:mask_1_graphics_11,x:696.05,y:894.45}).wait(8).to({graphics:null,x:0,y:0}).wait(56));

	// texte
	this.instance_2 = new lib.CachedBmp_12();
	this.instance_2.setTransform(94.05,843.75,0.5,0.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({_off:true},11).wait(56));

	// Layer_1
	this.instance_3 = new lib.logopeeksme();
	this.instance_3.setTransform(711.05,210.1,2.3,2.3,0,0,0,102.4,20.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({scaleX:2.2999,scaleY:2.2999,y:221.3,alpha:0.75},1).to({scaleX:2.3,scaleY:2.3,y:225,alpha:1},2).wait(62).to({y:210.1,alpha:0},2).wait(3));

	// IDENTIFIANT
	this.instance_4 = new lib.ClipGroup();
	this.instance_4.setTransform(708.9,102.8,2.7317,2.7317,0,0,0,45.5,21.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({_off:true},65).wait(5));

	// MASQUOS (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("Aw2JWQhBAAgugvQguguAAhAIAAtxQAAhBAuguQAuguBBAAMAhtAAAQBCAAAtAuQAuAuAABBIAANxQAABAguAuQgtAvhCAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:708.225,y:102.775}).wait(74));

	// Calque_15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAC147").s().p("AywEhQgDgFABgGQAHgSAcgFQAVgEA0AAQA7AAAkgFQA3gJAkgWIBVgzQA7gYBhgIQA4gFBbABQBBAAAegHIAAAEIAugEQBigJA4gRQAugNCphmQDLhrDxgxIH3hjQDOggAWAsQAXAuAKDcQALDZgPBFg");
	this.shape.setTransform(956.8684,178.8596);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAC147").s().p("AywF/QgDgIABgHQAHgXAcgIQAVgFA0AAQA7AAAkgHQA3gLAkgeQBKg8ALgGQA7ghBhgLQA4gGBbACQBBAAAegKIAAAFIAugFQBigLA4gXQAugSCpiHQDLiODxhAIH3iCQDOgsAWA6QAXA9AKEkQALEggPBbg");
	this.shape_1.setTransform(889.0184,132.9306);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAC147").s().p("AywGRQgDgJABgHQAHgYAcgJQAVgFA0AAQA7AAAkgHQA3gMAkgfQBKg/ALgGQA7gjBhgLQA4gHBbACQBBAAAegJIAAAEIAugEQBigMA4gYQAugTCpiNQDLiVDxhDIH3iIQDOguAWA9QAXBAAKEyQALEtgPBfg");
	this.shape_2.setTransform(876.2184,124.2658);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAC147").s().p("AywGVQgDgJABgHQAHgZAcgIQAVgGA0AAQA7AAAkgGQA3gMAkggQBKg/ALgHQA7gjBhgLQA4gHBbACQBBAAAegKIAAAFIAugFQBigMA4gYQAugTCpiOQDLiXDxhDIH3iKQDOguAWA+QAXBAAKE1QALEwgPBgg");
	this.shape_3.setTransform(873.3684,122.3286);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAC147").s().p("AywFbQgDgHABgHQAHgVAcgHQAVgFA0AAQA7AAAkgFQA3gLAkgaQBKg3ALgGQA7geBhgJQA4gGBbACQBBAAAegJIAAAEIAugEQBigKA4gVQAugQCph6QDLiBDxg6IH3h2QDOgoAWA1QAXA3AKEJQALEEgPBTg");
	this.shape_4.setTransform(915.1184,150.6066);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},65).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).wait(3));

	// MASQUOS (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_1 = new cjs.Graphics().p("Aw2JWQhBAAgugvQguguAAhAIAAtxQAAhBAuguQAuguBBAAMAhtAAAQBCAAAtAuQAuAuAABBIAANxQAABAguAuQgtAvhCAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:708.225,y:102.775}).wait(74));

	// Calque_14
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAC147").s().p("AyUMyQgdgQAQgWQANgTApgUQAggPA+g7QA/g5AsgVQAJgECbgwQBrgiAiglQAjgmgKhcQgQhrgCgwQAAg2AigvIAEAAIAegoQA+hGBTg4QAygjCthRQCShGBEg+IDdjJQCViFBxhEQCJhUA0gFQA5gFBJBJQBhBhCKFkQB+FCgEA+QgBAnj0AXQh7ALm6AYQihAJjNBwQjLBvi2CxQgIAIgIACQg4Adg9AKQgzAJhrgDQhggChFASQhLAUgpAuIg1A7Qg0Afg0AKQgSADgPAAQgZAAgPgIg");
	this.shape_5.setTransform(957.5703,30.3328);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAC147").s().p("AyUQcQgdgUAQgcQANgZApgaQAggTA+hMQA+hJAtgbQAJgGCbg9QBrgsAhgwQAjgxgJh2QgQiKgCg9QAAhGAig8IAEAAIAeg0QA+haBThIQAygsCthpQCShaBEhQIDckDQCWipBxhZQCJhsA0gGQA5gGBJBeQBhB9CKHIQB+GggEBPQgCAyjzAdQh7APm6AfQihALjNCQQjLCPi2DkQgIAKgIACQg4Amg9ANQgzALhrgEQhggChFAXQhLAagqA7Ig0BMQg1AogzANQgSADgPAAQgZAAgPgKg");
	this.shape_6.setTransform(884.6703,33.0392);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAC147").s().p("AyURIQgdgWAQgdQANgaApgaQAggUA+hPQA+hNAtgcQAJgFCbhBQBrgtAhgyQAjgzgJh7QgQiQgChAQAAhIAig/IAEAAIAeg2QA+heBThLQAyguCthtQCShfBEhSIDckOQCWixBxhcQCJhxA0gFQA5gHBJBhQBhCDCKHbQB+GygEBSQgCA0jzAeQh7APm6AhQihAMjNCWQjLCVi2DtQgIAKgIACQg4Aog9ANQgzANhrgFQhggChFAYQhLAbgqA9Ig0BQQg1ApgzAOQgSAEgPAAQgZAAgPgLg");
	this.shape_7.setTransform(870.9703,33.5734);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAC147").s().p("AyURSQgdgWAQgdQANgaApgbQAggUA+hQQA+hNAtgdQAJgFCbhBQBrguAhgyQAjg0gJh8QgQiRgChBQAAhJAig/IAEAAIAeg2QA+hfBThMQAyguCthvQCShfBEhTIDckQQCWizBxhdQCJhyA0gFQA5gHBJBiQBhCECKHgQB+G1gEBTQgCA1jzAeQh7APm6AhQihAMjNCYQjLCWi2DvQgIALgIACQg4Aog9ANQgzANhrgFQhggChFAYQhLAbgqA+Ig0BQQg1AqgzAOQgSAEgPAAQgZAAgPgLg");
	this.shape_8.setTransform(867.8703,33.6737);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAC147").s().p("AyUPCQgdgTAQgaQANgWApgYQAggRA+hGQA/hDAsgYQAJgFCbg5QBrgoAigrQAjgtgKhsQgQh+gCg5QAAg/Aig3IAEAAIAegvQA+hTBThCQAygoCthgQCShTBEhIIDdjtQCVibBxhRQCJhjA0gFQA5gGBJBWQBhByCKGiQB+F8gEBIQgBAuj0AaQh7AOm6AcQihAKjNCEQjLCDi2DQQgIAJgIACQg4Ajg9ALQgzALhrgEQhggChFAWQhLAXgpA2Ig1BGQg0Akg0AMQgSAEgPAAQgZAAgPgKg");
	this.shape_9.setTransform(912.7203,32.0109);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).to({state:[{t:this.shape_8}]},65).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_5}]},1).wait(3));

	// MASQUOS (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_1 = new cjs.Graphics().p("Ac0MtQhBAAgugvQguguAAhAIAAtxQAAhBAuguQAuguBBAAMAhuAAAQBCAAAtAuQAuAuAABBIAANxQAABAguAuQgtAvhCAAg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_4_graphics_1,x:415.925,y:81.275}).wait(74));

	// Calque_13
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAC147").s().p("ArmWPQgYgEgKgeQgLgiARgsQAOgmA7hEIBRhiQAfgpAZg9QAbhDAAgyQABgdgghWQgPgrgFglIgBAAQgEgkABg0QAEhnAghOQA0h3gCkEQgDhlAqhkQAphnBGg9QBihVgCjAQgTjOAMhAQA2k3DtjwQAiglFWD5QFRD4AhBRQASApgcAPQg4AUgxAYQjXBrjJFsIhsERQhVDZhfB7QibDGg2CmQgWBeADBhQAFBbgYA1QgVAwgyAiQiuB4hGBAQgdAZgzBJQgmA1gPAAIgCAAg");
	this.shape_10.setTransform(840.7073,-54.2419);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FAC147").s().p("AsCV+QgVgaAJgrQAGgoA2hFIBUhtQApg3AQg0QAYhCgFg0QABgjgwhKQgYgngSgsIgEgPQgLgdgIgqQgOhaAWhMQAih5gpjfQgKhoAaiGQAahrBIhNQBihjgWimQgmiyABhZQABkoDWjrQAphdHFBvQGaCUBzBrQBZBNgWAgQg0Afg2AbQjfB3ihFCQgqAZhoEoQg1C6hlChQiUDcguCkQglBzALBsQAQBagPBAQgOA6g0AtQipB/hKBDQg7Avg3BMQgmA2gbAOQgKADgJAAQgVAAgOgQg");
	this.shape_11.setTransform(816.8093,-23.6879);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAC147").s().p("AsLWZQgVgeANguQAJgoA9hLQBPhjAHgLQAigvATg9QAWhHgKgxQgEgeg5hPQgdgogPglIgCgCQgMgigKgyQgPhlAZhQQAoh9g3j6QgWhkAfhvQAghsBOhJQBthjgoi5Qg/jEABhFQAFk5D8kLQAng0HtCwQHiC3BHBRQArAtggAWQhCAdg7AeQj+CJi2F7QgKAJhVEcQg/DbhkCOQigDcglCrQgPBkAXBhQAYBZgTA6QgRA0g5ArQjGCOhNBJQgmAhg1BPQgnA8gWACIgFAAQgeAAgTgZg");
	this.shape_12.setTransform(812.7046,-20.9011);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FAC147").s().p("AsOWfQgVgeAOgvQAKgoA/hMQBRhlAFgJQAhguATg/QAVhIgLgxQgFgcg7hQQgegogPgjIAAAAQgNgjgKg0QgQhnAahRQAph+g6kAQgYhkAghpQAhhsBPhIQBwhjgsi9QhFjJABhAQAGk9EFkSQAmgrH2C/QHyC/A+BKQAgAmgjAVQhFAcg7AfQkGCNi6GHIhUEfQhBDjhkCJQiiDcgjCtQgKBgAaBfQAZBZgUA5QgSAyg6AqQjMCShOBLQghAdg0BQQgoA9gVAAQghAAgVgdg");
	this.shape_13.setTransform(811.8683,-20.3868);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FAC147").s().p("Ar2VzQgWgRABgmQAAgmAog7QAvhGAggmQA2hFANgjQAag4AHg3QALgwgehBQgOgigXg9QgIgWgDgSQgGgRgGgaQgKhGAOhCQAXhzgNinQANhuAPi2QAPhoA9hWQBMhlAOh+QAOiOAAiAQgHkGCIipQAuixFygYQEKBMDKCiQC4CPAAAzQgaAjgsAXQifBQh1DPQhtA5iNFCQgiB2hnDJQh7DbhBCUQhTCTgOCCQACBcgIBMQgHBHgpAwIixCXQhnBLg9BIQgiArglAkQgXASgQAAQgIAAgHgGg");
	this.shape_14.setTransform(825.9204,-60.6489);

	var maskedShapeInstanceList = [this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10,p:{y:-54.2419}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_13}]},65).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_10,p:{y:-108.0919}}]},1).wait(3));

	// MASQUOS (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_1 = new cjs.Graphics().p("Ac0MtQhBAAgugvQguguAAhAIAAtxQAAhBAuguQAuguBBAAMAhuAAAQBCAAAtAuQAuAuAABBIAANxQAABAguAuQgtAvhCAAg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_5_graphics_1,x:415.925,y:81.275}).wait(74));

	// Calque_12
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FAC147").s().p("AF1VUQgEgEgWgtQgTglgXgWQgggfg3gaQh8g8AUh5QAXhPAJgqQANg+gWg3IgDgFIgHgQIgFgHIACAAQgTgqgGgcQgKgqAJgwQAOhUgDh1QgGiegvg/Qhthngwg0QhWhcAHiDQASl2jBjbQgggmhzhmQhOhFgSgxQgWg7B2hKQBohACvg3QCmg0CDgPQCNgOARAoQAeBCAOCwQATDbghDDQgYCUBSCdQARAeCKDGQAqA9gGCbQgIC+AyCOQAiBfAKBTIABAAIAEArQADA7gQAfQgYAuhRAnQhQAogbBCQgWA1APAzIAlB2QAcBUAJApQAKA3gHAqQgJAvgeAEIgGAAQgRAAgMgSg");
	this.shape_15.setTransform(654.9764,-57.8487);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FAC147").s().p("AFNVwQgtgqgGhGIgHiHQgEhwgGgRQgGguglgkQgygvhWgHQhWgGgmgeQgZgUgTgwIgQgyQgCgHACgJQgRhWgDhtQgIighUiiQhSiPAIhIQAkjdAFg2QAWjfhviYQhpiZhTjKQhAiegChJQgCgwCZgwQCPgrDIgVQDOgWCNAQQCfASAEA/QAHA5grBxQg+CggWBPQhjEJClFEQA4BugSCLQgQBEg/CSQgWBmA+CcQAtBxAsBPQAaAjAGAmQAEAcgBArQACALgDAGQgFAMgQAKQgPAPgGAVQgEAMACAMQAAA0ApBEQAcAuAyBAQBABlhcBgQgpAvgXAlQgRAZgGAfQgFAsgGgEQgJANgYABIgCAAQgiAAghgog");
	this.shape_16.setTransform(668.3858,-34.5651);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FAC147").s().p("AFUWLQgegngLg9QgHgsgGheQgJh4gCgKQgHg3gsgqQg6g2hmgHQhlgGgtgkQgegXgXg5IgPguIABgDQgXhWgEhsQgIighai1QhNiWAShMQA7j1AFgnQAXjDhgiMQh3iuhNjcQg9iwAChNQABguCggrQCWgnDNgPQDVgQCOAWQCjAYACBDQACA3g1BmQhNCVgUA4QhxEfC0FkQBAB9gwCAQgbBGhJCQQgZBVBACfQAvB0AzBOQAeAqAHAtQAFAdgCAvQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAFgEAFIgEAWIgCAKQAAA8AqA7QAcAoA6BEQBJBuhrBqQgvAvgWAqQgQAegFApQgEA1gEAEQgHAWgZAFIgKABQgdAAgaglg");
	this.shape_17.setTransform(672.3392,-29.219);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FAC147").s().p("AFWWRQgbgmgMg7QgJgrgGhfQgJh7gCgIQgHg5gugrQg8g4hpgHQhogGgvglQgggYgXg7IgPgtIABAAQgYhWgEhsQgIighci5QhMiYAVhNQBAj6AFgkQAXi8hciJQh6izhMjhQg9i0ADhNQACguChgqQCYgmDOgOQDXgOCPAXQCjAZABBEQACA3g4BjQhRCSgTA0Qh0EkC4FrQBBCAg3B9QgdBHhMCPQgZBSBACfQAwB1A0BOQAfArAIAvQAFAdgCAxIACAAIgCAIIgBATIgBAGQAAA+AqA6QAcAlA7BGQBMBwhvBsQgwAvgWAsQgPAfgFArQgFA2gCAGQgHAZgZAFIgLABQgcAAgZgkg");
	this.shape_18.setTransform(673.2145,-28.0109);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FAC147").s().p("AGuVtQgNgGgYgJQghgLgqgjQhMgwAEhaQAHg+AChEQAChdgMgfQgEgegYgXQggggg2gHQg2gFgZgUQgPgMgLgeQgNgggHgZQgFgVAFgYQgFhVgChwQgHighGh8Qhdh/gOhBQgKiqAFhUQAVkZiPiyQhNhthfijQhGh9gHg/QgKg0CMg6QCAgzC+giQC+giCJAEQCZAGAJA2QAPA9gVCJQgeC3gbB7QhGDcCFEEQApBPAqChQAGBCgpCWQgQCHA5CXIBIC6QAQAWAEAXQADAaABAjQACAdgIAQQgNAZgpAVQgoAZgNAmQgMAcAHAbQABAjAnBUQAcA9AiA3QArBTg7BLQgdAvgaAYQgSARgJALQgDAOgFAAQgEAAgFgIg");
	this.shape_19.setTransform(660.3352,-67.6068);

	var maskedShapeInstanceList = [this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15,p:{y:-57.8487}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[]},1).to({state:[{t:this.shape_18}]},65).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:-103.9987}}]},1).wait(3));

	// MASQUOS (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_1 = new cjs.Graphics().p("Aw2JWQhBAAgugvQguguAAhAIAAtxQAAhBAuguQAuguBBAAMAhtAAAQBCAAAtAuQAuAuAABBIAANxQAABAguAuQgtAvhCAAg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_6_graphics_1,x:708.225,y:102.775}).wait(74));

	// Calque_11
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FAC147").s().p("AP7QqQgXgYg+grIh0hMQhag8ABhkQAEhvg9hYQgZgjg9gmIgpgZQgfgOgigTQhag0gogrQkYlEihheQg3ggg7gPQg8gMgggLQh0gmhrh3QhxiPhAhCQhthxh/hQQgngZh4g/QgxgaF3iLQF3iLAuAQQA7AVBPBLQBmBhA9CFQAuBnA9CnQBFCGCoBcICBBAQBSApAxAjQCLBnAvC3IACABQADBaBPB6QA0BSAAAlQAAAagoA+QgmA/AUA4QAVA/BfBJQBYBEAqBDQAhA1gFAlQAAATgaAFIgKABQgYAAgTgWg");
	this.shape_20.setTransform(528.4743,-28.4103);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FAC147").s().p("APXUWQgwgMg1gvQhCg9gmhbQgyhog7g1QgzgzhhgFQhdAGgogOQgtgMhChBQhkhhhngfQgRgLgIgJQjmiUhJiZQgZg1gOhNQgShvgHgKQgnigiEhxQiuh4hlhNQiHhphPh5QgzhVgQg+QgDgtGVkSQGWkTANAvQAVByAWAyQAtCKBQCMQAyBXBuCeQBbCMAQB0QgCAcAGA9QACA5ASA6QAyCoDfFUQAdAqALBUQAFAwAPAzQANAgAEAdQAKA9ATAoQA7BUB/AmQBxAnAnBkQAZAyAaBVQAVBFAPAfQASAdgaAWQgRANgQAAQgIAAgHgDg");
	this.shape_21.setTransform(576.8417,-14.1874);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FAC147").s().p("APQVCQg1gKgzgwQhAg+gmhoQgqhwhGgsQg+gohoALQhpANglgJQgwgMhLhLQhyhxhzghQgDgDgBgDQjfhzg3ijQgVg5gFhZQgJiDgCgJQgai3iIhwQi5hzhshQQiMhnhHiAQg1hhAEg+QAFgwGbksQGcksAHA0QANCEAMAtQAiCSBUCOQAyBTB4CcQBfCOgMB4QgFAhgQA9QgNA8ANA+QAhC1EAFxQAiAyANBjQAGApACAlQAHAXAEAbQAMBEAeAkQBNBYCTAiQCDAjAcBpQAOAuAWBZQAUBIASAeQAVAfgaAZQgSARgTAAIgKgBg");
	this.shape_22.setTransform(585.9475,-11.4017);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FAC147").s().p("APPVLQg2gJgzgwQg/g/gmhrQgphxhIgqQhAgmhqAPQhsAPgkgJQgxgMhNhMQh1h1h2giIAAgDQjchrg0imQgTg6gDhbIgJiQQgWi9iJhvQi8hyhuhQQiNhnhEiCQg2hkAJg+QAHgxGckxQGdkyAFA2QAMCHAJAtQAgCTBVCOQAyBTB6CcQBgCNgTB6QgFAigUA9QgRA9ALA/QAeC3EIF4QAjAzANBnQAGAnAAAiIAJAwQANBGAgAjQBRBYCYAiQCHAiAZBpIAhCIQATBJATAdQAWAggaAZQgTASgTAAIgJgBg");
	this.shape_23.setTransform(587.9459,-10.7769);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FAC147").s().p("APlS8QgmgRg5gtQhGg5gnhCQhBhXgkhHQgehKhTglQhCgKgxgXQgkgNgwgsQhJhBhNgbQgtgagUgXQj5jXhriCQglgugfg0QgihKgRgKQhFhxh6hzIjtjKQh9hshihpQgug+g4g/QgVglGKjeQGKjfAaAjQAjBOAsA8QBDB7BJCJQAwBdBcChQBSCKBKBrQACATAyA8QAhAzAeAxQBUCPCcEYQASAaAHAzQAEBBAoBOQAcAzACAgQAHAwgEAxQAWBLBVAtQBOAxA8BZQAyA5AgBOQAaA/AHAiQALAZgaAPQgNAGgLAAQgOAAgMgIg");
	this.shape_24.setTransform(544.7353,-40.7362);

	var maskedShapeInstanceList = [this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20,p:{x:528.4743,y:-28.4103}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).to({state:[{t:this.shape_23}]},65).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_20,p:{x:501.4743,y:-70.4103}}]},1).wait(3));

	// MASQUOS (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_1 = new cjs.Graphics().p("Ac0MtQhBAAgugvQguguAAhAIAAtxQAAhBAuguQAuguBBAAMAhuAAAQBCAAAtAuQAuAuAABBIAANxQAABAguAuQgtAvhCAAg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_7_graphics_1,x:415.925,y:81.275}).wait(74));

	// Calque_10
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FAC147").s().p("ARgMtQgvgWhLgHIhOAAQgkgCglgTQgygagpgsQg0hAgyg0QhBhFg2gPQgUgHhfgGIgBABQgWgCgogOQhMgahOg+QhshXhigsQiAg6iNAAQifAMhGgDQhwgHjOhRIkkhkQgigLgLgNQgKgMgEgiQgLhHAkidQAninA6heQBmijAYghQBGhfAmAWQAcASCQCYQC6DEBwBoQCJCABMAbQAxARB5AfQBcAkCHCRQCrC5BOA7IABAAQAiAbBEATQA7ATAtAyQAqAvAmBGQAiA8AeAaQAdAaBHAVQBQAWAwAhQAzAjAUAqQASAngWAIQgCABgEAAQgLAAgYgLg");
	this.shape_25.setTransform(459.5602,68.8814);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FAC147").s().p("ARZOGQg3gVhChAQg+g/gqgNQgrgQhBAXQhCAehEAEQg4AGgsgpQg2gwgrgKQgOgFgPgMQhjgjjfAFQi5AAhkg3Qh2hYgzgfQhQgzi/gYQiqgXjjAIQixAGgdgOQgkgSANipQADhGAqkiQAdi0BUjdQBYjcA0hDQAjguATABQAUACA1AyQBGBBDTC0QC/CTBSBuQAzBFBsCuQBiCQCDBhQBzBaB+AfQBRAQA7AxQAlAeAaAZQALAEAIAKQBDBhAXAaQAtAwBTACQBAADBQgHQA/ABA1AdQArAYAZAqIAsBVQAtBFAiAWQASAMgLANQgDAeglAUQgXAMgbAAQgXAAgbgJg");
	this.shape_26.setTransform(524.0631,52.7004);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FAC147").s().p("AR+OcQg4gUhHhEQhAg+gogGQgogHhCAfQhLAlhAAGQhBAHg0gxQg9g5grgIIgGgEQhigZj2AOQjDALhchCQhvhqgvglQhKg7i8gNQicgMkGAMQjLAKgggOQgpgTAPjDQAHhGArk7QAai2BZj1QBWjnA5hJQAcglARgDQARgBAlAfIEWDrQDICWBUB+QAzBOBpDKQBjCkCDBXQBoBICIAbQBfASBHA7QAlAeASAaIAEAFQBHBpAUATQAvAtBdgDQBHgBBSgNQA7gCA3AdQAoAVAaAqIA2BcQA3BSAvAcQAdATABAQQAHAkgnAXQgaAQggAAQgWAAgZgIg");
	this.shape_27.setTransform(537.5919,50.0561);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FAC147").s().p("ASFOhQg4gUhIhEQhBg/gngEQgngEhDAgQhNAng+AGQhEAHg2gyQg+g7gsgJIAAgBQhhgWj8AQQjFANhbhEQhthugugmQhJg9i7gLQiZgJkNANQjSAKgggOQgrgTARjIQAHhGArlBQAai3Baj6QBVjqA6hKQAbgjAQgDQARgDAhAbQArAjDqDGQDLCXBUCBQAzBRBoDPQBkCpCDBVQBlBECKAaQBjATBJA9QAlAeAQAaIAAACQBIBsAUARQAwAsBfgEQBIgBBSgOQA7gEA3AdQAoAVAaAqIA4BeQA6BUAxAeQAgAUAEARQAJAlgoAYQgbAQggAAQgWAAgZgHg");
	this.shape_28.setTransform(540.7095,49.4655);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FAC147").s().p("AQANZQg1gXg5g4Qg6g/gtgcQg0glg8AJQgxAQhOAAQgiADgcgZQgqgegpgLQgngOgmgfQhng2iwgOQiigXh0giIi/hGQhdghjFguQjIgvidgBQh6gBgVgOQgagPAGh1QgChHAnjuQAhivBKisQBdjHApg2QAxhAAbAJQAXAIBYBZQByB0CtCWQCqCMBQBOQAyAxBxB3QBfBnCGBzQCIB+BsAqQAyAKAkAeQAkAdAqAXQAeAKAWAZQA5BOAdArQApA0A+ALQAzANBNADQBFAJAzAfQAuAcAXAqQARAhAJAlQAYAtAJAIQgHgCgkAGQgYASgfAMQgQAFgSAAQgaAAgdgLg");
	this.shape_29.setTransform(497.9938,58.091);

	var maskedShapeInstanceList = [this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).to({state:[{t:this.shape_28}]},65).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_25}]},1).wait(3));

	// MASQUOS (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_1 = new cjs.Graphics().p("Aw2JWQhBAAgugvQguguAAhAIAAtxQAAhBAuguQAuguBBAAMAhtAAAQBCAAAtAuQAuAuAABBIAANxQAABAguAuQgtAvhCAAg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_8_graphics_1,x:708.225,y:102.775}).wait(74));

	// Layer_1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FAC147").s().p("AzzCAQgIhCAChGQADhIAOgGQCDgvDvAIQBjACEIAbQBhAJCBA1QCaAoEtgXQCPgLB7AaQA8AMAiAPIBDAUQA5AOAtAAQBAAAAygOQA9gTApgDQA1gGBBAeQBGAhA3AAQBAAAASADQAhAEAKARQAHALgJANg");
	this.shape_30.setTransform(449.7611,194.8979);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FAC147").s().p("AzzC/QgIhjAChoQADhtAOgJQCDhGDvALQBjAEEIAnQBhAOCBBPQCaA+EtgjQCPgSB7AoQA8ATAiAWIBDAeQA5AVAtAAQBAAAAygVQA9gcApgGQA1gHBBAsQBGAxA3ABQBAAAASAEQAhAGAKAaQAHARgJASg");
	this.shape_31.setTransform(520.4611,152.0503);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FAC147").s().p("AzzDMQgIhqAChvQADh0AOgJQCDhLDvAMQBjAEEIAqQBhAPCBBUQCaBCEtgmQCPgSB7AqQA8AUAiAYIBDAfQA5AXAtAAQBAAAAygXQA9gdApgGQA1gIBBAuQBGA0A3ACQBAAAASAEQAhAGAKAcQAHARgJAVg");
	this.shape_32.setTransform(533.7611,143.9918);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FAC147").s().p("AzzDOQgIhrAChwQADh2AOgJQCDhMDvAMQBjAEEIArQBhAPCBBVQCaBDEtgmQCPgTB7ArQA8AUAiAYIBDAgQA5AXAtAAQBAAAAygXQA9gdApgHQA1gIBBAvQBGA1A3ABQBAAAASAEQAhAHAKAcQAHASgJAUg");
	this.shape_33.setTransform(536.7611,142.1677);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FAC147").s().p("AzzCnQgIhXAChbQADhfAOgIQCDg9DvAKQBjADEIAjQBhAMCBBFQCaA2EtgfQCPgPB7AjQA8AQAiATIBDAaQA5ATAtAAQBAAAAygTQA9gYApgFQA1gHBBAnQBGAqA3ABQBAAAASAEQAhAFAKAXQAHAOgJARg");
	this.shape_34.setTransform(493.2611,168.5546);

	var maskedShapeInstanceList = [this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[]},1).to({state:[{t:this.shape_33}]},65).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_30}]},1).wait(3));

	// Calque_23 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_1 = new cjs.Graphics().p("A71KDQhBAAgugvQgvguAAhAIAAvLQAAhAAvgvQAuguBBAAMA3rAAAQBCAAAtAuQAvAvgBBAIAAPLQABBAgvAuQgtAvhCAAg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_9_graphics_1,x:724.9,y:98.525}).wait(74));

	// Calque_8
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FAC147").s().p("AlGCkIAAgBQAAiHBfhfQBhhgCGAAQCIAABgBgQBfBfAACHIAAABg");
	this.shape_35.setTransform(708.35,224.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F29137").s().p("AlGCkIAAgBQAAiHBfhfQBhhgCGAAQCIAABgBgQBfBfAACHIAAABg");
	this.shape_36.setTransform(708.35,180.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EE742E").s().p("AlGCkIAAAAQAAiIBfhfQBhhgCGgBQCIABBgBgQBfBfAACIIAAAAg");
	this.shape_37.setTransform(708.35,155);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EC6A2B").s().p("AlGClIAAgBQAAiIBfhfQBhhhCGAAQCIAABgBhQBfBfAACIIAAABg");
	this.shape_38.setTransform(708.35,146.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F39639").s().p("AlGClIAAgCQAAiHBfhfQBhhhCGAAQCIAABgBhQBfBfAACHIAAACg");
	this.shape_39.setTransform(708.35,185.3);

	var maskedShapeInstanceList = [this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[]},1).to({state:[{t:this.shape_38}]},65).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_35}]},1).wait(3));

	// Calque_6
	this.instance_5 = new lib.jaunedroite_1();
	this.instance_5.setTransform(810.3,535.9,1,1,-10.2005,0,0,348,208.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({regY:208.5,rotation:0,x:700,y:555.5},8,cjs.Ease.get(1)).wait(49).to({alpha:0},2).wait(1));

	// Calque_7
	this.instance_6 = new lib.jaunegauche_1();
	this.instance_6.setTransform(591.85,575.15,1,1,-10.2005,0,0,348.1,208.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({regX:348,rotation:0,x:700,y:555.5},8,cjs.Ease.get(1)).wait(49).to({alpha:0},2).wait(1));

	// Calque_5
	this.instance_7 = new lib.apnnu();
	this.instance_7.setTransform(700.15,555.7,0.85,0.85,-10.1996,0,0,348.2,208.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({regX:348,regY:208.5,scaleX:1,scaleY:1,rotation:0,x:700,y:555.5},8,cjs.Ease.get(1)).wait(49).to({alpha:0},2).wait(1));

	// Calque_24
	this.instance_8 = new lib.ph6();
	this.instance_8.setTransform(700,554.5,1,1,0,0,0,700,554.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(63).to({_off:false},0).to({_off:true},7).wait(5));

	// Calque_25
	this.instance_9 = new lib.ph5();
	this.instance_9.setTransform(700,554.5,1,1,0,0,0,700,554.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(56).to({_off:false},0).to({_off:true},7).wait(12));

	// Calque_27
	this.instance_10 = new lib.ph3();
	this.instance_10.setTransform(700,554.5,1,1,0,0,0,700,554.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(48).to({_off:false},0).to({_off:true},8).wait(19));

	// Calque_26
	this.instance_11 = new lib.ph4();
	this.instance_11.setTransform(700,554.5,1,1,0,0,0,700,554.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40).to({_off:false},0).to({_off:true},8).wait(27));

	// Calque_28
	this.instance_12 = new lib.ph2();
	this.instance_12.setTransform(700,554.5,1,1,0,0,0,700,554.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(32).to({_off:false},0).to({_off:true},8).wait(35));

	// Calque_1
	this.ph1 = new lib.p1();
	this.ph1.name = "ph1";
	this.ph1.setTransform(700,556.5,1.05,1.05,0,0,0,700,554.5);
	this.ph1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ph1).wait(23).to({_off:false},0).to({scaleX:1,scaleY:1},2,cjs.Ease.get(1)).to({_off:true},7).wait(43));

	// Calque_2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#152E68").s().p("EhtXBWpMAAAitRMDavAAAMAAACtRg");
	this.shape_40.setTransform(700,554.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(75));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(665,528.8,770,610);
// library properties:
lib.properties = {
	id: '013F90979FFB424094E622452E7D7628',
	width: 1400,
	height: 1109,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_16.png?1727883942413", id:"CachedBmp_16"},
		{src:"images/CachedBmp_12.png?1727883942414", id:"CachedBmp_12"},
		{src:"images/CachedBmp_11.png?1727883942414", id:"CachedBmp_11"},
		{src:"images/ANIMHAUTE C_atlas_1.png?1727883942313", id:"ANIMHAUTE C_atlas_1"},
		{src:"images/ANIMHAUTE C_atlas_2.png?1727883942313", id:"ANIMHAUTE C_atlas_2"},
		{src:"images/ANIMHAUTE C_atlas_3.png?1727883942313", id:"ANIMHAUTE C_atlas_3"},
		{src:"images/ANIMHAUTE C_atlas_4.png?1727883942313", id:"ANIMHAUTE C_atlas_4"},
		{src:"images/ANIMHAUTE C_atlas_5.png?1727883942313", id:"ANIMHAUTE C_atlas_5"},
		{src:"images/ANIMHAUTE C_atlas_6.png?1727883942313", id:"ANIMHAUTE C_atlas_6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['013F90979FFB424094E622452E7D7628'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;