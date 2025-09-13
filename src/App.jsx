import React, { useState } from 'react'
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
  Divider,
  Modal,
  Fade,
  Backdrop
} from '@mui/material'
import { GitHub, LinkedIn, Email, LocationOn, Download } from '@mui/icons-material'

// Import your images
import brandonSuit from './assets/images/brandon_suit.webp'
import brandonMilitary from './assets/images/brandon_military.webp'
import brandonFamily from './assets/images/brandon_family.webp'
import brandonHealthcare from './assets/images/brandon_healthcare.webp'
import brandonResumePDF from './assets/png/resume_brandon.pdf'
import brandonLive from './assets/images/brandon_live.webp'

function App() {
  const [dataAnalyticsOpen, setDataAnalyticsOpen] = useState(false)
  const [strategicPlanningOpen, setStrategicPlanningOpen] = useState(false)
  const [teamLeadershipOpen, setTeamLeadershipOpen] = useState(false)
  const [processOptimizationOpen, setProcessOptimizationOpen] = useState(false)
  const [patientCareOpen, setPatientCareOpen] = useState(false)
  const [healthcareAdminOpen, setHealthcareAdminOpen] = useState(false)
  const [continuousLearningOpen, setContinuousLearningOpen] = useState(false)
  const [leadershipPressureOpen, setLeadershipPressureOpen] = useState(false)
  const [disciplineHonorOpen, setDisciplineHonorOpen] = useState(false)
  const [serviceCountryOpen, setServiceCountryOpen] = useState(false)
  const [workLifeBalanceOpen, setWorkLifeBalanceOpen] = useState(false)
  const [coreValuesOpen, setCoreValuesOpen] = useState(false)
  const [legacyFutureOpen, setLegacyFutureOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDataAnalyticsOpen = () => setDataAnalyticsOpen(true)
  const handleDataAnalyticsClose = () => setDataAnalyticsOpen(false)
  
  const handleStrategicPlanningOpen = () => setStrategicPlanningOpen(true)
  const handleStrategicPlanningClose = () => setStrategicPlanningOpen(false)
  
  const handleTeamLeadershipOpen = () => setTeamLeadershipOpen(true)
  const handleTeamLeadershipClose = () => setTeamLeadershipOpen(false)
  
  const handleProcessOptimizationOpen = () => setProcessOptimizationOpen(true)
  const handleProcessOptimizationClose = () => setProcessOptimizationOpen(false)
  
  const handlePatientCareOpen = () => setPatientCareOpen(true)
  const handlePatientCareClose = () => setPatientCareOpen(false)
  
  const handleHealthcareAdminOpen = () => setHealthcareAdminOpen(true)
  const handleHealthcareAdminClose = () => setHealthcareAdminOpen(false)
  
  const handleContinuousLearningOpen = () => setContinuousLearningOpen(true)
  const handleContinuousLearningClose = () => setContinuousLearningOpen(false)
  
  const handleLeadershipPressureOpen = () => setLeadershipPressureOpen(true)
  const handleLeadershipPressureClose = () => setLeadershipPressureOpen(false)
  
  const handleDisciplineHonorOpen = () => setDisciplineHonorOpen(true)
  const handleDisciplineHonorClose = () => setDisciplineHonorOpen(false)
  
  const handleServiceCountryOpen = () => setServiceCountryOpen(true)
  const handleServiceCountryClose = () => setServiceCountryOpen(false)
  
  const handleWorkLifeBalanceOpen = () => setWorkLifeBalanceOpen(true)
  const handleWorkLifeBalanceClose = () => setWorkLifeBalanceOpen(false)
  
  const handleCoreValuesOpen = () => setCoreValuesOpen(true)
  const handleCoreValuesClose = () => setCoreValuesOpen(false)
  
  const handleLegacyFutureOpen = () => setLegacyFutureOpen(true)
  const handleLegacyFutureClose = () => setLegacyFutureOpen(false)

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = brandonResumePDF + '?t=' + new Date().getTime()
    link.download = 'Brandon_Lott_Resume.pdf'
    link.setAttribute('type', 'application/pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
          <IconButton color="inherit" href="https://github.com/EchoThreeLima" target="_blank">
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
          pt: 12
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                  Hello, I'm Brandon
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
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
                <Button 
                  variant="contained" 
                  size="large"
                  startIcon={<Download />}
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.9)', 
                    color: '#059669',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    mr: 2,
                    mb: 2,
                    fontWeight: 700,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    '&:hover': { 
                      backgroundColor: 'rgba(255,255,255,1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
                      borderColor: 'rgba(5, 150, 105, 0.3)'
                    }
                  }}
                  onClick={handleResumeDownload}
                >
                   Resume
                </Button>
          </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                <Avatar
                  src={brandonLive}
                  alt="Brandon in suit"
                  sx={{ 
                    width: { xs: 200, md: 280 }, 
                    height: { xs: 400, md: 425 },
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

          <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
            {/* Left side - Fixed Width Image */}
            <Box
              sx={{
                flex: '0 0 400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                pt: 0,
              }}
            >
              <Box
                component="img"
                src={brandonSuit}
                alt="Brandon in professional setting"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: '2px solid rgba(16, 185, 129, 0.2)'
                }}
              />
            </Box>

            {/* Right side - Flexible Cards */}
            <Box sx={{ flex: '1 1 auto' }}>
              <Grid container spacing={2}>
                {/* Data Analytics Card */}
                <Grid item xs={12} md={4}>
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'left',
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
                    <CardContent sx={{ p: 2 }}>
                      <Button 
                        variant="text"
                        onClick={handleDataAnalyticsOpen}
                        sx={{
                          color: '#059669',
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          textTransform: 'none',
                          p: 0,
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Data Analytics
                      </Button>
                      <Typography variant="body2" color="text.secondary">
                        Leveraging data-driven insights to inform decision-making, optimize performance, and identify growth opportunities.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Strategic Planning Card */}
                <Grid item xs={12} md={4}>
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'left',
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
                    <CardContent sx={{ p: 2 }}>
            <Button 
                        variant="text"
                        onClick={handleStrategicPlanningOpen}
                        sx={{
                          color: '#059669',
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          textTransform: 'none',
                          p: 0,
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Strategic Planning
            </Button>
                      <Typography variant="body2" color="text.secondary">
                        Developing comprehensive project roadmaps, identifying critical milestones, and ensuring successful delivery within scope and timeline.
            </Typography>
          </CardContent>
        </Card>
                </Grid>

                {/* Team Leadership Card */}
                <Grid item xs={12} md={4}>
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'left',
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
                    <CardContent sx={{ p: 2 }}>
                      <Button
                        variant="text"
                        onClick={handleTeamLeadershipOpen}
                        sx={{
                          color: '#059669',
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          textTransform: 'none',
                          p: 0,
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Team Leadership
                      </Button>
                      <Typography variant="body2" color="text.secondary">
                        Building high-performing teams through effective communication, mentorship, and fostering collaborative environments.
        </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Process Optimization Card */}
                <Grid item xs={12} md={4}>
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'left',
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
                    <CardContent sx={{ p: 2 }}>
                      <Button
                        variant="text"
                        onClick={handleProcessOptimizationOpen}
                        sx={{
                          color: '#059669',
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          textTransform: 'none',
                          p: 0,
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Process Optimization
                      </Button>
                      <Typography variant="body2" color="text.secondary">
                        Streamlining workflows, implementing best practices, and driving continuous improvement to maximize efficiency and quality.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
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

          <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
            {/* Left side - Flexible Cards */}
            <Box sx={{ flex: '1 1 auto' }}>
              <Grid container spacing={2}>
                {/* Patient Care Card */}
                <Grid item xs={12} md={4}>
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'left',
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
                    <CardContent sx={{ p: 2 }}>
                      <Button
                        variant="text"
                        onClick={handlePatientCareOpen}
                        sx={{
                          color: '#059669',
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          textTransform: 'none',
                          p: 0,
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Patient Care
                      </Button>
                      <Typography variant="body2" color="text.secondary">
                        Managing healthcare operations, staffing, coordinating care teams, training, and ensuring a patient advocate mindset.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Healthcare Administration Card */}
                <Grid item xs={12} md={4}>
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'left',
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
                    <CardContent sx={{ p: 2 }}>
                      <Button
                        variant="text"
                        onClick={handleHealthcareAdminOpen}
                        sx={{
                          color: '#059669',
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          textTransform: 'none',
                          p: 0,
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Healthcare Administration
                      </Button>
                      <Typography variant="body2" color="text.secondary">
                        Managing healthcare operations, coordinating care teams, and ensuring compliance with medical standards and regulations.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Continuous Learning Card */}
                <Grid item xs={12} md={4}>
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'left',
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
                    <CardContent sx={{ p: 2 }}>
            <Button 
                        variant="text"
                        onClick={handleContinuousLearningOpen}
                        sx={{
                          color: '#059669',
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          textTransform: 'none',
                          p: 0,
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Continuous Education
                      </Button>
                      <Typography variant="body2" color="text.secondary">
                        Staying current with medical advances, best practices, and continuing education to provide the highest quality care.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>

            {/* Right side - Fixed Width Image */}
            <Box
              sx={{
                flex: '0 0 400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                pt: 0
              }}
            >
              <Box
                component="img"
                src={brandonHealthcare}
                alt="Brandon in healthcare setting"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: '2px solid rgba(16, 185, 129, 0.2)'
                }}
              />
            </Box>
          </Box>
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
            Military Service - USMC
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            Proud Marine Corps veteran with a commitment to service, honor, and excellence
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
            {/* Left side - Fixed Width Image */}
            <Box
              sx={{
                flex: '0 0 400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                pt: 0
              }}
            >
              <Box
                component="img"
                src={brandonMilitary}
                alt="Brandon in military uniform"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: '2px solid rgba(16, 185, 129, 0.2)'
                }}
              />
            </Box>

            {/* Right side - Flexible Cards */}
            <Box sx={{ flex: '1 1 auto' }}>
              <Grid container spacing={2}>
                {/* Leadership Under Pressure Card */}
                <Grid item xs={12} md={4}>
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'left',
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
                    <CardContent sx={{ p: 2 }}>
                      <Button
                        variant="text"
                        onClick={handleLeadershipPressureOpen}
                        sx={{
                          color: '#059669',
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          textTransform: 'none',
                          p: 0,
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Leadership Under Pressure
                      </Button>
                      <Typography variant="body2" color="text.secondary">
                        Developed exceptional leadership skills in high-stakes environments, making critical decisions with limited information.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Discipline & Honor Card */}
                <Grid item xs={12} md={4}>
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'left',
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
                    <CardContent sx={{ p: 2 }}>
                      <Button
                        variant="text"
                        onClick={handleDisciplineHonorOpen}
                        sx={{
                          color: '#059669',
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          textTransform: 'none',
                          p: 0,
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Discipline & Honor
                      </Button>
                      <Typography variant="body2" color="text.secondary">
                        Instilled with core values of integrity, discipline, honor, courage, and commitment to mission success and team welfare.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Service to Country Card */}
                <Grid item xs={12} md={4}>
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'left',
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
                    <CardContent sx={{ p: 2 }}>
                      <Button
                        variant="text"
                        onClick={handleServiceCountryOpen}
                        sx={{
                          color: '#059669',
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          textTransform: 'none',
                          p: 0,
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Service to Country
                      </Button>
                      <Typography variant="body2" color="text.secondary">
                        Honored to have served my country with dedication, protecting freedom and supporting fellow service members.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
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
          
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
            {/* Left side - Flexible Cards */}
            <Box sx={{ flex: '1 1 auto' }}>
              <Grid container spacing={2}>
                {/* Work-Life Balance Card */}
                <Grid item xs={12} md={4}>
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'left',
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
                    <CardContent sx={{ p: 2 }}>
                      <Button
                        variant="text"
                        onClick={handleWorkLifeBalanceOpen}
                        sx={{
                          color: '#059669',
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          textTransform: 'none',
                          p: 0,
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Work-Life Balance
                      </Button>
                      <Typography variant="body2" color="text.secondary">
                        Committed to maintaining a healthy balance between professional excellence and quality time with loved ones.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Core Values Card */}
                <Grid item xs={12} md={4}>
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'left',
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
                    <CardContent sx={{ p: 2 }}>
                      <Button
                        variant="text"
                        onClick={handleCoreValuesOpen}
                        sx={{
                          color: '#059669',
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          textTransform: 'none',
                          p: 0,
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Core Values
                      </Button>
                      <Typography variant="body2" color="text.secondary">
                        Family teaches the importance of loyalty, compassion, and perseverance - values that guide all my decisions.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Legacy & Future Card */}
                <Grid item xs={12} md={4}>
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'left',
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
                    <CardContent sx={{ p: 2 }}>
                      <Button
                        variant="text"
                        onClick={handleLegacyFutureOpen}
                        sx={{
                          color: '#059669',
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          textTransform: 'none',
                          p: 0,
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Legacy & Future
            </Button>
                      <Typography variant="body2" color="text.secondary">
                        Working to build a better future for my family and yours while honoring the legacy of those who came before us.
            </Typography>
          </CardContent>
        </Card>
                </Grid>
              </Grid>
            </Box>

            {/* Right side - Fixed Width Image */}
            <Box
              sx={{
                flex: '0 0 400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                pt: 0
              }}
            >
              <Box
                component="img"
                src={brandonFamily}
                alt="Brandon with family"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: '2px solid rgba(16, 185, 129, 0.2)'
                }}
              />
            </Box>
          </Box>
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
            <Grid item xs={12} md={6} textAlign="center">
              <IconButton sx={{ color: 'white', mb: 2 }}>
                <Email sx={{ fontSize: 40 }} />
              </IconButton>
              <Typography variant="h6" gutterBottom>
                Email
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                lott.work@gmail.com
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6} textAlign="center">
              <IconButton sx={{ color: 'white', mb: 2 }}>
                <LocationOn sx={{ fontSize: 40 }} />
              </IconButton>
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Fountain Inn, South Carolina
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
                href="https://github.com/EchoThreeLima"
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
                 href="https://linkedin.com/in/brandon-lott-664728108/"
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

      {/* Healthcare Professional Modals */}
      {/* Patient Care Modal */}
      <Modal
        open={patientCareOpen}
        onClose={handlePatientCareClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={patientCareOpen}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, maxWidth: '800px', maxHeight: '90vh',
            overflow: 'auto', bgcolor: 'background.paper', borderRadius: 4,
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)', p: 0, outline: 'none'
          }}>
            <Box sx={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white', p: 4, borderRadius: '16px 16px 0 0' }}>
              <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>Patient Care</Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>Compassionate, patient-centered healthcare delivery</Typography>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Care Philosophy</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Every patient deserves dignity, respect, and personalized attention. My approach focuses on treating the whole person, not just symptoms.</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Holistic Care" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Patient Dignity" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Personalized Attention" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Clinical Excellence</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Committed to the highest standards of medical practice through evidence-based care and continuous improvement.</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Evidence-Based" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Quality Assurance" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Record Keeping" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button variant="contained" onClick={handlePatientCareClose} sx={{ backgroundColor: '#059669', px: 4, py: 1.5, borderRadius: 3, '&:hover': { backgroundColor: '#047857' } }}>Close</Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Healthcare Administration Modal */}
      <Modal
        open={healthcareAdminOpen}
        onClose={handleHealthcareAdminClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={healthcareAdminOpen}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, maxWidth: '800px', maxHeight: '90vh',
            overflow: 'auto', bgcolor: 'background.paper', borderRadius: 4,
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)', p: 0, outline: 'none'
          }}>
            <Box sx={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white', p: 4, borderRadius: '16px 16px 0 0' }}>
              <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>Healthcare Administration</Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>Managing operations and ensuring quality care delivery</Typography>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Administrative Excellence</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Streamlining healthcare operations while maintaining the highest standards of patient care and regulatory compliance.</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Operations Management" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Regulatory Compliance" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Team Leadership" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="cGMP" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Corrective Action Reporting" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button variant="contained" onClick={handleHealthcareAdminClose} sx={{ backgroundColor: '#059669', px: 4, py: 1.5, borderRadius: 3, '&:hover': { backgroundColor: '#047857' } }}>Close</Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Continuous Learning Modal */}
      <Modal
        open={continuousLearningOpen}
        onClose={handleContinuousLearningClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={continuousLearningOpen}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, maxWidth: '800px', maxHeight: '90vh',
            overflow: 'auto', bgcolor: 'background.paper', borderRadius: 4,
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)', p: 0, outline: 'none'
          }}>
            <Box sx={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white', p: 4, borderRadius: '16px 16px 0 0' }}>
              <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>Continuous Learning</Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>Commitment to lifelong education and professional growth</Typography>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Professional Development</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Staying at the forefront of medical advances through continuous education, research, and professional development initiatives.</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Medical Education" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Research" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Best Practices" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Innovation" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button variant="contained" onClick={handleContinuousLearningClose} sx={{ backgroundColor: '#059669', px: 4, py: 1.5, borderRadius: 3, '&:hover': { backgroundColor: '#047857' } }}>Close</Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Military Service Modals */}
      {/* Leadership Under Pressure Modal */}
      <Modal
        open={leadershipPressureOpen}
        onClose={handleLeadershipPressureClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={leadershipPressureOpen}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, maxWidth: '800px', maxHeight: '90vh',
            overflow: 'auto', bgcolor: 'background.paper', borderRadius: 4,
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)', p: 0, outline: 'none'
          }}>
            <Box sx={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white', p: 4, borderRadius: '16px 16px 0 0' }}>
              <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>Leadership Under Pressure</Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>Making critical decisions in high-stakes environments</Typography>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Tactical Leadership</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Developed exceptional leadership capabilities through military service, learning to make critical decisions with limited information under extreme pressure.</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Crisis Management" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Team Coordination" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Quick Decision Making" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button variant="contained" onClick={handleLeadershipPressureClose} sx={{ backgroundColor: '#059669', px: 4, py: 1.5, borderRadius: 3, '&:hover': { backgroundColor: '#047857' } }}>Close</Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Discipline & Honor Modal */}
      <Modal
        open={disciplineHonorOpen}
        onClose={handleDisciplineHonorClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={disciplineHonorOpen}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, maxWidth: '800px', maxHeight: '90vh',
            overflow: 'auto', bgcolor: 'background.paper', borderRadius: 4,
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)', p: 0, outline: 'none'
          }}>
            <Box sx={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white', p: 4, borderRadius: '16px 16px 0 0' }}>
              <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>Discipline & Honor</Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>Core values of honor, courageand commitment to excellence</Typography>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Military Values</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Instilled with core military values of integrity, discipline, honor, courage, and unwavering commitment to mission success and team welfare.</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Integrity" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Discipline" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Honor" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Commitment" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button variant="contained" onClick={handleDisciplineHonorClose} sx={{ backgroundColor: '#059669', px: 4, py: 1.5, borderRadius: 3, '&:hover': { backgroundColor: '#047857' } }}>Close</Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Service to Country Modal */}
      <Modal
        open={serviceCountryOpen}
        onClose={handleServiceCountryClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={serviceCountryOpen}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, maxWidth: '800px', maxHeight: '90vh',
            overflow: 'auto', bgcolor: 'background.paper', borderRadius: 4,
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)', p: 0, outline: 'none'
          }}>
            <Box sx={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white', p: 4, borderRadius: '16px 16px 0 0' }}>
              <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>Service to Country</Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>Proud dedication to protecting freedom and serving others</Typography>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">United States Marine Corps</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Honored to have served my country with honor, protecting freedom, and supporting fellow service members in defense of our nation's values.</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="National Defense" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Service Before Self" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Brotherhood" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button variant="contained" onClick={handleServiceCountryClose} sx={{ backgroundColor: '#059669', px: 4, py: 1.5, borderRadius: 3, '&:hover': { backgroundColor: '#047857' } }}>Close</Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Family Values Modals */}
      {/* Work-Life Balance Modal */}
      <Modal
        open={workLifeBalanceOpen}
        onClose={handleWorkLifeBalanceClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={workLifeBalanceOpen}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, maxWidth: '800px', maxHeight: '90vh',
            overflow: 'auto', bgcolor: 'background.paper', borderRadius: 4,
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)', p: 0, outline: 'none'
          }}>
            <Box sx={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white', p: 4, borderRadius: '16px 16px 0 0' }}>
              <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>Work-Life Balance</Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>Harmonizing professional success with family time</Typography>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Balanced Living</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Committed to maintaining a healthy balance between professional excellence and quality time with loved ones, ensuring neither is compromised.</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Time Management" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Priority Setting" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Quality Time" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button variant="contained" onClick={handleWorkLifeBalanceClose} sx={{ backgroundColor: '#059669', px: 4, py: 1.5, borderRadius: 3, '&:hover': { backgroundColor: '#047857' } }}>Close</Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Core Values Modal */}
      <Modal
        open={coreValuesOpen}
        onClose={handleCoreValuesClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={coreValuesOpen}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, maxWidth: '800px', maxHeight: '90vh',
            overflow: 'auto', bgcolor: 'background.paper', borderRadius: 4,
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)', p: 0, outline: 'none'
          }}>
            <Box sx={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white', p: 4, borderRadius: '16px 16px 0 0' }}>
              <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>Core Values</Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>Foundation principles that guide all decisions</Typography>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Family-Centered Values</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Family teaches the importance of loyalty, compassion, and perseverance - fundamental values that guide all my personal and professional decisions.</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Loyalty" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Compassion" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Perseverance" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Integrity" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button variant="contained" onClick={handleCoreValuesClose} sx={{ backgroundColor: '#059669', px: 4, py: 1.5, borderRadius: 3, '&:hover': { backgroundColor: '#047857' } }}>Close</Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Legacy & Future Modal */}
      <Modal
        open={legacyFutureOpen}
        onClose={handleLegacyFutureClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={legacyFutureOpen}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, maxWidth: '800px', maxHeight: '90vh',
            overflow: 'auto', bgcolor: 'background.paper', borderRadius: 4,
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)', p: 0, outline: 'none'
          }}>
            <Box sx={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white', p: 4, borderRadius: '16px 16px 0 0' }}>
              <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>Legacy & Future</Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>Building tomorrow while honoring yesterday</Typography>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Generational Impact</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Working to build a better future for my family and yours while honoring the legacy and sacrifices of those who came before us.</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Future Planning" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Legacy Building" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Family Heritage" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button variant="contained" onClick={handleLegacyFutureClose} sx={{ backgroundColor: '#059669', px: 4, py: 1.5, borderRadius: 3, '&:hover': { backgroundColor: '#047857' } }}>Close</Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Data Analytics Modal */}
      <Modal
        open={dataAnalyticsOpen}
        onClose={handleDataAnalyticsClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={dataAnalyticsOpen}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              bgcolor: 'background.paper',
              borderRadius: 4,
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              p: 0,
              outline: 'none'
            }}
          >
            {/* Modal Header */}
            <Box
              sx={{
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                color: 'white',
                p: 4,
                borderRadius: '16px 16px 0 0'
              }}
            >
              <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
                Data Analytics
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                Transforming data into actionable insights for strategic decision-making
              </Typography>
            </Box>

            {/* Modal Content */}
            <Box sx={{ p: 4 }}>
              <Grid container spacing={4}>
                {/* Data Collection & Processing */}
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">
                        Data Collection & Processing
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                        <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                          <strong>Data Integration:</strong> Combining multiple data sources for comprehensive analysis
                        </Typography>
                        <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                          <strong>Quality Assurance:</strong> Ensuring data accuracy, completeness, and reliability
                        </Typography>
                        <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                          <strong>ETL Processes:</strong> Extract, Transform, Load operations for data warehousing
                        </Typography>
                        <Typography component="li" variant="body1">
                          <strong>Real-time Processing:</strong> Live data streams and automated reporting systems
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Analytics & Insights */}
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">
                        Analytics & Insights
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Statistical Analysis" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />                       
                        <Chip label="Predictive Modeling" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Data Visualization" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Trend Analysis" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Excel Pivot Tables" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="SQL Queries" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Data Cleaning" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                      <Typography variant="body1" color="text.secondary">
                        Advanced analytical techniques to uncover patterns, predict trends, and generate actionable business intelligence.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Close Button */}
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button
                  variant="contained"
                  onClick={handleDataAnalyticsClose}
                  sx={{
                    backgroundColor: '#059669',
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    '&:hover': {
                      backgroundColor: '#047857'
                    }
                  }}
                >
                  Close
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Strategic Planning Modal */}
      <Modal
        open={strategicPlanningOpen}
        onClose={handleStrategicPlanningClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={strategicPlanningOpen}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              bgcolor: 'background.paper',
              borderRadius: 4,
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              p: 0,
              outline: 'none'
            }}
          >
            {/* Modal Header */}
            <Box
              sx={{
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                color: 'white',
                p: 4,
                borderRadius: '16px 16px 0 0'
              }}
            >
              <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
                Strategic Planning
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                Comprehensive approach to project success and organizational growth
              </Typography>
            </Box>

            {/* Modal Content */}
            <Box sx={{ p: 4 }}>
              <Grid container spacing={4}>
                {/* Planning Process */}
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">
                        Planning Process
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                        <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                          <strong>Vision Setting:</strong> Establishing clear, achievable long-term objectives
                        </Typography>
                        <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                          <strong>SWOT Analysis:</strong> Identifying strengths, weaknesses, opportunities, and threats
                        </Typography>
                        <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                          <strong>Resource Allocation:</strong> Optimizing human, financial, and technical resources
                        </Typography>
                        <Typography component="li" variant="body1">
                          <strong>Timeline Development:</strong> Creating realistic milestones and deadlines using SDLC and agile methodologies
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Key Methodologies */}
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">
                        Key Methodologies
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Agile Planning" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />                       
                        <Chip label="Risk Management" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Stakeholder Analysis" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="KPI Development" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                      <Typography variant="body1" color="text.secondary">
                        Utilizing agile and SDLC methodologies to ensure systematic and effective planning outcomes and milestones.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Success Metrics */}
                <Grid item xs={12}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">
                        Success Metrics & Achievements
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                          <Box textAlign="center">
                            <Typography variant="h3" color="primary" fontWeight="bold">
                              95%
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                              Targeted KPI Achieved
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                          <Box textAlign="center" >
                            <Typography variant="h3" color="primary" fontWeight="bold">
                              20%
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                              Average Timeline Reduction
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Box textAlign="center">
                            <Typography variant="h3" color="primary" fontWeight="bold">
                              50%
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                              New Client Acquisitions
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Close Button */}
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button
                  variant="contained"
                  onClick={handleStrategicPlanningClose}
                  sx={{
                    backgroundColor: '#059669',
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    '&:hover': {
                      backgroundColor: '#047857'
                    }
                  }}
                >
                  Close
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Team Leadership Modal */}
      <Modal
        open={teamLeadershipOpen}
        onClose={handleTeamLeadershipClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={teamLeadershipOpen}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              bgcolor: 'background.paper',
              borderRadius: 4,
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              p: 0,
              outline: 'none'
            }}
          >
            <Box sx={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white', p: 4, borderRadius: '16px 16px 0 0' }}>
              <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>Team Leadership</Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>Building high-performing teams through effective communication and collaboration</Typography>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Leadership Philosophy</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Empowering team members through trust, clear communication, and shared vision while fostering an environment of continuous growth and collaboration.</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Servant Leadership" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Team Empowerment" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Clear Communication" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Team Development</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Identifying individual strengths, providing mentorship opportunities, and creating pathways for professional growth and skill enhancement.</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Mentorship" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Skill Development" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Performance Coaching" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Collaborative Excellence</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Creating synergistic team environments where diverse perspectives are valued, conflicts are resolved constructively, and collective goals are achieved efficiently.</Typography>
                      <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                        <Typography component="li" variant="body1">
                          <strong>Cross-functional Coordination:</strong> Facilitating seamless collaboration between departments and stakeholders
                        </Typography>
                        <Typography component="li" variant="body1">
                          <strong>Conflict Resolution:</strong> Mediating disputes and turning challenges into growth opportunities
                        </Typography>
                        <Typography component="li" variant="body1">
                          <strong>Team Motivation:</strong> Inspiring high performance through recognition and shared purpose
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Cross-functional Teams" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Conflict Resolution" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Team Motivation" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Performance Management" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Process Optimization Modal */}
      <Modal
        open={processOptimizationOpen}
        onClose={handleProcessOptimizationClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={processOptimizationOpen}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              bgcolor: 'background.paper',
              borderRadius: 4,
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              p: 0,
              outline: 'none'
            }}
          >
            <Box sx={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white', p: 4, borderRadius: '16px 16px 0 0' }}>
              <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>Process Optimization</Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>Streamlining workflows and driving continuous improvement for maximum efficiency</Typography>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Workflow Analysis</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Systematic evaluation of existing processes to identify bottlenecks, redundancies, and opportunities for improvement through data-driven analysis.</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Process Mapping" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Bottleneck Analysis" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Data Analytics" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Implementation Strategy</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Developing and executing comprehensive improvement plans with clear timelines, measurable outcomes, and stakeholder buy-in.</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Change Management" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Stakeholder Engagement" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="ROI Measurement" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary" fontWeight="600">Continuous Improvement Culture</Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>Establishing sustainable practices that promote ongoing optimization, innovation, and adaptability across all organizational levels.</Typography>
                      <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                        <Typography component="li" variant="body1">
                          <strong>Lean Methodology:</strong> Eliminating waste and maximizing value through systematic process refinement
                        </Typography>
                        <Typography component="li" variant="body1">
                          <strong>Quality Management:</strong> Implementing robust quality control systems and performance metrics
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Chip label="Lean Principles" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Quality Control" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Performance Metrics" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                        <Chip label="Innovation Management" sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default App
