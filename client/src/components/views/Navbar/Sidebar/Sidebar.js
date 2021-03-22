import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

// material UI 에서 가장 중요한 요소인 Marterial UI의 CSS 값을 부여하기 위한 MakeStyles
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

// 보통 rcfe 단축어를 통해서 함수를 만들어내면 export default는 맨 아래에 새롭게 써주나,
// 쉽게 사용하면 바로 export를 해주면서 함수를 선언하는 방법을 쓸 수 있다.
export default function Sidebar(props) {
  const classes = useStyles();
  const [state, setState] = useState({
      top : false,
      left : false,
      right : false,
      bottom : false
  })
  // 마우스를 쓰지 못하는 환경에서 선택 할 수 있도록 tap, shift키를 이용해서 메뉴 아이콘 선택 가능
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  // list 상수는 입력된 값에 따라서 메뉴를 상단, 하단, 좌 우 에 둘지 결정하게 만들어준다.
  // 또한 결정된 메뉴의 위치에 따라서 해당 메뉴를 띄워주는 역할을 한다.
  const list = (anchor) => (
    // clsx는 값과 상황에 따라서 값을 선택하게 만들어주는 모듈이다.
    // 특히나 className 을 임의로 바꾸기 어려운 react에서 유용하게 사용된다.

    // classes라는 makeStyles를 통해 만든 style 중에서 보통의 경우에는 list Style을 가지게 하고
    // 만약 anchor, 즉, 메뉴의 위치가 'top' 혹은 'bottom' 일 경우에는 fullList 값을 가지게 한다.
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* List라는 Material-UI에 존재하는 태그를 사용했다.
          그리고 map을 사용해서 Inbox, Starred 등등의 내부 값을 하나씩 꺼내서 ListItem을 반복해서 사용하게 만들어줬다.
      */}
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      {/* 구분선 */}
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key={props.name}>
          <MenuIcon onClick={toggleDrawer(props.name, true)}/>
          <Drawer anchor={props.name} open={state[props.name]} onClose={toggleDrawer(props.name, false)}>
            {list(props.name)}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
