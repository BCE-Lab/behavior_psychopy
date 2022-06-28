#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.1.2),
    on 6월 28, 2022, at 20:20
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from psychopy import locale_setup
from psychopy import prefs
prefs.hardware['audioLib'] = 'ptb'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.1.2'
expName = 'bart_v1'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + 'data' + os.sep + '%s_%s' % (expInfo['participant'], expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='D:\\OneDrive - pusan.ac.kr\\바탕 화면\\연구\\2021 행동검사 웹플랫폼\\Scale\\플랫폼 버전관리\\행동검사\\ver1.0\\bart-master\\v4\\bart_v4.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.WARNING)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1536, 864], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color='black', colorSpace='rgb',
    blendMode='avg', useFBO=True)
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# Setup ioHub
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
instrMessage = visual.TextStim(win=win, name='instrMessage',
    text="이 실험은 풍선 불기 실험으로 포인트를 최대한  많이 얻어야 하는 실험입니다.\n\n풍선의 크기에 따라 포인트를 얻습니다. 그러나 너무 많이 불면 풍선이 터지고, 포인트를 얻지 못합니다.\n\n풍선마다 최대 크기는 다릅니다. \n     \n해당 풍선을 불고 싶으면 '풍선 불기'를 살짝 클릭하세요.\n해당 풍선의 포인트를 얻고 다음 풍선으로 이동하려면 '그만 불기'를 눌러주세요.\n\n설명문을 이해하셨으면, 화면을 클릭하여 실험으로 넘어가주세요. ",
    font='NanumSquare',
    units='height', pos=[0, 0], height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
m1 = event.Mouse(win=win)
x, y = [None, None]
m1.mouseClock = core.Clock()

# Initialize components for Routine "trial"
trialClock = core.Clock()
bankedEarnings=0.0
balloonEarnings = ''
bankedText = ''
lastBalloonEarnings=0.0
thisBalloonEarnings=0.0
balloonSize=0.08
balloonMsgHeight=0.01
balloonBody = visual.ImageStim(
    win=win,
    name='balloonBody', units='height', 
    image='redBalloon.png', mask=None, anchor='center',
    ori=-90, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
balloonValMsg = visual.TextStim(win=win, name='balloonValMsg',
    text='',
    font='NanumSquare',
    units='height', pos=[0,0.05], height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
bankedMsg = visual.TextStim(win=win, name='bankedMsg',
    text='',
    font='NanumSquare',
    units='height', pos=[0, 0.4], height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
push = visual.ImageStim(
    win=win,
    name='push', 
    image='push.png', mask=None, anchor='center',
    ori=0.0, pos=(-0.4, -0.4), size=(0.3, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)
stop = visual.ImageStim(
    win=win,
    name='stop', 
    image='stop.png', mask=None, anchor='center',
    ori=0.0, pos=(0.4, -0.4), size=(0.3, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()

feedbackText=""


feedbackMsg = visual.TextStim(win=win, name='feedbackMsg',
    text='',
    font='NanumSquare',
    units='height', pos=[0, 0], height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "finalScore"
finalScoreClock = core.Clock()
finalScore_2 = visual.TextStim(win=win, name='finalScore_2',
    text='',
    font='Arial',
    units='height', pos=[0, 0], height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "instructions"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the m1
gotValidClick = False  # until a click is received
# keep track of which components have finished
instructionsComponents = [instrMessage, m1]
for thisComponent in instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions"-------
while continueRoutine:
    # get current time
    t = instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instrMessage* updates
    if instrMessage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instrMessage.frameNStart = frameN  # exact frame index
        instrMessage.tStart = t  # local t and not account for scr refresh
        instrMessage.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instrMessage, 'tStartRefresh')  # time at next scr refresh
        instrMessage.setAutoDraw(True)
    # *m1* updates
    if m1.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        m1.frameNStart = frameN  # exact frame index
        m1.tStart = t  # local t and not account for scr refresh
        m1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(m1, 'tStartRefresh')  # time at next scr refresh
        m1.status = STARTED
        m1.mouseClock.reset()
        prevButtonState = m1.getPressed()  # if button is down already this ISN'T a new click
    if m1.status == STARTED:  # only update if started and not finished!
        buttons = m1.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                continueRoutine = False  # abort routine on response    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions"-------
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instrMessage.started', instrMessage.tStartRefresh)
thisExp.addData('instrMessage.stopped', instrMessage.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = m1.getPos()
buttons = m1.getPressed()
thisExp.addData('m1.x', x)
thisExp.addData('m1.y', y)
thisExp.addData('m1.leftButton', buttons[0])
thisExp.addData('m1.midButton', buttons[1])
thisExp.addData('m1.rightButton', buttons[2])
thisExp.addData('m1.started', m1.tStart)
thisExp.addData('m1.stopped', m1.tStop)
thisExp.nextEntry()
# the Routine "instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('trialTypes.xlsx'),
    seed=1832, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    balloonSize=0.08
    popped=False
    nPumps=0
    # setup some python lists for storing info about the mouse
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    trialComponents = [balloonBody, balloonValMsg, bankedMsg, push, stop, mouse]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        thisBalloonEarnings=nPumps*0.05
        balloonEarnings = "해당 포인트를 얻을 수 있습니다:\n%.2f" % thisBalloonEarnings
        bankedText = "해당 포인트를 얻으셨습니다:\n%.2f" % bankedEarnings
        balloonSize=0.1+nPumps*0.015
        
        # *balloonBody* updates
        if balloonBody.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            balloonBody.frameNStart = frameN  # exact frame index
            balloonBody.tStart = t  # local t and not account for scr refresh
            balloonBody.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(balloonBody, 'tStartRefresh')  # time at next scr refresh
            balloonBody.setAutoDraw(True)
        if balloonBody.status == STARTED:  # only update if drawing
            balloonBody.setPos([0, balloonSize/2-.5], log=False)
            balloonBody.setSize(balloonSize, log=False)
        
        # *balloonValMsg* updates
        if balloonValMsg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            balloonValMsg.frameNStart = frameN  # exact frame index
            balloonValMsg.tStart = t  # local t and not account for scr refresh
            balloonValMsg.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(balloonValMsg, 'tStartRefresh')  # time at next scr refresh
            balloonValMsg.setAutoDraw(True)
        if balloonValMsg.status == STARTED:  # only update if drawing
            balloonValMsg.setText(balloonEarnings, log=False)
        
        # *bankedMsg* updates
        if bankedMsg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            bankedMsg.frameNStart = frameN  # exact frame index
            bankedMsg.tStart = t  # local t and not account for scr refresh
            bankedMsg.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(bankedMsg, 'tStartRefresh')  # time at next scr refresh
            bankedMsg.setAutoDraw(True)
        if bankedMsg.status == STARTED:  # only update if drawing
            bankedMsg.setText(bankedText, log=False)
        if mouse.isPressedIn(push):
          nPumps=nPumps+1  
          if nPumps>maxPumps:
            popped=True
            continueRoutine=False
        if mouse.isPressedIn(stop):
            popped=False
            continueRoutine=False
        
        # *push* updates
        if push.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            push.frameNStart = frameN  # exact frame index
            push.tStart = t  # local t and not account for scr refresh
            push.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(push, 'tStartRefresh')  # time at next scr refresh
            push.setAutoDraw(True)
        
        # *stop* updates
        if stop.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stop.frameNStart = frameN  # exact frame index
            stop.tStart = t  # local t and not account for scr refresh
            stop.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stop, 'tStartRefresh')  # time at next scr refresh
            stop.setAutoDraw(True)
        # *mouse* updates
        if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse.frameNStart = frameN  # exact frame index
            mouse.tStart = t  # local t and not account for scr refresh
            mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
            mouse.status = STARTED
            mouse.mouseClock.reset()
            prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    #calculate cash 'earned'
    if popped:
      thisBalloonEarnings=0.0
      lastBalloonEarnings=0.0
    else:   lastBalloonEarnings=thisBalloonEarnings
    bankedEarnings = bankedEarnings+lastBalloonEarnings
    #save data
    trials.addData('nPumps', nPumps)
    trials.addData('size', balloonSize)
    trials.addData('earnings', thisBalloonEarnings)
    trials.addData('popped', popped)
    
    
    trials.addData('balloonBody.started', balloonBody.tStartRefresh)
    trials.addData('balloonBody.stopped', balloonBody.tStopRefresh)
    trials.addData('balloonValMsg.started', balloonValMsg.tStartRefresh)
    trials.addData('balloonValMsg.stopped', balloonValMsg.tStopRefresh)
    trials.addData('bankedMsg.started', bankedMsg.tStartRefresh)
    trials.addData('bankedMsg.stopped', bankedMsg.tStopRefresh)
    trials.addData('push.started', push.tStartRefresh)
    trials.addData('push.stopped', push.tStopRefresh)
    trials.addData('stop.started', stop.tStartRefresh)
    trials.addData('stop.stopped', stop.tStopRefresh)
    # store data for trials (TrialHandler)
    x, y = mouse.getPos()
    buttons = mouse.getPressed()
    trials.addData('mouse.x', x)
    trials.addData('mouse.y', y)
    trials.addData('mouse.leftButton', buttons[0])
    trials.addData('mouse.midButton', buttons[1])
    trials.addData('mouse.rightButton', buttons[2])
    trials.addData('mouse.started', mouse.tStart)
    trials.addData('mouse.stopped', mouse.tStop)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback"-------
    continueRoutine = True
    routineTimer.add(1.500000)
    # update component parameters for each repeat
    if popped==True:
      feedbackText="풍선이 터졌습니다."
    else:
      feedbackText="해당 포인트를 얻으셨습니다\n%.2f" %lastBalloonEarnings
    
    feedbackMsg.setText(feedbackText)
    # keep track of which components have finished
    feedbackComponents = [feedbackMsg]
    for thisComponent in feedbackComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = feedbackClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedbackClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *feedbackMsg* updates
        if feedbackMsg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedbackMsg.frameNStart = frameN  # exact frame index
            feedbackMsg.tStart = t  # local t and not account for scr refresh
            feedbackMsg.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedbackMsg, 'tStartRefresh')  # time at next scr refresh
            feedbackMsg.setAutoDraw(True)
        if feedbackMsg.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > feedbackMsg.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                feedbackMsg.tStop = t  # not accounting for scr refresh
                feedbackMsg.frameNStop = frameN  # exact frame index
                win.timeOnFlip(feedbackMsg, 'tStopRefresh')  # time at next scr refresh
                feedbackMsg.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback"-------
    for thisComponent in feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('feedbackMsg.started', feedbackMsg.tStartRefresh)
    trials.addData('feedbackMsg.stopped', feedbackMsg.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'

# get names of stimulus parameters
if trials.trialList in ([], [None], None):
    params = []
else:
    params = trials.trialList[0].keys()
# save data for this loop
trials.saveAsExcel(filename + '.xlsx', sheetName='trials',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "finalScore"-------
continueRoutine = True
# update component parameters for each repeat
scoreText=u"Well done! You banked a total of\n£%2.f" % bankedEarnings
finalScore_2.setText(scoreText)
# setup some python lists for storing info about the mouse_2
gotValidClick = False  # until a click is received
# keep track of which components have finished
finalScoreComponents = [finalScore_2, mouse_2]
for thisComponent in finalScoreComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
finalScoreClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "finalScore"-------
while continueRoutine:
    # get current time
    t = finalScoreClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=finalScoreClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *finalScore_2* updates
    if finalScore_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        finalScore_2.frameNStart = frameN  # exact frame index
        finalScore_2.tStart = t  # local t and not account for scr refresh
        finalScore_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(finalScore_2, 'tStartRefresh')  # time at next scr refresh
        finalScore_2.setAutoDraw(True)
    # *mouse_2* updates
    if mouse_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_2.frameNStart = frameN  # exact frame index
        mouse_2.tStart = t  # local t and not account for scr refresh
        mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
        mouse_2.status = STARTED
        mouse_2.mouseClock.reset()
        prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
    if mouse_2.status == STARTED:  # only update if started and not finished!
        buttons = mouse_2.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                continueRoutine = False  # abort routine on response    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in finalScoreComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "finalScore"-------
for thisComponent in finalScoreComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('finalScore_2.started', finalScore_2.tStartRefresh)
thisExp.addData('finalScore_2.stopped', finalScore_2.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_2.getPos()
buttons = mouse_2.getPressed()
thisExp.addData('mouse_2.x', x)
thisExp.addData('mouse_2.y', y)
thisExp.addData('mouse_2.leftButton', buttons[0])
thisExp.addData('mouse_2.midButton', buttons[1])
thisExp.addData('mouse_2.rightButton', buttons[2])
thisExp.addData('mouse_2.started', mouse_2.tStart)
thisExp.addData('mouse_2.stopped', mouse_2.tStop)
thisExp.nextEntry()
# the Routine "finalScore" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
