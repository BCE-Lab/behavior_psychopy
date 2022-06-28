/**************** 
 * Bart_V4 Test *
 ****************/

import { core, data, sound, util, visual } from './lib/psychojs-2022.1.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'bart_v4';  // from the Builder filename that created this script
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
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(finalScoreRoutineBegin());
flowScheduler.add(finalScoreRoutineEachFrame());
flowScheduler.add(finalScoreRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'blueBalloon.png', 'path': 'blueBalloon.png'},
    {'name': 'stop.png', 'path': 'stop.png'},
    {'name': 'push.png', 'path': 'push.png'},
    {'name': 'redBalloon.png', 'path': 'redBalloon.png'},
    {'name': 'trialTypes.xlsx', 'path': 'trialTypes.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.1.2';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + (("data" + "/") + `${expInfo["participant"]}_${expInfo["date"]}`));

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('completedURL', 'incompleteURL');

  return Scheduler.Event.NEXT;
}


var instructionsClock;
var instrMessage;
var m1;
var trialClock;
var bankedEarnings;
var balloonEarnings;
var bankedText;
var lastBalloonEarnings;
var thisBalloonEarnings;
var balloonSize;
var balloonMsgHeight;
var balloonBody;
var balloonValMsg;
var bankedMsg;
var push;
var stop;
var mouse;
var feedbackClock;
var feedbackText;
var feedbackMsg;
var finalScoreClock;
var finalScore_2;
var mouse_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instrMessage = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrMessage',
    text: "이 실험은 풍선 불기 실험으로 포인트를 최대한  많이 얻어야 하는 실험입니다.\n\n풍선의 크기에 따라 포인트를 얻습니다. 그러나 너무 많이 불면 풍선이 터지고, 포인트를 얻지 못합니다.\n\n풍선마다 최대 크기는 다릅니다. \n     \n해당 풍선을 불고 싶으면 '풍선 불기'를 살짝 클릭하세요.\n해당 풍선의 포인트를 얻고 다음 풍선으로 이동하려면 '그만 불기'를 눌러주세요.\n\n설명문을 이해하셨으면, 화면을 클릭하여 실험으로 넘어가주세요. ",
    font: 'NanumSquare',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  m1 = new core.Mouse({
    win: psychoJS.window,
  });
  m1.mouseClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  bankedEarnings = 0.0;
  balloonEarnings = '';
  bankedText = '';
  lastBalloonEarnings = 0.0;
  thisBalloonEarnings = 0.0;
  balloonSize=0.08;
  balloonMsgHeight=0.01;
  balloonBody = new visual.ImageStim({
    win : psychoJS.window,
    name : 'balloonBody', units : 'height', 
    image : 'redBalloon.png', mask : undefined,
    ori : (- 90), pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  balloonValMsg = new visual.TextStim({
    win: psychoJS.window,
    name: 'balloonValMsg',
    text: '',
    font: 'NanumSquare',
    units: 'height', 
    pos: [0, 0.05], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  bankedMsg = new visual.TextStim({
    win: psychoJS.window,
    name: 'bankedMsg',
    text: '',
    font: 'NanumSquare',
    units: 'height', 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  push = new visual.ImageStim({
    win : psychoJS.window,
    name : 'push', units : undefined, 
    image : 'push.png', mask : undefined,
    ori : 0.0, pos : [(- 0.4), (- 0.4)], size : [0.3, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  stop = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stop', units : undefined, 
    image : 'stop.png', mask : undefined,
    ori : 0.0, pos : [0.4, (- 0.4)], size : [0.3, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  feedbackText=""
  
  balloonBody.setSize(0.10)
  feedbackMsg = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedbackMsg',
    text: '',
    font: 'NanumSquare',
    units: 'height', 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "finalScore"
  finalScoreClock = new util.Clock();
  finalScore_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'finalScore_2',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
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
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the m1
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instrMessage);
    instructionsComponents.push(m1);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrMessage* updates
    if (t >= 0.0 && instrMessage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrMessage.tStart = t;  // (not accounting for frame time here)
      instrMessage.frameNStart = frameN;  // exact frame index
      
      instrMessage.setAutoDraw(true);
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
    for (const thisComponent of instructionsComponents)
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
function instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
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
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
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
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trialTypes.xlsx',
      seed: 1832, name: 'trials'
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


var popped;
var nPumps;
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
    balloonSize=0.08;
    popped=false;
    nPumps=0;
    balloonBody.ori = 90;
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(balloonBody);
    trialComponents.push(balloonValMsg);
    trialComponents.push(bankedMsg);
    trialComponents.push(push);
    trialComponents.push(stop);
    trialComponents.push(mouse);
    
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
    thisBalloonEarnings=nPumps*0.05;
    balloonEarnings = "해당 포인트를 얻을 수 있습니다:\n" + thisBalloonEarnings.toFixed(2);
    bankedText = "해당 포인트를 얻으셨습니다:\n" + bankedEarnings.toFixed(2);
    balloonSize=0.1+nPumps*0.015;
    
    // *balloonBody* updates
    if (t >= 0.0 && balloonBody.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      balloonBody.tStart = t;  // (not accounting for frame time here)
      balloonBody.frameNStart = frameN;  // exact frame index
      
      balloonBody.setAutoDraw(true);
    }

    
    if (balloonBody.status === PsychoJS.Status.STARTED){ // only update if being drawn
      balloonBody.setPos([0, ((balloonSize / 2) - 0.5)], false);
      balloonBody.setSize(balloonSize, false);
    }
    
    // *balloonValMsg* updates
    if (t >= 0.0 && balloonValMsg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      balloonValMsg.tStart = t;  // (not accounting for frame time here)
      balloonValMsg.frameNStart = frameN;  // exact frame index
      
      balloonValMsg.setAutoDraw(true);
    }

    
    if (balloonValMsg.status === PsychoJS.Status.STARTED){ // only update if being drawn
      balloonValMsg.setText(balloonEarnings, false);
    }
    
    // *bankedMsg* updates
    if (t >= 0.0 && bankedMsg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bankedMsg.tStart = t;  // (not accounting for frame time here)
      bankedMsg.frameNStart = frameN;  // exact frame index
      
      bankedMsg.setAutoDraw(true);
    }

    
    if (bankedMsg.status === PsychoJS.Status.STARTED){ // only update if being drawn
      bankedMsg.setText(bankedText, false);
    }
    if (mouse.isPressedIn(push)) {
        nPumps = (nPumps + 1);
        if ((nPumps > maxPumps)) {
            popped = true;
            continueRoutine = false;
        }
    }
    if (mouse.isPressedIn(stop)) {
        popped = false;
        continueRoutine = false;
    }
    
    
    // *push* updates
    if (t >= 0.0 && push.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      push.tStart = t;  // (not accounting for frame time here)
      push.frameNStart = frameN;  // exact frame index
      
      push.setAutoDraw(true);
    }

    
    // *stop* updates
    if (t >= 0.0 && stop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop.tStart = t;  // (not accounting for frame time here)
      stop.frameNStart = frameN;  // exact frame index
      
      stop.setAutoDraw(true);
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
    //calculate cash 'earned'
    if (popped) {
      thisBalloonEarnings=0.0;
      lastBalloonEarnings=0.0;
    } else {
      lastBalloonEarnings=thisBalloonEarnings;
    }
    bankedEarnings = bankedEarnings + lastBalloonEarnings
    //save data
    psychoJS.experiment.addData('nPumps', nPumps);
    psychoJS.experiment.addData('size', balloonSize);
    psychoJS.experiment.addData('earnings', thisBalloonEarnings);
    psychoJS.experiment.addData('popped', popped);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    if (popped == true) {
        feedbackText = "풍선이 터졌습니다";
    } else {
        feedbackText="해당 포인트를 얻으셨습니다\n" + lastBalloonEarnings.toFixed(2);
    }
    feedbackMsg.setText(feedbackText);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedbackMsg);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedbackMsg* updates
    if (t >= 0.0 && feedbackMsg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackMsg.tStart = t;  // (not accounting for frame time here)
      feedbackMsg.frameNStart = frameN;  // exact frame index
      
      feedbackMsg.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedbackMsg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedbackMsg.setAutoDraw(false);
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
    for (const thisComponent of feedbackComponents)
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


function feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var scoreText;
var finalScoreComponents;
function finalScoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'finalScore'-------
    t = 0;
    finalScoreClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    scoreText="수고하셨습니다. 총 얻으신 포인트는\n" + bankedEarnings.toFixed(2)+"입니다";
    finalScore_2.setText(scoreText);
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    finalScoreComponents = [];
    finalScoreComponents.push(finalScore_2);
    finalScoreComponents.push(mouse_2);
    
    for (const thisComponent of finalScoreComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function finalScoreRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'finalScore'-------
    // get current time
    t = finalScoreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *finalScore_2* updates
    if (t >= 0.0 && finalScore_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finalScore_2.tStart = t;  // (not accounting for frame time here)
      finalScore_2.frameNStart = frameN;  // exact frame index
      
      finalScore_2.setAutoDraw(true);
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
    for (const thisComponent of finalScoreComponents)
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


function finalScoreRoutineEnd() {
  return async function () {
    //------Ending Routine 'finalScore'-------
    for (const thisComponent of finalScoreComponents) {
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
    // the Routine "finalScore" was not non-slip safe, so reset the non-slip timer
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
