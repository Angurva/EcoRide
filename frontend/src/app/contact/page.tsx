import { Box, Button, Container, Divider, Paper, TextField, Typography } from "@mui/material";


export default function Contact() {
  return (
    <Box sx={{ flexGrow:1, alignContent:'center' }}>
        <Container maxWidth='xl' sx={{display:'flex', justifyContent:'center', p:2}}>
            <Paper elevation={6} sx={{display:'flex', flexDirection:'column',p:2, gap:3,width:'40rem'}}>
                <Typography variant='h4' sx={{ textAlign:'center', mt:2, letterSpacing:2,}}>Nous-contacter</Typography>
                
                <Box sx={{display:'flex', gap:2, flexGrow:1}}>
                    <TextField
                        required
                        size="small"
                        type="text"
                        name="firstname"
                        label="Firstname"
                        helperText="Enter your firstname *"
                        sx={{ width:'100%'}}
                    />
                    <TextField
                        required
                        type="text"
                        size="small"
                        name="lastname"
                        label="Lastname"
                        helperText="Enter your lastname *"
                        sx={{ width:'100%'}}
                    />
                </Box>
                <TextField
                    required
                    size="small"
                    type="email"
                    name="email"
                    label="Email"
                    helperText="Enter your email *"
                    sx={{width:'100%'}}
               />
                <TextField
                    required
                    size='small'
                    name="subject"
                    label="Subject"
                    sx={{width:'100%'}}
               />
                <TextField
                    required
                    type="text"
                    multiline
                    rows={5}
                    name="description"
                    label="Description"
                    sx={{width:'100%'}}
               />
                <Box sx={{ display:'flex', justifyContent:"space-between" }}>
                    <Button>Cancel</Button>
                    <Button>Send</Button>
                </Box>
               
                
            </Paper>
            
        </Container>
    </Box>
  )
}
