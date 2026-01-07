(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.BeatsBelowZero = function() {
	this.initialize(img.BeatsBelowZero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,77);


(lib.BG_01 = function() {
	this.initialize(img.BG_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,492);


(lib.BG_02 = function() {
	this.initialize(img.BG_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,492);


(lib.BG_03 = function() {
	this.initialize(img.BG_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,492);


(lib.BG_04 = function() {
	this.initialize(img.BG_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,492);


(lib.CargoKarting = function() {
	this.initialize(img.CargoKarting);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,77);


(lib.ctaiqoscom = function() {
	this.initialize(img.ctaiqoscom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,62);


(lib.curiouslatin = function() {
	this.initialize(img.curiouslatin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,46);


(lib.Dev_02 = function() {
	this.initialize(img.Dev_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,226);


(lib.ElectricDreams = function() {
	this.initialize(img.ElectricDreams);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,123);


(lib.ElectricPurple = function() {
	this.initialize(img.ElectricPurple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,102);


(lib.ElectricStyle_Dreams = function() {
	this.initialize(img.ElectricStyle_Dreams);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,59);


(lib.GWH = function() {
	this.initialize(img.GWH);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,79);


(lib.IlumaI = function() {
	this.initialize(img.IlumaI);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,53);


(lib.iqos_logo = function() {
	this.initialize(img.iqos_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,38);


(lib.JoinNow = function() {
	this.initialize(img.JoinNow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,77);


(lib.New = function() {
	this.initialize(img.New);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,34);


(lib.Note = function() {
	this.initialize(img.Note);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,18);


(lib.Shade_1 = function() {
	this.initialize(img.Shade_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,421);


(lib.SwissDream = function() {
	this.initialize(img.SwissDream);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,77);


(lib.Triangle = function() {
	this.initialize(img.Triangle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,231);// helper functions:

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


(lib.sub_04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.SwissDream();
	this.instance.setTransform(-124,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_04, new cjs.Rectangle(-124,-77,248,77), null);


(lib.sub_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BeatsBelowZero();
	this.instance.setTransform(-106.5,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_03, new cjs.Rectangle(-106.5,-77,213,77), null);


(lib.sub_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CargoKarting();
	this.instance.setTransform(-98.5,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_02, new cjs.Rectangle(-98.5,-77,197,77), null);


(lib.sub_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ElectricStyle_Dreams();
	this.instance.setTransform(-88,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_01, new cjs.Rectangle(-88,-59,176,59), null);


(lib.stageBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("A6KNcIAA63MA0VAAAIAAa3g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stageBtn, new cjs.Rectangle(-167.5,-85.9,335,171.9), null);


(lib._new = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.New();
	this.instance.setTransform(-40,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._new, new cjs.Rectangle(-40,-34,80,34), null);


(lib.mc_triangle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Triangle();
	this.instance.setTransform(-115.5,-231);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_triangle, new cjs.Rectangle(-115.5,-231,231,231), null);


(lib.mc_time2copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape.setTransform(-103.95,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOqAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(-101,-0.025);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_2.setTransform(-99.55,-0.025);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_3.setTransform(-80.5,-0.025);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_4.setTransform(-64.4,-0.025);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOqAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_5.setTransform(-43.9,-0.025);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:-102.5},0).to({_off:true},1).wait(2).to({_off:false,x:-98.1},0).wait(1).to({x:-96.65},0).to({_off:true},1).wait(2).to({_off:false,x:-92.25},0).to({_off:true},1).wait(3).to({_off:false,x:-86.4},0).to({_off:true},1).wait(35).to({_off:false,x:-33.65},0).to({_off:true},1).wait(3).to({_off:false,x:-27.8},0).to({_off:true},1).wait(3).to({_off:false,x:-21.95},0).to({_off:true},1).wait(2).to({_off:false,x:-17.55},0).wait(1).to({x:-16.1},0).to({_off:true},1).wait(2).to({_off:false,x:-11.7},0).wait(1).to({x:-10.25},0).to({_off:true},1).wait(2).to({_off:false,x:-5.85},0).wait(1).to({x:-4.4},0).to({_off:true},1).wait(2).to({_off:false,x:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-95.15},0).to({_off:true},1).wait(2).to({_off:false,x:-90.75},0).wait(1).to({x:-89.3},0).to({_off:true},1).wait(2).to({_off:false,x:-84.9},0).wait(1).to({x:-83.45},0).to({_off:true},1).wait(2).to({_off:false,x:-79.05},0).wait(1).to({x:-77.6},0).to({_off:true},1).wait(2).to({_off:false,x:-73.2},0).wait(1).to({x:-71.75},0).to({_off:true},1).wait(2).to({_off:false,x:-67.35},0).wait(1).to({x:-65.9},0).to({_off:true},1).wait(2).to({_off:false,x:-61.5},0).wait(1).to({x:-60.05},0).to({_off:true},1).wait(2).to({_off:false,x:-55.65},0).to({_off:true},1).wait(3).to({_off:false,x:-49.8},0).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-93.7},0).to({_off:true},1).wait(3).to({_off:false,x:-87.85},0).to({_off:true},1).wait(3).to({_off:false,x:-82},0).to({_off:true},1).wait(3).to({_off:false,x:-76.15},0).to({_off:true},1).wait(3).to({_off:false,x:-70.3},0).to({_off:true},1).wait(42).to({_off:false,x:-7.3},0).to({_off:true},1).wait(3).to({_off:false,x:-1.45},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(16).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-74.65},0).to({_off:true},1).wait(3).to({_off:false,x:-68.8},0).to({_off:true},1).wait(3).to({_off:false,x:-62.95},0).to({_off:true},1).wait(3).to({_off:false,x:-57.1},0).to({_off:true},1).wait(3).to({_off:false,x:-51.25},0).to({_off:true},1).wait(3).to({_off:false,x:-45.4},0).to({_off:true},1).wait(3).to({_off:false,x:-39.55},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(27).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-58.55},0).to({_off:true},1).wait(2).to({_off:false,x:-54.15},0).wait(1).to({x:-52.7},0).to({_off:true},1).wait(2).to({_off:false,x:-48.3},0).wait(1).to({x:-46.85},0).to({_off:true},1).wait(2).to({_off:false,x:-42.45},0).wait(1).to({x:-41},0).to({_off:true},1).wait(2).to({_off:false,x:-36.6},0).wait(1).to({x:-35.15},0).to({_off:true},1).wait(2).to({_off:false,x:-30.75},0).wait(1).to({x:-29.3},0).to({_off:true},1).wait(2).to({_off:false,x:-24.9},0).wait(1).to({x:-23.45},0).to({_off:true},1).wait(2).to({_off:false,x:-19.05},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(41).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-38.05},0).to({_off:true},1).wait(3).to({_off:false,x:-32.2},0).to({_off:true},1).wait(3).to({_off:false,x:-26.35},0).to({_off:true},1).wait(3).to({_off:false,x:-20.5},0).to({_off:true},1).wait(3).to({_off:false,x:-14.65},0).wait(1).to({x:-13.2},0).to({_off:true},1).wait(2).to({_off:false,x:-8.8},0).to({_off:true},1).wait(3).to({_off:false,x:-2.95},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.2)").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_6.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-3.5,99.8,7);


(lib.mc_time2copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape.setTransform(-103.95,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOqAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(-101,-0.025);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_2.setTransform(-99.55,-0.025);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_3.setTransform(-80.5,-0.025);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_4.setTransform(-64.4,-0.025);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOqAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_5.setTransform(-43.9,-0.025);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:-102.5},0).to({_off:true},1).wait(2).to({_off:false,x:-98.1},0).wait(1).to({x:-96.65},0).to({_off:true},1).wait(2).to({_off:false,x:-92.25},0).to({_off:true},1).wait(3).to({_off:false,x:-86.4},0).to({_off:true},1).wait(35).to({_off:false,x:-33.65},0).to({_off:true},1).wait(3).to({_off:false,x:-27.8},0).to({_off:true},1).wait(3).to({_off:false,x:-21.95},0).to({_off:true},1).wait(2).to({_off:false,x:-17.55},0).wait(1).to({x:-16.1},0).to({_off:true},1).wait(2).to({_off:false,x:-11.7},0).wait(1).to({x:-10.25},0).to({_off:true},1).wait(2).to({_off:false,x:-5.85},0).wait(1).to({x:-4.4},0).to({_off:true},1).wait(2).to({_off:false,x:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-95.15},0).to({_off:true},1).wait(2).to({_off:false,x:-90.75},0).wait(1).to({x:-89.3},0).to({_off:true},1).wait(2).to({_off:false,x:-84.9},0).wait(1).to({x:-83.45},0).to({_off:true},1).wait(2).to({_off:false,x:-79.05},0).wait(1).to({x:-77.6},0).to({_off:true},1).wait(2).to({_off:false,x:-73.2},0).wait(1).to({x:-71.75},0).to({_off:true},1).wait(2).to({_off:false,x:-67.35},0).wait(1).to({x:-65.9},0).to({_off:true},1).wait(2).to({_off:false,x:-61.5},0).wait(1).to({x:-60.05},0).to({_off:true},1).wait(2).to({_off:false,x:-55.65},0).to({_off:true},1).wait(3).to({_off:false,x:-49.8},0).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-93.7},0).to({_off:true},1).wait(3).to({_off:false,x:-87.85},0).to({_off:true},1).wait(3).to({_off:false,x:-82},0).to({_off:true},1).wait(3).to({_off:false,x:-76.15},0).to({_off:true},1).wait(3).to({_off:false,x:-70.3},0).to({_off:true},1).wait(42).to({_off:false,x:-7.3},0).to({_off:true},1).wait(3).to({_off:false,x:-1.45},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(16).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-74.65},0).to({_off:true},1).wait(3).to({_off:false,x:-68.8},0).to({_off:true},1).wait(3).to({_off:false,x:-62.95},0).to({_off:true},1).wait(3).to({_off:false,x:-57.1},0).to({_off:true},1).wait(3).to({_off:false,x:-51.25},0).to({_off:true},1).wait(3).to({_off:false,x:-45.4},0).to({_off:true},1).wait(3).to({_off:false,x:-39.55},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(27).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-58.55},0).to({_off:true},1).wait(2).to({_off:false,x:-54.15},0).wait(1).to({x:-52.7},0).to({_off:true},1).wait(2).to({_off:false,x:-48.3},0).wait(1).to({x:-46.85},0).to({_off:true},1).wait(2).to({_off:false,x:-42.45},0).wait(1).to({x:-41},0).to({_off:true},1).wait(2).to({_off:false,x:-36.6},0).wait(1).to({x:-35.15},0).to({_off:true},1).wait(2).to({_off:false,x:-30.75},0).wait(1).to({x:-29.3},0).to({_off:true},1).wait(2).to({_off:false,x:-24.9},0).wait(1).to({x:-23.45},0).to({_off:true},1).wait(2).to({_off:false,x:-19.05},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(41).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-38.05},0).to({_off:true},1).wait(3).to({_off:false,x:-32.2},0).to({_off:true},1).wait(3).to({_off:false,x:-26.35},0).to({_off:true},1).wait(3).to({_off:false,x:-20.5},0).to({_off:true},1).wait(3).to({_off:false,x:-14.65},0).wait(1).to({x:-13.2},0).to({_off:true},1).wait(2).to({_off:false,x:-8.8},0).to({_off:true},1).wait(3).to({_off:false,x:-2.95},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.2)").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_6.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-3.5,99.8,7);


(lib.mc_time2copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape.setTransform(-103.95,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOqAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(-101,-0.025);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_2.setTransform(-99.55,-0.025);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_3.setTransform(-80.5,-0.025);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_4.setTransform(-64.4,-0.025);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOqAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_5.setTransform(-43.9,-0.025);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:-102.5},0).to({_off:true},1).wait(2).to({_off:false,x:-98.1},0).wait(1).to({x:-96.65},0).to({_off:true},1).wait(2).to({_off:false,x:-92.25},0).to({_off:true},1).wait(3).to({_off:false,x:-86.4},0).to({_off:true},1).wait(35).to({_off:false,x:-33.65},0).to({_off:true},1).wait(3).to({_off:false,x:-27.8},0).to({_off:true},1).wait(3).to({_off:false,x:-21.95},0).to({_off:true},1).wait(2).to({_off:false,x:-17.55},0).wait(1).to({x:-16.1},0).to({_off:true},1).wait(2).to({_off:false,x:-11.7},0).wait(1).to({x:-10.25},0).to({_off:true},1).wait(2).to({_off:false,x:-5.85},0).wait(1).to({x:-4.4},0).to({_off:true},1).wait(2).to({_off:false,x:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-95.15},0).to({_off:true},1).wait(2).to({_off:false,x:-90.75},0).wait(1).to({x:-89.3},0).to({_off:true},1).wait(2).to({_off:false,x:-84.9},0).wait(1).to({x:-83.45},0).to({_off:true},1).wait(2).to({_off:false,x:-79.05},0).wait(1).to({x:-77.6},0).to({_off:true},1).wait(2).to({_off:false,x:-73.2},0).wait(1).to({x:-71.75},0).to({_off:true},1).wait(2).to({_off:false,x:-67.35},0).wait(1).to({x:-65.9},0).to({_off:true},1).wait(2).to({_off:false,x:-61.5},0).wait(1).to({x:-60.05},0).to({_off:true},1).wait(2).to({_off:false,x:-55.65},0).to({_off:true},1).wait(3).to({_off:false,x:-49.8},0).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-93.7},0).to({_off:true},1).wait(3).to({_off:false,x:-87.85},0).to({_off:true},1).wait(3).to({_off:false,x:-82},0).to({_off:true},1).wait(3).to({_off:false,x:-76.15},0).to({_off:true},1).wait(3).to({_off:false,x:-70.3},0).to({_off:true},1).wait(42).to({_off:false,x:-7.3},0).to({_off:true},1).wait(3).to({_off:false,x:-1.45},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(16).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-74.65},0).to({_off:true},1).wait(3).to({_off:false,x:-68.8},0).to({_off:true},1).wait(3).to({_off:false,x:-62.95},0).to({_off:true},1).wait(3).to({_off:false,x:-57.1},0).to({_off:true},1).wait(3).to({_off:false,x:-51.25},0).to({_off:true},1).wait(3).to({_off:false,x:-45.4},0).to({_off:true},1).wait(3).to({_off:false,x:-39.55},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(27).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-58.55},0).to({_off:true},1).wait(2).to({_off:false,x:-54.15},0).wait(1).to({x:-52.7},0).to({_off:true},1).wait(2).to({_off:false,x:-48.3},0).wait(1).to({x:-46.85},0).to({_off:true},1).wait(2).to({_off:false,x:-42.45},0).wait(1).to({x:-41},0).to({_off:true},1).wait(2).to({_off:false,x:-36.6},0).wait(1).to({x:-35.15},0).to({_off:true},1).wait(2).to({_off:false,x:-30.75},0).wait(1).to({x:-29.3},0).to({_off:true},1).wait(2).to({_off:false,x:-24.9},0).wait(1).to({x:-23.45},0).to({_off:true},1).wait(2).to({_off:false,x:-19.05},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(41).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-38.05},0).to({_off:true},1).wait(3).to({_off:false,x:-32.2},0).to({_off:true},1).wait(3).to({_off:false,x:-26.35},0).to({_off:true},1).wait(3).to({_off:false,x:-20.5},0).to({_off:true},1).wait(3).to({_off:false,x:-14.65},0).wait(1).to({x:-13.2},0).to({_off:true},1).wait(2).to({_off:false,x:-8.8},0).to({_off:true},1).wait(3).to({_off:false,x:-2.95},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.2)").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_6.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-3.5,99.8,7);


(lib.mc_time2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape.setTransform(-103.95,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOqAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(-101,-0.025);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_2.setTransform(-99.55,-0.025);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_3.setTransform(-80.5,-0.025);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_4.setTransform(-64.4,-0.025);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOqAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_5.setTransform(-43.9,-0.025);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:-102.5},0).to({_off:true},1).wait(2).to({_off:false,x:-98.1},0).wait(1).to({x:-96.65},0).to({_off:true},1).wait(2).to({_off:false,x:-92.25},0).to({_off:true},1).wait(3).to({_off:false,x:-86.4},0).to({_off:true},1).wait(35).to({_off:false,x:-33.65},0).to({_off:true},1).wait(3).to({_off:false,x:-27.8},0).to({_off:true},1).wait(3).to({_off:false,x:-21.95},0).to({_off:true},1).wait(2).to({_off:false,x:-17.55},0).wait(1).to({x:-16.1},0).to({_off:true},1).wait(2).to({_off:false,x:-11.7},0).wait(1).to({x:-10.25},0).to({_off:true},1).wait(2).to({_off:false,x:-5.85},0).wait(1).to({x:-4.4},0).to({_off:true},1).wait(2).to({_off:false,x:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-95.15},0).to({_off:true},1).wait(2).to({_off:false,x:-90.75},0).wait(1).to({x:-89.3},0).to({_off:true},1).wait(2).to({_off:false,x:-84.9},0).wait(1).to({x:-83.45},0).to({_off:true},1).wait(2).to({_off:false,x:-79.05},0).wait(1).to({x:-77.6},0).to({_off:true},1).wait(2).to({_off:false,x:-73.2},0).wait(1).to({x:-71.75},0).to({_off:true},1).wait(2).to({_off:false,x:-67.35},0).wait(1).to({x:-65.9},0).to({_off:true},1).wait(2).to({_off:false,x:-61.5},0).wait(1).to({x:-60.05},0).to({_off:true},1).wait(2).to({_off:false,x:-55.65},0).to({_off:true},1).wait(3).to({_off:false,x:-49.8},0).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-93.7},0).to({_off:true},1).wait(3).to({_off:false,x:-87.85},0).to({_off:true},1).wait(3).to({_off:false,x:-82},0).to({_off:true},1).wait(3).to({_off:false,x:-76.15},0).to({_off:true},1).wait(3).to({_off:false,x:-70.3},0).to({_off:true},1).wait(42).to({_off:false,x:-7.3},0).to({_off:true},1).wait(3).to({_off:false,x:-1.45},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(16).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-74.65},0).to({_off:true},1).wait(3).to({_off:false,x:-68.8},0).to({_off:true},1).wait(3).to({_off:false,x:-62.95},0).to({_off:true},1).wait(3).to({_off:false,x:-57.1},0).to({_off:true},1).wait(3).to({_off:false,x:-51.25},0).to({_off:true},1).wait(3).to({_off:false,x:-45.4},0).to({_off:true},1).wait(3).to({_off:false,x:-39.55},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(27).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-58.55},0).to({_off:true},1).wait(2).to({_off:false,x:-54.15},0).wait(1).to({x:-52.7},0).to({_off:true},1).wait(2).to({_off:false,x:-48.3},0).wait(1).to({x:-46.85},0).to({_off:true},1).wait(2).to({_off:false,x:-42.45},0).wait(1).to({x:-41},0).to({_off:true},1).wait(2).to({_off:false,x:-36.6},0).wait(1).to({x:-35.15},0).to({_off:true},1).wait(2).to({_off:false,x:-30.75},0).wait(1).to({x:-29.3},0).to({_off:true},1).wait(2).to({_off:false,x:-24.9},0).wait(1).to({x:-23.45},0).to({_off:true},1).wait(2).to({_off:false,x:-19.05},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(41).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-38.05},0).to({_off:true},1).wait(3).to({_off:false,x:-32.2},0).to({_off:true},1).wait(3).to({_off:false,x:-26.35},0).to({_off:true},1).wait(3).to({_off:false,x:-20.5},0).to({_off:true},1).wait(3).to({_off:false,x:-14.65},0).wait(1).to({x:-13.2},0).to({_off:true},1).wait(2).to({_off:false,x:-8.8},0).to({_off:true},1).wait(3).to({_off:false,x:-2.95},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.2)").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_6.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-3.5,99.8,7);


(lib.join = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.JoinNow();
	this.instance.setTransform(-108,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.join, new cjs.Rectangle(-108,-77,216,77), null);


(lib.iqos_small = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.iqos_logo();
	this.instance.setTransform(-20,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iqos_small, new cjs.Rectangle(-20,-38,40,38), null);


(lib.ilumai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.IlumaI();
	this.instance.setTransform(-111,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ilumai, new cjs.Rectangle(-111,-53,222,53), null);


(lib.elect_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ElectricPurple();
	this.instance.setTransform(-82,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elect_01, new cjs.Rectangle(-82,-102,164,102), null);


(lib.dreams = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ElectricDreams();
	this.instance.setTransform(-140,-123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dreams, new cjs.Rectangle(-140,-123,280,123), null);


(lib.device_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Dev_02();
	this.instance.setTransform(-200,-226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.device_02, new cjs.Rectangle(-200,-226,400,226), null);


(lib.curios = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.curiouslatin();
	this.instance.setTransform(-58.4,-36.3,0.7892,0.7892);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.curios, new cjs.Rectangle(-58.4,-36.3,116.8,36.3), null);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ctaiqoscom();
	this.instance.setTransform(-44.9,-22.1,0.3564,0.3564);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-44.9,-22.1,89.8,22.1), null);


(lib.BG04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG_04();
	this.instance.setTransform(-168.5,-492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG04, new cjs.Rectangle(-168.5,-492,337,492), null);


(lib.BG02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG_02();
	this.instance.setTransform(-168.5,-492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG02, new cjs.Rectangle(-168.5,-492,337,492), null);


(lib.BG01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG_01();
	this.instance.setTransform(-169,-492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG01, new cjs.Rectangle(-169,-492,338,492), null);


(lib.BG_03_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG_03();
	this.instance.setTransform(-168.5,-492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG_03_1, new cjs.Rectangle(-168.5,-492,337,492), null);


(lib.triangle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mc_triangle();
	this.instance.setTransform(0,-115.5,1,1,0,0,0,0,-115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0675,scaleY:1.0675},48).to({scaleX:1,scaleY:1},46).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.3,-238.8,246.6,246.60000000000002);


(lib.Slides = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Slide01:0,Slide02:72,Slide03:144,Slide04:216};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}
	this.frame_143 = function() {
		this.stop();
	}
	this.frame_215 = function() {
		this.stop();
	}
	this.frame_276 = function() {
		this.lp_end.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.iqos.com/id/id/shop/iqos-iluma-i-door-neon-passionate-purple.html", "_blank");
		    }, 100);
		}.bind(this));
		
		this.lp_end.alpha = 0.05;
	}
	this.frame_287 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(72).call(this.frame_143).wait(72).call(this.frame_215).wait(61).call(this.frame_276).wait(11).call(this.frame_287).wait(1));

	// Layer_14
	this.instance = new lib.mc_time2();
	this.instance.setTransform(-156.5,-479.05,0.7462,0.7589,0,0,0,-52.2,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AGrAbQgJAAgHgIQgGgIAAgLIAAAAQAAgKAGgIQAHgIAJAAIK8AAQAKAAAFAIQAIAIAAAKIAAAAQAAALgIAIQgFAIgKAAgAleAbQgJAAgHgIQgFgIAAgLIAAAAQAAgKAFgIQAHgIAJAAIK8AAQAJAAAGAIQAHAIAAAKIAAAAQAAALgHAIQgGAIgJAAgAxnAbQgJAAgHgIQgFgIgBgLIAAAAQABgKAFgIQAHgIAJAAIK9AAQAJAAAGAIQAGAIAAAKIAAAAQAAALgGAIQgGAIgJAAg");
	this.shape.setTransform(37.95,-478.975);

	this.instance_1 = new lib.mc_time2copy();
	this.instance_1.setTransform(-78.75,-479.05,0.7462,0.7589,0,0,0,-52.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AleAbQgJAAgGgIQgGgIAAgLIAAAAQAAgKAGgIQAGgIAJAAIK9AAQAJAAAGAIQAGAIAAAKIAAAAQAAALgGAIQgGAIgJAAg");
	this.shape_1.setTransform(-117.5,-478.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("AAmAbQgJAAgHgIQgGgIAAgLIAAAAQAAgKAGgIQAHgIAJAAIK9AAQAJAAAGAIQAHAIAAAKIAAAAQAAALgHAIQgGAIgJAAgAriAbQgJAAgHgIQgGgIAAgLIAAAAQAAgKAGgIQAHgIAJAAIK9AAQAJAAAGAIQAHAIAAAKIAAAAQAAALgHAIQgGAIgJAAg");
	this.shape_2.setTransform(76.775,-478.975);

	this.instance_2 = new lib.mc_time2copy2();
	this.instance_2.setTransform(-1.05,-479.05,0.7462,0.7589,0,0,0,-52.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnAbQgKAAgGgIQgGgIAAgLIAAAAQAAgKAGgIQAGgIAKAAIK9AAQAJAAAFAIQAHAIAAAKIAAAAQAAALgHAIQgFAIgJAAgArjAbQgIAAgHgIQgGgIAAgLIAAAAQAAgKAGgIQAHgIAIAAIK9AAQAKAAAGAIQAGAIABAKIAAAAQgBALgGAIQgGAIgKAAg");
	this.shape_3.setTransform(-78.75,-478.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("AleAbQgJAAgGgIQgGgIAAgLIAAAAQAAgKAGgIQAGgIAJAAIK8AAQAKAAAFAIQAHAIAAAKIAAAAQAAALgHAIQgFAIgKAAg");
	this.shape_4.setTransform(115.675,-478.975);

	this.instance_3 = new lib.mc_time2copy3();
	this.instance_3.setTransform(76.75,-479.05,0.7462,0.7589,0,0,0,-52.2,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AGrAbQgJAAgGgIQgHgIAAgLIAAAAQAAgKAHgIQAGgIAJAAIK9AAQAJAAAGAIQAHAIAAAKIAAAAQAAALgHAIQgGAIgJAAgAleAbQgIAAgHgIQgGgIAAgLIAAAAQAAgKAGgIQAHgIAIAAIK8AAQAKAAAGAIQAGAIAAAKIAAAAQAAALgGAIQgGAIgKAAgAxnAbQgKAAgGgIQgGgIAAgLIAAAAQAAgKAGgIQAGgIAKAAIK9AAQAJAAAFAIQAIAIgBAKIAAAAQABALgIAIQgFAIgJAAg");
	this.shape_5.setTransform(-39.9,-478.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_1}]},72).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.instance_2}]},72).to({state:[{t:this.shape_5},{t:this.instance_3}]},72).wait(72));

	// Layer_17
	this.lp_end = new lib.stageBtn();
	this.lp_end.name = "lp_end";
	this.lp_end.setTransform(0.2,-70.2,1.0031,0.8424,0,0,0,0.2,0.4);
	this.lp_end._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lp_end).wait(276).to({_off:false},0).wait(12));

	// Layer_16
	this.instance_4 = new lib.cta();
	this.instance_4.setTransform(-0.15,-142.4,0.7149,0.7149,0,0,0,-0.1,-11.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(265).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:-0.1,y:-132,alpha:1},11).wait(12));

	// Layer_15
	this.instance_5 = new lib.curios();
	this.instance_5.setTransform(0.4,-169.95,1.2791,1.2791,0,0,0,0,-18.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(260).to({_off:false},0).to({scaleX:1,scaleY:1,y:-169.9,alpha:1},9).wait(19));

	// Layer_3
	this.instance_6 = new lib._new();
	this.instance_6.setTransform(-200.7,-456,1,1,0,0,0,0,-17);
	this.instance_6._off = true;

	this.instance_7 = new lib.Note();
	this.instance_7.setTransform(-155,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6}]},10).to({state:[]},58).to({state:[{t:this.instance_7}]},188).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({x:-125},10).to({_off:true},58).wait(216));

	// Layer_10
	this.instance_8 = new lib.GWH();
	this.instance_8.setTransform(-169,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(288));

	// Layer_9
	this.instance_9 = new lib.sub_01();
	this.instance_9.setTransform(0,-108.5,1,1,0,0,0,0,-29.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.join();
	this.instance_10.setTransform(0,-284.5,0.5667,0.5667,0,0,0,0,-38.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({_off:false},0).to({y:-124.5,alpha:1},5).to({_off:true},23).wait(216));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(250).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9).wait(29));

	// Layer_8
	this.instance_11 = new lib.elect_01();
	this.instance_11.setTransform(0,-356.6,0.8116,0.8116,0,0,0,0,-51);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.sub_02();
	this.instance_12.setTransform(-0.5,-112.5,1,1,0,0,0,0,-38.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.sub_03();
	this.instance_13.setTransform(-0.5,-112.5,1,1,0,0,0,0,-38.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.instance_14 = new lib.sub_04();
	this.instance_14.setTransform(-0.5,-112.5,1,1,0,0,0,0,-38.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(34).to({_off:false},0).to({scaleX:1,scaleY:1,y:-377,alpha:1},10).to({_off:true},28).wait(216));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(79).to({_off:false},0).to({y:-132.5,alpha:1},5).to({_off:true},60).wait(144));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(151).to({_off:false},0).to({y:-132.5,alpha:1},5).to({_off:true},60).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(223).to({_off:false},0).to({y:-132.5,alpha:1},5).wait(25).to({regX:-0.1,scaleX:0.7693,scaleY:0.7693,x:-0.6,y:-125.35,alpha:0},10).wait(25));

	// Layer_7
	this.instance_15 = new lib.ilumai();
	this.instance_15.setTransform(0,-415.5,1.3365,1.3365,0,0,0,0,-26.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.instance_16 = new lib.dreams();
	this.instance_16.setTransform(0,-422.7,1.2257,1.2257,0,0,0,0,-61.6);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(24).to({_off:false},0).to({scaleX:1,scaleY:1,y:-424.5,alpha:1},10).to({_off:true},38).wait(216));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(79).to({_off:false},0).to({regY:-61.5,scaleX:1,scaleY:1,y:-422.55,alpha:1},5).to({_off:true},60).wait(7).to({_off:false,regY:-61.6,scaleX:1.2257,scaleY:1.2257,y:-422.7,alpha:0},0).to({regY:-61.5,scaleX:1,scaleY:1,y:-422.55,alpha:1},5).to({_off:true},60).wait(7).to({_off:false,regY:-61.6,scaleX:1.2257,scaleY:1.2257,y:-422.7,alpha:0},0).to({regY:-61.5,scaleX:1,scaleY:1,y:-422.55,alpha:1},5).wait(60));

	// Layer_12
	this.instance_17 = new lib.device_02();
	this.instance_17.setTransform(0,-251.25,1.3124,1.3124,-31.7043,0,0,0.1,-113.1);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.instance_18 = new lib.iqos_small();
	this.instance_18.setTransform(128,-102.1,1.2132,1.2132,0,0,0,0,-19.1);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(15).to({_off:false},0).to({regX:0,regY:-113,scaleX:1,scaleY:1,rotation:0,y:-251,alpha:1},9).to({_off:true},48).wait(216));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(72).to({_off:false},0).to({regY:-19,scaleX:1,scaleY:1,y:-102,alpha:1},4).wait(68).to({regY:-19.1,scaleX:1.2132,scaleY:1.2132,y:-102.1,alpha:0},0).to({regY:-19,scaleX:1,scaleY:1,y:-102,alpha:1},4).wait(68).to({regY:-19.1,scaleX:1.2132,scaleY:1.2132,y:-102.1,alpha:0},0).to({regY:-19,scaleX:1,scaleY:1,y:-102,alpha:1},4).wait(68));

	// Layer_4
	this.instance_19 = new lib.triangle();
	this.instance_19.setTransform(-0.5,-253.55,0.31,0.31,0,0,0,0,-115.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:360,y:-253.5,alpha:1},10).to({_off:true},53).wait(1).to({_off:false,scaleX:0.31,scaleY:0.31,y:-297.3,alpha:0},0).to({scaleX:1,scaleY:1,rotation:720,y:-286.5,alpha:1},6).to({_off:true},65).wait(1).to({_off:false,scaleX:0.31,scaleY:0.31,y:-297.3,alpha:0},0).to({scaleX:1,scaleY:1,rotation:1080,y:-286.5,alpha:1},6).to({_off:true},65).wait(1).to({_off:false,scaleX:0.31,scaleY:0.31,y:-297.3,alpha:0},0).to({scaleX:1,scaleY:1,rotation:1440,y:-286.5,alpha:1},6).wait(65));

	// Layer_11
	this.instance_20 = new lib.Shade_1();
	this.instance_20.setTransform(-169,-492);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(288));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgZNAmMIAAhKMAybAAAIAABKgEgZNAkBIAAhJMAybAAAIAABJgEgZNAh3IAAhJMAybAAAIAABJgA5NfuIAAhKMAybAAAIAABKgA5NdjIAAhJMAybAAAIAABJgA5NbZIAAhJMAybAAAIAABJgA5NZQIAAhKMAybAAAIAABKgA5NXFIAAhJMAybAAAIAABJgA5NU7IAAhJMAybAAAIAABJgA5NSyIAAhKMAybAAAIAABKgA5NQnIAAhJMAybAAAIAABJgA5NOdIAAhJMAybAAAIAABJgA5NMUIAAhKMAybAAAIAABKgA5NKJIAAhJMAybAAAIAABJgA5NH/IAAhJMAybAAAIAABJgA5NF2IAAhKMAybAAAIAABKgA5NDrIAAhJMAybAAAIAABJgA5NBhIAAhJMAybAAAIAABJgA5NgnIAAhKMAybAAAIAABKgA5NiyIAAhJMAybAAAIAABJgA5Nk8IAAhJMAybAAAIAABJgA5NnFIAAhKMAybAAAIAABKgA5NpQIAAhJMAybAAAIAABJgA5NraIAAhJMAybAAAIAABJgA5NtjIAAhKMAybAAAIAABKgA5NvuIAAhJMAybAAAIAABJgA5Nx4IAAhJMAybAAAIAABJgA5N0BIAAhKMAybAAAIAABKgA5N2MIAAhJMAybAAAIAABJgA5N4WIAAhJMAybAAAIAABJgA5N6fIAAhKMAybAAAIAABKgA5N8qIAAhJMAybAAAIAABJgA5N+0IAAhJMAybAAAIAABJgEgZNgg9IAAhKMAybAAAIAABKgEgZNgjIIAAhJMAybAAAIAABJgEgZNglSIAAhJMAybAAAIAABJg");
	var mask_graphics_1 = new cjs.Graphics().p("EgaGAmFIAAhKMA0NAAAIAABKgEgaGAkZIAAhJMA0NAAAIAABJgEgaGAiuIAAhKMA0NAAAIAABKgEgaGAgFIAAhKMA0NAAAIAABKgA6GdrIAAhJMA0NAAAIAABJgA6GcAIAAhJMA0NAAAIAABJgA6GZnIAAhKMA0NAAAIAABKgA6GXdIAAhJMA0NAAAIAABJgA6GVEIAAhKMA0NAAAIAABKgA6GTZIAAhKMA0NAAAIAABKgA6GQ/IAAhJMA0NAAAIAABJgA6GOmIAAhKMA0NAAAIAABKgA6GM7IAAhKMA0NAAAIAABKgA6GKhIAAhJMA0NAAAIAABJgA6GIXIAAhKMA0NAAAIAABKgA6GF9IAAhJMA0NAAAIAABJgA6GETIAAhKMA0NAAAIAABKgA6GB5IAAhKMA0NAAAIAABKgA6GguIAAhKMA0NAAAIAABKgA6GiaIAAhJMA0NAAAIAABJgA6GkFIAAhKMA0NAAAIAABKgA6GmuIAAhKMA0NAAAIAABKgA6GpIIAAhJMA0NAAAIAABJgA6GqzIAAhJMA0NAAAIAABJgA6GtMIAAhKMA0NAAAIAABKgA6Gv1IAAhJMA0NAAAIAABJgA6GxgIAAhKMA0NAAAIAABKgA6GzLIAAhKMA0NAAAIAABKgA6G10IAAhJMA0NAAAIAABJgA6G4NIAAhKMA0NAAAIAABKgA6G54IAAhKMA0NAAAIAABKgA6G8SIAAhJMA0NAAAIAABJgA6G+cIAAhKMA0NAAAIAABKgEgaGgg2IAAhJMA0NAAAIAABJgEgaGgigIAAhKMA0NAAAIAABKgEgaGgk6IAAhKMA0NAAAIAABKg");
	var mask_graphics_2 = new cjs.Graphics().p("EgbAAl1IAAhJMA2AAAAIAABJgEgbAAkoIAAhJMA2AAAAIAABJgEgbAAjcIAAhJMA2AAAAIAABJgEgbAAgVIAAhKMA2AAAAIAABKgA7AdsIAAhJMA2AAAAIAABJgA7AcfIAAhKMA2AAAAIAABKgA7AZ3IAAhKMA2AAAAIAABKgA7AXsIAAhJMA2AAAAIAABJgA7AVEIAAhKMA2AAAAIAABKgA7AT3IAAhJMA2AAAAIAABJgA7AROIAAhJMA2AAAAIAABJgA7AOmIAAhKMA2AAAAIAABKgA7ANZIAAhJMA2AAAAIAABJgA7AKwIAAhJMA2AAAAIAABJgA7AImIAAhJMA2AAAAIAABJgA7AF+IAAhKMA2AAAAIAABKgA7AExIAAhJMA2AAAAIAABJgA7ACIIAAhJMA2AAAAIAABJgA7Ag+IAAhJMA2AAAAIAABJgA7AiLIAAhJMA2AAAAIAABJgA7AjXIAAhJMA2AAAAIAABJgA7AmeIAAhKMA2AAAAIAABKgA7ApHIAAhJMA2AAAAIAABJgA7AqUIAAhKMA2AAAAIAABKgA7As8IAAhKMA2AAAAIAABKgA7AwEIAAhKMA2AAAAIAABKgA7AxRIAAhJMA2AAAAIAABJgA7AydIAAhKMA2AAAAIAABKgA7A1lIAAhJMA2AAAAIAABJgA7A4NIAAhKMA2AAAAIAABKgA7A5aIAAhJMA2AAAAIAABJgA7A8DIAAhJMA2AAAAIAABJgA7A+NIAAhJMA2AAAAIAABJgEgbAgg1IAAhKMA2AAAAIAABKgEgbAgiCIAAhJMA2AAAAIAABJgEgbAgkrIAAhJMA2AAAAIAABJg");
	var mask_graphics_3 = new cjs.Graphics().p("Egb5AlmIAAimMA3zAAAIAACmgEgb5AgkIAAhKMA3zAAAIAABKgA75dsIAAh4MA3zAAAIAAB4gA75aGIAAhKMA3zAAAIAABKgA75X8IAAhKMA3zAAAIAABKgA75VEIAAh4MA3zAAAIAAB4gA75ReIAAhKMA3zAAAIAABKgA75OmIAAh4MA3zAAAIAAB4gA75LAIAAhKMA3zAAAIAABKgA75I2IAAhKMA3zAAAIAABKgA75F+IAAh4MA3zAAAIAAB4gA75CYIAAhKMA3zAAAIAABKgA75hNIAAimMA3zAAAIAACmgA75mPIAAhKMA3zAAAIAABKgA75pHIAAh4MA3zAAAIAAB4gA75stIAAhKMA3zAAAIAABKgA75wTIAAimMA3zAAAIAACmgA751VIAAhKMA3zAAAIAABKgA754NIAAh4MA3zAAAIAAB4gA757zIAAhKMA3zAAAIAABKgA7599IAAhKMA3zAAAIAABKgEgb5gg1IAAh4MA3zAAAIAAB4gEgb5gkbIAAhKMA3zAAAIAABKg");
	var mask_graphics_4 = new cjs.Graphics().p("EgcyAlXIAAhpMA5lAAAIAABpgEgcyAgzIAAhKMA5lAAAIAABKgA8ydrIAAhYMA5lAAAIAABYgA8yaVIAAhKMA5lAAAIAABKgA8yYLIAAhJMA5lAAAIAABJgA8yVEIAAhZMA5lAAAIAABZgA8yRtIAAhJMA5lAAAIAABJgA8yOmIAAhZMA5lAAAIAABZgA8yLPIAAhJMA5lAAAIAABJgA8yJFIAAhKMA5lAAAIAABKgA8yF9IAAhYMA5lAAAIAABYgA8yCnIAAhKMA5lAAAIAABKgA8yhcIAAhpMA5lAAAIAABpgA8ymAIAAhKMA5lAAAIAABKgA8ypIIAAhYMA5lAAAIAABYgA8yseIAAhKMA5lAAAIAABKgA8ywjIAAhoMA5lAAAIAABogA8y1GIAAhJMA5lAAAIAABJgA8y4NIAAhZMA5lAAAIAABZgA8y7kIAAhJMA5lAAAIAABJgA8y9uIAAhKMA5lAAAIAABKgEgcygg2IAAhYMA5lAAAIAABYgEgcygkMIAAhKMA5lAAAIAABKg");
	var mask_graphics_5 = new cjs.Graphics().p("EgdqAlXIAAhpMA7WAAAIAABpgEgdqAgzIAAhKMA7WAAAIAABKgA9qdrIAAhYMA7WAAAIAABYgA9qaVIAAhKMA7WAAAIAABKgA9qYLIAAhJMA7WAAAIAABJgA9qVEIAAhZMA7WAAAIAABZgA9qRtIAAhJMA7WAAAIAABJgA9qOmIAAhZMA7WAAAIAABZgA9qLPIAAhJMA7WAAAIAABJgA9qJFIAAhKMA7WAAAIAABKgA9qF9IAAhYMA7WAAAIAABYgA9qCnIAAhKMA7WAAAIAABKgA9qhcIAAhpMA7WAAAIAABpgA9qmAIAAhKMA7WAAAIAABKgA9qpIIAAhYMA7WAAAIAABYgA9qseIAAhKMA7WAAAIAABKgA9qwjIAAhoMA7WAAAIAABogA9q1GIAAhJMA7WAAAIAABJgA9q4NIAAhZMA7WAAAIAABZgA9q7kIAAhJMA7WAAAIAABJgA9q9uIAAhKMA7WAAAIAABKgEgdqgg2IAAhYMA7WAAAIAABYgEgdqgkMIAAhKMA7WAAAIAABKg");
	var mask_graphics_6 = new cjs.Graphics().p("EgekAlmIAAimMA9JAAAIAACmgEgekAgkIAAhKMA9JAAAIAABKgA+kdsIAAh4MA9JAAAIAAB4gA+kaGIAAhKMA9JAAAIAABKgA+kX8IAAhKMA9JAAAIAABKgA+kVEIAAh4MA9JAAAIAAB4gA+kReIAAhKMA9JAAAIAABKgA+kOmIAAh4MA9JAAAIAAB4gA+kLAIAAhKMA9JAAAIAABKgA+kI2IAAhKMA9JAAAIAABKgA+kF+IAAh4MA9JAAAIAAB4gA+kCYIAAhKMA9JAAAIAABKgA+khNIAAimMA9JAAAIAACmgA+kmPIAAhKMA9JAAAIAABKgA+kpHIAAh4MA9JAAAIAAB4gA+kstIAAhKMA9JAAAIAABKgA+kwTIAAimMA9JAAAIAACmgA+k1VIAAhKMA9JAAAIAABKgA+k4NIAAh4MA9JAAAIAAB4gA+k7zIAAhKMA9JAAAIAABKgA+k99IAAhKMA9JAAAIAABKgEgekgg1IAAh4MA9JAAAIAAB4gEgekgkbIAAhKMA9JAAAIAABKg");
	var mask_graphics_7 = new cjs.Graphics().p("EgfdAl1IAAhJMA+7AAAIAABJgEgfdAkoIAAhJMA+7AAAIAABJgEgfdAjcIAAhJMA+7AAAIAABJgEgfdAgVIAAhKMA+7AAAIAABKgA/ddsIAAhJMA+7AAAIAABJgA/dcfIAAhKMA+7AAAIAABKgA/dZ3IAAhKMA+7AAAIAABKgA/dXsIAAhJMA+7AAAIAABJgA/dVEIAAhKMA+7AAAIAABKgA/dT3IAAhJMA+7AAAIAABJgA/dROIAAhJMA+7AAAIAABJgA/dOmIAAhKMA+7AAAIAABKgA/dNZIAAhJMA+7AAAIAABJgA/dKwIAAhJMA+7AAAIAABJgA/dImIAAhJMA+7AAAIAABJgA/dF+IAAhKMA+7AAAIAABKgA/dExIAAhJMA+7AAAIAABJgA/dCIIAAhJMA+7AAAIAABJgA/dg+IAAhJMA+7AAAIAABJgA/diLIAAhJMA+7AAAIAABJgA/djXIAAhJMA+7AAAIAABJgA/dmeIAAhKMA+7AAAIAABKgA/dpHIAAhJMA+7AAAIAABJgA/dqUIAAhKMA+7AAAIAABKgA/ds8IAAhKMA+7AAAIAABKgA/dwEIAAhKMA+7AAAIAABKgA/dxRIAAhJMA+7AAAIAABJgA/dydIAAhKMA+7AAAIAABKgA/d1lIAAhJMA+7AAAIAABJgA/d4NIAAhKMA+7AAAIAABKgA/d5aIAAhJMA+7AAAIAABJgA/d8DIAAhJMA+7AAAIAABJgA/d+NIAAhJMA+7AAAIAABJgEgfdgg1IAAhKMA+7AAAIAABKgEgfdgiCIAAhJMA+7AAAIAABJgEgfdgkrIAAhJMA+7AAAIAABJg");
	var mask_graphics_8 = new cjs.Graphics().p("EggWAmFIAAhKMBAtAAAIAABKgEggWAkZIAAhJMBAtAAAIAABJgEggWAiuIAAhKMBAtAAAIAABKgEggWAgFIAAhKMBAtAAAIAABKgEggWAdrIAAhJMBAtAAAIAABJgEggWAcAIAAhJMBAtAAAIAABJgEggWAZnIAAhKMBAtAAAIAABKgEggWAXdIAAhJMBAtAAAIAABJgEggWAVEIAAhKMBAtAAAIAABKgEggWATZIAAhKMBAtAAAIAABKgEggWAQ/IAAhJMBAtAAAIAABJgEggWAOmIAAhKMBAtAAAIAABKgEggWAM7IAAhKMBAtAAAIAABKgEggWAKhIAAhJMBAtAAAIAABJgEggWAIXIAAhKMBAtAAAIAABKgEggWAF9IAAhJMBAtAAAIAABJgEggWAETIAAhKMBAtAAAIAABKgEggWAB5IAAhKMBAtAAAIAABKgEggWgAuIAAhKMBAtAAAIAABKgEggWgCaIAAhJMBAtAAAIAABJgEggWgEFIAAhKMBAtAAAIAABKgEggWgGuIAAhKMBAtAAAIAABKgEggWgJIIAAhJMBAtAAAIAABJgEggWgKzIAAhJMBAtAAAIAABJgEggWgNMIAAhKMBAtAAAIAABKgEggWgP1IAAhJMBAtAAAIAABJgEggWgRgIAAhKMBAtAAAIAABKgEggWgTLIAAhKMBAtAAAIAABKgEggWgV0IAAhJMBAtAAAIAABJgEggWgYNIAAhKMBAtAAAIAABKgEggWgZ4IAAhKMBAtAAAIAABKgEggWgcSIAAhJMBAtAAAIAABJgEggWgecIAAhKMBAtAAAIAABKgEggWgg2IAAhJMBAtAAAIAABJgEggWgigIAAhKMBAtAAAIAABKgEggWgk6IAAhKMBAtAAAIAABKg");
	var mask_graphics_9 = new cjs.Graphics().p("EghPAmMIAAhKMBCfAAAIAABKgEghPAkBIAAhJMBCfAAAIAABJgEghPAh3IAAhJMBCfAAAIAABJgEghPAfuIAAhKMBCfAAAIAABKgEghPAdjIAAhJMBCfAAAIAABJgEghPAbZIAAhJMBCfAAAIAABJgEghPAZQIAAhKMBCfAAAIAABKgEghPAXFIAAhJMBCfAAAIAABJgEghPAU7IAAhJMBCfAAAIAABJgEghPASyIAAhKMBCfAAAIAABKgEghPAQnIAAhJMBCfAAAIAABJgEghPAOdIAAhJMBCfAAAIAABJgEghPAMUIAAhKMBCfAAAIAABKgEghPAKJIAAhJMBCfAAAIAABJgEghPAH/IAAhJMBCfAAAIAABJgEghPAF2IAAhKMBCfAAAIAABKgEghPADrIAAhJMBCfAAAIAABJgEghPABhIAAhJMBCfAAAIAABJgEghPgAnIAAhKMBCfAAAIAABKgEghPgCyIAAhJMBCfAAAIAABJgEghPgE8IAAhJMBCfAAAIAABJgEghPgHFIAAhKMBCfAAAIAABKgEghPgJQIAAhJMBCfAAAIAABJgEghPgLaIAAhJMBCfAAAIAABJgEghPgNjIAAhKMBCfAAAIAABKgEghPgPuIAAhJMBCfAAAIAABJgEghPgR4IAAhJMBCfAAAIAABJgEghPgUBIAAhKMBCfAAAIAABKgEghPgWMIAAhJMBCfAAAIAABJgEghPgYWIAAhJMBCfAAAIAABJgEghPgafIAAhKMBCfAAAIAABKgEghPgcqIAAhJMBCfAAAIAABJgEghPge0IAAhJMBCfAAAIAABJgEghPgg9IAAhKMBCfAAAIAABKgEghPgjIIAAhJMBCfAAAIAABJgEghPglSIAAhJMBCfAAAIAABJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1.5251,y:-246}).wait(1).to({graphics:mask_graphics_1,x:1.475,y:-248.35}).wait(1).to({graphics:mask_graphics_2,x:1.4,y:-249.9}).wait(1).to({graphics:mask_graphics_3,x:1.35,y:-251.425}).wait(1).to({graphics:mask_graphics_4,x:1.275,y:-252.95}).wait(1).to({graphics:mask_graphics_5,x:1.2,y:-252.95}).wait(1).to({graphics:mask_graphics_6,x:1.125,y:-251.425}).wait(1).to({graphics:mask_graphics_7,x:1.075,y:-249.9}).wait(1).to({graphics:mask_graphics_8,x:1,y:-248.35}).wait(1).to({graphics:mask_graphics_9,x:0.9597,y:-246}).wait(1).to({graphics:null,x:0,y:0}).wait(278));

	// Layer_1
	this.instance_21 = new lib.BG_01();
	this.instance_21.setTransform(-169.85,-492);

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:true},10).wait(278));

	// Layer_5
	this.instance_22 = new lib.BG01();
	this.instance_22.setTransform(-0.85,-246,0.9284,1,0,0,0,0,-246);
	this.instance_22.alpha = 0.5;

	this.instance_23 = new lib.BG02();
	this.instance_23.setTransform(-56.9,-155.2,1.4177,1.4177,0,0,0,0,-245.9);
	this.instance_23._off = true;

	this.instance_24 = new lib.BG_03_1();
	this.instance_24.setTransform(0,-155.2,1.4177,1.4177,0,0,0,0,-245.9);
	this.instance_24._off = true;

	this.instance_25 = new lib.BG04();
	this.instance_25.setTransform(0,-155.1,2.123,2.123,0,0,0,0,-245.8);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({scaleX:1,alpha:1},10).to({_off:true},62).wait(216));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(72).to({_off:false},0).to({regX:-0.1,regY:-246,scaleX:1.1243,scaleY:1.1243,x:-0.6,y:-243.7},7).to({_off:true},65).wait(144));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(144).to({_off:false},0).to({regX:-0.1,regY:-246,scaleX:1.1243,scaleY:1.1243,x:-0.6,y:-243.7},7).to({_off:true},65).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(216).to({_off:false},0).to({scaleX:1.8377,scaleY:1.8377,x:-0.15,y:-179.3},2).to({regX:-0.1,regY:-246,scaleX:1.1243,scaleY:1.1243,x:-0.6,y:-239.7},5).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-357.7,-677.8,715.5,1044.6);


