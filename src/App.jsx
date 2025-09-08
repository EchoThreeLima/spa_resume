import React from 'react'
import { 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Avatar,
  Chip,
  Divider
} from '@mui/material'
import { GitHub, LinkedIn, Email, Phone, LocationOn } from '@mui/icons-material'

// Import your images
import brandonSuit from './assets/images/brandon_suit.webp'
import brandonMilitary from './assets/images/brandon_military.webp'
import brandonFamily from './assets/images/brandon_family.webp'
import brandonAssociates from './assets/images/brandon_associates.webp'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Navigation Header */}
      <AppBar position="fixed" sx={{ 
        backgroundColor: 'rgba(5, 150, 105, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Brandon Lott
          </Typography>
          <Button color="inherit" onClick={() => scrollToSection('hero')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('project-management')}>
            Project Management
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('healthcare')}>
            Healthcare
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('military')}>
            Military
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('family')}>
            Family
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('contact')}>
            Contact
          </Button>
          <IconButton color="inherit" href="https://github.com" target="_blank">
            <GitHub />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com/in/brandon-lott-664728108/" target="_blank">
            <LinkedIn />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      {/* Hero Section, catch attention with a bold headline */}
      <Box 
        id="hero"
        sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center',
          background: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)',
          color: 'white',
          pt: 8
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                  Hello, I'm Brandon
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ mb: 3, opacity: 0.9 }}>
                  Project Manager | Healthcare Professional | Veteran | Family Man
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
                  Bringing dedication, customer care, leadership, and expertise to every challenge
                </Typography>
                 <Button 
                   variant="contained" 
                   size="medium"
                   sx={{ 
                     backgroundColor: 'rgba(255,255,255,0.15)', 
                     color: 'white',
                     backdropFilter: 'blur(10px)',
                     border: '1px solid rgba(255,255,255,0.2)',
                     borderRadius: 3,
                     px: 4,
                     py: 1.5,
                     mr: 2,
                     mb: 2,
                     fontWeight: 600,
                     textTransform: 'none',
                     fontSize: '1.1rem',
                     boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                     '&:hover': { 
                       backgroundColor: 'rgba(255,255,255,0.25)',
                       transform: 'translateY(-2px)',
                       boxShadow: '0 16px 50px rgba(0,0,0,0.3)'
                     }
                   }}
                   onClick={() => scrollToSection('project-management')}
                 >
                   Project Management
                 </Button>
                 <Button 
                   variant="contained" 
                   size="medium"
                   sx={{ 
                     backgroundColor: 'rgba(255,255,255,0.15)', 
                     color: 'white',
                     backdropFilter: 'blur(10px)',
                     border: '1px solid rgba(255,255,255,0.2)',
                     borderRadius: 3,
                     px: 4,
                     py: 1.5,
                     mr: 2,
                     mb: 2,
                     fontWeight: 600,
                     textTransform: 'none',
                     fontSize: '1.1rem',
                     boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                     '&:hover': { 
                       backgroundColor: 'rgba(255,255,255,0.25)',
                       transform: 'translateY(-2px)',
                       boxShadow: '0 16px 50px rgba(0,0,0,0.3)'
                     }
                   }}
                   onClick={() => scrollToSection('healthcare')}
                 >
                  Healthcare
                 </Button>
                 <Button 
                   variant="contained" 
                   size="large"
                   sx={{ 
                     backgroundColor: 'rgba(255,255,255,0.15)', 
                     color: 'white',
                     backdropFilter: 'blur(10px)',
                     border: '1px solid rgba(255,255,255,0.2)',
                     borderRadius: 3,
                     px: 4,
                     py: 1.5,
                     mr: 2,
                     mb: 2,
                     fontWeight: 600,
                     textTransform: 'none',
                     fontSize: '1.1rem',
                     boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                     '&:hover': { 
                       backgroundColor: 'rgba(255,255,255,0.25)',
                       transform: 'translateY(-2px)',
                       boxShadow: '0 12px 35px rgba(0,0,0,0.3)'
                     }
                   }}
                   onClick={() => scrollToSection('military')}
                 >
                   Military Service
                 </Button>
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.15)', 
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    mr: 2,
                    mb: 2,
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    '&:hover': { 
                      backgroundColor: 'rgba(255,255,255,0.25)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(0,0,0,0.3)'
                    }
                  }}
                  onClick={() => scrollToSection('family')}
                >
                   Family
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                <Avatar
                  src={brandonSuit}
                  alt="Brandon in suit"
                  sx={{ 
                    width: { xs: 200, md: 300 }, 
                    height: { xs: 400, md: 500 },
                    border: '4px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    bgcolor: 'grey'
                  }}
                />
          </Box>
            </Grid>
          </Grid>
        </Container>
          </Box>

      {/* Project Management Section */}
      <Box id="project-management" sx={{ 
        py: 8, 
        backgroundColor: '#f8fafc',
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(5, 150, 105, 0.05) 0%, transparent 50%)'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Project Management
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            Leading teams and delivering results through strategic planning and execution
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  borderColor: 'rgba(16, 185, 129, 0.2)'
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Avatar
                    src={brandonSuit}
                    alt="Brandon in professional setting"
                    sx={{ 
                      width: 120, 
                      height: 120, 
                      mx: 'auto', 
                      mb: 2,
                      border: '3px solid rgba(16, 185, 129, 0.2)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Typography variant="h5" gutterBottom sx={{ color: '#059669', fontWeight: 600 }}>
                    Strategic Planning
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Developing comprehensive project roadmaps, identifying critical milestones, and ensuring successful delivery within scope and timeline.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  borderColor: 'rgba(16, 185, 129, 0.2)'
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Avatar
                    src={brandonAssociates}
                    alt="Brandon with team"
                    sx={{ 
                      width: 120, 
                      height: 120, 
                      mx: 'auto', 
                      mb: 2,
                      border: '3px solid rgba(16, 185, 129, 0.2)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Typography variant="h5" gutterBottom sx={{ color: '#059669', fontWeight: 600 }}>
                    Team Leadership
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Building high-performing teams through effective communication, mentorship, and fostering collaborative environments.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  borderColor: 'rgba(16, 185, 129, 0.2)'
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Avatar
                    src={brandonSuit}
                    alt="Brandon managing projects"
                    sx={{ 
                      width: 120, 
                      height: 120, 
                      mx: 'auto', 
                      mb: 2,
                      border: '3px solid rgba(16, 185, 129, 0.2)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Typography variant="h5" gutterBottom sx={{ color: '#059669', fontWeight: 600 }}>
                    Process Optimization
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Streamlining workflows, implementing best practices, and driving continuous improvement to maximize efficiency and quality.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Healthcare Section */}
      <Box id="healthcare" sx={{ 
        py: 8,
        backgroundColor: 'white',
        backgroundImage: 'linear-gradient(135deg, rgba(16, 185, 129, 0.02) 0%, rgba(5, 150, 105, 0.02) 100%)'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Healthcare Professional
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            Dedicated to improving patient outcomes through compassionate care and clinical excellence
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.12)'
                }
              }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#059669', fontWeight: 600 }}>
                    Patient Care
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip label="Compassionate Care" sx={{ 
                      mr: 1, mb: 1,
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      fontWeight: 500
                    }} />
                    <Chip label="Patient Advocacy" sx={{ 
                      mr: 1, mb: 1,
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      fontWeight: 500
                    }} />
                    <Chip label="Clinical Excellence" sx={{ 
                      mr: 1, mb: 1,
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      fontWeight: 500
                    }} />
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    Providing compassionate, patient-centered care with focus on dignity, respect, and clinical excellence.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card sx={{
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.12)'
                }
              }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#059669', fontWeight: 600 }}>
                    Communication
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip label="Public Speaking" sx={{ 
                      mr: 1, mb: 1,
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      fontWeight: 500
                    }} />
                    <Chip label="Written Communication" sx={{ 
                      mr: 1, mb: 1,
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      fontWeight: 500
                    }} />
                    <Chip label="Interpersonal Skills" sx={{ 
                      mr: 1, mb: 1,
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      fontWeight: 500
                    }} />
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    Excellent communication skills across all levels of an organization.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card sx={{
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.12)'
                }
              }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#059669', fontWeight: 600 }}>
                    Problem Solving
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip label="Critical Thinking" sx={{ 
                      mr: 1, mb: 1,
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      fontWeight: 500
                    }} />
                    <Chip label="Analytical Skills" sx={{ 
                      mr: 1, mb: 1,
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      fontWeight: 500
                    }} />
                    <Chip label="Innovation" sx={{ 
                      mr: 1, mb: 1,
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      fontWeight: 500
                    }} />
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    Proven ability to analyze complex situations and develop effective solutions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card sx={{
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.12)'
                }
              }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#059669', fontWeight: 600 }}>
                    Adaptability
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip label="Change Management" sx={{ 
                      mr: 1, mb: 1,
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      fontWeight: 500
                    }} />
                    <Chip label="Flexibility" sx={{ 
                      mr: 1, mb: 1,
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      fontWeight: 500
                    }} />
                    <Chip label="Continuous Learning" sx={{ 
                      mr: 1, mb: 1,
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      fontWeight: 500
                    }} />
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    Thrives in dynamic environments and embraces new challenges.
            </Typography>
          </CardContent>
        </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Military Service Section */}
      <Box id="military" sx={{ 
        py: 8, 
        backgroundColor: '#f8fafc',
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(5, 150, 105, 0.05) 0%, transparent 50%)'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Military Service
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            Proud veteran with a commitment to service, honor, and excellence
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  borderColor: 'rgba(16, 185, 129, 0.2)'
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Avatar
                    src={brandonMilitary}
                    alt="Brandon in military uniform"
                    sx={{ 
                      width: 120, 
                      height: 120, 
                      mx: 'auto', 
                      mb: 2,
                      border: '3px solid rgba(16, 185, 129, 0.2)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Typography variant="h5" gutterBottom sx={{ color: '#059669', fontWeight: 600 }}>
                    Leadership Under Pressure
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Developed exceptional leadership skills in high-stakes environments, making critical decisions with limited information.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  borderColor: 'rgba(16, 185, 129, 0.2)'
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Avatar
                    src={brandonMilitary}
                    alt="Brandon in service"
                    sx={{ 
                      width: 120, 
                      height: 120, 
                      mx: 'auto', 
                      mb: 2,
                      border: '3px solid rgba(16, 185, 129, 0.2)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Typography variant="h5" gutterBottom sx={{ color: '#059669', fontWeight: 600 }}>
                    Discipline & Honor
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Instilled with core values of integrity, discipline, and commitment to mission success and team welfare.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  borderColor: 'rgba(16, 185, 129, 0.2)'
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Avatar
                    src={brandonMilitary}
                    alt="Brandon veteran"
                    sx={{ 
                      width: 120, 
                      height: 120, 
                      mx: 'auto', 
                      mb: 2,
                      border: '3px solid rgba(16, 185, 129, 0.2)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Typography variant="h5" gutterBottom sx={{ color: '#059669', fontWeight: 600 }}>
                    Service to Country
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Honored to have served my country with dedication, protecting freedom and supporting fellow service members.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Family Section */}
      <Box id="family" sx={{ 
        py: 8,
        backgroundColor: 'white',
        backgroundImage: 'linear-gradient(135deg, rgba(16, 185, 129, 0.02) 0%, rgba(5, 150, 105, 0.02) 100%)'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Family Values
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            Family is the foundation of everything I do - my source of strength and motivation
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  borderColor: 'rgba(16, 185, 129, 0.2)'
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Avatar
                    src={brandonFamily}
                    alt="Brandon with family"
                    sx={{ 
                      width: 120, 
                      height: 120, 
                      mx: 'auto', 
                      mb: 2,
                      border: '3px solid rgba(16, 185, 129, 0.2)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Typography variant="h5" gutterBottom sx={{ color: '#059669', fontWeight: 600 }}>
                    Work-Life Balance
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Committed to maintaining a healthy balance between professional excellence and quality time with loved ones.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  borderColor: 'rgba(16, 185, 129, 0.2)'
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Avatar
                    src={brandonFamily}
                    alt="Brandon family values"
                    sx={{ 
                      width: 120, 
                      height: 120, 
                      mx: 'auto', 
                      mb: 2,
                      border: '3px solid rgba(16, 185, 129, 0.2)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Typography variant="h5" gutterBottom sx={{ color: '#059669', fontWeight: 600 }}>
                    Core Values
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Family teaches the importance of loyalty, compassion, and perseverance - values that guide all my decisions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  borderColor: 'rgba(16, 185, 129, 0.2)'
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Avatar
                    src={brandonFamily}
                    alt="Brandon with loved ones"
                    sx={{ 
                      width: 120, 
                      height: 120, 
                      mx: 'auto', 
                      mb: 2,
                      border: '3px solid rgba(16, 185, 129, 0.2)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Typography variant="h5" gutterBottom sx={{ color: '#059669', fontWeight: 600 }}>
                    Legacy & Future
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Working to build a better future for my family while honoring the legacy of those who came before us.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ 
        py: 8, 
        background: 'linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)',
        color: 'white',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Get In Touch
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 6, opacity: 0.9 }}>
            Ready to connect and explore opportunities together
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4} textAlign="center">
              <IconButton sx={{ color: 'white', mb: 2 }}>
                <Email sx={{ fontSize: 40 }} />
              </IconButton>
              <Typography variant="h6" gutterBottom>
                Email
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                brandon.lott@example.com
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4} textAlign="center">
              <IconButton sx={{ color: 'white', mb: 2 }}>
                <Phone sx={{ fontSize: 40 }} />
              </IconButton>
              <Typography variant="h6" gutterBottom>
                Phone
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                (555) 123-4567
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4} textAlign="center">
              <IconButton sx={{ color: 'white', mb: 2 }}>
                <LocationOn sx={{ fontSize: 40 }} />
              </IconButton>
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Your City, State
              </Typography>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.3)' }} />
          
          <Box textAlign="center">
            <Typography variant="h6" gutterBottom>
              Connect with me on social media
            </Typography>
            <Box>
              <IconButton 
                sx={{ 
                  color: 'white', 
                  mx: 1,
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                }}
                href="https://github.com"
                target="_blank"
              >
                <GitHub sx={{ fontSize: 30 }} />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'white', 
                  mx: 1,
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                }}
                href="https://linkedin.com"
                target="_blank"
              >
                <LinkedIn sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
      
      {/* Footer */}
      <Box sx={{ 
        py: 3, 
        backgroundColor: '#1f2937', 
        color: 'white', 
        textAlign: 'center',
        borderTop: '1px solid rgba(16, 185, 129, 0.2)'
      }}>
        <Typography variant="body2">
          © 2024 Brandon Lott. Built with React & Material-UI.
        </Typography>
      </Box>
    </>
  )
}

export default App
