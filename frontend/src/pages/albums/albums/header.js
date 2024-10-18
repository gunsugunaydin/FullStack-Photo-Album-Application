import React from 'react';
import { Link } from 'react-router-dom';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { fetchDeleteDataWithAuth } from 'client/client';

const Header = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const handleDelete = () => {
    const isConfirmed = window.confirm('Are you sure you want to delete the Album?');
    if (isConfirmed) {
      console.log('Item deleted!');
      fetchDeleteDataWithAuth('/albums/'+id+"/delete")
      .then(res => {
        console.log(res)
        window.location.href = '/'; 
      })     
    } else {
      console.log('Delete operation cancelled');
      
    }
  }
  
  return (
    <AppBar position="static" sx={{ backgroundColor: '#191970' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Photo Gallery
        </Typography>

        <Button
          component={Link}
          to={`/album/edit?id=${id}`}
          color="inherit"
          variant="contained"
          sx={{ mr: 2, backgroundColor: '#799edc', '&:hover': { backgroundColor: '#A7C7E7' } }}
        >
          Edit Album
        </Button>
  
        <Button
          component={Link}
          to={`/album/upload?id=${id}`}
          color="inherit"
          variant="contained"
          sx={{ mr: 2, backgroundColor: '#818589', '&:hover': { backgroundColor: '#C0C0C0' } }}
        >
          Upload Photos
        </Button>
        <Button
          onClick={handleDelete}
          color="inherit"
          variant="contained"
          sx={{ backgroundColor: '#8B0000', '&:hover': { backgroundColor: '#F88379' } }}
        >
          Delete Album
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
