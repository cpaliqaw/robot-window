# robot-window

## Dependencies

See https://mui.com/material-ui/guides/routing/ on how to use Material UI with react-router.
Here is an excerpt
```
<Router>
  <Link component={RouterLink} to="/">
    With prop forwarding
  </Link>
  <br />
  <Link component={LinkBehavior}>Without prop forwarding</Link>
</Router>
```

## Installation

sudo yarn supabase migration new starting-ddl

The following settings are necessary for allowing email sign in, but not sign up
```
[auth]
...
enable_signup = false

[auth.email]
# Allow/disallow new user signups via email to your project.
enable_signup = true
```

## Generate types

For local db
```
sudo yarn supabase gen types typescript --local > ./src/database.types.ts
```

## Running

start
```
sudo yarn supabase start
```
stop
```
sudo yarn supabase stop
```

## Testing

Test
```
yarn playwright test
```

View results
```
yarn playwright show-report
```
