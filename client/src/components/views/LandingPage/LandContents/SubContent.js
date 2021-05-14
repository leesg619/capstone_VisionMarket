import React from 'react';
import { Grid } from '@material-ui/core';
import Content from './Content';


// <Grid item xs={2} /> 경우 가운데 정렬이며, 창모드가 작아져도 가운데 정렬을 유지한다.
// <Grid item xs={0} sm={2} /> 경우 창이 클 경우 가운데 정렬이지만, 작아지는 경우 왼쪽 정렬로 바뀐다.
// <Grid item xs={12} sm={8}> 경우 창이 작아질 경우 즉, xs 일 경우에는 내용으로 꽉 채워진다는 의미
const SubContent = () => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Content />
        </Grid>
    </Grid>
  );
};

export default SubContent;
