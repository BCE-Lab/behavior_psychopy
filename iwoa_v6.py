#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.1.2),
    on 6월 28, 2022, at 20:24
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

import random


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.1.2'
expName = 'iwoa_v3'  # from the Builder filename that created this script
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
    originPath='D:\\OneDrive - pusan.ac.kr\\바탕 화면\\연구\\2021 행동검사 웹플랫폼\\Scale\\플랫폼 버전관리\\행동검사\\ver1.0\\iwoa_gambling_task\\v6\\iwoa_v6.py',
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
    size=[2560, 1440], fullscr=True, screen=0, 
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
text_2 = visual.TextStim(win=win, name='text_2',
    text='모바일에서 검사를 하시면 가로모드로 실시해주세요\n\n검사를 시작할 준비가 되셨으면, 화면을 눌러주세요',
    font='NanumGothic',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
mouse_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_3.mouseClock = core.Clock()

# Initialize components for Routine "intro2"
intro2Clock = core.Clock()
play = visual.ImageStim(
    win=win,
    name='play', 
    image='iwoa.PNG', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.25), size=(0.7, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
mouse_4 = event.Mouse(win=win)
x, y = [None, None]
mouse_4.mouseClock = core.Clock()
text_3 = visual.TextStim(win=win, name='text_3',
    text='이 실험에서는 4가지 종류의 카드가 제시되고, 참가자는 카드를 뽑게 됩니다.\n\n카드를 뽑을 떄 마다 일정량의 이득이나 손실, 혹은 이득과 손실을 받게 됩니다.\n\n4가지 카드 중 계속 뽑았을 때 더 유리한 카드가 존재하며, 가능하면 많은 돈을 획득하는 것이 목표입니다.\n\n카드는 총 100장을 뽑게 됩니다.\n\n실험에 참가할 준비가 되셨으면 화면을 눌러주세요.',
    font='NanumSquare',
    pos=(0, -0.2), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "trial"
trialClock = core.Clock()
trial_instruction = visual.TextStim(win=win, name='trial_instruction',
    text='카드를 선택해주세요.',
    font='NanumGothic',
    pos=(0, 0.35), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
border = visual.Rect(
    win=win, name='border',
    width=(0.26, 0.26*1.45)[0], height=(0.26, 0.26*1.45)[1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor=None,
    opacity=1.0, depth=-1.0, interpolate=True)
DeckA = visual.ImageStim(
    win=win,
    name='DeckA', 
    image='image/Spades.png', mask=None, anchor='center',
    ori=0.0, pos=(-0.6, 0), size=(0.25, 0.25*1.45),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
DeckB = visual.ImageStim(
    win=win,
    name='DeckB', 
    image='image/diamond.png', mask=None, anchor='center',
    ori=0.0, pos=(-0.2, 0), size=(0.25, 0.25*1.45),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
DeckC = visual.ImageStim(
    win=win,
    name='DeckC', 
    image='image/clover.png', mask=None, anchor='center',
    ori=0.0, pos=(0.2, 0), size=(0.25, 0.25*1.45),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
DeckD = visual.ImageStim(
    win=win,
    name='DeckD', 
    image='image/heart.png', mask=None, anchor='center',
    ori=0.0, pos=(0.6, 0), size=(0.25, 0.25*1.45),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
Trial_click = event.Mouse(win=win)
x, y = [None, None]
Trial_click.mouseClock = core.Clock()
border_loc=0
totMoney = visual.TextStim(win=win, name='totMoney',
    text='',
    font='NanumGothic',
    pos=(0, -0.335), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
Nchoice = visual.TextStim(win=win, name='Nchoice',
    text='',
    font='Open Sans',
    pos=(0.5, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()
# deck list
# win or loss?
deckA_list = [1,1,1,1,1,0,0,0,0,0]
deckB_list = [1,0,0,0,0,0,0,0,0,0]
deckC_list = [1,1,1,1,1,0,0,0,0,0]
deckD_list = [1,0,0,0,0,0,0,0,0,0]
#deckA_list = [1]*deck_list[0][2]+[0]*(ncard_per_deck-deck_list[0][2])
#deckB_list = [1]*deck_list[1][2]+[0]*(ncard_per_deck-deck_list[1][2])
#deckC_list = [1]*deck_list[2][2]+[0]*(ncard_per_deck-deck_list[2][2])
#deckD_list = [1]*deck_list[3][2]+[0]*(ncard_per_deck-deck_list[3][2])

# gain per card, loss, number of loss cards in a deck(10 cards)
deckA_prop = [100, -250, deckA_list]
deckB_prop = [100, -1250, deckB_list]
deckC_prop = [50, -50, deckC_list]
deckD_prop = [50, -250, deckD_list]

# define deck_list variable
deck_list = [deckA_prop, deckB_prop, deckC_prop, deckD_prop]
random.shuffle(deck_list)

# money setting
money = 2000
net_gain = 0
gain = 0
loss = 0

# choice index
deck_choiceN = [0, 0, 0, 0]

# trial_setting
trial_tot = 0
msg_choice = " "
msg_money = " "
# Set experiment start values for variable component gain_result
gain_result = ''
gain_resultContainer = []
# Set experiment start values for variable component remained_money
remained_money = ''
remained_moneyContainer = []

# Initialize components for Routine "testend"
testendClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='검사가 완료되었습니다. 수고하셨습니다.\n\n검사를 종료하실려면 화면을 눌러주세요',
    font='NanumGothic',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "mobile"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_3
gotValidClick = False  # until a click is received
# keep track of which components have finished
mobileComponents = [text_2, mouse_3]
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
# the Routine "mobile" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "intro2"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_4
gotValidClick = False  # until a click is received
# keep track of which components have finished
intro2Components = [play, mouse_4, text_3]
for thisComponent in intro2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
intro2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "intro2"-------
while continueRoutine:
    # get current time
    t = intro2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=intro2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *play* updates
    if play.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        play.frameNStart = frameN  # exact frame index
        play.tStart = t  # local t and not account for scr refresh
        play.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(play, 'tStartRefresh')  # time at next scr refresh
        play.setAutoDraw(True)
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
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        text_3.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in intro2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro2"-------
for thisComponent in intro2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('play.started', play.tStartRefresh)
thisExp.addData('play.stopped', play.tStopRefresh)
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
thisExp.addData('text_3.started', text_3.tStartRefresh)
thisExp.addData('text_3.stopped', text_3.tStopRefresh)
# the Routine "intro2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=100.0, method='random', 
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
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    border.setOpacity(0.7)
    # setup some python lists for storing info about the Trial_click
    Trial_click.x = []
    Trial_click.y = []
    Trial_click.leftButton = []
    Trial_click.midButton = []
    Trial_click.rightButton = []
    Trial_click.time = []
    Trial_click.clicked_name = []
    gotValidClick = False  # until a click is received
    totMoney.setText(msg_money)
    Nchoice.setText(msg_choice)
    # keep track of which components have finished
    trialComponents = [trial_instruction, border, DeckA, DeckB, DeckC, DeckD, Trial_click, totMoney, Nchoice]
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
        
        # *trial_instruction* updates
        if trial_instruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trial_instruction.frameNStart = frameN  # exact frame index
            trial_instruction.tStart = t  # local t and not account for scr refresh
            trial_instruction.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trial_instruction, 'tStartRefresh')  # time at next scr refresh
            trial_instruction.setAutoDraw(True)
        
        # *border* updates
        if border.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            border.frameNStart = frameN  # exact frame index
            border.tStart = t  # local t and not account for scr refresh
            border.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(border, 'tStartRefresh')  # time at next scr refresh
            border.setAutoDraw(True)
        if border.status == STARTED:  # only update if drawing
            border.setPos(border_loc, log=False)
            border.setLineColor('blue', log=False)
        
        # *DeckA* updates
        if DeckA.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            DeckA.frameNStart = frameN  # exact frame index
            DeckA.tStart = t  # local t and not account for scr refresh
            DeckA.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(DeckA, 'tStartRefresh')  # time at next scr refresh
            DeckA.setAutoDraw(True)
        
        # *DeckB* updates
        if DeckB.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            DeckB.frameNStart = frameN  # exact frame index
            DeckB.tStart = t  # local t and not account for scr refresh
            DeckB.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(DeckB, 'tStartRefresh')  # time at next scr refresh
            DeckB.setAutoDraw(True)
        
        # *DeckC* updates
        if DeckC.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            DeckC.frameNStart = frameN  # exact frame index
            DeckC.tStart = t  # local t and not account for scr refresh
            DeckC.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(DeckC, 'tStartRefresh')  # time at next scr refresh
            DeckC.setAutoDraw(True)
        
        # *DeckD* updates
        if DeckD.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            DeckD.frameNStart = frameN  # exact frame index
            DeckD.tStart = t  # local t and not account for scr refresh
            DeckD.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(DeckD, 'tStartRefresh')  # time at next scr refresh
            DeckD.setAutoDraw(True)
        # *Trial_click* updates
        if Trial_click.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Trial_click.frameNStart = frameN  # exact frame index
            Trial_click.tStart = t  # local t and not account for scr refresh
            Trial_click.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Trial_click, 'tStartRefresh')  # time at next scr refresh
            Trial_click.status = STARTED
            Trial_click.mouseClock.reset()
            prevButtonState = Trial_click.getPressed()  # if button is down already this ISN'T a new click
        if Trial_click.status == STARTED:  # only update if started and not finished!
            buttons = Trial_click.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter([DeckA,DeckB,DeckC,DeckD])
                        clickableList = [DeckA,DeckB,DeckC,DeckD]
                    except:
                        clickableList = [[DeckA,DeckB,DeckC,DeckD]]
                    for obj in clickableList:
                        if obj.contains(Trial_click):
                            gotValidClick = True
                            Trial_click.clicked_name.append(obj.name)
                    x, y = Trial_click.getPos()
                    Trial_click.x.append(x)
                    Trial_click.y.append(y)
                    buttons = Trial_click.getPressed()
                    Trial_click.leftButton.append(buttons[0])
                    Trial_click.midButton.append(buttons[1])
                    Trial_click.rightButton.append(buttons[2])
                    Trial_click.time.append(Trial_click.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # abort routine on response
        if DeckA.contains(Trial_click):
            border_loc=[-0.6, 0]
            border.lineColor='blue'
        elif DeckB.contains(Trial_click):
            border_loc=[-0.2, 0]
            border.lineColor='blue'
        elif DeckC.contains(Trial_click):
            border_loc=[0.2, 0]
            border.lineColor='blue'
        elif DeckD.contains(Trial_click):
            border_loc=[0.6, 0]
            border.lineColor='blue'    
        
        # *totMoney* updates
        if totMoney.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            totMoney.frameNStart = frameN  # exact frame index
            totMoney.tStart = t  # local t and not account for scr refresh
            totMoney.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(totMoney, 'tStartRefresh')  # time at next scr refresh
            totMoney.setAutoDraw(True)
        
        # *Nchoice* updates
        if Nchoice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Nchoice.frameNStart = frameN  # exact frame index
            Nchoice.tStart = t  # local t and not account for scr refresh
            Nchoice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Nchoice, 'tStartRefresh')  # time at next scr refresh
            Nchoice.setAutoDraw(True)
        
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
    trials.addData('trial_instruction.started', trial_instruction.tStartRefresh)
    trials.addData('trial_instruction.stopped', trial_instruction.tStopRefresh)
    trials.addData('border.started', border.tStartRefresh)
    trials.addData('border.stopped', border.tStopRefresh)
    trials.addData('DeckA.started', DeckA.tStartRefresh)
    trials.addData('DeckA.stopped', DeckA.tStopRefresh)
    trials.addData('DeckB.started', DeckB.tStartRefresh)
    trials.addData('DeckB.stopped', DeckB.tStopRefresh)
    trials.addData('DeckC.started', DeckC.tStartRefresh)
    trials.addData('DeckC.stopped', DeckC.tStopRefresh)
    trials.addData('DeckD.started', DeckD.tStartRefresh)
    trials.addData('DeckD.stopped', DeckD.tStopRefresh)
    # store data for trials (TrialHandler)
    trials.addData('Trial_click.x', Trial_click.x)
    trials.addData('Trial_click.y', Trial_click.y)
    trials.addData('Trial_click.leftButton', Trial_click.leftButton)
    trials.addData('Trial_click.midButton', Trial_click.midButton)
    trials.addData('Trial_click.rightButton', Trial_click.rightButton)
    trials.addData('Trial_click.time', Trial_click.time)
    trials.addData('Trial_click.clicked_name', Trial_click.clicked_name)
    trials.addData('Trial_click.started', Trial_click.tStart)
    trials.addData('Trial_click.stopped', Trial_click.tStop)
    trials.addData('totMoney.started', totMoney.tStartRefresh)
    trials.addData('totMoney.stopped', totMoney.tStopRefresh)
    trials.addData('Nchoice.started', Nchoice.tStartRefresh)
    trials.addData('Nchoice.stopped', Nchoice.tStopRefresh)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback"-------
    continueRoutine = True
    # update component parameters for each repeat
    # gain money per card
    if Trial_click.clicked_name[0] == 'DeckA':    
        choice_idx = 0
    elif Trial_click.clicked_name[0] == 'DeckB':
        choice_idx = 1
    elif Trial_click.clicked_name[0] == 'DeckC':
        choice_idx = 2    
    elif Trial_click.clicked_name[0] == 'DeckD':
        choice_idx = 3    
    
    # increase deck choiceN
    deck_choiceN[choice_idx] += 1
    
    # shuffling result of deck choice
    if deck_choiceN[choice_idx] %10 == 1:
        card_list = deck_list[choice_idx][2]
        random.shuffle(card_list)
    
    # gain
    gain = deck_list[choice_idx][0]
    
    # loss
    loss = card_list[(deck_choiceN[choice_idx]-1) % 10]*deck_list[choice_idx][1]
    
    # calculate net gain of "this" trial
    net_gain = gain+loss
    
    # calculate money
    money += net_gain
    
    # calculate number of card choices
    trial_tot = sum(deck_choiceN)
    
    # summary
    msg_money = "얻은 금액: "+str(gain)+"\n잃은 금액: "+str(loss)+"\n총 금액: "+str(money)
    msg_choice = str(deck_choiceN[0])+','+str(deck_choiceN[1])+','+str(deck_choiceN[2])+','+str(deck_choiceN[3])+'\n'+str(trial_tot)
    gain_result = net_gain  # Set routine start values for gain_result
    remained_money = money  # Set routine start values for remained_money
    # keep track of which components have finished
    feedbackComponents = []
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
    while continueRoutine:
        # get current time
        t = feedbackClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedbackClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
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
    thisExp.addData('gain_result.routineEndVal', gain_result)  # Save end routine value
    thisExp.addData('remained_money.routineEndVal', remained_money)  # Save end routine value
    # the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 100.0 repeats of 'trials'


# ------Prepare to start Routine "testend"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_2
gotValidClick = False  # until a click is received
# keep track of which components have finished
testendComponents = [text, mouse_2]
for thisComponent in testendComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
testendClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "testend"-------
while continueRoutine:
    # get current time
    t = testendClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=testendClock)
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
    for thisComponent in testendComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "testend"-------
for thisComponent in testendComponents:
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
# the Routine "testend" was not non-slip safe, so reset the non-slip timer
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
