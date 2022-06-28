/**************************** 
 * Cued Gonogo Task_V8 Test *
 ****************************/

import { core, data, sound, util, visual } from './lib/psychojs-2022.1.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Cued GoNogo Task_v8';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
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
flowScheduler.add(TaskIntroRoutineBegin());
flowScheduler.add(TaskIntroRoutineEachFrame());
flowScheduler.add(TaskIntroRoutineEnd());
flowScheduler.add(greenRoutineBegin());
flowScheduler.add(greenRoutineEachFrame());
flowScheduler.add(greenRoutineEnd());
flowScheduler.add(blueRoutineBegin());
flowScheduler.add(blueRoutineEachFrame());
flowScheduler.add(blueRoutineEnd());
flowScheduler.add(test_introRoutineBegin());
flowScheduler.add(test_introRoutineEachFrame());
flowScheduler.add(test_introRoutineEnd());
const test_BlocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(test_BlocksLoopBegin(test_BlocksLoopScheduler));
flowScheduler.add(test_BlocksLoopScheduler);
flowScheduler.add(test_BlocksLoopEnd);
flowScheduler.add(realRoutineBegin());
flowScheduler.add(realRoutineEachFrame());
flowScheduler.add(realRoutineEnd());
const BlocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BlocksLoopBegin(BlocksLoopScheduler));
flowScheduler.add(BlocksLoopScheduler);
flowScheduler.add(BlocksLoopEnd);
flowScheduler.add(TaskEndRoutineBegin());
flowScheduler.add(TaskEndRoutineEachFrame());
flowScheduler.add(TaskEndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'CondGo.xlsx', 'path': 'CondGo.xlsx'},
    {'name': 'green.PNG', 'path': 'green.PNG'},
    {'name': 'BlockList.xlsx', 'path': 'BlockList.xlsx'},
    {'name': 'CondNoGo_test.xlsx', 'path': 'CondNoGo_test.xlsx'},
    {'name': 'BlockList_test.xlsx', 'path': 'BlockList_test.xlsx'},
    {'name': 'blue.PNG', 'path': 'blue.PNG'},
    {'name': 'CondNoGo.xlsx', 'path': 'CondNoGo.xlsx'},
    {'name': 'CondGo_test.xlsx', 'path': 'CondGo_test.xlsx'}
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


