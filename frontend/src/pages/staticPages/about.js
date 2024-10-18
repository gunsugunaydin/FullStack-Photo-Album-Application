// material-ui
import { Typography, Box, Grid, Divider, Button } from '@mui/material';
import MainCard from 'components/MainCard';

const AlbumsPage = () => {
  return (
    <MainCard sx={{ padding: '32px', boxShadow: 3 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        sx={{ 
          marginBottom: '24px', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          color: '#1976d2' 
        }}>
        About the Photo Album Management Project
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          marginBottom: '24px', 
          textAlign: 'justify', 
          lineHeight: 1.6 
        }}>
        The Photo Album Management project is a modern web application that allows users to easily manage their photo albums. Users can upload photos, create and edit albums, and securely store their memories. This application provides an intuitive interface for organizing and sharing your favorite moments.
      </Typography>
      
      <Divider sx={{ margin: '24px 0' }} />

      <Typography 
        variant="h5" 
        sx={{ 
          fontWeight: 'bold', 
          marginBottom: '16px', 
          textAlign: 'center', 
          color: '#1976d2' 
        }}>
        Key Features:
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: '24px' }}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: '#e3f2fd', borderRadius: '8px', padding: '16px' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              🔒 User Authentication: Secure login and logout.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: '#e3f2fd', borderRadius: '8px', padding: '16px' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              📁 Album Management: Create, update, and delete albums.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: '#e3f2fd', borderRadius: '8px', padding: '16px' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              🖼️ Photo Management: Upload, edit, and delete photos.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ margin: '24px 0' }} />

      <Typography 
        variant="h5" 
        sx={{ 
          fontWeight: 'bold', 
          marginBottom: '16px', 
          textAlign: 'center', 
          color: '#1976d2' 
        }}>
        Technologies Used:
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          marginBottom: '24px', 
          textAlign: 'justify', 
          lineHeight: 1.6 
        }}>
        The application is built using modern technologies such as React.js, Axios, Bootstrap, and JWT, ensuring a responsive and dynamic user experience.
      </Typography>

      <Divider sx={{ margin: '24px 0' }} />

      <Typography 
        variant="h5" 
        sx={{ 
          fontWeight: 'bold', 
          marginBottom: '16px', 
          textAlign: 'center', 
          color: '#1976d2' 
        }}>
        Contact Information:
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        📧 Email: <strong>gunsugunay98@gmail.com</strong>
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        🔗 LinkedIn: <a href="https://www.linkedin.com/in/gunsugunaydin/" target="_blank" rel="noopener noreferrer">View my LinkedIn Profile</a>
      </Typography>
      
      <Box sx={{ marginTop: '32px', textAlign: 'center' }}>
        <Button variant="contained" color="primary" href="/" sx={{ marginRight: '8px' }}>
          Back to Home
        </Button>
      </Box>
    </MainCard>
  );
};

export default AlbumsPage;
