import { Divider, makeStyles } from "@material-ui/core";
import Dashboard from './Dashboard';
import Store from './Store';

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop: theme.spacing(12)
  }
}))


function App() {

  const classes = useStyles();

  return (
    <div>
      <Store>
      <Dashboard className={classes.root}/>
      </Store>
    </div>
  );
}

export default App;
