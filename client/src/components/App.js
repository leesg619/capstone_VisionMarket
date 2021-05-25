import { react, Suspense } from 'react'
import { CssBaseline } from '@material-ui/core';

// react에서 가장 중요한 개념인 dom에 router 개념을 더해 선택할 수 있게 만들어준다.
import { Switch, Route } from "react-router-dom"
import './App.css';
import Auth from '../hoc/auth';

// 페이지에 대한 import 값
//import LandingPage from './views/LandingPage/LandingPage'
import MainPage from './views/LandingPage/MainPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import EnrollmentCreditPage from './views/Paymovement/EnrollmentCreditPage';
import PayPage from './views/Paymovement/PayPage';
import LoadingAndSuccess from './views/Paymovement/LoadingAndSuccess';

import PostDetailPage from './views/PostPage/PostDetailPage';
import PostSearchListPage from './views/PostPage/PostSearchListPage';
import ShoppingBascket from './views/ShoppingBaskcet/ShoppingBascket';
import Nav from './views/Navbar/Nav';
import Chat from './views/AIChat/Chat';
import Category from './views/Category/Category';
import Introduce from './views/Introduce/Introduce';
import MyCategory from './views/MyPage/MyCategory';
import DeliveryCard from './views/MyPage/MyPageComponent/DeliveryCard';
import Privacy from './views/MyPage/MyPageComponent/Privacy';
import Order from './views/MyPage/MyPageComponent/Order';
import ReviewWrite from './views/MyPage/MyPageComponent/ReviewWrite';
import PointPage from './views/MyPage/MyPageComponent/PointPage';
import ReviewPage from './views/MyPage/MyPageComponent/ReviewPage';
import QnaPage from './views/MyPage/MyPageComponent/QnaPage';

function App() {
  return (
    <CssBaseline>
    {/* // Suspense는 Suspense안에 있는 태그 값에 접근하기 전에 선행 후에 접근하게 된다.
    // fallback 이라는 속성을 통해서 아직 데이터가 불러와지지 않았을 경우에 보여지는 화면을 만들어준다. */}
    <Suspense fallback={(<div>...Loding Now</div>)}>
      <Nav/>
      <Switch>
        {/* Switch & case 문과 비슷하게 해석하면 쉽게 접근 가능
            Route는 내가 원하는 URL 경로를 만들어줌
            속성 값의 path는 해당하는 URL 경로를 의미함, /는 빈 경로, 계속해서 경로를 이어서 만들어 줄 수 있음
            쉽게 말하면 이 곳에서 URL 경로를 관리함 ( Front로 보여주는 경로만 )
        */}

        {/* sh- 본래 취지에 맞게 속성 재설정 */}
        <Route exact path="/" component={Auth(MainPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/card" component={EnrollmentCreditPage} />
        <Route exact path="/dopay" component={PayPage} />

        <Route exact path="/MyCategory" component={Auth(MyCategory, true)} />
        <Route exact path="/postDetail/:postId" component={Auth(PostDetailPage, null)} />
        <Route exact path="/postsearchlist" component={Auth(PostSearchListPage, null)} />


        <Route exact path="/shoppingBascket" component={Auth(ShoppingBascket,true)} />

        <Route exact path="/chat" component={Chat} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/introduce" component={Introduce} />

        <Route exact path="/deliveryCard" component={DeliveryCard} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/order" component={Auth(Order, true)}  />
        <Route exact path="/reviewWrite" component={ReviewWrite} />
        <Route exact path="/reviewPage" component={ReviewPage} />
        <Route exact path="/pointPage"component={Auth(PointPage, true)}  />
        <Route exact path="/qnaPage" component={Auth(QnaPage, true)} />
        
        <Route exact paht="/loading" component={LoadingAndSuccess} />
        <Route exact path="/reviewPage" component={ReviewPage} />

      </Switch>
    </Suspense>
    </CssBaseline>
  );
}

export default App;
