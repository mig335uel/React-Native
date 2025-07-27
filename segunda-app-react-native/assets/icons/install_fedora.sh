#!/bin/bash
sudo dnf install snapd
sudo ln -s /var/lib/snapd/snap /snap
sudo snap install core
sudo snap install acestreamplayer