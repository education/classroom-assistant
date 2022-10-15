# Linux Distro Issues
There are known issues with some distributions of Linux, we recommend using Ubuntu 18.04 or 16.04

## Protocol Handler
The command we use to set up the custom protocol handler for Classroom Assistant fails on some distros.

You can try to set it up manually by running:
```
xdg-settings set default-url-scheme-handler x-github-classroom classroom-assistant.desktop
```
For XFCE-based desktops, `xdg-settings` does not seem to work, you have to manually set up the protocol handling for the application to work.

## KDE
The package we use for storing tokens on Linux needs an additional dependency on KDE. This can be installed with
```
sudo apt-get install gnome-keyring
```