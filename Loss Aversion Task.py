#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.1.2),
    on 6월 28, 2022, at 21:35
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
expName = 'Loss Aversion Task'  # from the Builder filename that created this script
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
    originPath='D:\\OneDrive - pusan.ac.kr\\바탕 화면\\연구\\2021 행동검사 웹플랫폼\\Scale\\플랫폼 버전관리\\행동검사\\ver1.0\\loss_aversion_task\\Loss Aversion Task.py',
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
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
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

# Initialize components for Routine "mobile"
mobileClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='모바일에서 검사를 하시면 가로모드로 실시해주세요\n\n검사를 시작할 준비가 되셨으면, 화면을 눌러주세요',
    font='NanumGothic',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()

# Initialize components for Routine "instruction"
instructionClock = core.Clock()
inst_img = visual.ImageStim(
    win=win,
    name='inst_img', 
    image='Image/LA.PNG', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.25), size=(0.7, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
inst_mouse = event.Mouse(win=win)
x, y = [None, None]
inst_mouse.mouseClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='다음은 검사에 대한 설명문입니다. \n\n이 검사는 100%확률로 0원을 얻는 선택지와 50%확률로 이득 혹은 손실이 나오는 선택지를 선택하는 검사입니다.\n\n나올 수 있는 이익과 손실 금액은 매번 달라집니다.\n\n원하는 선택지를 클릭하여 검사를 진행하시면 됩니다.\n\n검사를 진행하시기 원하면 화면을 클릭해주세요.  \n\n',
    font='NanumSquare',
    pos=(0, -0.2), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
fix_text = visual.TextStim(win=win, name='fix_text',
    text='+',
    font='Malgun Gothic',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "PayOff"
PayOffClock = core.Clock()
payoff_start = [20, 100]

# Lnitialization
payoff_sure = 0
prob_sure = 100
payoff_gamble1 = [-x for x in payoff_start]
prob_gamble1 = 50
payoff_gamble2 = payoff_start
prob_gamble2 = 100-prob_gamble1
payoff = []

# Limit
OUL = [8*x for x in payoff_start]    # Outer Upper limit
IUL = [8*x for x in payoff_start]    # Inner Upper limit
ILL = [0*x for x in payoff_start]    # Inner Lower limit
OLL = [0*x for x in payoff_start]    # Outer Lower limit

# set trial information
current = 0
diff = []
crit = []

# font setting
font_size = 0.045
Choice_Left = visual.ImageStim(
    win=win,
    name='Choice_Left', 
    image='Image/Figure_Left.png', mask=None, anchor='center',
    ori=0.0, pos=(-0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
Choice_Right = visual.ImageStim(
    win=win,
    name='Choice_Right', 
    image='Image/Figure_Right.png', mask=None, anchor='center',
    ori=0.0, pos=(0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
Choice_Cursor = visual.ImageStim(
    win=win,
    name='Choice_Cursor', 
    image='Image/Figure_Cursor.png', mask=None, anchor='center',
    ori=0.0, pos=(999, 999), size=(0.6, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
Text_Left = visual.TextStim(win=win, name='Text_Left',
    text='0원',
    font='Malgun Gothic',
    pos=(-0.35, 0), height=font_size, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
Text_RightU = visual.TextStim(win=win, name='Text_RightU',
    text='',
    font='Malgun Gothic',
    pos=(0.22, 0), height=font_size, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
Text_RightL = visual.TextStim(win=win, name='Text_RightL',
    text='',
    font='Malgun Gothic',
    pos=(0.48, 0), height=font_size, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "mobile"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_2
gotValidClick = False  # until a click is received
# keep track of which components have finished
mobileComponents = [text, mouse_2]
for thisComponent in mobileComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
mobileClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "mobile"-------
while continueRoutine:
    # get current time
    t = mobileClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=mobileClock)
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
    for thisComponent in mobileComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "mobile"-------
for thisComponent in mobileComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
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
# the Routine "mobile" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instruction"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the inst_mouse
gotValidClick = False  # until a click is received
# keep track of which components have finished
instructionComponents = [inst_img, inst_mouse, text_2]
for thisComponent in instructionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instruction"-------
while continueRoutine:
    # get current time
    t = instructionClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructionClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *inst_img* updates
    if inst_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        inst_img.frameNStart = frameN  # exact frame index
        inst_img.tStart = t  # local t and not account for scr refresh
        inst_img.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(inst_img, 'tStartRefresh')  # time at next scr refresh
        inst_img.setAutoDraw(True)
    # *inst_mouse* updates
    if inst_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        inst_mouse.frameNStart = frameN  # exact frame index
        inst_mouse.tStart = t  # local t and not account for scr refresh
        inst_mouse.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(inst_mouse, 'tStartRefresh')  # time at next scr refresh
        inst_mouse.status = STARTED
        inst_mouse.mouseClock.reset()
        prevButtonState = inst_mouse.getPressed()  # if button is down already this ISN'T a new click
    if inst_mouse.status == STARTED:  # only update if started and not finished!
        buttons = inst_mouse.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                continueRoutine = False  # abort routine on response    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instruction"-------
for thisComponent in instructionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('inst_img.started', inst_img.tStartRefresh)
thisExp.addData('inst_img.stopped', inst_img.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = inst_mouse.getPos()
buttons = inst_mouse.getPressed()
thisExp.addData('inst_mouse.x', x)
thisExp.addData('inst_mouse.y', y)
thisExp.addData('inst_mouse.leftButton', buttons[0])
thisExp.addData('inst_mouse.midButton', buttons[1])
thisExp.addData('inst_mouse.rightButton', buttons[2])
thisExp.nextEntry()
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
# the Routine "instruction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
Trials = data.TrialHandler(nReps=999.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
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
    
    # ------Prepare to start Routine "fixation"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixationComponents = [fix_text]
    for thisComponent in fixationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixation"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fix_text* updates
        if fix_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fix_text.frameNStart = frameN  # exact frame index
            fix_text.tStart = t  # local t and not account for scr refresh
            fix_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fix_text, 'tStartRefresh')  # time at next scr refresh
            fix_text.setAutoDraw(True)
        if fix_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fix_text.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                fix_text.tStop = t  # not accounting for scr refresh
                fix_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fix_text, 'tStopRefresh')  # time at next scr refresh
                fix_text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixation"-------
    for thisComponent in fixationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    Trials.addData('fix_text.started', fix_text.tStartRefresh)
    Trials.addData('fix_text.stopped', fix_text.tStopRefresh)
    
    # ------Prepare to start Routine "PayOff"-------
    continueRoutine = True
    # update component parameters for each repeat
    # current limit
    # OUL_c = OUL[current]
    # OLL_c = OLL[current]
    # IUL_c = IUL[current]
    # ILL_c = ILL[current]
    
    # setting money
    payoff_gamble2 = random()*(OUL[current]-OLL[current])+OLL[current] # random payoff between OLL and OUL
    payoff_gamble2 = round(payoff_gamble2);
    s_payoff1 = payoff_gamble1[current]*1000
    s_payoff2 = payoff_gamble2*1000
    
    # text setting
    txt_rightU = str(s_payoff1)+"원"+"\n"+"50%"
    txt_rightL = "+"+str(s_payoff2)+"원"+"\n"+"50%"
    Text_RightU.setText(txt_rightU)
    Text_RightL.setText(txt_rightL)
    # setup some python lists for storing info about the mouse
    mouse.x = []
    mouse.y = []
    mouse.leftButton = []
    mouse.midButton = []
    mouse.rightButton = []
    mouse.time = []
    mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    PayOffComponents = [Choice_Left, Choice_Right, Choice_Cursor, Text_Left, Text_RightU, Text_RightL, mouse]
    for thisComponent in PayOffComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    PayOffClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "PayOff"-------
    while continueRoutine:
        # get current time
        t = PayOffClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=PayOffClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Choice_Left* updates
        if Choice_Left.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Choice_Left.frameNStart = frameN  # exact frame index
            Choice_Left.tStart = t  # local t and not account for scr refresh
            Choice_Left.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Choice_Left, 'tStartRefresh')  # time at next scr refresh
            Choice_Left.setAutoDraw(True)
        
        # *Choice_Right* updates
        if Choice_Right.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Choice_Right.frameNStart = frameN  # exact frame index
            Choice_Right.tStart = t  # local t and not account for scr refresh
            Choice_Right.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Choice_Right, 'tStartRefresh')  # time at next scr refresh
            Choice_Right.setAutoDraw(True)
        
        # *Choice_Cursor* updates
        if Choice_Cursor.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Choice_Cursor.frameNStart = frameN  # exact frame index
            Choice_Cursor.tStart = t  # local t and not account for scr refresh
            Choice_Cursor.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Choice_Cursor, 'tStartRefresh')  # time at next scr refresh
            Choice_Cursor.setAutoDraw(True)
        
        # *Text_Left* updates
        if Text_Left.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Text_Left.frameNStart = frameN  # exact frame index
            Text_Left.tStart = t  # local t and not account for scr refresh
            Text_Left.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Text_Left, 'tStartRefresh')  # time at next scr refresh
            Text_Left.setAutoDraw(True)
        
        # *Text_RightU* updates
        if Text_RightU.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Text_RightU.frameNStart = frameN  # exact frame index
            Text_RightU.tStart = t  # local t and not account for scr refresh
            Text_RightU.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Text_RightU, 'tStartRefresh')  # time at next scr refresh
            Text_RightU.setAutoDraw(True)
        
        # *Text_RightL* updates
        if Text_RightL.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Text_RightL.frameNStart = frameN  # exact frame index
            Text_RightL.tStart = t  # local t and not account for scr refresh
            Text_RightL.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Text_RightL, 'tStartRefresh')  # time at next scr refresh
            Text_RightL.setAutoDraw(True)
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
        if mouse.status == STARTED:  # only update if started and not finished!
            buttons = mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter([Choice_Left, Choice_Right])
                        clickableList = [Choice_Left, Choice_Right]
                    except:
                        clickableList = [[Choice_Left, Choice_Right]]
                    for obj in clickableList:
                        if obj.contains(mouse):
                            gotValidClick = True
                            mouse.clicked_name.append(obj.name)
                    x, y = mouse.getPos()
                    mouse.x.append(x)
                    mouse.y.append(y)
                    buttons = mouse.getPressed()
                    mouse.leftButton.append(buttons[0])
                    mouse.midButton.append(buttons[1])
                    mouse.rightButton.append(buttons[2])
                    mouse.time.append(mouse.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # abort routine on response
        if Choice_Left.contains(mouse):
            Choice_Cursor.pos = [-0.35, 0]
        if Choice_Right.contains(mouse):
            Choice_Cursor.pos = [0.35, 0]
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in PayOffComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "PayOff"-------
    for thisComponent in PayOffComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # append payoff value
    Trials.addData('Payoff', payoff_gamble2)
    # payoff.append(payoff_gamble2)
    
    # choosing Left
    if mouse.clicked_name[-1]=="Choice_Left":  
        choice = -1
        # Adjusting payoff: Increasing payoff(lower limit)
        if (payoff_gamble2 < ILL[current]):
            OLL[current] = payoff_gamble2   
        else:
            OLL[current] = ILL[current]
            ILL[current] = payoff_gamble2
            if (payoff_gamble2 > IUL[current]):
                IUL[current] = ILL[current]
    # choosing Right
    elif mouse.clicked_name[-1]=="Choice_Right": 
        choice = 1
        # Adjusting payoff: Increasing payoff(lower limit)
        if (payoff_gamble2 > IUL[current]):
            OUL[current] = payoff_gamble2     
        else:
            OUL[current] = IUL[current]
            IUL[current] = payoff_gamble2      
            if (payoff_gamble2 < ILL[current]):
                ILL[current] = IUL[current]
    
    
    # recode choice
    Trials.addData('Choice', choice)
    Trials.addData('OUL', OUL)
    Trials.addData('OLL', OLL)
    Trials.addData('IUL', IUL)
    Trials.addData('ILL', ILL)
    
    # add trial counter
    current+=1    
    
    # finishing 1 round of trials.
    if current+1 > len(payoff_start):
        current = 0           
        
    # Task break
    diff = [OUL[i]-OLL[i] for i in range(len(OUL))]
    crit = [1 if val <= 2 else 0 for val in diff]
    
    if sum(crit) == len(OUL):
        cer_eq = [(OUL[i]+OLL[i])/2 for i in range(len(OUL))]
        LOSS_AVERSION = [cer_eq[i]/payoff_start[i] for i in range(len(cer_eq))]
        Trials.addData('cer_eq', cer_eq)
        Trials.addData('LOSS_AVERSION', LOSS_AVERSION)
        Trials.finished = True
    Trials.addData('Choice_Left.started', Choice_Left.tStartRefresh)
    Trials.addData('Choice_Left.stopped', Choice_Left.tStopRefresh)
    Trials.addData('Choice_Right.started', Choice_Right.tStartRefresh)
    Trials.addData('Choice_Right.stopped', Choice_Right.tStopRefresh)
    Trials.addData('Text_Left.started', Text_Left.tStartRefresh)
    Trials.addData('Text_Left.stopped', Text_Left.tStopRefresh)
    Trials.addData('Text_RightU.started', Text_RightU.tStartRefresh)
    Trials.addData('Text_RightU.stopped', Text_RightU.tStopRefresh)
    Trials.addData('Text_RightL.started', Text_RightL.tStartRefresh)
    Trials.addData('Text_RightL.stopped', Text_RightL.tStopRefresh)
    # store data for Trials (TrialHandler)
    Trials.addData('mouse.x', mouse.x)
    Trials.addData('mouse.y', mouse.y)
    Trials.addData('mouse.leftButton', mouse.leftButton)
    Trials.addData('mouse.midButton', mouse.midButton)
    Trials.addData('mouse.rightButton', mouse.rightButton)
    Trials.addData('mouse.time', mouse.time)
    Trials.addData('mouse.clicked_name', mouse.clicked_name)
    Trials.addData('mouse.started', mouse.tStart)
    Trials.addData('mouse.stopped', mouse.tStop)
    # the Routine "PayOff" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 999.0 repeats of 'Trials'


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
