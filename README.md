# Drum beats

This is a project done for FCC, my variation on the Simon says app.

## Changelog
DATE: 10.5.2018

> Added the sounds to the drum, a button that starts the sequence of drum playing. Game doesn't have the actual game functionality yet. Bugs i currently have:
>   The button bug, moves to another position when clicked. 
>   Sound bug, sometimes if the same drum is played right after the sound won't play. Will have to play around the settimeout function.
>   Atm not responsive website, but that will come latter on


DATE: 11.5.2018

> Added the beginning sound, disable the button at the start for the duration of the 'badum tss' intro sequence. Added the instructions panel and made so it > > disappears when you click the start button. Some bug fixes for the button, now it moves down correctly when pressed. Styling is not final.

DATE: 12.5.2018

> Adding the div to disable all user input on start, play the drum sequence. Playing around with mouseover and mouseout. Originally the plan was to use these functions directly on the svg, but there is a problem with adding the ids to the array. What happens is when you hover over the drum it does put the id into the array but when you move your mouse to another part of that drums(for example the reflections on the red toms) it readds the id to the array. The way i will try to fix it is with a div that will go over the svg acting as a hitbox. Or perhaps look into the whole thing perhaps doing something in adobe illustrator. We will see. Changed some colors for the app as well and fixed some bugs with audio. Also added comments to the main JS file.



Plans: By the end of the month have the core game mechanic done so you can play. Later on add the leaderboards feature so you can save your highscore.