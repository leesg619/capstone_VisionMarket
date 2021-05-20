import { Grid } from '@material-ui/core';
import MyContent from "./MyContent";


function MyCategory() {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={0} sm={2}/>
        <Grid item xs={12} sm={8}>
          <MyContent />
        </Grid>
        <Grid item xs={0} sm={2}/>
      </Grid>
    </Grid>
  );
}

export default MyCategory;
