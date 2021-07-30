import { Card, Button, CardContent, TextField, createTheme, Grid, Box } from '@material-ui/core'
function LoginContainer() {

    return (
        <>
            <Grid container justify="center">
                <Card style={{ width: "22rem", height: "20rem", borderRadius: "8px" }}>
                    <CardContent>
                
                            <p style={{fontSize:"20px"}}>Hello</p>
                            <form>
                                    <Box mx="auto">
                                    <TextField variant="outlined" label="Email"/>
                                    <TextField variant="outlined" label="Password" />
                                    </Box>
                        
                         
                            </form>

                            <Button className="text-white" color="primary" variant="contained" p={20}>
                                Ass
                            </Button>

                
                    </CardContent>
                </Card>
            </Grid>

        </>
    )
}
export default LoginContainer;