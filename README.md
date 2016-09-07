#The currently unnamed theme by Bunnies McGee#0972 and Maxie#2116
This is a work in progress theme designed with transparency in mind  

Demo Video: https://a.fluntcaps.me/arwqiz.webm (isnt updated, looking into)

##Download
- Main theme: https://raw.githubusercontent.com/Maxie01/we-made-a-theme/master/BunniesMcGee.theme.css
- Maxie Patch: https://raw.githubusercontent.com/Maxie01/we-made-a-theme/master/Maxie-Patch.theme.css
- Server Image Plugin: https://raw.githubusercontent.com/Maxie01/we-made-a-theme/master/Bunny.plugin.js
- Local Image Plugin: 

## How to set up

1. Place both css files into theme folder
2. Place plugin in plugin folder
3. Enable Both css and plugins
4. Profit

###In order to have a single image follow these steps
1. If not already, disable the plugin (and restart discord to remove the "Prev" and "Next" buttons)
2. Go to the BetterDiscord settings menu, and open the custom css tab
3. Paste this code in
```
.app {
    background-image: url(https://somewebsite.com/yourfile.png);
}
```

Please note that due to restrictions in the https protocol (Do not ask about a fix for this as there is none), any image you use must be on a secure server, what this means is the url must start with https, one useful way to do this is by using an image hosting site such as [fluntcaps](https://fluntcaps.me) or [pomf.cat](https://pomf.cat/)

Lastly, Save your changes and the image should be set

###Tutorial for custom image rotation ~~coming soon™~~
~~It's either going to be annoying af to set up, or easy, but I think it's going to be the former~~
With a lot of help from @Razzile, I have been able to rewrite the plugin so that it now supports loading local images instead of pulling from a server, to do this follow these steps.
1. Create a folder called "img", without quotes, in the plugin folder for better discord.
2. Place all images you want loaded in that folder (ensure only static images are in the folder, gifs not tested)
3. Enable the local version of the plugin (and disable or remove the server image plugin)
4. Restart discord to apply changes, either by pressing ctrl+r or closing on the taskbar and re-opening

```
Lots of love
Maxie and Bunnies McGee <3
```