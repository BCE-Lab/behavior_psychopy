#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.1.2),
    on 6월 28, 2022, at 20:23
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from psychopy import locale_setup
from psychopy import prefs
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
expName = 'Cued GoNogo Task'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='D:\\OneDrive - pusan.ac.kr\\바탕 화면\\연구\\2021 행동검사 웹플랫폼\\Scale\\플랫폼 버전관리\\행동검사\\ver1.0\\GoNogo_Task\\v8(check up 포함)\\Cued GoNogo Task_v8.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[2560, 1440], fullscr=False, screen=0, 
    winType='pyglet', allowGUI=True, allowStencil=False,
    monitor='testMonitor', color='black', colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
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

# Initialize components for Routine "TaskIntro"
TaskIntroClock = core.Clock()
fixation = visual.TextStim(win=win, name='fixation',
    text='안녕하세요. 검사에 참여해주셔서 감사합니다. 화면를 누르시면 검사가 시작됩니다.',
    font='NanumSquare',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
m1 = event.Mouse(win=win)
x, y = [None, None]
m1.mouseClock = core.Clock()

# Initialize components for Routine "green"
greenClock = core.Clock()
m2 = event.Mouse(win=win)
x, y = [None, None]
m2.mouseClock = core.Clock()
green_intro = visual.TextStim(win=win, name='green_intro',
    text='위 사진의 초록색깔 상자 중 한가지가 나오면 화면을 눌러 주세요. \n\n설명을 이해하셨다면 화면을 눌러주세요',
    font='NanumSquare',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
green_image = visual.ImageStim(
    win=win,
    name='green_image', 
    image='green.PNG', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.3), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# Initialize components for Routine "blue"
blueClock = core.Clock()
m3 = event.Mouse(win=win)
x, y = [None, None]
m3.mouseClock = core.Clock()
blue_intro = visual.TextStim(win=win, name='blue_intro',
    text='위 사진의 파란색깔 상자 중 한가지가 나오면  화면을 누르시면 안됩니다. \n\n설명을 이해하셨다면 화면을 눌러주세요',
    font='NanumSquare',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
blue_image = visual.ImageStim(
    win=win,
    name='blue_image', 
    image='blue.PNG', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.3), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# Initialize components for Routine "test_intro"
test_introClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='본 과제를 실시하기 전에 연습과제를 실시하겠습니다.\n\n\n준비가 되시면 화면을 클릭해주세요.',
    font='NanumSquare',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
m4 = event.Mouse(win=win)
x, y = [None, None]
m4.mouseClock = core.Clock()

# Initialize components for Routine "test_fix"
test_fixClock = core.Clock()
FixationPhase_2 = visual.TextStim(win=win, name='FixationPhase_2',
    text='+',
    font='NanumSquare',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Blank_2 = visual.TextStim(win=win, name='Blank_2',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "test_trial"
test_trialClock = core.Clock()
Cue_2 = visual.Rect(
    win=win, name='Cue_2',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.5,     colorSpace='rgb',  lineColor='black', fillColor='white',
    opacity=None, depth=-1.0, interpolate=True)
GoNogo_Stim_2 = visual.Rect(
    win=win, name='GoNogo_Stim_2',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.5,     colorSpace='rgb',  lineColor='black', fillColor='white',
    opacity=None, depth=-3.0, interpolate=True)
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()

# Initialize components for Routine "test_feedback"
test_feedbackClock = core.Clock()
Feedback_Present_2 = visual.TextStim(win=win, name='Feedback_Present_2',
    text='',
    font='NanumSquare',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "real"
realClock = core.Clock()
text_3 = visual.TextStim(win=win, name='text_3',
    text='연습과제가 끝났습니다.\n\n본 과제를 실시할 준비가 되셨다면 화면을 눌러주세요',
    font='NanumSquare',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
mouse_4 = event.Mouse(win=win)
x, y = [None, None]
mouse_4.mouseClock = core.Clock()

# Initialize components for Routine "Fixation"
FixationClock = core.Clock()
FixationPhase = visual.TextStim(win=win, name='FixationPhase',
    text='+',
    font='NanumSquare',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Blank = visual.TextStim(win=win, name='Blank',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Trial"
TrialClock = core.Clock()
Cue = visual.Rect(
    win=win, name='Cue',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.5,     colorSpace='rgb',  lineColor='black', fillColor='white',
    opacity=None, depth=-1.0, interpolate=True)
GoNogo_Stim = visual.Rect(
    win=win, name='GoNogo_Stim',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.5,     colorSpace='rgb',  lineColor='black', fillColor='white',
    opacity=None, depth=-3.0, interpolate=True)
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# Initialize components for Routine "Feedback"
FeedbackClock = core.Clock()
Feedback_Present = visual.TextStim(win=win, name='Feedback_Present',
    text='',
    font='NanumSquare',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "TaskEnd"
TaskEndClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='검사가 종료되었습니다. 화면을 눌러 종료하세요.',
    font='NanumSquare',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
mouse_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_3.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "TaskIntro"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the m1
gotValidClick = False  # until a click is received
# keep track of which components have finished
TaskIntroComponents = [fixation, m1]
for thisComponent in TaskIntroComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
TaskIntroClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "TaskIntro"-------
while continueRoutine:
    # get current time
    t = TaskIntroClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=TaskIntroClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *fixation* updates
    if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        fixation.frameNStart = frameN  # exact frame index
        fixation.tStart = t  # local t and not account for scr refresh
        fixation.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
        fixation.setAutoDraw(True)
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
    for thisComponent in TaskIntroComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "TaskIntro"-------
for thisComponent in TaskIntroComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('fixation.started', fixation.tStartRefresh)
thisExp.addData('fixation.stopped', fixation.tStopRefresh)
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
# the Routine "TaskIntro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "green"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the m2
gotValidClick = False  # until a click is received
# keep track of which components have finished
greenComponents = [m2, green_intro, green_image]
for thisComponent in greenComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
greenClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "green"-------
while continueRoutine:
    # get current time
    t = greenClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=greenClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # *m2* updates
    if m2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        m2.frameNStart = frameN  # exact frame index
        m2.tStart = t  # local t and not account for scr refresh
        m2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(m2, 'tStartRefresh')  # time at next scr refresh
        m2.status = STARTED
        m2.mouseClock.reset()
        prevButtonState = m2.getPressed()  # if button is down already this ISN'T a new click
    if m2.status == STARTED:  # only update if started and not finished!
        buttons = m2.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                continueRoutine = False  # abort routine on response    
    # *green_intro* updates
    if green_intro.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        green_intro.frameNStart = frameN  # exact frame index
        green_intro.tStart = t  # local t and not account for scr refresh
        green_intro.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(green_intro, 'tStartRefresh')  # time at next scr refresh
        green_intro.setAutoDraw(True)
    
    # *green_image* updates
    if green_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        green_image.frameNStart = frameN  # exact frame index
        green_image.tStart = t  # local t and not account for scr refresh
        green_image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(green_image, 'tStartRefresh')  # time at next scr refresh
        green_image.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in greenComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "green"-------
for thisComponent in greenComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
x, y = m2.getPos()
buttons = m2.getPressed()
thisExp.addData('m2.x', x)
thisExp.addData('m2.y', y)
thisExp.addData('m2.leftButton', buttons[0])
thisExp.addData('m2.midButton', buttons[1])
thisExp.addData('m2.rightButton', buttons[2])
thisExp.addData('m2.started', m2.tStart)
thisExp.addData('m2.stopped', m2.tStop)
thisExp.nextEntry()
thisExp.addData('green_intro.started', green_intro.tStartRefresh)
thisExp.addData('green_intro.stopped', green_intro.tStopRefresh)
thisExp.addData('green_image.started', green_image.tStartRefresh)
thisExp.addData('green_image.stopped', green_image.tStopRefresh)
# the Routine "green" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "blue"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the m3
gotValidClick = False  # until a click is received
# keep track of which components have finished
blueComponents = [m3, blue_intro, blue_image]
for thisComponent in blueComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
blueClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "blue"-------
while continueRoutine:
    # get current time
    t = blueClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=blueClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # *m3* updates
    if m3.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        m3.frameNStart = frameN  # exact frame index
        m3.tStart = t  # local t and not account for scr refresh
        m3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(m3, 'tStartRefresh')  # time at next scr refresh
        m3.status = STARTED
        m3.mouseClock.reset()
        prevButtonState = m3.getPressed()  # if button is down already this ISN'T a new click
    if m3.status == STARTED:  # only update if started and not finished!
        buttons = m3.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                continueRoutine = False  # abort routine on response    
    # *blue_intro* updates
    if blue_intro.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        blue_intro.frameNStart = frameN  # exact frame index
        blue_intro.tStart = t  # local t and not account for scr refresh
        blue_intro.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(blue_intro, 'tStartRefresh')  # time at next scr refresh
        blue_intro.setAutoDraw(True)
    
    # *blue_image* updates
    if blue_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        blue_image.frameNStart = frameN  # exact frame index
        blue_image.tStart = t  # local t and not account for scr refresh
        blue_image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(blue_image, 'tStartRefresh')  # time at next scr refresh
        blue_image.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in blueComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "blue"-------
for thisComponent in blueComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
x, y = m3.getPos()
buttons = m3.getPressed()
thisExp.addData('m3.x', x)
thisExp.addData('m3.y', y)
thisExp.addData('m3.leftButton', buttons[0])
thisExp.addData('m3.midButton', buttons[1])
thisExp.addData('m3.rightButton', buttons[2])
thisExp.addData('m3.started', m3.tStart)
thisExp.addData('m3.stopped', m3.tStop)
thisExp.nextEntry()
thisExp.addData('blue_intro.started', blue_intro.tStartRefresh)
thisExp.addData('blue_intro.stopped', blue_intro.tStopRefresh)
thisExp.addData('blue_image.started', blue_image.tStartRefresh)
thisExp.addData('blue_image.stopped', blue_image.tStopRefresh)
# the Routine "blue" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "test_intro"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the m4
gotValidClick = False  # until a click is received
# keep track of which components have finished
test_introComponents = [text, m4]
for thisComponent in test_introComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
test_introClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "test_intro"-------
while continueRoutine:
    # get current time
    t = test_introClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=test_introClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    # *m4* updates
    if m4.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        m4.frameNStart = frameN  # exact frame index
        m4.tStart = t  # local t and not account for scr refresh
        m4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(m4, 'tStartRefresh')  # time at next scr refresh
        m4.status = STARTED
        m4.mouseClock.reset()
        prevButtonState = m4.getPressed()  # if button is down already this ISN'T a new click
    if m4.status == STARTED:  # only update if started and not finished!
        buttons = m4.getPressed()
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
    for thisComponent in test_introComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "test_intro"-------
for thisComponent in test_introComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = m4.getPos()
buttons = m4.getPressed()
thisExp.addData('m4.x', x)
thisExp.addData('m4.y', y)
thisExp.addData('m4.leftButton', buttons[0])
thisExp.addData('m4.midButton', buttons[1])
thisExp.addData('m4.rightButton', buttons[2])
thisExp.addData('m4.started', m4.tStart)
thisExp.addData('m4.stopped', m4.tStop)
thisExp.nextEntry()
# the Routine "test_intro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
test_Blocks = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('BlockList_test.xlsx'),
    seed=None, name='test_Blocks')
thisExp.addLoop(test_Blocks)  # add the loop to the experiment
thisTest_Block = test_Blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTest_Block.rgb)
if thisTest_Block != None:
    for paramName in thisTest_Block:
        exec('{} = thisTest_Block[paramName]'.format(paramName))

for thisTest_Block in test_Blocks:
    currentLoop = test_Blocks
    # abbreviate parameter names if possible (e.g. rgb = thisTest_Block.rgb)
    if thisTest_Block != None:
        for paramName in thisTest_Block:
            exec('{} = thisTest_Block[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    test_trials = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(test_Block),
        seed=None, name='test_trials')
    thisExp.addLoop(test_trials)  # add the loop to the experiment
    thisTest_trial = test_trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTest_trial.rgb)
    if thisTest_trial != None:
        for paramName in thisTest_trial:
            exec('{} = thisTest_trial[paramName]'.format(paramName))
    
    for thisTest_trial in test_trials:
        currentLoop = test_trials
        # abbreviate parameter names if possible (e.g. rgb = thisTest_trial.rgb)
        if thisTest_trial != None:
            for paramName in thisTest_trial:
                exec('{} = thisTest_trial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "test_fix"-------
        continueRoutine = True
        routineTimer.add(1.200000)
        # update component parameters for each repeat
        # keep track of which components have finished
        test_fixComponents = [FixationPhase_2, Blank_2]
        for thisComponent in test_fixComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        test_fixClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "test_fix"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = test_fixClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=test_fixClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *FixationPhase_2* updates
            if FixationPhase_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                FixationPhase_2.frameNStart = frameN  # exact frame index
                FixationPhase_2.tStart = t  # local t and not account for scr refresh
                FixationPhase_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(FixationPhase_2, 'tStartRefresh')  # time at next scr refresh
                FixationPhase_2.setAutoDraw(True)
            if FixationPhase_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > FixationPhase_2.tStartRefresh + 0.7-frameTolerance:
                    # keep track of stop time/frame for later
                    FixationPhase_2.tStop = t  # not accounting for scr refresh
                    FixationPhase_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(FixationPhase_2, 'tStopRefresh')  # time at next scr refresh
                    FixationPhase_2.setAutoDraw(False)
            
            # *Blank_2* updates
            if Blank_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Blank_2.frameNStart = frameN  # exact frame index
                Blank_2.tStart = t  # local t and not account for scr refresh
                Blank_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Blank_2, 'tStartRefresh')  # time at next scr refresh
                Blank_2.setAutoDraw(True)
            if Blank_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > Blank_2.tStartRefresh + 1.2-frameTolerance:
                    # keep track of stop time/frame for later
                    Blank_2.tStop = t  # not accounting for scr refresh
                    Blank_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(Blank_2, 'tStopRefresh')  # time at next scr refresh
                    Blank_2.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in test_fixComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "test_fix"-------
        for thisComponent in test_fixComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        test_trials.addData('FixationPhase_2.started', FixationPhase_2.tStartRefresh)
        test_trials.addData('FixationPhase_2.stopped', FixationPhase_2.tStopRefresh)
        test_trials.addData('Blank_2.started', Blank_2.tStartRefresh)
        test_trials.addData('Blank_2.stopped', Blank_2.tStopRefresh)
        
        # ------Prepare to start Routine "test_trial"-------
        continueRoutine = True
        # update component parameters for each repeat
        Cue_2.setSize([Stim_Width, Stim_Height])
        if StimType == 'Go':
            StimColor = 'green'
        elif StimType == 'NoGo':
            StimColor = 'blue'
        GoNogo_Stim_2.setFillColor(StimColor)
        GoNogo_Stim_2.setSize([Stim_Width, Stim_Height])
        # setup some python lists for storing info about the mouse_2
        mouse_2.x = []
        mouse_2.y = []
        mouse_2.leftButton = []
        mouse_2.midButton = []
        mouse_2.rightButton = []
        mouse_2.time = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        test_trialComponents = [Cue_2, GoNogo_Stim_2, mouse_2]
        for thisComponent in test_trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        test_trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "test_trial"-------
        while continueRoutine:
            # get current time
            t = test_trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=test_trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Cue_2* updates
            if Cue_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Cue_2.frameNStart = frameN  # exact frame index
                Cue_2.tStart = t  # local t and not account for scr refresh
                Cue_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Cue_2, 'tStartRefresh')  # time at next scr refresh
                Cue_2.setAutoDraw(True)
            if Cue_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > Cue_2.tStartRefresh + CueTime-frameTolerance:
                    # keep track of stop time/frame for later
                    Cue_2.tStop = t  # not accounting for scr refresh
                    Cue_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(Cue_2, 'tStopRefresh')  # time at next scr refresh
                    Cue_2.setAutoDraw(False)
            
            # *GoNogo_Stim_2* updates
            if GoNogo_Stim_2.status == NOT_STARTED and tThisFlip >= CueTime+0.2-frameTolerance:
                # keep track of start time/frame for later
                GoNogo_Stim_2.frameNStart = frameN  # exact frame index
                GoNogo_Stim_2.tStart = t  # local t and not account for scr refresh
                GoNogo_Stim_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(GoNogo_Stim_2, 'tStartRefresh')  # time at next scr refresh
                GoNogo_Stim_2.setAutoDraw(True)
            if GoNogo_Stim_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > GoNogo_Stim_2.tStartRefresh + 2.7-frameTolerance:
                    # keep track of stop time/frame for later
                    GoNogo_Stim_2.tStop = t  # not accounting for scr refresh
                    GoNogo_Stim_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(GoNogo_Stim_2, 'tStopRefresh')  # time at next scr refresh
                    GoNogo_Stim_2.setAutoDraw(False)
            # *mouse_2* updates
            if mouse_2.status == NOT_STARTED and t >= CueTime+0.2-frameTolerance:
                # keep track of start time/frame for later
                mouse_2.frameNStart = frameN  # exact frame index
                mouse_2.tStart = t  # local t and not account for scr refresh
                mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
                mouse_2.status = STARTED
                mouse_2.mouseClock.reset()
                prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
            if mouse_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mouse_2.tStartRefresh + 3-frameTolerance:
                    # keep track of stop time/frame for later
                    mouse_2.tStop = t  # not accounting for scr refresh
                    mouse_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mouse_2, 'tStopRefresh')  # time at next scr refresh
                    mouse_2.status = FINISHED
            if mouse_2.status == STARTED:  # only update if started and not finished!
                buttons = mouse_2.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        x, y = mouse_2.getPos()
                        mouse_2.x.append(x)
                        mouse_2.y.append(y)
                        buttons = mouse_2.getPressed()
                        mouse_2.leftButton.append(buttons[0])
                        mouse_2.midButton.append(buttons[1])
                        mouse_2.rightButton.append(buttons[2])
                        mouse_2.time.append(mouse_2.mouseClock.getTime())
                        
                        continueRoutine = False  # abort routine on response
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in test_trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "test_trial"-------
        for thisComponent in test_trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        if StimType == 'Go': 
            if mouse.getPressed()[0] == 1:
                mycorreResp = 1
            else:
                mycorreResp = 0
        elif StimType == 'NoGo': 
            if mouse.getPressed()[0] == 1: 
             mycorreResp = 0
            else:
             mycorreResp = 1   
             
        mouse_rt2 = mouse_2.time
        
        thisExp.addData("mouse_rt", mouse_rt2)     
        test_trials.addData('wasItCorrect', mycorreResp)
        test_trials.addData('Cue_2.started', Cue_2.tStartRefresh)
        test_trials.addData('Cue_2.stopped', Cue_2.tStopRefresh)
        test_trials.addData('GoNogo_Stim_2.started', GoNogo_Stim_2.tStartRefresh)
        test_trials.addData('GoNogo_Stim_2.stopped', GoNogo_Stim_2.tStopRefresh)
        # store data for test_trials (TrialHandler)
        test_trials.addData('mouse_2.x', mouse_2.x)
        test_trials.addData('mouse_2.y', mouse_2.y)
        test_trials.addData('mouse_2.leftButton', mouse_2.leftButton)
        test_trials.addData('mouse_2.midButton', mouse_2.midButton)
        test_trials.addData('mouse_2.rightButton', mouse_2.rightButton)
        test_trials.addData('mouse_2.time', mouse_2.time)
        test_trials.addData('mouse_2.started', mouse_2.tStart)
        test_trials.addData('mouse_2.stopped', mouse_2.tStop)
        # the Routine "test_trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "test_feedback"-------
        continueRoutine = True
        routineTimer.add(1.500000)
        # update component parameters for each repeat
        if StimType == 'Go': # go cue 제시 조건에서 
            if mouse.getPressed()[0] == 1: # 정답을 맞췄으면,
                fb_msg = "정확합니다"
            else: # 틀린 경우에
                fb_msg = "틀렸습니다"
        elif StimType == 'NoGo': # Nogo cue 제시 조건에서 
            if mouse.getPressed()[0] == 1: # 정답을 맞췄으면,
             fb_msg = "틀렸습니다. 화면을 누르면 안 됩니다"
            else: # 틀린 경우에
             fb_msg = "정확합니다."    
        Feedback_Present_2.setColor('white', colorSpace='rgb')
        Feedback_Present_2.setText(fb_msg)
        # keep track of which components have finished
        test_feedbackComponents = [Feedback_Present_2]
        for thisComponent in test_feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        test_feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "test_feedback"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = test_feedbackClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=test_feedbackClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Feedback_Present_2* updates
            if Feedback_Present_2.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                Feedback_Present_2.frameNStart = frameN  # exact frame index
                Feedback_Present_2.tStart = t  # local t and not account for scr refresh
                Feedback_Present_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Feedback_Present_2, 'tStartRefresh')  # time at next scr refresh
                Feedback_Present_2.setAutoDraw(True)
            if Feedback_Present_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > Feedback_Present_2.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    Feedback_Present_2.tStop = t  # not accounting for scr refresh
                    Feedback_Present_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(Feedback_Present_2, 'tStopRefresh')  # time at next scr refresh
                    Feedback_Present_2.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in test_feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "test_feedback"-------
        for thisComponent in test_feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        test_trials.addData('Feedback_Present_2.started', Feedback_Present_2.tStartRefresh)
        test_trials.addData('Feedback_Present_2.stopped', Feedback_Present_2.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'test_trials'
    
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'test_Blocks'


# ------Prepare to start Routine "real"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_4
gotValidClick = False  # until a click is received
# keep track of which components have finished
realComponents = [text_3, mouse_4]
for thisComponent in realComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
realClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "real"-------
while continueRoutine:
    # get current time
    t = realClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=realClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        text_3.setAutoDraw(True)
    # *mouse_4* updates
    if mouse_4.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_4.frameNStart = frameN  # exact frame index
        mouse_4.tStart = t  # local t and not account for scr refresh
        mouse_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_4, 'tStartRefresh')  # time at next scr refresh
        mouse_4.status = STARTED
        mouse_4.mouseClock.reset()
        prevButtonState = mouse_4.getPressed()  # if button is down already this ISN'T a new click
    if mouse_4.status == STARTED:  # only update if started and not finished!
        buttons = mouse_4.getPressed()
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
    for thisComponent in realComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "real"-------
for thisComponent in realComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_3.started', text_3.tStartRefresh)
thisExp.addData('text_3.stopped', text_3.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_4.getPos()
buttons = mouse_4.getPressed()
thisExp.addData('mouse_4.x', x)
thisExp.addData('mouse_4.y', y)
thisExp.addData('mouse_4.leftButton', buttons[0])
thisExp.addData('mouse_4.midButton', buttons[1])
thisExp.addData('mouse_4.rightButton', buttons[2])
thisExp.addData('mouse_4.started', mouse_4.tStart)
thisExp.addData('mouse_4.stopped', mouse_4.tStop)
thisExp.nextEntry()
# the Routine "real" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
Blocks = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('BlockList.xlsx'),
    seed=None, name='Blocks')
thisExp.addLoop(Blocks)  # add the loop to the experiment
thisBlock = Blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in Blocks:
    currentLoop = Blocks
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    Trials = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(Block),
        seed=None, name='Trials')
    thisExp.addLoop(Trials)  # add the loop to the experiment
    thisTrial = Trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in Trials:
        currentLoop = Trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "Fixation"-------
        continueRoutine = True
        routineTimer.add(0.300000)
        # update component parameters for each repeat
        # keep track of which components have finished
        FixationComponents = [FixationPhase, Blank]
        for thisComponent in FixationComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        FixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Fixation"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = FixationClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=FixationClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *FixationPhase* updates
            if FixationPhase.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                FixationPhase.frameNStart = frameN  # exact frame index
                FixationPhase.tStart = t  # local t and not account for scr refresh
                FixationPhase.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(FixationPhase, 'tStartRefresh')  # time at next scr refresh
                FixationPhase.setAutoDraw(True)
            if FixationPhase.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > FixationPhase.tStartRefresh + 0.15-frameTolerance:
                    # keep track of stop time/frame for later
                    FixationPhase.tStop = t  # not accounting for scr refresh
                    FixationPhase.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(FixationPhase, 'tStopRefresh')  # time at next scr refresh
                    FixationPhase.setAutoDraw(False)
            
            # *Blank* updates
            if Blank.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Blank.frameNStart = frameN  # exact frame index
                Blank.tStart = t  # local t and not account for scr refresh
                Blank.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Blank, 'tStartRefresh')  # time at next scr refresh
                Blank.setAutoDraw(True)
            if Blank.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > Blank.tStartRefresh + 0.3-frameTolerance:
                    # keep track of stop time/frame for later
                    Blank.tStop = t  # not accounting for scr refresh
                    Blank.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(Blank, 'tStopRefresh')  # time at next scr refresh
                    Blank.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in FixationComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Fixation"-------
        for thisComponent in FixationComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        Trials.addData('FixationPhase.started', FixationPhase.tStartRefresh)
        Trials.addData('FixationPhase.stopped', FixationPhase.tStopRefresh)
        Trials.addData('Blank.started', Blank.tStartRefresh)
        Trials.addData('Blank.stopped', Blank.tStopRefresh)
        
        # ------Prepare to start Routine "Trial"-------
        continueRoutine = True
        # update component parameters for each repeat
        Cue.setSize([Stim_Width, Stim_Height])
        if StimType == 'Go':
            StimColor = 'green'
        elif StimType == 'NoGo':
            StimColor = 'blue'
        GoNogo_Stim.setFillColor(StimColor)
        GoNogo_Stim.setSize([Stim_Width, Stim_Height])
        # setup some python lists for storing info about the mouse
        mouse.x = []
        mouse.y = []
        mouse.leftButton = []
        mouse.midButton = []
        mouse.rightButton = []
        mouse.time = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        TrialComponents = [Cue, GoNogo_Stim, mouse]
        for thisComponent in TrialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        TrialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Trial"-------
        while continueRoutine:
            # get current time
            t = TrialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=TrialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Cue* updates
            if Cue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Cue.frameNStart = frameN  # exact frame index
                Cue.tStart = t  # local t and not account for scr refresh
                Cue.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Cue, 'tStartRefresh')  # time at next scr refresh
                Cue.setAutoDraw(True)
            if Cue.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > Cue.tStartRefresh + CueTime-frameTolerance:
                    # keep track of stop time/frame for later
                    Cue.tStop = t  # not accounting for scr refresh
                    Cue.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(Cue, 'tStopRefresh')  # time at next scr refresh
                    Cue.setAutoDraw(False)
            
            # *GoNogo_Stim* updates
            if GoNogo_Stim.status == NOT_STARTED and tThisFlip >= CueTime+0.2-frameTolerance:
                # keep track of start time/frame for later
                GoNogo_Stim.frameNStart = frameN  # exact frame index
                GoNogo_Stim.tStart = t  # local t and not account for scr refresh
                GoNogo_Stim.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(GoNogo_Stim, 'tStartRefresh')  # time at next scr refresh
                GoNogo_Stim.setAutoDraw(True)
            if GoNogo_Stim.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > GoNogo_Stim.tStartRefresh + 0.7-frameTolerance:
                    # keep track of stop time/frame for later
                    GoNogo_Stim.tStop = t  # not accounting for scr refresh
                    GoNogo_Stim.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(GoNogo_Stim, 'tStopRefresh')  # time at next scr refresh
                    GoNogo_Stim.setAutoDraw(False)
            # *mouse* updates
            if mouse.status == NOT_STARTED and t >= CueTime+0.2-frameTolerance:
                # keep track of start time/frame for later
                mouse.frameNStart = frameN  # exact frame index
                mouse.tStart = t  # local t and not account for scr refresh
                mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
                mouse.status = STARTED
                mouse.mouseClock.reset()
                prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
            if mouse.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mouse.tStartRefresh + 0.7-frameTolerance:
                    # keep track of stop time/frame for later
                    mouse.tStop = t  # not accounting for scr refresh
                    mouse.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mouse, 'tStopRefresh')  # time at next scr refresh
                    mouse.status = FINISHED
            if mouse.status == STARTED:  # only update if started and not finished!
                buttons = mouse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        x, y = mouse.getPos()
                        mouse.x.append(x)
                        mouse.y.append(y)
                        buttons = mouse.getPressed()
                        mouse.leftButton.append(buttons[0])
                        mouse.midButton.append(buttons[1])
                        mouse.rightButton.append(buttons[2])
                        mouse.time.append(mouse.mouseClock.getTime())
                        
                        continueRoutine = False  # abort routine on response
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in TrialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Trial"-------
        for thisComponent in TrialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        if StimType == 'Go': 
            if mouse.getPressed()[0] == 1:
                mycorreResp = 1
            else:
                mycorreResp = 0
        elif StimType == 'NoGo': 
            if mouse.getPressed()[0] == 1: 
             mycorreResp = 0
            else:
             mycorreResp = 1   
        mouse_rt = mouse.time
        
        thisExp.addData("mouse_rt", mouse_rt)
        Trials.addData('wasItCorrect', mycorreResp)
        
        Trials.addData('Cue.started', Cue.tStartRefresh)
        Trials.addData('Cue.stopped', Cue.tStopRefresh)
        Trials.addData('GoNogo_Stim.started', GoNogo_Stim.tStartRefresh)
        Trials.addData('GoNogo_Stim.stopped', GoNogo_Stim.tStopRefresh)
        # store data for Trials (TrialHandler)
        Trials.addData('mouse.x', mouse.x)
        Trials.addData('mouse.y', mouse.y)
        Trials.addData('mouse.leftButton', mouse.leftButton)
        Trials.addData('mouse.midButton', mouse.midButton)
        Trials.addData('mouse.rightButton', mouse.rightButton)
        Trials.addData('mouse.time', mouse.time)
        Trials.addData('mouse.started', mouse.tStart)
        Trials.addData('mouse.stopped', mouse.tStop)
        # the Routine "Trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "Feedback"-------
        continueRoutine = True
        routineTimer.add(0.900000)
        # update component parameters for each repeat
        if StimType == 'Go': # go cue 제시 조건에서 
            if mouse.getPressed()[0] == 1: # 정답을 맞췄으면,
                fb_msg = "정확합니다"
            else: # 틀린 경우에
                fb_msg = "틀렸습니다"
        elif StimType == 'NoGo': # Nogo cue 제시 조건에서 
            if mouse.getPressed()[0] == 1: # 정답을 맞췄으면,
             fb_msg = "틀렸습니다. 화면을 누르면 안 됩니다"
            else: # 틀린 경우에
             fb_msg = "정확합니다."    
        Feedback_Present.setColor('white', colorSpace='rgb')
        Feedback_Present.setText(fb_msg)
        # keep track of which components have finished
        FeedbackComponents = [Feedback_Present]
        for thisComponent in FeedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        FeedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Feedback"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = FeedbackClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=FeedbackClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Feedback_Present* updates
            if Feedback_Present.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
                # keep track of start time/frame for later
                Feedback_Present.frameNStart = frameN  # exact frame index
                Feedback_Present.tStart = t  # local t and not account for scr refresh
                Feedback_Present.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Feedback_Present, 'tStartRefresh')  # time at next scr refresh
                Feedback_Present.setAutoDraw(True)
            if Feedback_Present.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > Feedback_Present.tStartRefresh + 0.6-frameTolerance:
                    # keep track of stop time/frame for later
                    Feedback_Present.tStop = t  # not accounting for scr refresh
                    Feedback_Present.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(Feedback_Present, 'tStopRefresh')  # time at next scr refresh
                    Feedback_Present.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in FeedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Feedback"-------
        for thisComponent in FeedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        Trials.addData('Feedback_Present.started', Feedback_Present.tStartRefresh)
        Trials.addData('Feedback_Present.stopped', Feedback_Present.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'Trials'
    
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'Blocks'


# ------Prepare to start Routine "TaskEnd"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_3
gotValidClick = False  # until a click is received
# keep track of which components have finished
TaskEndComponents = [text_2, mouse_3]
for thisComponent in TaskEndComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
TaskEndClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "TaskEnd"-------
while continueRoutine:
    # get current time
    t = TaskEndClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=TaskEndClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    # *mouse_3* updates
    if mouse_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_3.frameNStart = frameN  # exact frame index
        mouse_3.tStart = t  # local t and not account for scr refresh
        mouse_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_3, 'tStartRefresh')  # time at next scr refresh
        mouse_3.status = STARTED
        mouse_3.mouseClock.reset()
        prevButtonState = mouse_3.getPressed()  # if button is down already this ISN'T a new click
    if mouse_3.status == STARTED:  # only update if started and not finished!
        buttons = mouse_3.getPressed()
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
    for thisComponent in TaskEndComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "TaskEnd"-------
for thisComponent in TaskEndComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_3.getPos()
buttons = mouse_3.getPressed()
thisExp.addData('mouse_3.x', x)
thisExp.addData('mouse_3.y', y)
thisExp.addData('mouse_3.leftButton', buttons[0])
thisExp.addData('mouse_3.midButton', buttons[1])
thisExp.addData('mouse_3.rightButton', buttons[2])
thisExp.addData('mouse_3.started', mouse_3.tStart)
thisExp.addData('mouse_3.stopped', mouse_3.tStop)
thisExp.nextEntry()
# the Routine "TaskEnd" was not non-slip safe, so reset the non-slip timer
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
