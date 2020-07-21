import Vue from "vue";
import Router from "vue-router";
import Header from "@/components/Header";
import Board from "@/components/Board";
import BoardDetail from "@/components/BoardDetail";
import BoardCreate from "@/components/BoardCreate";
import Login from "@/components/Login"; //로그인 경로 등록
import Gallery from "@/components/Gallery"; //갤러리 경로 등록
import BoardList from "@/components/BoardList"; //아코디언리스트 게시판등록

Vue.use(Router);

export default new Router({
  routes: [
    //라우터에 등록된 패스 정보
    {
      path: "/", //localhost:8080/의 '/'
      name: "Board",
      component: Board
    },
    {
      path: "/detail/:contentId",
      name: "BoardDetail",
      component: BoardDetail
    },
    {
      path: "/create/:contentId?",
      name: "BoardCreate",
      component: BoardCreate
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: Gallery
    },
    {
      path: "/boardlist",
      name: "BoardList",
      component: BoardList
    }
  ]
}); //라우터 인덱스 파일의 핵심!!!!
