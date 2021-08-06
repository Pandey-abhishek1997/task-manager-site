import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
});


class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      userpassword: '',
      toast: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  doLogin = (e) => {
    e.preventDefault();
   console.log("enter")
    if (this.state.username === "ab" && this.state.userpassword === 1234) {
      console.log("object")
      this.setState({ toast: "sucess" })

    }
    else {
      this.setState({ toast: "error" })
    }


    // axios
    //   .post('http://localhost:8090/home/validation', this.state)
    //   .then((res) => {
    //     if (res.data === 'Welcome User') {
    //       this.props.history.push("/dashboard");
    //     }
    //     else if (res.data === 'Authentication Fail') {
    //       console.log(res.data);
    //     }
    //   })
    //   .catch(error => { console.log(error) })
  }

  render() {
    const { classes } = this.props;
    const { username, userpassword, toast } = this.state
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username" value={username}
              onChange={this.changeHandler}
              autoFocus
              autoComplete=""
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="userpassword" value={userpassword} onChange={this.changeHandler}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.doLogin}
            >
              Sign In
          </Button>
            <Grid container>

              <Grid item>
                <Link href="signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>



        <div className={classes.root}>
          {toast ==="sucess" &&
            <Alert variant="filled" severity="success"> This is a success alert — check it out! </Alert> }
             {toast ==="sucess" &&
            <Alert variant="filled" severity="error"> This is an error alert — check it out!</Alert>
          }

        </div>

      </Container>
    )
  }
}
export default LoginComponent = withStyles(styles, { withTheme: true })(LoginComponent)

