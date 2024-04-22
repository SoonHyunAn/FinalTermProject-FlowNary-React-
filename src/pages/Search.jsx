import React, { useEffect, useState } from "react";
import { Avatar, Box, Chip, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

import ImageIcon from '@mui/icons-material/Image';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import SnsBar from '../components/Important/SnsBar';
import Aside from "../components/Important/Aside";
import '../css/Search_Profile_Mypage.css';

export default function Search() {

  const [items, setItems] = useState([1, 2, 3, 4]); // Initial items

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const loadMoreItems = () => {

    const newItems = [5, 6, 7, 8];
    setItems(prevItems => [...prevItems, ...newItems]);
  };
  return (
    <>
      <SnsBar />
      <Stack direction="row" spacing={0} sx={{ height: "100vh" }}>
        <Stack direction="column" spacing={2} sx={{ flex: 0.3, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <Aside />
        </Stack>
        <Stack direction="column" spacing={2} sx={{ flex: 1.5 }}>
          <Box sx={{ width: '100%' }}>
            <Grid container sx={{ padding: '20px' }}>
              <Grid item xs={0} lg={2}>
              </Grid>
              <Grid item xs={12} lg={8}>

                <Stack direction={'row'}>
                  <Avatar sx={{ width: '130px', height: '130px', margin: '20px', fontSize: '60px' }}>
                    img
                  </Avatar>
                  <Stack sx={{ padding: '20px' }} fontWeight={'bold'}>
                    <Typography variant="h4" fontWeight={'bold'}>
                      # search_info
                    </Typography>
                    <Stack direction={'row'} spacing={2} sx={{ marginTop: '10px', marginBottom: '15px' }}>
                      <Box sx={{ cursor: 'pointer' }}>
                        게시물
                      </Box>
                      <Box sx={{ cursor: 'pointer' }}>
                        10.2k
                      </Box>
                    </Stack>
                    <Stack direction={'row'} spacing={2}>
                    <button className="msg_button" ><span style={{fontSize:'23px',fontWeight:'bolder',}}>팔로우</span></button>
                    </Stack>
                  </Stack>
                </Stack>
                <Divider sx={{ marginTop: '20px', marginBottom: '10px' }}><Chip label="인기 게시물"></Chip></Divider>

                <Stack direction="row" justifyContent="center" alignItems='center' spacing={5}>
                  <Stack direction="row" sx={{ cursor: 'pointer' }}>
                    <ImageIcon sx={{ fontSize: '15px' }} />
                    <Typography sx={{ fontSize: '12px' }}>사진</Typography>
                  </Stack>
                  <Stack direction="row" sx={{ cursor: 'pointer' }}>
                    <PlayCircleIcon sx={{ fontSize: '15px' }} />
                    <Typography sx={{ fontSize: '12px' }}>동영상</Typography>
                  </Stack>
                </Stack>

                <Grid container>
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={2} className="uploadlist">
                      <Box className="uploaditem">
                        1
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={2} className="uploadlist">
                      <Box className="uploaditem">
                        2
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={2} className="uploadlist">
                      <Box className="uploaditem">
                        3
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={2} className="uploadlist">
                      <Box className="uploaditem">
                        4
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={2} className="uploadlist">
                      <Box className="uploaditem">
                        5
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={2} className="uploadlist">
                      <Box className="uploaditem">
                        6
                      </Box>
                    </Paper>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </>
  )
}

