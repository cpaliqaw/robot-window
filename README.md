# robot-window

## Dependencies

I installed the supabase dependency using
```
yarn add supabase
```
but @Supaship believes only this should be necessary, and the fact that it isn't
is a bug that Supabase should resolve
```
yarn add -D supabase
```
Then I ran (second command failed without sudo on Ubuntu 20)
```
yarn supabase init
sudo yarn supabase start
```
to stop
```
sudo yarn supabase stop
```

## Installation