// stage content:
(lib.Iluma_Stories = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,71];
	// timeline functions:
	this.frame_0 = function() {
		this.nxtBtn.alpha = 0.05;
		this.prvBtn.alpha = 0.05;
		
		// Frame list untuk gallery
		this.frameList = [0, 72, 144,216];
		this.currentIndex = 0;
		
		// Set frame awal
		this.slides.gotoAndPlay(this.frameList[this.currentIndex]);
		
		// Tombol Next (normal)
		this.nxtBtn.addEventListener("click", () => {
		    this.currentIndex = (this.currentIndex + 1) % this.frameList.length;
		    this.slides.gotoAndPlay(this.frameList[this.currentIndex]);
		});
		
		this.prvBtn.addEventListener("click", () => {
		    this.currentIndex = (this.currentIndex - 1) % this.frameList.length;
		    this.slides.gotoAndPlay(this.frameList[this.currentIndex]);
		});
	}
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(1));

	// Layer_7
	this.nxtBtn = new lib.stageBtn();
	this.nxtBtn.name = "nxtBtn";
	this.nxtBtn.setTransform(240.05,188.85,0.4777,2.1841,0,0,0,0.1,0.5);

	this.prvBtn = new lib.stageBtn();
	this.prvBtn.name = "prvBtn";
	this.prvBtn.setTransform(80.05,188.85,0.4777,2.1841,0,0,0,0.2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prvBtn},{t:this.nxtBtn}]}).wait(72));

	// Slides
	this.slides = new lib.Slides();
	this.slides.name = "slides";
	this.slides.setTransform(160.85,240,1,1,0,0,0,0,-246);

	this.timeline.addTween(cjs.Tween.get(this.slides).wait(72));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#250084").s().p("EgcIAn6MAAAhPzMA4RAAAMAAABPzg");
	this.shape.setTransform(157.5,241.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(72));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(88.5,226.3,249.10000000000002,270.7);
