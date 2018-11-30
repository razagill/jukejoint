#!/usr/bin/env bash

sudo cp auto_deploy.service /etc/systemd/system/auto_deploy.service

echo 'loading services...'
sudo systemctl daemon-reload

echo 'enabling auto deploy service'
sudo systemctl enable auto_deploy.service

echo 'starting auto deploy service'
sudo systemctl start auto_deploy.service

echo 'auto deploy installed'
