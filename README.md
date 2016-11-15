#"Opacity" by Bunnies McGee#0972 and Maxie#2116
This is a work in progress theme designed with transparency in mind  
NOW WITH AUTOMATIC UPDATES FOR THE CSS
`Updated: 11/15/2016`

Demo Video: http://a.pomf.cat/yuscgt.gif

##Download
- Auto updating theme: https://raw.githubusercontent.com/Maxie01/we-made-a-theme/master/OpacityMaxBun.theme.css
- Server Image Plugin: https://raw.githubusercontent.com/Maxie01/we-made-a-theme/master/Bunny.plugin.js
- Local Image Plugin: https://raw.githubusercontent.com/Maxie01/we-made-a-theme/master/BunnyLocal.plugin.js

## How to set up

1. Download the Auto Updating Theme
2. Place plugin of choice (or both) in plugin folder
3. Enable the css and plugin of choice, only use ONE plugin at a time
4. Profit!

###In order to have a single image follow these steps
1. If not already, disable the plugin (and restart discord to remove the "Prev" and "Next" buttons)
2. Go to the BetterDiscord settings menu, and open the custom css tab
3. Paste this code in
```
.app {
    background-image: url(https://somewebsite.com/yourfile.png);
}
```

Please note that due to restrictions in the https protocol (Do not ask about a fix for this as there is none), any image you use must be on a secure server, what this means is the url must start with https, one useful way to do this is by using an image hosting site such as [imgur](https://imgur.com), [fluntcaps](https://fluntcaps.me) or [pomf.cat](https://pomf.cat/)

Lastly, Save your changes and the image should be set

###Tutorial for custom image rotation

With a lot of help from @Razzile, I have been able to rewrite the plugin so that it now supports loading local images instead of pulling from a server, to do this follow these steps.

1. Create a folder called "img", without quotes, in the plugin folder for better discord.
2. Place all images you want loaded in that folder (ensure only static images are in the folder, gifs not tested)
3. Go into plugin and find `C:\\Users\\james\\AppData\\Roaming\\BetterDiscord\\plugins\\img\\` and replace "James" with your username.
4. Enable the local version of the plugin (and disable or remove the server image plugin)
5. Restart discord to apply changes, either by pressing ctrl+r or closing on the taskbar and re-opening

WARNING: The local plugin can cause high memory usage by discord, (e.g. 510 images totalling ~340mb caused discord to use ~640mb, rather than the ~20mb it normally uses), please use common sense when selecting images, and do not try to use thousands of high resolution images, it will probably cause crashes and instability.

```
Lots of love
Maxie and Bunnies McGee <3
```