// library properties:
lib.properties = {
	id: 'AEF41E33E2049A478E0F86F77B424510',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BeatsBelowZero.png", id:"BeatsBelowZero"},
		{src:"images/BG_01.png", id:"BG_01"},
		{src:"images/BG_02.png", id:"BG_02"},
		{src:"images/BG_03.png", id:"BG_03"},
		{src:"images/BG_04.png", id:"BG_04"},
		{src:"images/CargoKarting.png", id:"CargoKarting"},
		{src:"images/ctaiqoscom.png", id:"ctaiqoscom"},
		{src:"images/curiouslatin.png", id:"curiouslatin"},
		{src:"images/Dev_02.png", id:"Dev_02"},
		{src:"images/ElectricDreams.png", id:"ElectricDreams"},
		{src:"images/ElectricPurple.png", id:"ElectricPurple"},
		{src:"images/ElectricStyle_Dreams.png", id:"ElectricStyle_Dreams"},
		{src:"images/GWH.png", id:"GWH"},
		{src:"images/IlumaI.png", id:"IlumaI"},
		{src:"images/iqos_logo.png", id:"iqos_logo"},
		{src:"images/JoinNow.png", id:"JoinNow"},
		{src:"images/New.png", id:"New"},
		{src:"images/Note.png", id:"Note"},
		{src:"images/Shade_1.png", id:"Shade_1"},
		{src:"images/SwissDream.png", id:"SwissDream"},
		{src:"images/Triangle.png", id:"Triangle"}
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
an.compositions['AEF41E33E2049A478E0F86F77B424510'] = {
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