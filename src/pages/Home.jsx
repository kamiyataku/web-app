import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/system';

import backgroundVideo from '../Umi.mp4';  // 背景画像のパスを指定


const StyledHome = styled('div')({
  display: 'flex',
  minHeight: '100vh',
});

const Content = styled('div')({
  flexGrow: 1,
  padding: 0,
  position: 'relative',  // コンテナを相対位置に設定
});

const VideoBackground = styled('video')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const OverlayText = styled('div')({
  position: 'absolute',  // テキストを絶対位置に設定
  top: '30%',  // 上から50%の位置
  left: '60%',  // 左から50%の位置
  textAlign: 'center',
  transform: 'translate(-50%, -50%)',  // テキストを中央に配置
  fontSize: '24px',
  color: 'white',  // テキストの色を設定
});

function Home() {
  return (
    <StyledHome>
    <CssBaseline />
      <Content>
        <VideoBackground autoPlay muted loop>
            <source src={backgroundVideo} type="video/mp4" />
        </VideoBackground>
        <OverlayText>
        <h1>ホームページ</h1>
        </OverlayText>
      </Content>
    </StyledHome>
  );
}

export default Home;