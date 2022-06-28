/**************** 
 * Iwoa_V6 Test *
 ****************/

import { core, data, sound, util, visual } from './lib/psychojs-2022.1.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'iwoa_v6';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'

function sum(arr) {
   var num = 0;
   for (var i = 0; i < arr.length; i++) {
       num += (typeof arr[i] == 'number') ? arr[i] : 0;
   }
   return num;
};
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
flowScheduler.add(intro2RoutineBegin());
flowScheduler.add(intro2RoutineEachFrame());
flowScheduler.add(intro2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(testendRoutineBegin());
flowScheduler.add(testendRoutineEachFrame());
flowScheduler.add(testendRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'image/clover.png', 'path': 'image/clover.png'},
    {'name': 'image/heart.png', 'path': 'image/heart.png'},
    {'name': 'image/Spades.png', 'path': 'image/Spades.png'},
    {'name': 'iwoa.PNG', 'path': 'iwoa.PNG'},
    {'name': 'image/diamond.png', 'path': 'image/diamond.png'}
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
var text_2;
var mouse_3;
var intro2Clock;
var play;
var mouse_4;
var text_3;
var trialClock;
var trial_instruction;
var border;
var DeckA;
var DeckB;
var DeckC;
var DeckD;
var Trial_click;
var border_loc;
var totMoney;
var Nchoice;
var feedbackClock;
var deckA_list;
var deckB_list;
var deckC_list;
var deckD_list;
var deckA_prop;
var deckB_prop;
var deckC_prop;
var deckD_prop;
var deck_list;
var money;
var net_gain;
var gain;
var loss;
var deck_choiceN;
var trial_tot;
var msg_choice;
var msg_money;
var testendClock;
var text;
var mouse_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "mobile"
  mobileClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '모바일에서 검사를 하시면 가로모드로 실시해주세요\n\n검사를 시작할 준비가 되셨으면, 화면을 눌러주세요',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "intro2"
  intro2Clock = new util.Clock();
  play = new visual.ImageStim({
    win : psychoJS.window,
    name : 'play', units : undefined, 
    image : 'iwoa.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0.25], size : [0.7, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '이 실험에서는 4가지 종류의 카드가 제시되고, 참가자는 카드를 뽑게 됩니다.\n\n카드를 뽑을 떄 마다 일정량의 이득이나 손실, 혹은 이득과 손실을 받게 됩니다.\n\n4가지 카드 중 계속 뽑았을 때 더 유리한 카드가 존재하며, 가능하면 많은 돈을 획득하는 것이 목표입니다.\n\n카드는 총 100장을 뽑게 됩니다.\n\n실험에 참가할 준비가 되셨으면 화면을 눌러주세요.',
    font: 'NanumSquare',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  trial_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_instruction',
    text: '카드를 선택해주세요.',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  border = new visual.Rect ({
    win: psychoJS.window, name: 'border', 
    width: [0.26, (0.26 * 1.45)][0], height: [0.26, (0.26 * 1.45)][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color(undefined),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  DeckA = new visual.ImageStim({
    win : psychoJS.window,
    name : 'DeckA', units : undefined, 
    image : 'image/Spades.png', mask : undefined,
    ori : 0.0, pos : [(- 0.6), 0], size : [0.25, (0.25 * 1.45)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  DeckB = new visual.ImageStim({
    win : psychoJS.window,
    name : 'DeckB', units : undefined, 
    image : 'image/diamond.png', mask : undefined,
    ori : 0.0, pos : [(- 0.2), 0], size : [0.25, (0.25 * 1.45)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  DeckC = new visual.ImageStim({
    win : psychoJS.window,
    name : 'DeckC', units : undefined, 
    image : 'image/clover.png', mask : undefined,
    ori : 0.0, pos : [0.2, 0], size : [0.25, (0.25 * 1.45)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  DeckD = new visual.ImageStim({
    win : psychoJS.window,
    name : 'DeckD', units : undefined, 
    image : 'image/heart.png', mask : undefined,
    ori : 0.0, pos : [0.6, 0], size : [0.25, (0.25 * 1.45)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  Trial_click = new core.Mouse({
    win: psychoJS.window,
  });
  Trial_click.mouseClock = new util.Clock();
  border_loc = 0;
  
  totMoney = new visual.TextStim({
    win: psychoJS.window,
    name: 'totMoney',
    text: '',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0, (- 0.335)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  Nchoice = new visual.TextStim({
    win: psychoJS.window,
    name: 'Nchoice',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  deckA_list = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  deckB_list = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  deckC_list = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  deckD_list = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  deckA_prop = [100, (- 250), deckA_list];
  deckB_prop = [100, (- 1250), deckB_list];
  deckC_prop = [50, (- 50), deckC_list];
  deckD_prop = [50, (- 250), deckD_list];
  deck_list = [deckA_prop, deckB_prop, deckC_prop, deckD_prop];
  util.shuffle(deck_list);
  money = 2000;
  net_gain = 0;
  gain = 0;
  loss = 0;
  deck_choiceN = [0, 0, 0, 0];
  trial_tot = 0;
  msg_choice = " ";
  msg_money = " ";
  
  // Initialize components for Routine "testend"
  testendClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '검사가 완료되었습니다. 수고하셨습니다.\n\n검사를 종료하실려면 화면을 눌러주세요',
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
    // setup some python lists for storing info about the mouse_3
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    mobileComponents = [];
    mobileComponents.push(text_2);
    mobileComponents.push(mouse_3);
    
    for (const thisComponent of mobileComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function mobileRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'mobile'-------
    // get current time
    t = mobileClock.getTime();
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
    _mouseXYs = mouse_3.getPos();
    _mouseButtons = mouse_3.getPressed();
    psychoJS.experiment.addData('mouse_3.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_3.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_3.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_3.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_3.rightButton', _mouseButtons[2]);
    // the Routine "mobile" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var intro2Components;
function intro2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'intro2'-------
    t = 0;
    intro2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_4
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    intro2Components = [];
    intro2Components.push(play);
    intro2Components.push(mouse_4);
    intro2Components.push(text_3);
    
    for (const thisComponent of intro2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function intro2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'intro2'-------
    // get current time
    t = intro2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *play* updates
    if (t >= 0.0 && play.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      play.tStart = t;  // (not accounting for frame time here)
      play.frameNStart = frameN;  // exact frame index
      
      play.setAutoDraw(true);
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
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
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
    for (const thisComponent of intro2Components)
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


function intro2RoutineEnd() {
  return async function () {
    //------Ending Routine 'intro2'-------
    for (const thisComponent of intro2Components) {
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
    // the Routine "intro2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.RANDOM,
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
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    border.setOpacity(0.7);
    // setup some python lists for storing info about the Trial_click
    // current position of the mouse:
    Trial_click.x = [];
    Trial_click.y = [];
    Trial_click.leftButton = [];
    Trial_click.midButton = [];
    Trial_click.rightButton = [];
    Trial_click.time = [];
    Trial_click.clicked_name = [];
    gotValidClick = false; // until a click is received
    totMoney.setText(msg_money);
    Nchoice.setText(msg_choice);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trial_instruction);
    trialComponents.push(border);
    trialComponents.push(DeckA);
    trialComponents.push(DeckB);
    trialComponents.push(DeckC);
    trialComponents.push(DeckD);
    trialComponents.push(Trial_click);
    trialComponents.push(totMoney);
    trialComponents.push(Nchoice);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trial_instruction* updates
    if (t >= 0.0 && trial_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_instruction.tStart = t;  // (not accounting for frame time here)
      trial_instruction.frameNStart = frameN;  // exact frame index
      
      trial_instruction.setAutoDraw(true);
    }

    
    // *border* updates
    if (t >= 0.0 && border.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      border.tStart = t;  // (not accounting for frame time here)
      border.frameNStart = frameN;  // exact frame index
      
      border.setAutoDraw(true);
    }

    
    if (border.status === PsychoJS.Status.STARTED){ // only update if being drawn
      border.setPos(border_loc, false);
      border.setLineColor(new util.Color('blue'), false);
    }
    
    // *DeckA* updates
    if (t >= 0.0 && DeckA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DeckA.tStart = t;  // (not accounting for frame time here)
      DeckA.frameNStart = frameN;  // exact frame index
      
      DeckA.setAutoDraw(true);
    }

    
    // *DeckB* updates
    if (t >= 0.0 && DeckB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DeckB.tStart = t;  // (not accounting for frame time here)
      DeckB.frameNStart = frameN;  // exact frame index
      
      DeckB.setAutoDraw(true);
    }

    
    // *DeckC* updates
    if (t >= 0.0 && DeckC.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DeckC.tStart = t;  // (not accounting for frame time here)
      DeckC.frameNStart = frameN;  // exact frame index
      
      DeckC.setAutoDraw(true);
    }

    
    // *DeckD* updates
    if (t >= 0.0 && DeckD.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DeckD.tStart = t;  // (not accounting for frame time here)
      DeckD.frameNStart = frameN;  // exact frame index
      
      DeckD.setAutoDraw(true);
    }

    // *Trial_click* updates
    if (t >= 0.0 && Trial_click.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Trial_click.tStart = t;  // (not accounting for frame time here)
      Trial_click.frameNStart = frameN;  // exact frame index
      
      Trial_click.status = PsychoJS.Status.STARTED;
      Trial_click.mouseClock.reset();
      prevButtonState = Trial_click.getPressed();  // if button is down already this ISN'T a new click
      }
    if (Trial_click.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = Trial_click.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [DeckA,DeckB,DeckC,DeckD]) {
            if (obj.contains(Trial_click)) {
              gotValidClick = true;
              Trial_click.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = Trial_click.getPos();
          Trial_click.x.push(_mouseXYs[0]);
          Trial_click.y.push(_mouseXYs[1]);
          Trial_click.leftButton.push(_mouseButtons[0]);
          Trial_click.midButton.push(_mouseButtons[1]);
          Trial_click.rightButton.push(_mouseButtons[2]);
          Trial_click.time.push(Trial_click.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    if (DeckA.contains(Trial_click)) {
        border_loc = [(- 0.6), 0];
        border.lineColor = "blue";
    } else {
        if (DeckB.contains(Trial_click)) {
            border_loc = [(- 0.2), 0];
            border.lineColor = "blue";
        } else {
            if (DeckC.contains(Trial_click)) {
                border_loc = [0.2, 0];
                border.lineColor = "blue";
            } else {
                if (DeckD.contains(Trial_click)) {
                    border_loc = [0.6, 0];
                    border.lineColor = "blue";
                }
            }
        }
    }
    
    
    // *totMoney* updates
    if (t >= 0.0 && totMoney.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      totMoney.tStart = t;  // (not accounting for frame time here)
      totMoney.frameNStart = frameN;  // exact frame index
      
      totMoney.setAutoDraw(true);
    }

    
    // *Nchoice* updates
    if (t >= 0.0 && Nchoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Nchoice.tStart = t;  // (not accounting for frame time here)
      Nchoice.frameNStart = frameN;  // exact frame index
      
      Nchoice.setAutoDraw(true);
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
    for (const thisComponent of trialComponents)
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


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (Trial_click.x) {  psychoJS.experiment.addData('Trial_click.x', Trial_click.x[0])};
    if (Trial_click.y) {  psychoJS.experiment.addData('Trial_click.y', Trial_click.y[0])};
    if (Trial_click.leftButton) {  psychoJS.experiment.addData('Trial_click.leftButton', Trial_click.leftButton[0])};
    if (Trial_click.midButton) {  psychoJS.experiment.addData('Trial_click.midButton', Trial_click.midButton[0])};
    if (Trial_click.rightButton) {  psychoJS.experiment.addData('Trial_click.rightButton', Trial_click.rightButton[0])};
    if (Trial_click.time) {  psychoJS.experiment.addData('Trial_click.time', Trial_click.time[0])};
    if (Trial_click.clicked_name) {  psychoJS.experiment.addData('Trial_click.clicked_name', Trial_click.clicked_name[0])};
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var choice_idx;
var card_list;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((Trial_click.clicked_name[0] === "DeckA")) {
        choice_idx = 0;
    } else {
        if ((Trial_click.clicked_name[0] === "DeckB")) {
            choice_idx = 1;
        } else {
            if ((Trial_click.clicked_name[0] === "DeckC")) {
                choice_idx = 2;
            } else {
                if ((Trial_click.clicked_name[0] === "DeckD")) {
                    choice_idx = 3;
                }
            }
        }
    }
    deck_choiceN[choice_idx] += 1;
    if (((deck_choiceN[choice_idx] % 10) === 1)) {
        card_list = deck_list[choice_idx][2];
        util.shuffle(card_list);
    }
    gain = deck_list[choice_idx][0];
    loss = (card_list[((deck_choiceN[choice_idx] - 1) % 10)] * deck_list[choice_idx][1]);
    net_gain = (gain + loss);
    money += net_gain;
    trial_tot = util.sum(deck_choiceN);
    msg_money = ((((("얻은 금액: " + gain.toString()) + "\n잃은 금액: ") + loss.toString()) + "\n총 금액: ") + money.toString());
    msg_choice = ((((((((deck_choiceN[0].toString() + ",") + deck_choiceN[1].toString()) + ",") + deck_choiceN[2].toString()) + ",") + deck_choiceN[3].toString()) + "\n") + trial_tot.toString());
    
    // keep track of which components have finished
    feedbackComponents = [];
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
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


function feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var testendComponents;
function testendRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'testend'-------
    t = 0;
    testendClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    testendComponents = [];
    testendComponents.push(text);
    testendComponents.push(mouse_2);
    
    for (const thisComponent of testendComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function testendRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'testend'-------
    // get current time
    t = testendClock.getTime();
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
    for (const thisComponent of testendComponents)
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


function testendRoutineEnd() {
  return async function () {
    //------Ending Routine 'testend'-------
    for (const thisComponent of testendComponents) {
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
    // the Routine "testend" was not non-slip safe, so reset the non-slip timer
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
