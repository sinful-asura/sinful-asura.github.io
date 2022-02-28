# Short Windows Terminal Customization Guide (PowerShell)

Hello, there - wanderer!

This is a short guide which will explain **most** of the steps required to make your PowerShell look amazing.

> If we're already forced to use the Windows and its terminal, let's at least make it worthwhile!

**Disclaimer:** This is just a guide I've forged from experience, by following various tutorials on the web.
I just didn't feel like searching for them every fresh reinstall, and so this document has been born.

**Important:** In order to execute any command, you must enable `Running scripts in PowerShell` in your settings!

## Plugins
To install **oh-my-posh**, run the following command: `Install-Module oh-my-posh -Scope CurrentUser`

> If you've never installed anything with `Install-Module` - PowerShell will ask to install `NuGet` package manager.
> You will be asked to confirm module installations, so be around to input `Y` for `Yes` or `A` for `Yes for all`


`Install-Module posh-git -Scope CurrentUser`
## Profile

Now, you would need to do another thing to bring you closer to the end.

Open your `PowerShell` and type `notepad $PROFILE` (replace **notepad** with the editor you want).

After notepad opens, copy and paste the following block.
```
Import-Module posh-git
Import-Module oh-my-posh
Set-PoshPrompt -Theme microverse-power
```

After doing that, close your `PowerShell` and open a new one, and the download should start automatically.
After the download finishes, you will most likely see weird looking blocks, but do not worry - you just need to install a `PowerLine` font!

## PowerLine Fonts 

In order to successfully use the newly-installed features, you would need to install a PowerLine font which supports glyphs and icons.

You now need to go to [Nerd Fonts](https://www.nerdfonts.com/font-downloads) and download which one you like.

My reccomendation would be to download [Caskaydia Cove Nerd Font](https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/CascadiaCode.zip)

After downloading, extract the `.zip` file and select all of them, then go `Right Click > Install for All Users`

After that, just open your `Windows Terminal` settings, go to `Defaults` tab, `Appearance` and set `Font face` property to the font you've just downloaded (In my case it would be `CaskaydiaCove NF`)

## Happy coding!