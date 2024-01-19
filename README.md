🎞️ 🎬 📺 🎲 🎞️ 🎬 📺 🎲 🎞️ 🎬 📺 🎲 🎞️ 🎬 📺 🎲 🎞️ 🎬 📺 🎲
Welcome to Film Picker, the program that takes the bias out of picking your next flick!

My first genuine coding project, created in October 2022, and put to good use multiple times since.

Problem: how to randomly pick a film to watch next, without personal preference influencing the outcome?

Solution: use Film Picker to choose...
...a source at random
...a film from that source at random

How to use Film Picker

> save list(s) of films as CSV file(s)
> update the CSV references in the JS files (here, named main.chest and main.shelf)
> check that source.picker refers to the relevant named sources (here, 'Chest', 'Shelf' and 'Curzon')
> run source.picker

    $ node source.picker.js to execute

> if 'Chest' or 'Shelf' is picked, run the corresponding script. For example:

    $ node main.chest.js

Result:

The script will print a randomly generated shortlist, allowing the user to choose from this list.

Observations:

> the script will not produce duplicates in the list
> the number of films on the shortlist can be easily changed within the code

Improvements:

> prompt user to input the names of their sources
> prompt user to state the number of films they want on the shortlist
> allow user chance to tweak the shortlist (e.g., if one of the films had recently been watched)

    ~ this would mean saving the shortlist, choosing films to pop out of it, and replacing them with new randomly generated films from the CSV file

> creating categories to be selected at random for the Curzon option, leading user to pick from a specific category on the Curzon Home Cinema website
