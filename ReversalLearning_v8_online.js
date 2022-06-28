/*********************************** 
 * Reversallearning_V8_Online Test *
 ***********************************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'ReversalLearning_v8_online';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'pix',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(DoneRoutineBegin());
flowScheduler.add(DoneRoutineEachFrame());
flowScheduler.add(DoneRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls(('https://run.pavlovia.org/TAMU_CONGAlab/vts-with-probabilistic-reward/html/?participant=' + expInfo['participant']), 'https://congalab.sites.tamu.edu/study-participation/tsi-debrief/');

  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var thisExp;
var win;
var event;
var shuffle;
var webbrowser;
var random;
var sum;
var randint;
var range;
var Instructions_txt;
var inrto_mouse;
var ex;
var SetupClock;
var conditions;
var blockCounter;
var nBlocks;
var corr_ans;
var iti_dist;
var maxTrials;
var text_2;
var PictureClock;
var total_points;
var left_image;
var polygon;
var right_image;
var mouse;
var ResultsClock;
var Results_Text;
var end_trialClock;
var iti;
var BlockEndClock;
var text;
var mouse_2;
var DoneClock;
var Finish_Text;
var mouse_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  Array.prototype.append=[].push;
  shuffle=util.shuffle;
  webbrowser=window;
  
  random = Math.random;
  
  sum = function (arr) {
  return arr.reduce((a,b)=>a+b)
  }
  
  randint = function(min, maxplusone) {
      return Math.floor(Math.random() * (maxplusone - min) ) + min;
  }
  
  range = function (size, startAt = 0) {
      return [...Array(size).keys()].map(i => i + startAt);
  }
  
  // save screen information
  var sUsrAg;
  var nIdx;
  function getBrowserId () {
   var browsers = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"];
   sUsrAg = window.navigator.userAgent,
   nIdx = browsers.length - 1;
   for (nIdx; nIdx > -1 && sUsrAg.indexOf(browsers [nIdx]) === -1; nIdx--);
   
    return browsers[nIdx];
  }
   
  expInfo['OS'] = window.navigator.platform;
  expInfo['browser'] = getBrowserId();
  expInfo['xResolution'] = screen.width;
  expInfo['yResolution'] = screen.height;
  
  Instructions_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions_txt',
    text: '이것은 검사에 대한 설명문입니다.\n이 검사의 목표는 최대한 많은 점수를 얻는 것입니다.\n\n검사는 위와 비슷한 두 가지 이미지 중 한가지 이미지를 선택합니다.\n이미지를 선택하면 +10점 혹은 +1점의 결과가 나옵니다.\n\n한 쪽에서는 +10점이 많이 나오고, 다른 쪽은 +1점이 많이 나옵니다. 많이 얻는 쪽을 찾아서, 매번 그쪽을 선택하도록 하십시오\n \n일정 시점 이후에 점수를 많이 얻는 이미지/적게 얻는 이미지가 서로 바뀔 수 있습니다. 이 경우, 어느 쪽이 점수를 많이 얻는 이미지인지 다시 찾아서 그쪽을 선택하면 됩니다.  \n\n이미지를 선택하실 떄는 해당 이미지를 눌러주세요.\n\n설명을 이해하시고 준비가 되었으면, 화면을 눌러주세요.',
    font: 'NanumSquare',
    units: undefined, 
    pos: [0, (- 0.8)], height: 30,  wrapWidth: 1500, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  inrto_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  inrto_mouse.mouseClock = new util.Clock();
  ex = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ex', units : undefined, 
    image : 'imgexp.png', mask : undefined,
    ori : 0.0, pos : [0, 450], size : [600, 300],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "Setup"
  SetupClock = new util.Clock();
  conditions = range(18, 1);
  shuffle(conditions);
  blockCounter = 0;
  nBlocks = 2;
  corr_ans = 0;
  
  // Approximate Poisson distribution for iti
  iti_dist=[].concat(Array(10).fill(0), Array(32).fill(.5), Array(28).fill(1), Array(18).fill(1.5), Array(6).fill(2), Array(4).fill(2.5), Array(1).fill(3));
  
  maxTrials = 75;
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 32,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Picture"
  PictureClock = new util.Clock();
  total_points = 0;
  
  left_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [100, 0], size : [125, 125],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  polygon = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon', 
    edges: 100, size:[25, 25],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  right_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 100), 0.0], size : [125, 125],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "Results"
  ResultsClock = new util.Clock();
  Results_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Results_Text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 32,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "end_trial"
  end_trialClock = new util.Clock();
  iti = new visual.TextStim({
    win: psychoJS.window,
    name: 'iti',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 32,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "BlockEnd"
  BlockEndClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 28,  wrapWidth: 1500, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "Done"
  DoneClock = new util.Clock();
  Finish_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Finish_Text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 32,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the inrto_mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(Instructions_txt);
    InstructionsComponents.push(inrto_mouse);
    InstructionsComponents.push(ex);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function InstructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions'-------
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instructions_txt* updates
    if (t >= 0.0 && Instructions_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_txt.tStart = t;  // (not accounting for frame time here)
      Instructions_txt.frameNStart = frameN;  // exact frame index
      
      Instructions_txt.setAutoDraw(true);
    }

    // *inrto_mouse* updates
    if (t >= 0.0 && inrto_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inrto_mouse.tStart = t;  // (not accounting for frame time here)
      inrto_mouse.frameNStart = frameN;  // exact frame index
      
      inrto_mouse.status = PsychoJS.Status.STARTED;
      inrto_mouse.mouseClock.reset();
      prevButtonState = inrto_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (inrto_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = inrto_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *ex* updates
    if (t >= 0.0 && ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex.tStart = t;  // (not accounting for frame time here)
      ex.frameNStart = frameN;  // exact frame index
      
      ex.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function InstructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions'-------
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = inrto_mouse.getPos();
    _mouseButtons = inrto_mouse.getPressed();
    psychoJS.experiment.addData('inrto_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('inrto_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('inrto_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('inrto_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('inrto_mouse.rightButton', _mouseButtons[2]);
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blocks;
var currentLoop;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nBlocks, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      const snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(SetupRoutineBegin(snapshot));
      blocksLoopScheduler.add(SetupRoutineEachFrame());
      blocksLoopScheduler.add(SetupRoutineEnd());
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(BlockEndRoutineBegin(snapshot));
      blocksLoopScheduler.add(BlockEndRoutineEachFrame());
      blocksLoopScheduler.add(BlockEndRoutineEnd());
      blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: maxTrials, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(PictureRoutineBegin(snapshot));
      trialsLoopScheduler.add(PictureRoutineEachFrame());
      trialsLoopScheduler.add(PictureRoutineEnd());
      trialsLoopScheduler.add(ResultsRoutineBegin(snapshot));
      trialsLoopScheduler.add(ResultsRoutineEachFrame());
      trialsLoopScheduler.add(ResultsRoutineEnd());
      trialsLoopScheduler.add(end_trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(end_trialRoutineEachFrame());
      trialsLoopScheduler.add(end_trialRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


async function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var var_trial;
var corrCounter;
var revCounter;
var numCorr;
var numReversals;
var a_high;
var b_high;
var a;
var b;
var image_a;
var image_b;
var SetupComponents;
function SetupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Setup'-------
    t = 0;
    SetupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    var_trial = 0;
    corrCounter = 0;
    revCounter = 0;
    if ((blockCounter === 0)) {
        numCorr = 30;
        numReversals = 0;
    } else {
        numCorr = randint(7, 12);
        numReversals = 2;
    }
    if ((randint(0, 1) === 0)) {
        a_high = 1;
        b_high = 0;
    } else {
        b_high = 1;
        a_high = 0;
    }
    // use new stimuli for each block
    console.log(("blockcounter: " + blockCounter.toString()))
    a = conditions[(blockCounter * 2)];
    b = conditions[((blockCounter * 2) + 1)];
    image_a = (("Fractal" + a.toString()) + ".png");
    image_b = (("Fractal" + b.toString()) + ".png");
    // shuffle iti
    shuffle(iti_dist);
    
    // keep track of which components have finished
    SetupComponents = [];
    SetupComponents.push(text_2);
    
    for (const thisComponent of SetupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function SetupRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Setup'-------
    // get current time
    t = SetupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SetupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SetupRoutineEnd() {
  return async function () {
    //------Ending Routine 'Setup'-------
    for (const thisComponent of SetupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var a_left;
var a_right;
var b_right;
var b_left;
var left_file;
var right_file;
var PictureComponents;
function PictureRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Picture'-------
    t = 0;
    PictureClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    if ((revCounter === 0)) {
        a_left = 1;
        a_right = 0;
        b_right = 1;
        b_left = 0;
    } else {
        b_left = 1;
        b_right = 0;
        a_right = 1;
        a_left = 0;
    }
    left_file = image_a;
    right_file = image_b;
    
    psychoJS.experiment.addData("corr_ans", corr_ans);
    
    left_image.setImage(left_file);
    right_image.setImage(right_file);
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    PictureComponents = [];
    PictureComponents.push(left_image);
    PictureComponents.push(polygon);
    PictureComponents.push(right_image);
    PictureComponents.push(mouse);
    
    for (const thisComponent of PictureComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PictureRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Picture'-------
    // get current time
    t = PictureClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *left_image* updates
    if (t >= 0.0 && left_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_image.tStart = t;  // (not accounting for frame time here)
      left_image.frameNStart = frameN;  // exact frame index
      
      left_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_image.setAutoDraw(false);
    }
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    
    // *right_image* updates
    if (t >= 0.0 && right_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_image.tStart = t;  // (not accounting for frame time here)
      right_image.frameNStart = frameN;  // exact frame index
      
      right_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_image.setAutoDraw(false);
    }
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse.status = PsychoJS.Status.FINISHED;
  }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [left_image,right_image]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PictureComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var no_resp;
var feedback_text;
var r;
var condition;
var prev_cond;
var last_points;
function PictureRoutineEnd() {
  return async function () {
    //------Ending Routine 'Picture'-------
    for (const thisComponent of PictureComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((blockCounter >= 0)) {
        if ((a_high === 1)) {
            if (((a_high && a_left) && mouse.isPressedIn(left_image))) {
                corr_ans = 1;
                (corrCounter === (corrCounter + 1));
            } else {
                if (((a_high && a_left) && mouse.isPressedIn(right_image))) {
                    corr_ans = 0;
                }
            }
            if (((a_high && a_right) && mouse.isPressedIn(right_image))) {
                corr_ans = 1;
                (corrCounter === (corrCounter + 1));
            } else {
                if (((a_high && a_right) && mouse.isPressedIn(left_image))) {
                    corr_ans = 0;
                }
            }
        }
        if ((b_high === 1)) {
            if (((b_high && b_left) && mouse.isPressedIn(left_image))) {
                corr_ans = 1;
                (corrCounter === (corrCounter + 1));
            } else {
                if (((b_high && b_left) && mouse.isPressedIn(right_image))) {
                    corr_ans = 0;
                }
            }
            if (((b_high && b_right) && mouse.isPressedIn(right_image))) {
                corr_ans = 1;
                (corrCounter === (corrCounter + 1));
            } else {
                if (((b_high && b_right) && mouse.isPressedIn(left_image))) {
                    corr_ans = 0;
                }
            }
        }
    }
    psychoJS.experiment.addData("corr_ans", corr_ans);
    if ((mouse.clicked_name.length === 0)) {
        no_resp = true;
        feedback_text = "더 빠르게 응답해주세요";
    } else {
        no_resp = false;
        feedback_text = "";
    }
    if ((corr_ans === 1)) {
        corrCounter += corr_ans;
    } else {
        (corrCounter === (corrCounter + 0));
    }
    psychoJS.experiment.addData("corrCounter", corrCounter);
    psychoJS.experiment.addData("numCorr", numCorr);
    r = Math.random();
    condition = "";
    prev_cond = "";
    if (no_resp) {
        last_points = 0;
    } else {
        if ((r <= 0.8)) {
            if ((corr_ans === 1)) {
                last_points = 10;
                condition = "corr_hi";
            } else {
                last_points = 1;
                condition = "err_lo";
            }
        } else {
            if ((corr_ans === 1)) {
                last_points = 1;
                condition = "corr_lo";
            } else {
                last_points = 10;
                condition = "err_hi";
            }
        }
    }
    psychoJS.experiment.addData("condition", condition);
    psychoJS.experiment.addData("prev_cond", prev_cond);
    prev_cond += condition;
    total_points += last_points;
    feedback_text += ("\n\n\받은 금액  +" + last_points.toString());
    feedback_text += ("\n\n\총 금액 " + total_points.toString());
    psychoJS.experiment.addData("last_points", last_points);
    psychoJS.experiment.addData("total_points", total_points);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    if (mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0]);}
    return Scheduler.Event.NEXT;
  };
}


var ResultsComponents;
function ResultsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Results'-------
    t = 0;
    ResultsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    Results_Text.setText(feedback_text);
    // keep track of which components have finished
    ResultsComponents = [];
    ResultsComponents.push(Results_Text);
    
    for (const thisComponent of ResultsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ResultsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Results'-------
    // get current time
    t = ResultsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Results_Text* updates
    if (t >= 0 && Results_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Results_Text.tStart = t;  // (not accounting for frame time here)
      Results_Text.frameNStart = frameN;  // exact frame index
      
      Results_Text.setAutoDraw(true);
    }

    frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Results_Text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Results_Text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ResultsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ResultsRoutineEnd() {
  return async function () {
    //------Ending Routine 'Results'-------
    for (const thisComponent of ResultsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var ITI_dur;
var end_trialComponents;
function end_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end_trial'-------
    t = 0;
    end_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((corrCounter >= numCorr)) {
        if ((revCounter < numReversals)) {
            if ((a_high === 1)) {
                a_high = 0;
                b_high = 1;
            } else {
                a_high = 1;
                b_high = 0;
            }
            revCounter += 1;
            numCorr = util.randint(7, 12);
            corrCounter = 0;
        } else {
            if ((revCounter === numReversals)) {
                trials.finished = true;
                blockCounter += 1;
            }
        }
    }
    psychoJS.experiment.addData("revCounter", revCounter);
    psychoJS.experiment.addData("numReversals", numReversals);
    ITI_dur = iti_dist[var_trial];
    var_trial += 1;
    if ((var_trial >= maxTrials)) {
        trials.finished = true;
    }
    
    // keep track of which components have finished
    end_trialComponents = [];
    end_trialComponents.push(iti);
    
    for (const thisComponent of end_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end_trial'-------
    // get current time
    t = end_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *iti* updates
    if (t >= 0.0 && iti.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iti.tStart = t;  // (not accounting for frame time here)
      iti.frameNStart = frameN;  // exact frame index
      
      iti.setAutoDraw(true);
    }

    frameRemains = 0.0 + ITI_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (iti.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      iti.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_trial'-------
    for (const thisComponent of end_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "end_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var BlockEndComponents;
function BlockEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'BlockEnd'-------
    t = 0;
    BlockEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text.setText('잠시 쉬어가겠습니다.\n\n준비가 되시면 화면을 눌러주세요.');
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    BlockEndComponents = [];
    BlockEndComponents.push(text);
    BlockEndComponents.push(mouse_2);
    
    for (const thisComponent of BlockEndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BlockEndRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'BlockEnd'-------
    // get current time
    t = BlockEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BlockEndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlockEndRoutineEnd() {
  return async function () {
    //------Ending Routine 'BlockEnd'-------
    for (const thisComponent of BlockEndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_2.getPos();
    _mouseButtons = mouse_2.getPressed();
    psychoJS.experiment.addData('mouse_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_2.rightButton', _mouseButtons[2]);
    // the Routine "BlockEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var end_text;
var DoneComponents;
function DoneRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Done'-------
    t = 0;
    DoneClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_text = "수고하셨습니다.";
    end_text += ("\n\n총 얻으신 포인트:" + total_points.toString());
    end_text += "\n\n화면을 누르시면 검사가 종료됩니다.";
    
    Finish_Text.setText(end_text);
    // setup some python lists for storing info about the mouse_3
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    DoneComponents = [];
    DoneComponents.push(Finish_Text);
    DoneComponents.push(mouse_3);
    
    for (const thisComponent of DoneComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function DoneRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Done'-------
    // get current time
    t = DoneClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Finish_Text* updates
    if (t >= 0.0 && Finish_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Finish_Text.tStart = t;  // (not accounting for frame time here)
      Finish_Text.frameNStart = frameN;  // exact frame index
      
      Finish_Text.setAutoDraw(true);
    }

    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of DoneComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DoneRoutineEnd() {
  return async function () {
    //------Ending Routine 'Done'-------
    for (const thisComponent of DoneComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_3.getPos();
    _mouseButtons = mouse_3.getPressed();
    psychoJS.experiment.addData('mouse_3.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_3.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_3.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_3.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_3.rightButton', _mouseButtons[2]);
    // the Routine "Done" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
