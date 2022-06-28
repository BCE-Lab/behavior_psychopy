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
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '0'
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
expName = 'Reversal Learning'  # from the Builder filename that created this script
expInfo = {'participant': ''}
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
    originPath='D:\\OneDrive - pusan.ac.kr\\바탕 화면\\연구\\2021 행동검사 웹플랫폼\\Scale\\플랫폼 버전관리\\행동검사\\ver1.0\\probabilistic-reward-reversal-learning-master\\v8\\ReversalLearning_v8_online.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[2560, 1440], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='pix')
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

# Initialize components for Routine "Instructions"
InstructionsClock = core.Clock()
Instructions_txt = visual.TextStim(win=win, name='Instructions_txt',
    text='이것은 검사에 대한 설명문입니다.\n이 검사의 목표는 최대한 많은 점수를 얻는 것입니다.\n\n검사는 위와 비슷한 두 가지 이미지 중 한가지 이미지를 선택합니다.\n이미지를 선택하면 +10점 혹은 +1점의 결과가 나옵니다.\n\n한 쪽에서는 +10점이 많이 나오고, 다른 쪽은 +1점이 많이 나옵니다. 많이 얻는 쪽을 찾아서, 매번 그쪽을 선택하도록 하십시오\n \n일정 시점 이후에 점수를 많이 얻는 이미지/적게 얻는 이미지가 서로 바뀔 수 있습니다. 이 경우, 어느 쪽이 점수를 많이 얻는 이미지인지 다시 찾아서 그쪽을 선택하면 됩니다.  \n\n이미지를 선택하실 떄는 해당 이미지를 눌러주세요.\n\n설명을 이해하시고 준비가 되었으면, 화면을 눌러주세요.',
    font='NanumSquare',
    pos=(0, -0.8), height=30, wrapWidth=1500, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
inrto_mouse = event.Mouse(win=win)
x, y = [None, None]
inrto_mouse.mouseClock = core.Clock()
ex = visual.ImageStim(
    win=win,
    name='ex', 
    image='imgexp.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 450), size=(600,300),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)

# Initialize components for Routine "Setup"
SetupClock = core.Clock()
# Shuffle set of stimuli
conditions = list(range(1,18,1))
shuffle(conditions)
blockCounter = 0
nBlocks=2
corr_ans=0

# Poisson distribution for iti
iti_dist=np.random.poisson(2, 100)

maxTrials = 75
text_2 = visual.TextStim(win=win, name='text_2',
    text='+',
    font='Arial',
    pos=(0, 0), height=32, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Picture"
PictureClock = core.Clock()
total_points = 0

left_image = visual.ImageStim(
    win=win,
    name='left_image', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=(100, 0), size=(125,125),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
polygon = visual.ShapeStim(
    win=win, name='polygon',
    size=(25, 25), vertices='circle',
    ori=0, pos=(0, 0), anchor='center',
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,1.000,1.000],
    opacity=1, depth=-2.0, interpolate=True)
right_image = visual.ImageStim(
    win=win,
    name='right_image', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=(-100, 0.0), size=(125,125),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# Initialize components for Routine "Results"
ResultsClock = core.Clock()
Results_Text = visual.TextStim(win=win, name='Results_Text',
    text='',
    font='Arial',
    pos=(0, 0), height=32, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "end_trial"
end_trialClock = core.Clock()
iti = visual.TextStim(win=win, name='iti',
    text='+',
    font='Arial',
    pos=(0, 0), height=32, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "BlockEnd"
BlockEndClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='',
    font='Arial',
    pos=(0, 0), height=28, wrapWidth=1500, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()

# Initialize components for Routine "Done"
DoneClock = core.Clock()
Finish_Text = visual.TextStim(win=win, name='Finish_Text',
    text='',
    font='Arial',
    pos=(0, 0), height=32, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
mouse_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_3.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Instructions"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the inrto_mouse
gotValidClick = False  # until a click is received
# keep track of which components have finished
InstructionsComponents = [Instructions_txt, inrto_mouse, ex]
for thisComponent in InstructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
InstructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Instructions"-------
while continueRoutine:
    # get current time
    t = InstructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=InstructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Instructions_txt* updates
    if Instructions_txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instructions_txt.frameNStart = frameN  # exact frame index
        Instructions_txt.tStart = t  # local t and not account for scr refresh
        Instructions_txt.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instructions_txt, 'tStartRefresh')  # time at next scr refresh
        Instructions_txt.setAutoDraw(True)
    # *inrto_mouse* updates
    if inrto_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        inrto_mouse.frameNStart = frameN  # exact frame index
        inrto_mouse.tStart = t  # local t and not account for scr refresh
        inrto_mouse.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(inrto_mouse, 'tStartRefresh')  # time at next scr refresh
        inrto_mouse.status = STARTED
        inrto_mouse.mouseClock.reset()
        prevButtonState = inrto_mouse.getPressed()  # if button is down already this ISN'T a new click
    if inrto_mouse.status == STARTED:  # only update if started and not finished!
        buttons = inrto_mouse.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                continueRoutine = False  # abort routine on response    
    # *ex* updates
    if ex.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ex.frameNStart = frameN  # exact frame index
        ex.tStart = t  # local t and not account for scr refresh
        ex.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ex, 'tStartRefresh')  # time at next scr refresh
        ex.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in InstructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instructions"-------
for thisComponent in InstructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('Instructions_txt.started', Instructions_txt.tStartRefresh)
thisExp.addData('Instructions_txt.stopped', Instructions_txt.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = inrto_mouse.getPos()
buttons = inrto_mouse.getPressed()
thisExp.addData('inrto_mouse.x', x)
thisExp.addData('inrto_mouse.y', y)
thisExp.addData('inrto_mouse.leftButton', buttons[0])
thisExp.addData('inrto_mouse.midButton', buttons[1])
thisExp.addData('inrto_mouse.rightButton', buttons[2])
thisExp.addData('inrto_mouse.started', inrto_mouse.tStart)
thisExp.addData('inrto_mouse.stopped', inrto_mouse.tStop)
thisExp.nextEntry()
thisExp.addData('ex.started', ex.tStartRefresh)
thisExp.addData('ex.stopped', ex.tStopRefresh)
# the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
blocks = data.TrialHandler(nReps=nBlocks, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='blocks')
thisExp.addLoop(blocks)  # add the loop to the experiment
thisBlock = blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in blocks:
    currentLoop = blocks
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Setup"-------
    continueRoutine = True
    routineTimer.add(2.000000)
    # update component parameters for each repeat
    # Reset counters
    var_trial = 0
    corrCounter = 0 # count number of correct choices
    revCounter=0 # count number of reversals
    # for training, set numCorr to 30 with no reversals
    if blockCounter == 0:
        numCorr = randint(7,12)
        numReversals = 3
    else:
        numCorr = randint(7,12) # number of correct choices before reversal
        numReversals=3 # number of reversals in a block
    
    if randint(0,1) == 0:
        a_high = 1
        b_high = 0
    else:
        b_high = 1
        a_high = 0
    
    # Use new stimuli for each block
    a = conditions[blockCounter*2]
    b = conditions[blockCounter*2+1]
    
    image_a = "Fractals/Fractal"+str(a)+".png"
    image_b = "Fractals/Fractal"+str(b)+".png"
    
    # Shuffle iti
    shuffle(iti_dist)
    # keep track of which components have finished
    SetupComponents = [text_2]
    for thisComponent in SetupComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    SetupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Setup"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = SetupClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=SetupClock)
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
        if text_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_2.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                text_2.tStop = t  # not accounting for scr refresh
                text_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_2, 'tStopRefresh')  # time at next scr refresh
                text_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in SetupComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Setup"-------
    for thisComponent in SetupComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    blocks.addData('text_2.started', text_2.tStartRefresh)
    blocks.addData('text_2.stopped', text_2.tStopRefresh)
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=maxTrials, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials')
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
        
        # ------Prepare to start Routine "Picture"-------
        continueRoutine = True
        routineTimer.add(1.500000)
        # update component parameters for each repeat
        if revCounter == 0:
            a_left = 1
            a_right = 0
            b_right = 1
            b_left= 0
        else:
            b_left = 1
            b_right = 0
            a_right = 1
            a_left = 0
        left_file = image_a
        right_file = image_b
        
        thisExp.addData("corr_ans", corr_ans)
        left_image.setImage(left_file)
        right_image.setImage(right_file)
        # setup some python lists for storing info about the mouse
        mouse.clicked_name = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        PictureComponents = [left_image, polygon, right_image, mouse]
        for thisComponent in PictureComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        PictureClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Picture"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = PictureClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=PictureClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *left_image* updates
            if left_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                left_image.frameNStart = frameN  # exact frame index
                left_image.tStart = t  # local t and not account for scr refresh
                left_image.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(left_image, 'tStartRefresh')  # time at next scr refresh
                left_image.setAutoDraw(True)
            if left_image.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > left_image.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    left_image.tStop = t  # not accounting for scr refresh
                    left_image.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(left_image, 'tStopRefresh')  # time at next scr refresh
                    left_image.setAutoDraw(False)
            
            # *polygon* updates
            if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                polygon.frameNStart = frameN  # exact frame index
                polygon.tStart = t  # local t and not account for scr refresh
                polygon.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
                polygon.setAutoDraw(True)
            if polygon.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > polygon.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    polygon.tStop = t  # not accounting for scr refresh
                    polygon.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(polygon, 'tStopRefresh')  # time at next scr refresh
                    polygon.setAutoDraw(False)
            
            # *right_image* updates
            if right_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                right_image.frameNStart = frameN  # exact frame index
                right_image.tStart = t  # local t and not account for scr refresh
                right_image.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(right_image, 'tStartRefresh')  # time at next scr refresh
                right_image.setAutoDraw(True)
            if right_image.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > right_image.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    right_image.tStop = t  # not accounting for scr refresh
                    right_image.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(right_image, 'tStopRefresh')  # time at next scr refresh
                    right_image.setAutoDraw(False)
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
            if mouse.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mouse.tStartRefresh + 1.5-frameTolerance:
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
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        try:
                            iter([left_image,right_image])
                            clickableList = [left_image,right_image]
                        except:
                            clickableList = [[left_image,right_image]]
                        for obj in clickableList:
                            if obj.contains(mouse):
                                gotValidClick = True
                                mouse.clicked_name.append(obj.name)
                        if gotValidClick:  
                            continueRoutine = False  # abort routine on response
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in PictureComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Picture"-------
        for thisComponent in PictureComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        if blockCounter >=0:
            if a_high == 1:
                 if a_high and a_left and mouse.isPressedIn(left_image):
                  corr_ans=1
                  corrCounter==corrCounter+1
                 elif a_high and a_left and mouse.isPressedIn(right_image):
                  corr_ans=0
                 if a_high and a_right and mouse.isPressedIn(right_image):
                  corr_ans=1
                  corrCounter==corrCounter+1
                 elif a_high and a_right and mouse.isPressedIn(left_image):
                  corr_ans=0         
            if b_high == 1:
                 if b_high and b_left and mouse.isPressedIn(left_image):
                  corr_ans=1
                  corrCounter==corrCounter+1
                 elif b_high and b_left and mouse.isPressedIn(right_image):
                  corr_ans=0
                 if b_high and b_right and mouse.isPressedIn(right_image):
                  corr_ans=1
                  corrCounter==corrCounter+1
                 elif b_high and b_right and mouse.isPressedIn(left_image):
                  corr_ans=0       
                   
        thisExp.addData("corr_ans", corr_ans)
        
        if len(mouse.clicked_name) == 0:
            no_resp = True
            feedback_text = "더 빠르게 응답해주세요"
        else:
            no_resp = False
            feedback_text = ""
        
        # Add to counter if correct choice else reset counter
        if corr_ans == 1:
            corrCounter += corr_ans
        else:
            corrCounter == corrCounter+0
        
        thisExp.addData("corrCounter", corrCounter)
        thisExp.addData("numCorr", numCorr)
        
        # 80:20 Probabilistic reward
        r = random()
        condition=""
        prev_cond=""
        if no_resp:
            last_points = 0
        elif r <= 0.8:
            if corr_ans == 1:
                last_points = 10
                condition = "corr_hi"
            else:
                last_points = 1
                condition = "err_lo"
        else:
            if corr_ans == 1:
                last_points = 1
                condition = "corr_lo"
            else:
                last_points = 10
                condition = "err_hi"
        thisExp.addData("condition", condition)
        thisExp.addData("prev_cond", prev_cond)
        prev_cond += condition
        
        # add points to running total        
        total_points += last_points
        feedback_text+="\n\n받은 금액  +" + str(last_points)
        feedback_text+="\n\n총 금액 " + str(total_points)
        thisExp.addData("last_points", last_points)
        thisExp.addData("total_points", total_points)
        trials.addData('left_image.started', left_image.tStartRefresh)
        trials.addData('left_image.stopped', left_image.tStopRefresh)
        trials.addData('polygon.started', polygon.tStartRefresh)
        trials.addData('polygon.stopped', polygon.tStopRefresh)
        trials.addData('right_image.started', right_image.tStartRefresh)
        trials.addData('right_image.stopped', right_image.tStopRefresh)
        # store data for trials (TrialHandler)
        x, y = mouse.getPos()
        buttons = mouse.getPressed()
        if sum(buttons):
            # check if the mouse was inside our 'clickable' objects
            gotValidClick = False
            try:
                iter([left_image,right_image])
                clickableList = [left_image,right_image]
            except:
                clickableList = [[left_image,right_image]]
            for obj in clickableList:
                if obj.contains(mouse):
                    gotValidClick = True
                    mouse.clicked_name.append(obj.name)
        trials.addData('mouse.x', x)
        trials.addData('mouse.y', y)
        trials.addData('mouse.leftButton', buttons[0])
        trials.addData('mouse.midButton', buttons[1])
        trials.addData('mouse.rightButton', buttons[2])
        if len(mouse.clicked_name):
            trials.addData('mouse.clicked_name', mouse.clicked_name[0])
        trials.addData('mouse.started', mouse.tStart)
        trials.addData('mouse.stopped', mouse.tStop)
        
        # ------Prepare to start Routine "Results"-------
        continueRoutine = True
        routineTimer.add(1.500000)
        # update component parameters for each repeat
        Results_Text.setText(feedback_text)
        # keep track of which components have finished
        ResultsComponents = [Results_Text]
        for thisComponent in ResultsComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        ResultsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Results"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = ResultsClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=ResultsClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Results_Text* updates
            if Results_Text.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                Results_Text.frameNStart = frameN  # exact frame index
                Results_Text.tStart = t  # local t and not account for scr refresh
                Results_Text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Results_Text, 'tStartRefresh')  # time at next scr refresh
                Results_Text.setAutoDraw(True)
            if Results_Text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > Results_Text.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    Results_Text.tStop = t  # not accounting for scr refresh
                    Results_Text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(Results_Text, 'tStopRefresh')  # time at next scr refresh
                    Results_Text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ResultsComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Results"-------
        for thisComponent in ResultsComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('Results_Text.started', Results_Text.tStartRefresh)
        trials.addData('Results_Text.stopped', Results_Text.tStopRefresh)
        
        # ------Prepare to start Routine "end_trial"-------
        continueRoutine = True
        # update component parameters for each repeat
        # When number of correct response passes threshold 
        # reverse until 3 reversals completed then end block
        if corrCounter >= numCorr:
            if revCounter < numReversals:
                if a_high == 1:
                    a_high=0
                    b_high=1
                else:
                    a_high=1
                    b_high=0
                revCounter+=1
                numCorr = randint(7,12) # number of correct choices before reversal
                corrCounter=0
            elif revCounter == numReversals:
                trials.finished = True
                blockCounter+=1
        thisExp.addData("revCounter",revCounter)
        thisExp.addData("numReversals",numReversals)
        ITI_dur=iti_dist[var_trial]
        var_trial += 1
        
        if var_trial >= maxTrials:
            trials.finished = True
        # keep track of which components have finished
        end_trialComponents = [iti]
        for thisComponent in end_trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        end_trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "end_trial"-------
        while continueRoutine:
            # get current time
            t = end_trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=end_trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *iti* updates
            if iti.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                iti.frameNStart = frameN  # exact frame index
                iti.tStart = t  # local t and not account for scr refresh
                iti.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(iti, 'tStartRefresh')  # time at next scr refresh
                iti.setAutoDraw(True)
            if iti.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > iti.tStartRefresh + ITI_dur-frameTolerance:
                    # keep track of stop time/frame for later
                    iti.tStop = t  # not accounting for scr refresh
                    iti.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(iti, 'tStopRefresh')  # time at next scr refresh
                    iti.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in end_trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "end_trial"-------
        for thisComponent in end_trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('iti.started', iti.tStartRefresh)
        trials.addData('iti.stopped', iti.tStopRefresh)
        # the Routine "end_trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed maxTrials repeats of 'trials'
    
    
    # ------Prepare to start Routine "BlockEnd"-------
    continueRoutine = True
    # update component parameters for each repeat
    text.setText('잠시 쉬어가겠습니다.\n\n준비가 되시면 화면을 눌러주세요.')
    # setup some python lists for storing info about the mouse_2
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    BlockEndComponents = [text, mouse_2]
    for thisComponent in BlockEndComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    BlockEndClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "BlockEnd"-------
    while continueRoutine:
        # get current time
        t = BlockEndClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=BlockEndClock)
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
        for thisComponent in BlockEndComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "BlockEnd"-------
    for thisComponent in BlockEndComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    blocks.addData('text.started', text.tStartRefresh)
    blocks.addData('text.stopped', text.tStopRefresh)
    # store data for blocks (TrialHandler)
    x, y = mouse_2.getPos()
    buttons = mouse_2.getPressed()
    blocks.addData('mouse_2.x', x)
    blocks.addData('mouse_2.y', y)
    blocks.addData('mouse_2.leftButton', buttons[0])
    blocks.addData('mouse_2.midButton', buttons[1])
    blocks.addData('mouse_2.rightButton', buttons[2])
    blocks.addData('mouse_2.started', mouse_2.tStart)
    blocks.addData('mouse_2.stopped', mouse_2.tStop)
    # the Routine "BlockEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed nBlocks repeats of 'blocks'


# ------Prepare to start Routine "Done"-------
continueRoutine = True
# update component parameters for each repeat
end_text="수고하셨습니다."
end_text+="\n\n총 얻으신 포인트:" + str(total_points)
end_text+="\n\n화면을 누르시면 검사가 종료됩니다."
Finish_Text.setText(end_text
)
# setup some python lists for storing info about the mouse_3
gotValidClick = False  # until a click is received
# keep track of which components have finished
DoneComponents = [Finish_Text, mouse_3]
for thisComponent in DoneComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
DoneClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Done"-------
while continueRoutine:
    # get current time
    t = DoneClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=DoneClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Finish_Text* updates
    if Finish_Text.status == NOT_STARTED and tThisFlip >= 0.00-frameTolerance:
        # keep track of start time/frame for later
        Finish_Text.frameNStart = frameN  # exact frame index
        Finish_Text.tStart = t  # local t and not account for scr refresh
        Finish_Text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Finish_Text, 'tStartRefresh')  # time at next scr refresh
        Finish_Text.setAutoDraw(True)
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
    for thisComponent in DoneComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Done"-------
for thisComponent in DoneComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('Finish_Text.started', Finish_Text.tStartRefresh)
thisExp.addData('Finish_Text.stopped', Finish_Text.tStopRefresh)
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
# the Routine "Done" was not non-slip safe, so reset the non-slip timer
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
