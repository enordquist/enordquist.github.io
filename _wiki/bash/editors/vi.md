---
layout: wiki
parent: editors
wiki_id: vi
title: "vi - VIsual editor"
description: "my preferred editor for writing text files, scripts, and websites"
permalink: /wiki/bash/editors/vi/
pinned: true
order: 5
author: true
---

My shell-based visual editor of choice is ```vi```. It is a very powerful and ubiquitous tool, but involves an initial learning curve. The content of this entire website was written/edited inside of ```vi```. Note that you can save your preferred configuration in the user config file `~/.vimrc`.

For a good primer, enter the command ```vimtutor``` into the shell, and you will be given an interactive tutorial in `vi`.
From there, I recommend practice, and referencing this keybinding cheatsheet:

### Cursor movement
```h``` - move left <br>
```j``` - move down<br>
```k``` - move up<br>
```l``` - move right<br>
```w``` - jump by start of words (punctuation considered words)<br>
```W``` - jump by words (spaces separate words)<br>
```e``` - jump to end of words (punctuation considered words)<br>
```E``` - jump to end of words (no punctuation)<br>
```b``` - jump backward by words (punctuation considered words)<br>
```B``` - jump backward by words (no punctuation)<br>
```0``` - (zero) start of line<br>
```^``` - first non-blank character of line<br>
```$``` - end of line<br>
```a``` - another test line<br>
```G``` - Go To command (prefix with number - `5G` goes to line 5)<br>
```n``` - Move to nth line of file<br>
```H``` - Move to top of screen<br>
```M``` - Move to middle of screen<br>
```L``` - Move to bottom of screen<br>
```%``` - Move to associated (), {}, [] i.e. find matching parenthesis<br>
```fc``` - Move forward  to next occurence of char `c` in line<br>
```Fc``` - Move backward to next occurence of char `c` in line<br>

***Note***: Prefix a cursor movement command with a number to repeat it. For example, `4j` moves down 4 lines.

### Insert Mode - Inserting/Appending text
```i``` - start insert mode at cursor <br>
```I``` - insert at the beginning of the line <br>
```a``` - append after the cursor <br>
```A``` - append at the end of the line <br>
```o``` - open a blank line below <br>
```O``` - open a blank line above <br>
```ea``` - append at end of word <br>
```Esc``` - exit insert mode<br>

### Editing
```r``` - replace a single character (does not use insert mode)<br>
```J``` - join line below to the current one<br>
```cc``` - change (replace) an entire line<br>
```cw``` - change (replace) to the end of word<br>
```ce``` - change (replace) to the end of word<br>
```c$``` - change (replace) to the end of line<br>
```s``` - delete character at cursor and subsitute text<br>
```S``` - delete line at cursor and substitute text (same as ```cc```)<br>
```xp``` - transpose two letters (delete and paste, technically)<br>
```u``` - undo<br>
```U``` - undo changes to the whole line<br>
```.``` - repeat last command<br>

### Marking text (visual mode)
```v``` - start visual mode, mark lines, do commands <br>
```V``` - start Linewise visual mode<br>
```o``` - move to other end of marked area<br>
```Ctrl+v``` - start visual block mode<br>
```O``` - move to Other corner of block<br>
```aw``` - mark a word<br>
```ab``` - mark a () block (with braces)<br>
```aB``` - mark a {} block (with brackets)<br>
```ib``` - mark an inner () block<br>
```iB``` - mark an inner {} block<br>
```Esc``` - exit visual mode<br>

### Highlighting
```:noh``` - turn off highlighting<br>

### Visual commands
```>``` - shift right<br>
```<``` - shift left<br>
```y``` - yank (copy) marked text<br>
```d``` - delete marked text<br>
```~``` - switch case<br>

### Cut and Paste
```yy``` - yank (copy) a lin<br>
```2yy``` - yank 2 line<br>
```yw``` - yank wor<br>
```y$``` - yank to end of lin<br>
```p``` - put (paste) the clipboard after curso<br>
```P``` - put (paste) before curso<br>
```dd``` - delete (cut) a lin<br>
```dw``` - delete (cut) the current wor<br>
```D```  - delete after curser to end of lin<br>
```x``` - delete (cut) current characte<br>

### Exiting
```:w``` - write (save) the file, but don't exit<br>
```:wq``` - write (save) and quit<br>
```:q``` - quit (fails if anything has changed<br>
```:q!``` - quit and throw away change<br>
```:x``` - same as w<br>
```:'<,'> w filename``` - save the highlighted text into the filename, only need to type : with highlighted text<br>

### Search/Replace
```/pattern``` - search for pattern<br>
```?pattern``` - search backward for pattern<br>
```n``` - repeat search in same direction<br>
```N``` - repeat search in opposite direction<br>
```:%s/old/new/g``` - replace all old with new throughout file (`%`) and multiple instances per line (`g`)<br>
```:%s/old/new/gc``` - replace all old with new throughout file with confirmation<br>
```:s/old/new``` - replace old with new, first instance on the line<br>
```:n,m s/old/new/g``` - replace `old` with `new` everywhere on lines `n` to `m`<br>

### Opening files (aka "buffers")
```:e filename``` - Edit a file in a new buffer<br>
```:e \**/*foo<Tab>``` - ```**``` stands for any subdirectory, ```<Tab>``` denotes tab-completion<br>
```:next \**/*.dat``` - open multiple files (with some extension)<br>
```:b4``` - switch to buffer number <br>
```:bn``` - switch to next buffer in the buffer list<br>
```:bp``` - switch to previous buffer in the buffer list<br>
```:bf``` - switch to first buffer in the buffer list<br>
```:bl``` - switch to last buffer in the buffer list<br>
```:b foo<Tab>``` - switch by buffer name with tab-completion<br>
```:b#``` - switch to the alternate file<br>
```:bnext``` (or :bn) - go to next buffer<br>
```:bprev``` (of :bp) - go to previous buffer<br>
```:bd``` - delete a buffer (close a file)<br>
```:sp filename``` - Open a file in a new buffer and split window<br>
```ctrl+ws``` - Split window<br>
```ctrl+ww``` - switch between window<br>
```ctrl+wq``` - Quit a window<br>
```ctrl+wv``` - Split windows vertically<br>
```:ls``` - show list of loaded buffer<br>

### Running external prompt (bash) commands in vim
```:!command``` - show results of `command` executed outside of vi (temporarily)
```:read !command``` - puts results of `command` into buffer at the cursor line<br>
***Note:*** This means that you can effectively make ```vi``` into a powerful "modern" IDE!
