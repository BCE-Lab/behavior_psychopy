/*************************** 
 * Risk_Aversion_Gain Test *
 ***************************/

import { core, data, sound, util, visual } from './lib/psychojs-2022.1.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'risk_aversion_gain';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
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
flowScheduler.add(mobileRoutineBegin());
flowScheduler.add(mobileRoutineEachFrame());
flowScheduler.add(mobileRoutineEnd());
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const TrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TrialsLoopBegin(TrialsLoopScheduler));
flowScheduler.add(TrialsLoopScheduler);
flowScheduler.add(TrialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Image/RAG.PNG', 'path': 'Image/RAG.PNG'},
    {'name': 'Image/Figure_Cursor.png', 'path': 'Image/Figure_Cursor.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.1.2';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var mobileClock;
var text;
var mouse_2;
var instructionClock;
var inst_img;
var inst_mouse;
var text_2;
var fixationClock;
var fix_text;
var PayOffClock;
var payoff_start;
var percentage;
var payoff_sure;
var prob_sure;
var payoff_gamble1;
var prob_gamble1;
var payoff_gamble2;
var prob_gamble2;
var payoff;
var OUL;
var IUL;
var ILL;
var OLL;
var current;
var diff;
var crit;
var font_size;
var Choice_Left;
var Choice_Right;
var Choice_Cursor;
var Text_Left;
var Text_Right;
var mouse;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "mobile"
  mobileClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '모바일에서 검사를 하시면 가로모드로 실시해주세요\n\n검사를 시작할 준비가 되셨으면, 화면을 눌러주세요',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  inst_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst_img', units : undefined, 
    image : 'Image/RAG.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0.25], size : [0.7, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  inst_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  inst_mouse.mouseClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '다음은 검사에 대한 설명입니다.\n\n본 검사는 돈을 확실하게 받는 것과, 일정 확률로 받는 것 중 원하는 선택지를 고르는 검사입니다.\n\n금액은 매번 달라집니다.\n\n원하는 선택지를 클릭하여 검사를 진행해주세요.\n\n검사를 진행하려면 화면을 클릭해주세요.\n',
    font: 'NanumSquare',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fix_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_text',
    text: '+',
    font: 'Malgun Gothic',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "PayOff"
  PayOffClock = new util.Clock();
  payoff_start = [50];
  percentage = [50];
  payoff_sure = 0;
  prob_sure = 100;
  payoff_gamble1 = function () {
      var _pj_a = [], _pj_b = payoff_start;
      for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
          var x = _pj_b[_pj_c];
          _pj_a.push(x);
      }
      return _pj_a;
  }
  .call(this);
  prob_gamble1 = 50;
  payoff_gamble2 = payoff_start;
  prob_gamble2 = (100 - prob_gamble1);
  payoff = [];
  OUL = function () {
      var _pj_a = [], _pj_b = payoff_start;
      for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
          var x = _pj_b[_pj_c];
          _pj_a.push((6 * x));
      }
      return _pj_a;
  }
  .call(this);
  IUL = function () {
      var _pj_a = [], _pj_b = payoff_start;
      for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
          var x = _pj_b[_pj_c];
          _pj_a.push((6 * x));
      }
      return _pj_a;
  }
  .call(this);
  ILL = function () {
      var _pj_a = [], _pj_b = payoff_start;
      for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
          var x = _pj_b[_pj_c];
          _pj_a.push((0 * x));
      }
      return _pj_a;
  }
  .call(this);
  OLL = function () {
      var _pj_a = [], _pj_b = payoff_start;
      for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
          var x = _pj_b[_pj_c];
          _pj_a.push((0 * x));
      }
      return _pj_a;
  }
  .call(this);
  current = 0;
  diff = [];
  crit = [];
  font_size = 0.045;
  
  Choice_Left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Choice_Left', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.35), 0], size : [0.5, 0.5],
    color : new util.Color([0,0,0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  Choice_Right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Choice_Right', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.35, 0], size : [0.5, 0.5],
    color : new util.Color([0,0,0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  Choice_Cursor = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Choice_Cursor', units : undefined, 
    image : 'Image/Figure_Cursor.png', mask : undefined,
    ori : 0.0, pos : [999, 999], size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  Text_Left = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_Left',
    text: '',
    font: 'Malgun Gothic',
    units: undefined, 
    pos: [(- 0.35), 0], height: font_size,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color(undefined),  opacity: undefined,
    depth: -4.0 
  });
  
  Text_Right = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_Right',
    text: '',
    font: 'Malgun Gothic',
    units: undefined, 
    pos: [0.35, 0], height: font_size,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color(undefined),  opacity: undefined,
    depth: -5.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var mobileComponents;
function mobileRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'mobile'-------
    t = 0;
    mobileClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    mobileComponents = [];
    mobileComponents.push(text);
    mobileComponents.push(mouse_2);
    
    for (const thisComponent of mobileComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
var prevButtonState;
var _mouseButtons;
function mobileRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'mobile'-------
    // get current time
    t = mobileClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
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
    for (const thisComponent of mobileComponents)
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
function mobileRoutineEnd() {
  return async function () {
    //------Ending Routine 'mobile'-------
    for (const thisComponent of mobileComponents) {
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
    // the Routine "mobile" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instruction'-------
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the inst_mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(inst_img);
    instructionComponents.push(inst_mouse);
    instructionComponents.push(text_2);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instruction'-------
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_img* updates
    if (t >= 0.0 && inst_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_img.tStart = t;  // (not accounting for frame time here)
      inst_img.frameNStart = frameN;  // exact frame index
      
      inst_img.setAutoDraw(true);
    }

    // *inst_mouse* updates
    if (t >= 0.0 && inst_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_mouse.tStart = t;  // (not accounting for frame time here)
      inst_mouse.frameNStart = frameN;  // exact frame index
      
      inst_mouse.status = PsychoJS.Status.STARTED;
      inst_mouse.mouseClock.reset();
      prevButtonState = inst_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (inst_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = inst_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
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
    for (const thisComponent of instructionComponents)
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


function instructionRoutineEnd() {
  return async function () {
    //------Ending Routine 'instruction'-------
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = inst_mouse.getPos();
    _mouseButtons = inst_mouse.getPressed();
    psychoJS.experiment.addData('inst_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('inst_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('inst_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('inst_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('inst_mouse.rightButton', _mouseButtons[2]);
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Trials;
var currentLoop;
function TrialsLoopBegin(TrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Trials'
    });
    psychoJS.experiment.addLoop(Trials); // add the loop to the experiment
    currentLoop = Trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of Trials) {
      const snapshot = Trials.getSnapshot();
      TrialsLoopScheduler.add(importConditions(snapshot));
      TrialsLoopScheduler.add(fixationRoutineBegin(snapshot));
      TrialsLoopScheduler.add(fixationRoutineEachFrame());
      TrialsLoopScheduler.add(fixationRoutineEnd());
      TrialsLoopScheduler.add(PayOffRoutineBegin(snapshot));
      TrialsLoopScheduler.add(PayOffRoutineEachFrame());
      TrialsLoopScheduler.add(PayOffRoutineEnd());
      TrialsLoopScheduler.add(endLoopIteration(TrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function TrialsLoopEnd() {
  psychoJS.experiment.removeLoop(Trials);

  return Scheduler.Event.NEXT;
}


var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'fixation'-------
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fix_text);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixationRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'fixation'-------
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_text* updates
    if (t >= 0.0 && fix_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_text.tStart = t;  // (not accounting for frame time here)
      fix_text.frameNStart = frameN;  // exact frame index
      
      fix_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_text.setAutoDraw(false);
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
    for (const thisComponent of fixationComponents)
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


function fixationRoutineEnd() {
  return async function () {
    //------Ending Routine 'fixation'-------
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var s_payoff1;
var s_payoff2;
var txt_left;
var txt_right;
var PayOffComponents;
function PayOffRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'PayOff'-------
    t = 0;
    PayOffClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Text_Right.color = "green";
    Text_Left.color = "green";
    payoff_gamble2 = ((Math.random() * (OUL[current] - OLL[current])) + OLL[current]);
    payoff_gamble2 = Math.round(payoff_gamble2);
    s_payoff1 = (payoff_gamble1[current] * 1000);
    s_payoff2 = (payoff_gamble2 * 1000);
    txt_left = (((("+" + "50000".toString()) + "\uc6d0") + "\n") + "100%");
    txt_right = ((((("+" + s_payoff2.toString()) + "\uc6d0") + "\n") + percentage[current].toString()) + "%");
    
    Text_Left.setText(txt_left);
    Text_Right.setText(txt_right);
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    PayOffComponents = [];
    PayOffComponents.push(Choice_Left);
    PayOffComponents.push(Choice_Right);
    PayOffComponents.push(Choice_Cursor);
    PayOffComponents.push(Text_Left);
    PayOffComponents.push(Text_Right);
    PayOffComponents.push(mouse);
    
    for (const thisComponent of PayOffComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PayOffRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'PayOff'-------
    // get current time
    t = PayOffClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Choice_Left* updates
    if (t >= 0.0 && Choice_Left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Choice_Left.tStart = t;  // (not accounting for frame time here)
      Choice_Left.frameNStart = frameN;  // exact frame index
      
      Choice_Left.setAutoDraw(true);
    }

    
    // *Choice_Right* updates
    if (t >= 0.0 && Choice_Right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Choice_Right.tStart = t;  // (not accounting for frame time here)
      Choice_Right.frameNStart = frameN;  // exact frame index
      
      Choice_Right.setAutoDraw(true);
    }

    
    // *Choice_Cursor* updates
    if (t >= 0.0 && Choice_Cursor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Choice_Cursor.tStart = t;  // (not accounting for frame time here)
      Choice_Cursor.frameNStart = frameN;  // exact frame index
      
      Choice_Cursor.setAutoDraw(true);
    }

    
    // *Text_Left* updates
    if (t >= 0.0 && Text_Left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_Left.tStart = t;  // (not accounting for frame time here)
      Text_Left.frameNStart = frameN;  // exact frame index
      
      Text_Left.setAutoDraw(true);
    }

    
    // *Text_Right* updates
    if (t >= 0.0 && Text_Right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_Right.tStart = t;  // (not accounting for frame time here)
      Text_Right.frameNStart = frameN;  // exact frame index
      
      Text_Right.setAutoDraw(true);
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
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [Choice_Left, Choice_Right]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    if (Choice_Left.contains(mouse)) {
        Choice_Cursor.pos = [(- 0.35), 0];
    }
    if (Choice_Right.contains(mouse)) {
        Choice_Cursor.pos = [0.35, 0];
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
    for (const thisComponent of PayOffComponents)
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


var choice;
var cer_eq;
var LOSS_AVERSION;
function PayOffRoutineEnd() {
  return async function () {
    //------Ending Routine 'PayOff'-------
    for (const thisComponent of PayOffComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Trials.addData("Payoff", payoff_gamble2);
    if ((mouse.clicked_name.slice((- 1))[0] === "Choice_Left")) {
        choice = (- 1);
        if ((payoff_gamble2 < ILL[current])) {
            OLL[current] = payoff_gamble2;
        } else {
            OLL[current] = ILL[current];
            ILL[current] = payoff_gamble2;
            if ((payoff_gamble2 > IUL[current])) {
                IUL[current] = ILL[current];
            }
        }
    } else {
        if ((mouse.clicked_name.slice((- 1))[0] === "Choice_Right")) {
            choice = 1;
            if ((payoff_gamble2 > IUL[current])) {
                OUL[current] = payoff_gamble2;
            } else {
                OUL[current] = IUL[current];
                IUL[current] = payoff_gamble2;
                if ((payoff_gamble2 < ILL[current])) {
                    ILL[current] = IUL[current];
                }
            }
        }
    }
    Trials.addData("Choice", choice);
    Trials.addData("OUL", OUL);
    Trials.addData("OLL", OLL);
    Trials.addData("IUL", IUL);
    Trials.addData("ILL", ILL);
    current += 1;
    if (((current + 1) > payoff_start.length)) {
        current = 0;
    }
    diff = function () {
        var _pj_a = [], _pj_b = util.range(OUL.length);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var i = _pj_b[_pj_c];
            _pj_a.push((OUL[i] - OLL[i]));
        }
        return _pj_a;
    }
    .call(this);
    crit = function () {
        var _pj_a = [], _pj_b = diff;
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var val = _pj_b[_pj_c];
            _pj_a.push(((val <= 2) ? 1 : 0));
        }
        return _pj_a;
    }
    .call(this);
    if ((util.sum(crit) === OUL.length)) {
        cer_eq = function () {
        var _pj_a = [], _pj_b = util.range(OUL.length);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var i = _pj_b[_pj_c];
            _pj_a.push(((OUL[i] + OLL[i]) / 2));
        }
        return _pj_a;
    }
    .call(this);
        LOSS_AVERSION = function () {
        var _pj_a = [], _pj_b = util.range(cer_eq.length);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var i = _pj_b[_pj_c];
            _pj_a.push((cer_eq[i] / payoff_start[i]));
        }
        return _pj_a;
    }
    .call(this);
        Trials.addData("cer_eq", cer_eq);
        Trials.addData("LOSS_AVERSION", LOSS_AVERSION);
        Trials.finished = true;
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
    
    // the Routine "PayOff" was not non-slip safe, so reset the non-slip timer
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
