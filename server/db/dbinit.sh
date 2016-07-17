#!/bin/sh
echo '=creating database called test================================================'
psql -c 'CREATE DATABASE test'
echo '=loading schema onto database================================================='
psql -U $USER -d test -a -f ./server/db/schema.sql

#Comment out the above lines and uncomment the line below to delete database
#psql -c 'DROP DATABASE test'







#-----------------Will fix this part later------------------------------
#=================No Touchy~ :)=========================================
# 'IF NOT EXISTS (SELECT 1 from pg_database where datname = 'test')
#   CREATE DATABASE test
# END;'