var TaskIntroClock;
var fixation;
var m1;
var greenClock;
var m2;
var green_intro;
var green_image;
var blueClock;
var m3;
var blue_intro;
var blue_image;
var test_introClock;
var text;
var m4;
var test_fixClock;
var FixationPhase_2;
var Blank_2;
var test_trialClock;
var Cue_2;
var GoNogo_Stim_2;
var mouse_2;
var test_feedbackClock;
var Feedback_Present_2;
var realClock;
var text_3;
var mouse_4;
var FixationClock;
var FixationPhase;
var Blank;
var TrialClock;
var Cue;
var GoNogo_Stim;
var mouse;
var FeedbackClock;
var Feedback_Present;
var TaskEndClock;
var text_2;
var mouse_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "TaskIntro"
  TaskIntroClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '안녕하세요. 검사에 참여해주셔서 감사합니다. 화면를 누르시면 검사가 시작됩니다.',
    font: 'NanumSquare',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  m1 = new core.Mouse({
    win: psychoJS.window,
  });
  m1.mouseClock = new util.Clock();
  // Initialize components for Routine "green"
  greenClock = new util.Clock();
  m2 = new core.Mouse({
    win: psychoJS.window,
  });
  m2.mouseClock = new util.Clock();
  green_intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'green_intro',
    text: '위 사진의 초록색깔 상자 중 한가지가 나오면 화면을 눌러 주세요. \n\n설명을 이해하셨다면 화면을 눌러주세요',
    font: 'NanumSquare',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  green_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'green_image', units : undefined, 
    image : 'green.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0.3], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "blue"
  blueClock = new util.Clock();
  m3 = new core.Mouse({
    win: psychoJS.window,
  });
  m3.mouseClock = new util.Clock();
  blue_intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'blue_intro',
    text: '위 사진의 파란색깔 상자 중 한가지가 나오면  화면을 누르시면 안됩니다. \n\n설명을 이해하셨다면 화면을 눌러주세요',
    font: 'NanumSquare',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blue_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blue_image', units : undefined, 
    image : 'blue.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0.3], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "test_intro"
  test_introClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '본 과제를 실시하기 전에 연습과제를 실시하겠습니다.\n\n\n준비가 되시면 화면을 클릭해주세요.',
    font: 'NanumSquare',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  m4 = new core.Mouse({
    win: psychoJS.window,
  });
  m4.mouseClock = new util.Clock();
  // Initialize components for Routine "test_fix"
  test_fixClock = new util.Clock();
  FixationPhase_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'FixationPhase_2',
    text: '+',
    font: 'NanumSquare',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  Blank_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Blank_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "test_trial"
  test_trialClock = new util.Clock();
  Cue_2 = new visual.Rect ({
    win: psychoJS.window, name: 'Cue_2', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.5, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  GoNogo_Stim_2 = new visual.Rect ({
    win: psychoJS.window, name: 'GoNogo_Stim_2', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.5, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "test_feedback"
  test_feedbackClock = new util.Clock();
  Feedback_Present_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Feedback_Present_2',
    text: '',
    font: 'NanumSquare',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "real"
  realClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '연습과제가 끝났습니다.\n\n본 과제를 실시할 준비가 되셨다면 화면을 눌러주세요',
    font: 'NanumSquare',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  // Initialize components for Routine "Fixation"
  FixationClock = new util.Clock();
  FixationPhase = new visual.TextStim({
    win: psychoJS.window,
    name: 'FixationPhase',
    text: '+',
    font: 'NanumSquare',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  Blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'Blank',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  Cue = new visual.Rect ({
    win: psychoJS.window, name: 'Cue', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.5, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  GoNogo_Stim = new visual.Rect ({
    win: psychoJS.window, name: 'GoNogo_Stim', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.5, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  Feedback_Present = new visual.TextStim({
    win: psychoJS.window,
    name: 'Feedback_Present',
    text: '',
    font: 'NanumSquare',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "TaskEnd"
  TaskEndClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '검사가 종료되었습니다. 화면을 눌러 종료하세요.',
    font: 'NanumSquare',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
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
var TaskIntroComponents;
function TaskIntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'TaskIntro'-------
    t = 0;
    TaskIntroClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the m1
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    TaskIntroComponents = [];
    TaskIntroComponents.push(fixation);
    TaskIntroComponents.push(m1);
    
    for (const thisComponent of TaskIntroComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function TaskIntroRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'TaskIntro'-------
    // get current time
    t = TaskIntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    // *m1* updates
    if (t >= 0.0 && m1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m1.tStart = t;  // (not accounting for frame time here)
      m1.frameNStart = frameN;  // exact frame index
      
      m1.status = PsychoJS.Status.STARTED;
      m1.mouseClock.reset();
      prevButtonState = m1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (m1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = m1.getPressed();
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
    for (const thisComponent of TaskIntroComponents)
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
function TaskIntroRoutineEnd() {
  return async function () {
    //------Ending Routine 'TaskIntro'-------
    for (const thisComponent of TaskIntroComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = m1.getPos();
    _mouseButtons = m1.getPressed();
    psychoJS.experiment.addData('m1.x', _mouseXYs[0]);
    psychoJS.experiment.addData('m1.y', _mouseXYs[1]);
    psychoJS.experiment.addData('m1.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('m1.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('m1.rightButton', _mouseButtons[2]);
    // the Routine "TaskIntro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var greenComponents;
function greenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'green'-------
    t = 0;
    greenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the m2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    greenComponents = [];
    greenComponents.push(m2);
    greenComponents.push(green_intro);
    greenComponents.push(green_image);
    
    for (const thisComponent of greenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function greenRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'green'-------
    // get current time
    t = greenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *m2* updates
    if (t >= 0.0 && m2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m2.tStart = t;  // (not accounting for frame time here)
      m2.frameNStart = frameN;  // exact frame index
      
      m2.status = PsychoJS.Status.STARTED;
      m2.mouseClock.reset();
      prevButtonState = m2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (m2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = m2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *green_intro* updates
    if (t >= 0.0 && green_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      green_intro.tStart = t;  // (not accounting for frame time here)
      green_intro.frameNStart = frameN;  // exact frame index
      
      green_intro.setAutoDraw(true);
    }

    
    // *green_image* updates
    if (t >= 0.0 && green_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      green_image.tStart = t;  // (not accounting for frame time here)
      green_image.frameNStart = frameN;  // exact frame index
      
      green_image.setAutoDraw(true);
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
    for (const thisComponent of greenComponents)
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


function greenRoutineEnd() {
  return async function () {
    //------Ending Routine 'green'-------
    for (const thisComponent of greenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = m2.getPos();
    _mouseButtons = m2.getPressed();
    psychoJS.experiment.addData('m2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('m2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('m2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('m2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('m2.rightButton', _mouseButtons[2]);
    // the Routine "green" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blueComponents;
function blueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'blue'-------
    t = 0;
    blueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the m3
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    blueComponents = [];
    blueComponents.push(m3);
    blueComponents.push(blue_intro);
    blueComponents.push(blue_image);
    
    for (const thisComponent of blueComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function blueRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'blue'-------
    // get current time
    t = blueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *m3* updates
    if (t >= 0.0 && m3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m3.tStart = t;  // (not accounting for frame time here)
      m3.frameNStart = frameN;  // exact frame index
      
      m3.status = PsychoJS.Status.STARTED;
      m3.mouseClock.reset();
      prevButtonState = m3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (m3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = m3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *blue_intro* updates
    if (t >= 0.0 && blue_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_intro.tStart = t;  // (not accounting for frame time here)
      blue_intro.frameNStart = frameN;  // exact frame index
      
      blue_intro.setAutoDraw(true);
    }

    
    // *blue_image* updates
    if (t >= 0.0 && blue_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_image.tStart = t;  // (not accounting for frame time here)
      blue_image.frameNStart = frameN;  // exact frame index
      
      blue_image.setAutoDraw(true);
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
    for (const thisComponent of blueComponents)
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


function blueRoutineEnd() {
  return async function () {
    //------Ending Routine 'blue'-------
    for (const thisComponent of blueComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = m3.getPos();
    _mouseButtons = m3.getPressed();
    psychoJS.experiment.addData('m3.x', _mouseXYs[0]);
    psychoJS.experiment.addData('m3.y', _mouseXYs[1]);
    psychoJS.experiment.addData('m3.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('m3.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('m3.rightButton', _mouseButtons[2]);
    // the Routine "blue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var test_introComponents;
function test_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'test_intro'-------
    t = 0;
    test_introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the m4
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    test_introComponents = [];
    test_introComponents.push(text);
    test_introComponents.push(m4);
    
    for (const thisComponent of test_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_introRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'test_intro'-------
    // get current time
    t = test_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    // *m4* updates
    if (t >= 0.0 && m4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m4.tStart = t;  // (not accounting for frame time here)
      m4.frameNStart = frameN;  // exact frame index
      
      m4.status = PsychoJS.Status.STARTED;
      m4.mouseClock.reset();
      prevButtonState = m4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (m4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = m4.getPressed();
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
    for (const thisComponent of test_introComponents)
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


function test_introRoutineEnd() {
  return async function () {
    //------Ending Routine 'test_intro'-------
    for (const thisComponent of test_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = m4.getPos();
    _mouseButtons = m4.getPressed();
    psychoJS.experiment.addData('m4.x', _mouseXYs[0]);
    psychoJS.experiment.addData('m4.y', _mouseXYs[1]);
    psychoJS.experiment.addData('m4.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('m4.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('m4.rightButton', _mouseButtons[2]);
    // the Routine "test_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var test_Blocks;
var currentLoop;
function test_BlocksLoopBegin(test_BlocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_Blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'BlockList_test.xlsx',
      seed: undefined, name: 'test_Blocks'
    });
    psychoJS.experiment.addLoop(test_Blocks); // add the loop to the experiment
    currentLoop = test_Blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTest_Block of test_Blocks) {
      const snapshot = test_Blocks.getSnapshot();
      test_BlocksLoopScheduler.add(importConditions(snapshot));
      const test_trialsLoopScheduler = new Scheduler(psychoJS);
      test_BlocksLoopScheduler.add(test_trialsLoopBegin(test_trialsLoopScheduler, snapshot));
      test_BlocksLoopScheduler.add(test_trialsLoopScheduler);
      test_BlocksLoopScheduler.add(test_trialsLoopEnd);
      test_BlocksLoopScheduler.add(endLoopIteration(test_BlocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var test_trials;
function test_trialsLoopBegin(test_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: test_Block,
      seed: undefined, name: 'test_trials'
    });
    psychoJS.experiment.addLoop(test_trials); // add the loop to the experiment
    currentLoop = test_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTest_trial of test_trials) {
      const snapshot = test_trials.getSnapshot();
      test_trialsLoopScheduler.add(importConditions(snapshot));
      test_trialsLoopScheduler.add(test_fixRoutineBegin(snapshot));
      test_trialsLoopScheduler.add(test_fixRoutineEachFrame());
      test_trialsLoopScheduler.add(test_fixRoutineEnd());
      test_trialsLoopScheduler.add(test_trialRoutineBegin(snapshot));
      test_trialsLoopScheduler.add(test_trialRoutineEachFrame());
      test_trialsLoopScheduler.add(test_trialRoutineEnd());
      test_trialsLoopScheduler.add(test_feedbackRoutineBegin(snapshot));
      test_trialsLoopScheduler.add(test_feedbackRoutineEachFrame());
      test_trialsLoopScheduler.add(test_feedbackRoutineEnd());
      test_trialsLoopScheduler.add(endLoopIteration(test_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function test_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(test_trials);

  return Scheduler.Event.NEXT;
}


async function test_BlocksLoopEnd() {
  psychoJS.experiment.removeLoop(test_Blocks);

  return Scheduler.Event.NEXT;
}


var Blocks;
function BlocksLoopBegin(BlocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'BlockList.xlsx',
      seed: undefined, name: 'Blocks'
    });
    psychoJS.experiment.addLoop(Blocks); // add the loop to the experiment
    currentLoop = Blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of Blocks) {
      const snapshot = Blocks.getSnapshot();
      BlocksLoopScheduler.add(importConditions(snapshot));
      const TrialsLoopScheduler = new Scheduler(psychoJS);
      BlocksLoopScheduler.add(TrialsLoopBegin(TrialsLoopScheduler, snapshot));
      BlocksLoopScheduler.add(TrialsLoopScheduler);
      BlocksLoopScheduler.add(TrialsLoopEnd);
      BlocksLoopScheduler.add(endLoopIteration(BlocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var Trials;
function TrialsLoopBegin(TrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: Block,
      seed: undefined, name: 'Trials'
    });
    psychoJS.experiment.addLoop(Trials); // add the loop to the experiment
    currentLoop = Trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of Trials) {
      const snapshot = Trials.getSnapshot();
      TrialsLoopScheduler.add(importConditions(snapshot));
      TrialsLoopScheduler.add(FixationRoutineBegin(snapshot));
      TrialsLoopScheduler.add(FixationRoutineEachFrame());
      TrialsLoopScheduler.add(FixationRoutineEnd());
      TrialsLoopScheduler.add(TrialRoutineBegin(snapshot));
      TrialsLoopScheduler.add(TrialRoutineEachFrame());
      TrialsLoopScheduler.add(TrialRoutineEnd());
      TrialsLoopScheduler.add(FeedbackRoutineBegin(snapshot));
      TrialsLoopScheduler.add(FeedbackRoutineEachFrame());
      TrialsLoopScheduler.add(FeedbackRoutineEnd());
      TrialsLoopScheduler.add(endLoopIteration(TrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function TrialsLoopEnd() {
  psychoJS.experiment.removeLoop(Trials);

  return Scheduler.Event.NEXT;
}


async function BlocksLoopEnd() {
  psychoJS.experiment.removeLoop(Blocks);

  return Scheduler.Event.NEXT;
}


var test_fixComponents;
function test_fixRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'test_fix'-------
    t = 0;
    test_fixClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.200000);
    // update component parameters for each repeat
    // keep track of which components have finished
    test_fixComponents = [];
    test_fixComponents.push(FixationPhase_2);
    test_fixComponents.push(Blank_2);
    
    for (const thisComponent of test_fixComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function test_fixRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'test_fix'-------
    // get current time
    t = test_fixClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *FixationPhase_2* updates
    if (t >= 0.0 && FixationPhase_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FixationPhase_2.tStart = t;  // (not accounting for frame time here)
      FixationPhase_2.frameNStart = frameN;  // exact frame index
      
      FixationPhase_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (FixationPhase_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FixationPhase_2.setAutoDraw(false);
    }
    
    // *Blank_2* updates
    if (t >= 0.0 && Blank_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Blank_2.tStart = t;  // (not accounting for frame time here)
      Blank_2.frameNStart = frameN;  // exact frame index
      
      Blank_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Blank_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Blank_2.setAutoDraw(false);
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
    for (const thisComponent of test_fixComponents)
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


function test_fixRoutineEnd() {
  return async function () {
    //------Ending Routine 'test_fix'-------
    for (const thisComponent of test_fixComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var StimColor;
var test_trialComponents;
function test_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'test_trial'-------
    t = 0;
    test_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Cue_2.setSize([Stim_Width, Stim_Height]);
    if ((StimType === "Go")) {
        StimColor = "green";
    } else {
        if ((StimType === "NoGo")) {
            StimColor = "blue";
        }
    }
    
    GoNogo_Stim_2.setFillColor(new util.Color(StimColor));
    GoNogo_Stim_2.setSize([Stim_Width, Stim_Height]);
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    test_trialComponents = [];
    test_trialComponents.push(Cue_2);
    test_trialComponents.push(GoNogo_Stim_2);
    test_trialComponents.push(mouse_2);
    
    for (const thisComponent of test_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'test_trial'-------
    // get current time
    t = test_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Cue_2* updates
    if (t >= 0.0 && Cue_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cue_2.tStart = t;  // (not accounting for frame time here)
      Cue_2.frameNStart = frameN;  // exact frame index
      
      Cue_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + CueTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Cue_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Cue_2.setAutoDraw(false);
    }
    
    // *GoNogo_Stim_2* updates
    if (t >= CueTime+0.2 && GoNogo_Stim_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GoNogo_Stim_2.tStart = t;  // (not accounting for frame time here)
      GoNogo_Stim_2.frameNStart = frameN;  // exact frame index
      
      GoNogo_Stim_2.setAutoDraw(true);
    }

    frameRemains = CueTime+0.2 + 2.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (GoNogo_Stim_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      GoNogo_Stim_2.setAutoDraw(false);
    }
    // *mouse_2* updates
    if (t >= (CueTime + 0.2) && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = (CueTime + 0.2) + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_2.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
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
    for (const thisComponent of test_trialComponents)
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


var mycorreResp;
var mouse_rt2;
function test_trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'test_trial'-------
    for (const thisComponent of test_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((StimType === "Go")) {
        if ((mouse.getPressed()[0] === 1)) {
            mycorreResp = 1;
        } else {
            mycorreResp = 0;
        }
    } else {
        if ((StimType === "NoGo")) {
            if ((mouse.getPressed()[0] === 1)) {
                mycorreResp = 0;
            } else {
                mycorreResp = 1;
            }
        }
    }
    mouse_rt2 = mouse_2.time;
    psychoJS.experiment.addData("mouse_rt", mouse_rt2);
    test_trials.addData("wasItCorrect", mycorreResp);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_2.x) {  psychoJS.experiment.addData('mouse_2.x', mouse_2.x[0])};
    if (mouse_2.y) {  psychoJS.experiment.addData('mouse_2.y', mouse_2.y[0])};
    if (mouse_2.leftButton) {  psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton[0])};
    if (mouse_2.midButton) {  psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton[0])};
    if (mouse_2.rightButton) {  psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton[0])};
    if (mouse_2.time) {  psychoJS.experiment.addData('mouse_2.time', mouse_2.time[0])};
    
    // the Routine "test_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_msg;
var test_feedbackComponents;
function test_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'test_feedback'-------
    t = 0;
    test_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    if ((StimType === "Go")) {
        if ((mouse.getPressed()[0] === 1)) {
            fb_msg = "정확합니다";
        } else {
            fb_msg = "틀렸습니다";
        }
    } else {
        if ((StimType === "NoGo")) {
            if ((mouse.getPressed()[0] === 1)) {
                fb_msg = "틀렸습니다. 화면을 누르면 안 됩니다";
            } else {
                fb_msg = "정확합니다.";
            }
        }
    }
    
    Feedback_Present_2.setColor(new util.Color('white'));
    Feedback_Present_2.setText(fb_msg);
    // keep track of which components have finished
    test_feedbackComponents = [];
    test_feedbackComponents.push(Feedback_Present_2);
    
    for (const thisComponent of test_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'test_feedback'-------
    // get current time
    t = test_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Feedback_Present_2* updates
    if (t >= 0.5 && Feedback_Present_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Feedback_Present_2.tStart = t;  // (not accounting for frame time here)
      Feedback_Present_2.frameNStart = frameN;  // exact frame index
      
      Feedback_Present_2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Feedback_Present_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Feedback_Present_2.setAutoDraw(false);
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
    for (const thisComponent of test_feedbackComponents)
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


function test_feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'test_feedback'-------
    for (const thisComponent of test_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var realComponents;
function realRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'real'-------
    t = 0;
    realClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_4
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    realComponents = [];
    realComponents.push(text_3);
    realComponents.push(mouse_4);
    
    for (const thisComponent of realComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function realRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'real'-------
    // get current time
    t = realClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    // *mouse_4* updates
    if (t >= 0.0 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
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
    for (const thisComponent of realComponents)
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


function realRoutineEnd() {
  return async function () {
    //------Ending Routine 'real'-------
    for (const thisComponent of realComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_4.getPos();
    _mouseButtons = mouse_4.getPressed();
    psychoJS.experiment.addData('mouse_4.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_4.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_4.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_4.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_4.rightButton', _mouseButtons[2]);
    // the Routine "real" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var FixationComponents;
function FixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Fixation'-------
    t = 0;
    FixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.300000);
    // update component parameters for each repeat
    // keep track of which components have finished
    FixationComponents = [];
    FixationComponents.push(FixationPhase);
    FixationComponents.push(Blank);
    
    for (const thisComponent of FixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FixationRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Fixation'-------
    // get current time
    t = FixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *FixationPhase* updates
    if (t >= 0.0 && FixationPhase.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FixationPhase.tStart = t;  // (not accounting for frame time here)
      FixationPhase.frameNStart = frameN;  // exact frame index
      
      FixationPhase.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (FixationPhase.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FixationPhase.setAutoDraw(false);
    }
    
    // *Blank* updates
    if (t >= 0.0 && Blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Blank.tStart = t;  // (not accounting for frame time here)
      Blank.frameNStart = frameN;  // exact frame index
      
      Blank.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Blank.setAutoDraw(false);
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
    for (const thisComponent of FixationComponents)
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


function FixationRoutineEnd() {
  return async function () {
    //------Ending Routine 'Fixation'-------
    for (const thisComponent of FixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var TrialComponents;
function TrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Trial'-------
    t = 0;
    TrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Cue.setSize([Stim_Width, Stim_Height]);
    if ((StimType === "Go")) {
        StimColor = "green";
    } else {
        if ((StimType === "NoGo")) {
            StimColor = "blue";
        }
    }
    
    GoNogo_Stim.setFillColor(new util.Color(StimColor));
    GoNogo_Stim.setSize([Stim_Width, Stim_Height]);
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    TrialComponents = [];
    TrialComponents.push(Cue);
    TrialComponents.push(GoNogo_Stim);
    TrialComponents.push(mouse);
    
    for (const thisComponent of TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TrialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Trial'-------
    // get current time
    t = TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Cue* updates
    if (t >= 0.0 && Cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cue.tStart = t;  // (not accounting for frame time here)
      Cue.frameNStart = frameN;  // exact frame index
      
      Cue.setAutoDraw(true);
    }

    frameRemains = 0.0 + CueTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Cue.setAutoDraw(false);
    }
    
    // *GoNogo_Stim* updates
    if (t >= CueTime+0.2 && GoNogo_Stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GoNogo_Stim.tStart = t;  // (not accounting for frame time here)
      GoNogo_Stim.frameNStart = frameN;  // exact frame index
      
      GoNogo_Stim.setAutoDraw(true);
    }

    frameRemains = CueTime+0.2 + 0.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (GoNogo_Stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      GoNogo_Stim.setAutoDraw(false);
    }
    // *mouse* updates
    if (t >= (CueTime + 0.2) && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = (CueTime + 0.2) + 0.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse.status = PsychoJS.Status.FINISHED;
  }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
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
    for (const thisComponent of TrialComponents)
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


var mouse_rt;
function TrialRoutineEnd() {
  return async function () {
    //------Ending Routine 'Trial'-------
    for (const thisComponent of TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((StimType === "Go")) {
        if ((mouse.getPressed()[0] === 1)) {
            mycorreResp = 1;
        } else {
            mycorreResp = 0;
        }
    } else {
        if ((StimType === "NoGo")) {
            if ((mouse.getPressed()[0] === 1)) {
                mycorreResp = 0;
            } else {
                mycorreResp = 1;
            }
        }
    }
    mouse_rt = mouse.time;
    psychoJS.experiment.addData("mouse_rt", mouse_rt);
    Trials.addData("wasItCorrect", mycorreResp);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    
    // the Routine "Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Feedback'-------
    t = 0;
    FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.900000);
    // update component parameters for each repeat
    if ((StimType === "Go")) {
        if ((mouse.getPressed()[0] === 1)) {
            fb_msg = "정확합니다";
        } else {
            fb_msg = "틀렸습니다";
        }
    } else {
        if ((StimType === "NoGo")) {
            if ((mouse.getPressed()[0] === 1)) {
                fb_msg = "틀렸습니다. 화면을 누르면 안 됩니다";
            } else {
                fb_msg = "정확합니다.";
            }
        }
    }
    
    Feedback_Present.setColor(new util.Color('white'));
    Feedback_Present.setText(fb_msg);
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(Feedback_Present);
    
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Feedback'-------
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Feedback_Present* updates
    if (t >= 0.3 && Feedback_Present.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Feedback_Present.tStart = t;  // (not accounting for frame time here)
      Feedback_Present.frameNStart = frameN;  // exact frame index
      
      Feedback_Present.setAutoDraw(true);
    }

    frameRemains = 0.3 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Feedback_Present.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Feedback_Present.setAutoDraw(false);
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
    for (const thisComponent of FeedbackComponents)
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


function FeedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'Feedback'-------
    for (const thisComponent of FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var TaskEndComponents;
function TaskEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'TaskEnd'-------
    t = 0;
    TaskEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    TaskEndComponents = [];
    TaskEndComponents.push(text_2);
    TaskEndComponents.push(mouse_3);
    
    for (const thisComponent of TaskEndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TaskEndRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'TaskEnd'-------
    // get current time
    t = TaskEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
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
    for (const thisComponent of TaskEndComponents)
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


function TaskEndRoutineEnd() {
  return async function () {
    //------Ending Routine 'TaskEnd'-------
    for (const thisComponent of TaskEndComponents) {
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
    // the Routine "TaskEnd" was not non-slip safe, so reset the non-slip timer
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
